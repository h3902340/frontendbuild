import { Component, OnInit } from '@angular/core';
import { inflateRaw } from 'pako';
import { lastValueFrom } from 'rxjs';
import { Civ, age1IconSrc, age2IconSrc, age3IconSrc, age4IconSrc, avatarIdToUrl, idCivToFlagCircle, idCivToFlagLeft } from 'src/app/constant';
import { JsonService } from 'src/app/services/json.service';
import { StrTableService } from 'src/app/services/string-table.service';
import { TechTreeService } from 'src/app/services/tech-tree.service';
import { MapInfo } from 'src/app/types/maps';
import { Card, getBrowserLanguage, getCardFromTech, getTechByName, importHomeCity, importMapInfos, importProtoTable, mapIdToPath } from 'src/app/utility';

export interface PlayerInfo {
    name: string,
    slotId: number,
    teamId: number,
    color: string,
    civ: Civ,
    civFlagSrc: string,
    avatarSrc: string,
}

export interface DeckInfo {
    name: string,
    owner: string,
    deckId: number,
    gameId: number,
    isDefault: boolean,
    cardCount: number,
    cardSizeLimit: number,
    civ: Civ,
    techIds: number[],
}

export type ReplayTechs = ReplayTech[]
export interface ReplayTech {
    ID: number
    Name: string
    DisplayName: string
}

@Component({
    selector: 'app-replay-parser',
    templateUrl: './replay-parser.component.html',
    styleUrls: ['./replay-parser.component.css']
})
export class ReplayParserComponent implements OnInit {
    private english = /^[A-Za-z0-9_]*$/;
    private decoder = new TextDecoder('utf-16');
    private techs: ReplayTechs;
    private deckList: DeckInfo[];
    public currentDeckList: DeckInfo[];
    public cardHeight: number = 70;
    public cardPadding: number = 5;
    public age1Src: string = age1IconSrc;
    public age2Src: string = age2IconSrc;
    public age3Src: string = age3IconSrc;
    public age4Src: string = age4IconSrc;
    private civMap = new Map([
        [1, Civ.Spanish],
        [2, Civ.British],
        [3, Civ.French],
        [4, Civ.Portuguese],
        [5, Civ.Dutch],
        [6, Civ.Russians],
        [7, Civ.Germans],
        [8, Civ.Ottoman],
        [15, Civ.Haudenosaunee],
        [16, Civ.Lakota],
        [17, Civ.Aztecs],
        [19, Civ.Japanese],
        [20, Civ.Chinese],
        [21, Civ.Indians],
        [27, Civ.Inca],
        [28, Civ.Swedes],
        [38, Civ.UnitedStates],
        [39, Civ.Ethiopians],
        [40, Civ.Hausa],
        [42, Civ.Mexicans],
        [44, Civ.Italians],
        [45, Civ.Maltese],
    ]);
    private colorMap = new Map([
        [1, '#0000ff'],
        [2, '#ff0000'],
        [3, '#ffff00'],
        [4, '#800080'],
        [5, '#32cd32'],
        [6, '#ffa500'],
        [7, '#00ffff'],
        [8, '#ff69b4'],
    ]);
    public teams: PlayerInfo[][];
    public players: PlayerInfo[];
    public mapSrc: string | null;
    public localizedMapName: string;
    public durationTitle: string;
    public duration: number;
    public deckTitle: string;
    public playerTitle: string;
    public currentDeck: DeckInfo | null;
    public defaultPlayer: string;
    public defaultDeck: string;
    private mapInfos: { [k: string]: MapInfo };
    public cardAge1: Card[];
    public cardAge2: Card[];
    public cardAge3: Card[];
    public cardAge4: Card[];
    private dataView: DataView;
    public progress: number = 0;
    public civFlagLeft: string;
    public sizeText: string;
    public winnerTitle: string;
    public winnerTeam: string;
    public isShowWinners: boolean = false;
    public version: string;
    public isReplayInvalid: boolean = false;

    constructor(private jsonService: JsonService, private stringTableService: StrTableService, private techTreeService: TechTreeService) { }

    public async ngOnInit() {
        this.stringTableService.setLanguage(getBrowserLanguage());
        await importProtoTable(this.jsonService);
        this.mapInfos = await importMapInfos(this.jsonService);
        this.durationTitle = await this.stringTableService.getLocalizedString('20510');
        this.deckTitle = await this.stringTableService.getLocalizedString('38236');
        this.playerTitle = await this.stringTableService.getLocalizedString('22301');
        this.sizeText = await this.stringTableService.getLocalizedString('20349');
        this.winnerTitle = await this.stringTableService.getLocalizedString('36103');
    }

    public onFileSelected(event: any) {
        this.onFileSelectedAsync(event);
    }

    private async onFileSelectedAsync(event: any) {
        const file: File = event.target.files[0];
        if (!file) return;
        let arrayBuffer = await file.arrayBuffer();
        const buffer = inflateRaw(arrayBuffer.slice(10));
        console.time('replay');
        await this.parseReplay(buffer);
        console.timeEnd('replay');
    }

    private async parseReplay(uint8Ary: Uint8Array) {
        this.isReplayInvalid = false;
        this.currentDeck = null;
        this.mapSrc = null;
        this.players = [];
        this.deckList = [];
        const dataView = new DataView(uint8Ary.buffer);
        this.dataView = dataView;
        let dictionary: { [k: string]: any } = {};

        let position = 273;
        let bufLen = this.readInt32(dataView, position);
        const exeInf = this.readString(dataView, position, bufLen);
        this.version = exeInf.split(' ')[1];
        this.techs = await lastValueFrom(this.jsonService.getJson<ReplayTechs>(`assets/Techs${this.version}.json`));

        position = 0;
        const teamsObj: {
            [k: string]: {
                id: number,
                name: string,
                resign: number,
                members: number[]
            }
        } = {}
        const seachBytes = [0x54, 0x45]
        position = this.search(uint8Ary, seachBytes);

        while (position != -1) {
            position += 6;
            const key = this.readInt32(dataView, position);
            position += 4;
            if (key == 12) {
                const teamId = this.readInt32(dataView, position);
                position += 4;
                let stringLength = this.readInt32(dataView, position);
                position += 4;
                const teamName = this.readString(dataView, position, stringLength);
                position += stringLength * 2;
                teamsObj[`team${teamId}`] = {
                    id: teamId,
                    name: teamName,
                    resign: 0,
                    members: []
                }
                const teamMembersCount = this.readInt32(dataView, position);
                position += 4;
                for (let i = 0; i < teamMembersCount; i++) {
                    const playerId = this.readInt32(dataView, position);
                    position += 4;
                    teamsObj[`team${teamId}`].members.push(playerId)
                }
            }
            position = this.search(uint8Ary, seachBytes, position)
        }

        // get playerInfos, matchInfos
        position = 0;
        let cap = position + 20000;
        let skipCount: number = 0;
        while (position < cap) {
            let word = this.readString(dataView, position, 1);
            if (this.english.test(word)) {
                if (skipCount >= 4) {
                    let isNextWord = true;
                    let nextWordLength: number = this.readInt32(dataView, position - 4);
                    let nextWord = this.readString(dataView, position, nextWordLength);
                    for (let char of nextWord) {
                        if (!this.english.test(char)) {
                            isNextWord = false;
                            break;
                        }
                    }
                    if (isNextWord) {
                        position += nextWord.length * 2;
                        let dataType = this.readInt32(dataView, position);
                        position += 4;
                        let data: any;
                        switch (dataType) {
                            case 1:
                                data = this.readFloat32(dataView, position);
                                position += 4;
                                dictionary[nextWord] = data;
                                break;
                            case 2:
                                data = this.readInt32(dataView, position);
                                position += 4;
                                dictionary[nextWord] = data;
                                break;
                            case 5:
                                let bool = this.readBool(dataView, position);
                                position += 1;
                                dictionary[nextWord] = bool;
                                break;
                            case 9:
                                let stringLength = this.readInt32(dataView, position);
                                if (stringLength > 100) {
                                    position -= 4;
                                    // if stringLength is very long, it's most likely not a field.
                                    break;
                                }
                                position += 4;
                                let string = this.readString(dataView, position, stringLength);
                                position += stringLength * 2;
                                dictionary[nextWord] = string;
                                break;
                        }
                    } else {
                        position += 2;
                    }
                    skipCount = 0;
                } else {
                    position += 2;
                }
            } else {
                position += 1;
                skipCount += 1;
            }
        }
        console.log(dictionary)
        if (!dictionary['gameplayer1id']) {
            console.error('This rec has no gameplayer1id!');
            this.isReplayInvalid = true;
            return;
        }

        for (let i = 1; i <= 8; i++) {
            let teamId: number = -1;
            let slotId: number = dictionary[`gameplayer${i}id`];
            for (let k in teamsObj) {
                if (teamsObj[k].members.includes(slotId)) {
                    teamId = teamsObj[k].id;
                    break;
                }
            }
            if (teamId == -1) continue;
            let avatarid: string = dictionary[`gameplayer${i}avatarid`];
            let ai = -1, ac = -1;
            if (avatarid) {
                let avatarids: string[] = avatarid.split(' ');
                ai = Number(avatarids[0]);
                ac = Number(avatarids[1]);
            }

            let civ = this.civMap.get(dictionary[`gameplayer${i}civ`])!
            let player: PlayerInfo = {
                name: dictionary[`gameplayer${i}name`],
                slotId: slotId,
                teamId: teamId,
                color: this.colorMap.get(Number(dictionary[`gameplayer${i}color`]))!,
                civ: civ,
                civFlagSrc: idCivToFlagCircle(civ),
                avatarSrc: avatarIdToUrl(ai, ac)
            };
            this.players.push(player);
        }
        this.players.sort((a, b) => a.teamId - b.teamId);
        this.teams = [];
        let index = 0;
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i].teamId == index + 1) {
                if (!this.teams[index]) {
                    this.teams.push([]);
                }
                this.teams[index].push(this.players[i]);
            } else {
                index++;
                this.teams.push([this.players[i]]);
            }
        }

        let mapName = dictionary['gamefilename'];
        let mapInfo = this.mapInfos[mapName.toLowerCase()];
        let mapId = mapInfo.id;
        this.localizedMapName = await this.stringTableService.getLocalizedString(mapInfo.displayNameID);
        this.mapSrc = mapIdToPath(this.mapInfos, mapId);

        // search messages part 1
        let searchBytes = [0x9a, 0x99, 0x99, 0x3d];
        position = this.search(uint8Ary, searchBytes) + 142;
        const msgLen = this.readInt32(dataView, position);
        position += 4;
        for (let i = 0; i < msgLen; i++) {
            let from = this.readInt32(dataView, position); // from
            position += 4;
            let to = this.readInt32(dataView, position); // to
            position += 4;
            const bufLen = this.readInt32(dataView, position);
            position += 4;
            let msg = this.readString(dataView, position, bufLen);
            position += bufLen * 2;
            position += 1;
        }
        this.duration = this.readInt8(dataView, position);
        position += 1;

        // search messages part 2
        searchBytes = [0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x19];
        position = this.search(uint8Ary, searchBytes);
        while (position != -1) {
            position += 113;
            const command = this.readInt8(dataView, position);
            position += 1;
            let hasCommands = true;
            switch (command) {
                case 33:
                case 65:
                case 161:
                case 193:
                    break;
                case 1:
                case 129:
                    hasCommands = false;
                    break;
                case 35:
                case 37:
                case 41:
                case 67:
                case 73:
                case 163:
                case 165:
                case 169:
                case 195:
                case 201:
                    position += 4;
                    break;
                case 3:
                case 5:
                case 9:
                case 131:
                case 133:
                case 137:
                    position += 4;
                    hasCommands = false;
                    break;
                case 39:
                case 43:
                case 45:
                case 75:
                case 167:
                case 171:
                case 173:
                case 203:
                    position += 8;
                    break;
                case 7:
                case 11:
                case 13:
                case 135:
                case 139:
                case 141:
                    position += 8;
                    hasCommands = false;
                    break;
                case 47:
                case 175:
                case 207:
                    position += 12;
                    break;
                case 15:
                case 143:
                    position += 12;
                    hasCommands = false;
                    break;
                case 49:
                case 177:
                    position += 36;
                    break;
                case 17:
                case 145:
                    position += 36;
                    hasCommands = false;
                    break;
                case 19:
                case 21:
                case 25:
                case 147:
                case 149:
                case 153:
                    position += 40;
                    hasCommands = false;
                    break;
                case 51:
                case 53:
                case 57:
                case 179:
                case 181:
                case 185:
                    position += 40;
                    break;
                case 55:
                case 59:
                case 61:
                case 183:
                case 187:
                case 189:
                    position += 44;
                    break;
                case 23:
                case 27:
                case 29:
                case 151:
                case 155:
                case 157:
                    position += 44;
                    hasCommands = false;
                    break;
                case 63:
                case 191:
                case 223:
                    position += 48;
                    break;
                case 31:
                case 159:
                    position += 48;
                    hasCommands = false;
                    break;
                default:
                    console.error(`Unknown main command: ${command}`);
                    position = this.search(uint8Ary, searchBytes, position)
                    continue
            }

            const messageCount = this.readInt32(dataView, position);
            position += 4;

            for (let i = 0; i < messageCount; i++) {
                const from = this.readInt32(dataView, position);
                position += 4;
                const to = this.readInt32(dataView, position);
                position += 4;
                let bufLen = this.readInt32(dataView, position);
                position += 4;
                const msg = this.readString(dataView, position, bufLen);
                position += bufLen * 2;
                position += 1;
            }

            this.duration += this.readInt8(dataView, position);
            position += 1;
            let commandsCount = 0

            if (hasCommands) {
                if ([65, 67, 73, 75, 193, 195, 201, 203, 207, 223].includes(command)) {
                    commandsCount = this.readInt32(dataView, position);
                    position += 4;
                } else {
                    commandsCount = this.readInt8(dataView, position);
                    position += 1;
                }
                for (let i = 0; i < commandsCount; i++) {
                    this.readInt8(dataView, position);
                    position += 1;

                    const commandId = this.readInt32(dataView, position)
                    position += 4;

                    if (commandId === 14) {
                        position += 12;
                    }

                    this.readInt8(dataView, position);
                    position += 1;
                    position += 4;

                    this.readInt32(dataView, position);
                    position += 4;
                    this.readInt32(dataView, position);
                    position += 4;
                    this.readInt32(dataView, position);
                    position += 4;
                    const unknown0 = this.readInt32(dataView, position);
                    position += 4;

                    if (unknown0 === 1) {
                        this.readInt32(dataView, position);
                        position += 4;
                    } else if (unknown0 !== 0) {
                        console.error('unknown');
                    }
                    let unknown1 = this.readInt32(dataView, position);
                    position += 4;
                    const selectedCount = this.readInt32(dataView, position);
                    position += 4;

                    for (let j = 0; j < selectedCount; j++) {
                        this.readInt32(dataView, position);
                        position += 4;
                    }

                    let unknown2 = this.readInt32(dataView, position);
                    position += 4;
                    position += unknown2 * 12;

                    const unknownCount = this.readInt32(dataView, position);
                    position += 4;

                    for (let j = 0; j < unknownCount; j++) {
                        this.readInt8(dataView, position);
                        position += 1;
                    }
                    this.readInt8(dataView, position);
                    position += 1;
                    this.readInt32(dataView, position);
                    position += 4;
                    this.readInt32(dataView, position);
                    position += 4;
                    this.readInt32(dataView, position);
                    position += 4;
                    this.readInt32(dataView, position);
                    position += 4;
                    position += 4;

                    if (commandId === 0) {
                        position += 24;
                        if (this.readInt8(dataView, position) === 255) {
                            position += 8;
                        }
                    } else if (commandId === 1) {
                        position += 4;
                    } else if (commandId === 2) {
                        if (unknown1 == 0) {
                            position += 2;
                        } else if (unknown1 == 2) {
                            position += 2;
                        }
                        position += 14;
                    } else if (commandId === 3) {
                        position += 44;
                    } else if (commandId === 4) {
                        position += 25;
                    } else if (commandId === 6) {
                        position += 36;
                    } else if (commandId === 7) {
                        position += 1;
                    } else if (commandId === 9) {
                    } else if (commandId === 12) {
                        position += 36;
                        if (unknown1 === 0) {
                            position += 1;
                        }
                    } else if (commandId === 13) {
                        position += 12;
                    } else if (commandId === 14) {
                    } else if (commandId === 16) {
                        position += 4;
                        const resignPlayer = this.readInt32(dataView, position);
                        for (const team of Object.values(teamsObj)) {
                            if (team.members.includes(resignPlayer)) team.resign += 1;
                        }
                        position += 4;
                        position += 5;
                    } else if (commandId === 18) {
                        position += 4;
                    } else if (commandId === 19) {
                        position += 17;
                    } else if (commandId === 23) {
                        position += 6;
                    } else if (commandId === 24) {
                        position += 12;
                    } else if (commandId === 25) {
                        position += 6;
                    } else if (commandId === 26) {
                        position += 4;
                    } else if (commandId === 34) {
                    } else if (commandId === 35) {
                        position += 4;
                    } else if (commandId === 37) {
                        position += 5;
                    } else if (commandId === 41) {
                        const control1: number = this.readInt32(dataView, position);
                        position += 4;
                        position += 4;
                        position += 4;
                        position += 8;
                        unknown1 = this.readInt32(dataView, position);
                        position += 4;
                        if (control1 === 1) {
                            unknown2 = this.readInt32(dataView, position);
                            position += 4;
                            let unknown3 = -1;
                            if (unknown2 === 1) {
                                unknown3 = this.readInt32(dataView, position);
                                position += 4;
                            }
                            position += 13;
                        }
                    } else if (commandId === 44) {
                        position += 8;
                    } else if (commandId === 46) {
                        position += 8;
                    } else if (commandId === 48) {
                        position += 9;
                    } else if (commandId === 53) {
                        position += 8;
                    } else if (commandId === 57) {
                        position += 12;
                    } else if (commandId === 58) {
                        position += 4;
                    } else if (commandId === 61) {
                        position += 8;
                    } else if (commandId === 62) {
                        position += 4;
                    } else if (commandId === 63) {
                        position += 16;
                    } else if (commandId === 64) {
                    } else if (commandId === 65) {
                        position += 4;
                    } else if (commandId === 66) {
                        let deckID = this.readInt32(dataView, position);
                        position += 4;
                        let cardID = this.readInt32(dataView, position);
                        position += 4;
                    } else if (commandId === 67) {
                        position += 12;
                    } else if (commandId === 71) {
                        position += 4;
                    } else if (commandId === 72) {
                        position += 16;
                    } else if (commandId === 73) {
                    } else if (commandId === 80) {
                        position += 8;
                    }
                }

            }
            position = this.search(uint8Ary, searchBytes, position);
        }

        this.players.sort((a, b) => a.slotId - b.slotId);
        for (let i = 0; i < this.players.length; i++) {
            let civ: Civ = this.players[i].civ;
            console.log('1i = ' + i);
            position = this.searchDeck(uint8Ary, dataView, position);
            while (true) {
                let currentDeckPosition: number = position;
                let nextDeckOffset: number = this.readInt32(dataView, position);
                position += 4;
                let check: number = this.readInt32(dataView, position);
                position += 4;
                if (check != 5) {
                    console.log('2i = ' + i);
                    break;
                }
                let deckId: number = this.readInt32(dataView, position);
                position += 4;
                let stringLength: number = this.readInt32(dataView, position);
                position += 4;
                let deckName: string = this.readString(dataView, position, stringLength);
                position += stringLength * 2;
                console.log('currentDeckPosition: ' + currentDeckPosition + ', deckName: ' + deckName);
                var gameId = this.readInt32(dataView, position);
                position += 4;
                if (gameId != 4) {
                    let newPosition = this.searchDeck(uint8Ary, dataView, position);
                    if (newPosition == -1) break;
                    position = newPosition;
                    continue;
                }
                var isDefault = this.readBool(dataView, position);
                position += 1;
                this.readBool(dataView, position);
                position += 1;
                var cardCount = this.readInt32(dataView, position);
                position += 4;
                let techIds: number[] = [];
                for (let j = 0; j < cardCount; j++) {
                    let techId = this.readInt32(this.dataView, position);
                    let found = false;
                    for (let k = 0; k < this.techs.length; k++) {
                        if (techId == this.techs[k].ID) {
                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        console.error('techId not found: ' + techId + ', player: ' + this.players[i].name + ', deck: ' + deckName);
                    }
                    techIds.push(techId);
                    position += 4;
                }
                let cardSizeLimit: number;
                if (civ == Civ.Mexicans || civ == Civ.UnitedStates) {
                    cardSizeLimit = 21;
                } else {
                    cardSizeLimit = 25;
                }

                if (this.deckList.length > 0 && deckName == this.deckList[this.deckList.length - 1].name) {
                    i--;
                    console.warn('duplicated deck! deckName: ' + deckName);
                } else if (deckName != '*') {
                    let deckInfo: DeckInfo = {
                        name: deckName,
                        owner: this.players[i].name,
                        deckId: deckId,
                        gameId: gameId,
                        civ: civ,
                        isDefault: isDefault,
                        cardCount: cardCount,
                        cardSizeLimit: cardSizeLimit,
                        techIds: techIds,
                    };
                    this.deckList.push(deckInfo);
                }
                position = currentDeckPosition + nextDeckOffset + 6;
            }
        }

        console.log(this.deckList);
        for (let k in teamsObj) {
            if (teamsObj[k].resign == 0) {
                this.winnerTeam = teamsObj[k].name;
                break;
            }
        }

        console.log(this.players);
        this.defaultPlayer = this.players[0].name;
        this.currentDeckList = this.deckList.filter((deck) => deck.owner == this.defaultPlayer);
        this.defaultDeck = this.currentDeckList[0].name;
        this.currentDeck = this.currentDeckList[0];
        this.onSelectDeckAsync(this.currentDeck);
        this.duration = Math.floor(this.duration / 1000);
    }

    private readString(dataView: DataView, position: number, length: number) {
        const end = position + length * 2;
        const string = this.decoder.decode(dataView.buffer.slice(position, end));
        return string
    }

    private readInt32(dataView: DataView, position: number) {
        const int32 = dataView.getInt32(position, true);
        return int32
    }

    private readFloat32(dataView: DataView, position: number) {
        const float32 = dataView.getFloat32(position, true)
        return float32;
    }

    private readBool(dataView: DataView, position: number): boolean {
        const bool = dataView.getUint8(position);
        return Boolean(bool);
    }

    private readInt8(dataView: DataView, position: number) {
        const int8 = dataView.getUint8(position)
        return int8
    }

    private search(array: Uint8Array, search: number[], fromIndex: number = 0) {
        const searchLen = search.length
        const searchLast = search[searchLen - 1]
        let index = array.indexOf(searchLast, fromIndex + searchLen - 1)

        while (index !== -1) {
            for (let i = searchLen - 1; i > 0; i--) {
                if (search[i - 1] !== array[index - searchLen + i]) {
                    const searchIndex = search.lastIndexOf(array[index + 1])
                    const offset = searchIndex === -1 ? index + searchLen + 1 : index + searchLen - searchIndex
                    index = array.indexOf(searchLast, offset)
                    break;
                }
                if (i === 1) return index - searchLen + 1
            }
        }
        return -1
    }

    private searchDeck(uint8Ary: Uint8Array, dataView: DataView, startIndex: number): number {
        let position = startIndex;
        while (position < uint8Ary.length) {
            position = this.search(uint8Ary, [0x0, 0x0, 0x0, 0x44, 0x6b], position);
            if (position == -1) break;
            position += 9;
            let int = this.readInt32(dataView, position);
            if (int != 5) continue;
            return position - 4;
        }
        return -1;
    }

    public toHHMMSS(duration: number): string {
        var hours = Math.floor(duration / 3600);
        var minutes = Math.floor((duration - (hours * 3600)) / 60);
        var seconds = duration - (hours * 3600) - (minutes * 60);
        let h: string = hours.toFixed();
        let m: string = minutes.toFixed();
        let s: string = seconds.toFixed();

        if (hours < 10) { h = "0" + hours; }
        if (minutes < 10) { m = "0" + minutes; }
        if (seconds < 10) { s = "0" + seconds; }
        if (hours == 0) {
            return m + ':' + s;
        } else {
            return h + ':' + m + ':' + s;
        }
    }

    public onSelectPlayer($event: any) {
        this.currentDeckList = this.deckList.filter((deck) => deck.owner == $event.target.value);
        this.currentDeck = this.currentDeckList[0];
        this.onSelectDeckAsync(this.currentDeck);
    }

    public onSelectDeck($event: any) {
        this.currentDeck = this.currentDeckList.find((deck) => deck.name == $event.target.value)!;
        this.onSelectDeckAsync(this.currentDeck);
    }

    private async onSelectDeckAsync(deckName: DeckInfo) {
        if (!deckName) return;
        this.currentDeck = deckName;
        let cards: Card[] = [];
        this.civFlagLeft = idCivToFlagLeft(this.currentDeck.civ);
        let homeCity = await importHomeCity(this.currentDeck.civ, this.jsonService);
        this.progress = 5;
        for (let j = 0; j < this.currentDeck.techIds.length; j++) {
            let techId = this.currentDeck.techIds[j];
            for (let k = 0; k < this.techs.length; k++) {
                if (techId == this.techs[k].ID) {
                    let tech = await getTechByName(this.techTreeService, this.techs[k].Name);
                    this.progress = (j + .5) / this.currentDeck.techIds.length * 95 + 5;
                    let card = await getCardFromTech(this.stringTableService, this.techTreeService, tech, this.currentDeck.civ, this.jsonService);
                    if (!card) {
                        console.error('tech card not found: ' + techId);
                        continue;
                    }
                    let cardInfo = homeCity.homecity.cards.card.filter(cardInfo => cardInfo.name.toLowerCase() == card?.techName.toLowerCase())[0];
                    if (!cardInfo) {
                        console.error('cardInfo not found: ' + card?.techName);
                        continue;
                    }
                    card!.age = Number(cardInfo.age) + 1;
                    card!.index = homeCity.homecity.cards.card.indexOf(cardInfo);
                    card!.amount = Number(cardInfo.displayunitcount);
                    card!.maxCount = Number(cardInfo.maxcount);
                    cards.push(card!);
                    break;
                }
            }
            this.progress = (j + 1) / this.currentDeck.techIds.length * 95 + 5;
        }
        this.progress = 100;
        this.cardAge1 = cards.filter((card) => card.age == 1).sort((a, b) => a.index - b.index);
        this.cardAge2 = cards.filter((card) => card.age == 2).sort((a, b) => a.index - b.index);
        this.cardAge3 = cards.filter((card) => card.age == 3).sort((a, b) => a.index - b.index);
        this.cardAge4 = cards.filter((card) => card.age == 4).sort((a, b) => a.index - b.index);
    }

    public showWinners() {
        this.isShowWinners = !this.isShowWinners;
    }
}
