import { Router } from "@angular/router";
import { JsonService } from "./services/json.service";
import { CivsRoot } from 'src/app/types/civs';
import { lastValueFrom } from "rxjs";
import { MapInfo, MapResources } from "./types/maps";
import { Civ, age2ButtonSrc, age3ButtonSrc, age4ButtonSrc, age5ButtonSrc, idCivToHomecityJsonPath, resourcesRoot } from "./constant";
import { HomecityRoot, Tech as HomeCityTech } from 'src/app/types/homecityamericans';
import { ProtoRoot, Unit } from "./types/protoy";
import { AbilitiesRoot } from "./types/abilities";
import { PowersRoot } from "./types/powers";
import { TechtreedataRoot } from "./types/techtreedata_british";
import { AnimfileRoot } from "./types/animfile";
import { AttachmentRoot } from "./types/attachment";
import { SlingerTactics } from "./types/slinger.tactics";
import { TacticsType } from "./components/unit/data-structures";
import { backend } from "./proto/compiled";
import { StrTableService } from "./services/string-table.service";
import { TechTreeService } from "./services/tech-tree.service";

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
export function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export type Card = {
    iconSrc: string,
    amount: number,
    maxCount: number,
    foodCost: number,
    woodCost: number,
    coinCost: number,
    influenceCost: number,
    shipmentCost: number,
    displayName: string,
    techName: string,
    rolloverText: string,
    pop: number,
    index: number,
    age: number,
    buildingIndex: number,
    isSelected: boolean,
    details: { text: string, pop: number }[],
};

export enum Language {
    English = 'English',
    French = 'French',
    German = 'German',
    Hindi = 'Hindi',
    Italian = 'Italian',
    Japanese = 'Japanese',
    Korean = 'Korean',
    Malay = 'Malay',
    PortugueseBrazil = 'PortugueseBrazil',
    Russian = 'Russian',
    SimplifiedChinese = 'SimplifiedChinese',
    Spanish = 'Spanish',
    TraditionalChinese = 'TraditionalChinese',
    Turkish = 'Turkish',
    Vietnamese = 'Vietnamese',
}

export function stringToLanguage(languageString: string): Language {
    switch (languageString) {
        case Language.English:
            return languageString;
        case Language.French:
            return languageString;
        case Language.German:
            return languageString;
        case Language.Hindi:
            return languageString;
        case Language.Italian:
            return languageString;
        case Language.Japanese:
            return languageString;
        case Language.Korean:
            return languageString;
        case Language.Malay:
            return languageString;
        case Language.PortugueseBrazil:
            return languageString;
        case Language.Russian:
            return languageString;
        case Language.SimplifiedChinese:
            return languageString;
        case Language.Spanish:
            return languageString;
        case Language.TraditionalChinese:
            return languageString;
        case Language.Turkish:
            return languageString;
        case Language.Vietnamese:
            return languageString;
        default:
            return Language.English;
    }
}

export async function languageToName(stringTableService: StrTableService, language: Language): Promise<string> {
    switch (language) {
        case Language.English:
            return stringTableService.getLocalizedString(70882);
        case Language.French:
            return stringTableService.getLocalizedString(70883);
        case Language.German:
            return stringTableService.getLocalizedString(70884);
        case Language.Hindi:
            return stringTableService.getLocalizedString(70885);
        case Language.Italian:
            return stringTableService.getLocalizedString(70886);
        case Language.Japanese:
            return stringTableService.getLocalizedString(70887);
        case Language.Korean:
            return stringTableService.getLocalizedString(70888);
        case Language.Malay:
            return stringTableService.getLocalizedString(70889);
        case Language.PortugueseBrazil:
            return stringTableService.getLocalizedString(70890);
        case Language.Russian:
            return stringTableService.getLocalizedString(70891);
        case Language.SimplifiedChinese:
            return stringTableService.getLocalizedString(70892);
        case Language.Spanish:
            return stringTableService.getLocalizedString(70893);
        case Language.TraditionalChinese:
            return stringTableService.getLocalizedString(70894);
        case Language.Turkish:
            return stringTableService.getLocalizedString(70895);
        case Language.Vietnamese:
            return stringTableService.getLocalizedString(70896);
    }
}

export async function civToName(stringTableService: StrTableService, civ: Civ): Promise<string> {
    switch (civ) {
        case Civ.Spanish:
            return stringTableService.getLocalizedString(22864);
        case Civ.British:
            return stringTableService.getLocalizedString(22861);
        case Civ.French:
            return stringTableService.getLocalizedString(22862);
        case Civ.Portuguese:
            return stringTableService.getLocalizedString(22865);
        case Civ.Dutch:
            return stringTableService.getLocalizedString(22863);
        case Civ.Russians:
            return stringTableService.getLocalizedString(22867);
        case Civ.Germans:
            return stringTableService.getLocalizedString(22866);
        case Civ.Ottoman:
            return stringTableService.getLocalizedString(22868);
        case Civ.Haudenosaunee:
            return stringTableService.getLocalizedString(22879);
        case Civ.Lakota:
            return stringTableService.getLocalizedString(43631);
        case Civ.Aztecs:
            return stringTableService.getLocalizedString(22872);
        case Civ.Chinese:
            return stringTableService.getLocalizedString(60002);
        case Civ.Japanese:
            return stringTableService.getLocalizedString(60001);
        case Civ.Indians:
            return stringTableService.getLocalizedString(60003);
        case Civ.Inca:
            return stringTableService.getLocalizedString(80001);
        case Civ.Swedes:
            return stringTableService.getLocalizedString(91500);
        case Civ.UnitedStates:
            return stringTableService.getLocalizedString(110000);
        case Civ.Ethiopians:
            return stringTableService.getLocalizedString(101000);
        case Civ.Hausa:
            return stringTableService.getLocalizedString(101010);
        case Civ.Mexicans:
            return stringTableService.getLocalizedString(112000);;
        case Civ.Italians:
            return stringTableService.getLocalizedString(122000);
        case Civ.Maltese:
            return stringTableService.getLocalizedString(122010);;
    }
}

export function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function seeProfile(router: Router, idPlayer: number): void {
    router.navigate(['/profile'], { queryParams: { idPlayer: idPlayer } });
}

/**
 * get standardized time age string.
 * @param timestamp - ms
 * @returns 
 */
export function getTimeAgoString(timestamp: number): string {
    let diff: number = Math.floor((Date.now() - timestamp) / 1000);
    let agoString: string = '';
    let min: number = Math.floor(diff / 60);
    let sec: number = diff % 60;
    if (min > 0) {
        agoString = `${min} minute(s) ago`;
    } else {
        agoString = `${sec} second(s) ago`;
    }
    return agoString;
}

export function isvisible(obj: HTMLElement): boolean {
    return obj.offsetWidth > 0 && obj.offsetHeight > 0;
}

export async function importProtoTable(jsonService: JsonService): Promise<{ [k: string]: Unit }> {
    if (protoTable) return protoTable;
    let protoRoot: ProtoRoot = await lastValueFrom(jsonService.getJson<ProtoRoot>(`assets/Data/protoy.xml.json`));
    protoTable = {};
    for (let i = 0; i < protoRoot.proto.unit.length; i++) {
        let entry = protoRoot.proto.unit[i];
        protoTable[entry["@name"]] = entry;
    }
    return protoTable;
}

export async function importAbilities(jsonService: JsonService): Promise<AbilitiesRoot> {
    return lastValueFrom(jsonService.getJson<AbilitiesRoot>('assets/Data/abilities/abilities.xml.json'));
}

export async function importPowers(jsonService: JsonService): Promise<PowersRoot> {
    return lastValueFrom(jsonService.getJson<PowersRoot>('assets/Data/abilities/powers.xml.json'));
}

export async function importAttachment(path: string, jsonService: JsonService): Promise<AttachmentRoot> {
    return lastValueFrom(jsonService.getJson<AttachmentRoot>(path));
}

export async function importTechtreedata(idCiv: Civ, jsonService: JsonService): Promise<TechtreedataRoot> {
    let path: string = '';
    switch (idCiv) {
        case Civ.Aztecs:
            path = 'assets/Data/uitechtree/techtreedata_xpaztec.xml.json';
            break;
        case Civ.British:
            path = 'assets/Data/uitechtree/techtreedata_british.xml.json';
            break;
        case Civ.Chinese:
            path = 'assets/Data/uitechtree/techtreedata_chinese.xml.json';
            break;
        case Civ.Dutch:
            path = 'assets/Data/uitechtree/techtreedata_dutch.xml.json';
            break;
        case Civ.Ethiopians:
            path = 'assets/Data/uitechtree/techtreedata_deethiopians.xml.json';
            break;
        case Civ.French:
            path = 'assets/Data/uitechtree/techtreedata_french.xml.json';
            break;
        case Civ.Germans:
            path = 'assets/Data/uitechtree/techtreedata_germans.xml.json';
            break;
        case Civ.Haudenosaunee:
            path = 'assets/Data/uitechtree/techtreedata_xpiroquois.xml.json';
            break;
        case Civ.Hausa:
            path = 'assets/Data/uitechtree/techtreedata_dehausa.xml.json';
            break;
        case Civ.Inca:
            path = 'assets/Data/uitechtree/techtreedata_deinca.xml.json';
            break;
        case Civ.Indians:
            path = 'assets/Data/uitechtree/techtreedata_indians.xml.json';
            break;
        case Civ.Italians:
            path = 'assets/Data/uitechtree/techtreedata_deitalians.xml.json';
            break;
        case Civ.Japanese:
            path = 'assets/Data/uitechtree/techtreedata_japanese.xml.json';
            break;
        case Civ.Lakota:
            path = 'assets/Data/uitechtree/techtreedata_xpsioux.xml.json';
            break;
        case Civ.Maltese:
            path = 'assets/Data/uitechtree/techtreedata_demaltese.xml.json';
            break;
        case Civ.Mexicans:
            path = 'assets/Data/uitechtree/techtreedata_demexicans.xml.json';
            break;
        case Civ.Ottoman:
            path = 'assets/Data/uitechtree/techtreedata_ottomans.xml.json';
            break;
        case Civ.Portuguese:
            path = 'assets/Data/uitechtree/techtreedata_portuguese.xml.json';
            break;
        case Civ.Russians:
            path = 'assets/Data/uitechtree/techtreedata_russians.xml.json';
            break;
        case Civ.Spanish:
            path = 'assets/Data/uitechtree/techtreedata_spanish.xml.json';
            break;
        case Civ.Swedes:
            path = 'assets/Data/uitechtree/techtreedata_deswedish.xml.json';
            break;
        case Civ.UnitedStates:
            path = 'assets/Data/uitechtree/techtreedata_deamericans.xml.json';
            break;
    }
    return lastValueFrom(jsonService.getJson<TechtreedataRoot>(path));
}

let tacticsMap: { [k: string]: any } = {};

export async function importTactics<T>(fileName: string, jsonService: JsonService): Promise<T> {
    if (fileName == 'depriestess.tactics') {
        fileName = 'dePriestess.tactics';
    } else if (fileName == 'houseinca.tactics') {
        fileName = 'houseInca.tactics';
    } else if (fileName == 'detorp.tactics') {
        fileName = 'deTorp.tactics';
    }
    if (tacticsMap[fileName]) {
        return tacticsMap[fileName];
    }
    let result = await lastValueFrom(jsonService.getJson<T>(`assets/Data/tactics/${fileName}.json`));
    tacticsMap[fileName] = result;
    return result;
}

export async function importMapInfos(jsonService: JsonService): Promise<{ [k: string]: MapInfo }> {
    return lastValueFrom(jsonService.getJson<{ [k: string]: MapInfo }>(`assets/maps.json`));
}

export async function importMapResources(jsonService: JsonService): Promise<MapResources[]> {
    return lastValueFrom(jsonService.getJson<MapResources[]>(`assets/map_resources.json`));
}

export async function importAnimfile(path: string, jsonService: JsonService): Promise<AnimfileRoot> {
    return lastValueFrom(jsonService.getJson<AnimfileRoot>(path));
}

export function mapIdToPath(mapInfos: { [k: string]: MapInfo }, mapId: number): string {
    let path: string = '';
    let values: MapInfo[] = Object.values(mapInfos);
    for (let i = 0; i < values.length; i++) {
        if (values[i].id == mapId) {
            path = `${resourcesRoot}${values[i].imagepath}.png`;
            break;
        }
    }
    return path;
}


const unknownMapId: number = 43;
export function getUnknownMapPath(mapInfos: { [k: string]: MapInfo }): string {
    let path: string = '';
    Object.values(mapInfos).forEach(value => {
        if (value.id == unknownMapId) {
            path = `${resourcesRoot}${value.imagepath}.png`;
            return;
        }
    })
    return path;
}

export async function getMapName(stringTableService: StrTableService, mapInfos: { [k: string]: MapInfo }, mapId: number): Promise<string> {
    let displayId: string = '(not found)';
    Object.values(mapInfos).forEach(value => {
        if (value.id == mapId) {
            displayId = value.displayNameID;
            return;
        }
    })
    return stringTableService.getLocalizedString(displayId);
}

export function getBrowserLanguage(): Language {
    if (navigator.language.startsWith('en')) {
        return Language.English;
    } else if (navigator.language.startsWith('fr')) {
        return Language.French;
    } else if (navigator.language.startsWith('de')) {
        return Language.German;
    } else if (navigator.language.startsWith('hi')) {
        return Language.Hindi;
    } else if (navigator.language.startsWith('it')) {
        return Language.Italian;
    } else if (navigator.language.startsWith('ja')) {
        return Language.Japanese;
    } else if (navigator.language.startsWith('ko')) {
        return Language.Korean;
    } else if (navigator.language.startsWith('ms')) {
        return Language.Malay;
    } else if (navigator.language.startsWith('pt')) {
        return Language.PortugueseBrazil;
    } else if (navigator.language.startsWith('ru')) {
        return Language.Russian;
    } else if (navigator.language == 'zh-CN') {
        return Language.SimplifiedChinese;
    } else if (navigator.language.startsWith('es')) {
        return Language.Spanish;
    } else if (navigator.language == 'zh-TW') {
        return Language.TraditionalChinese;
    } else if (navigator.language == 'zh-HK') {
        return Language.TraditionalChinese;
    } else if (navigator.language == 'zh-MO') {
        return Language.TraditionalChinese;
    } else if (navigator.language == 'zh-SG') {
        return Language.SimplifiedChinese;
    } else if (navigator.language.startsWith('tr')) {
        return Language.Turkish;
    } else if (navigator.language.startsWith('vi')) {
        return Language.Vietnamese;
    }
    return Language.English;
}

let protoTable: { [k: string]: Unit };
let homeCity: HomecityRoot;
let civs: CivsRoot;

export async function importCivs(jsonService: JsonService): Promise<CivsRoot> {
    if (!civs) {
        civs = await lastValueFrom(jsonService.getJson<CivsRoot>(`assets/Data/civs.xml.json`));
    }
    return civs;
}

export async function importHomeCity(idCiv: Civ, jsonService: JsonService): Promise<HomecityRoot> {
    homeCity = await lastValueFrom(jsonService.getJson<HomecityRoot>(idCivToHomecityJsonPath(idCiv)));
    return homeCity;
}

export let techMap: { [k: string]: backend.ITechInfo } = {};

export async function getCardFromTech(stringTableService: StrTableService, techTreeService: TechTreeService, tech: backend.ITechInfo, idCiv: Civ, jsonService: JsonService, amount: number = 0, maxCount: number = 0, age: number = -1): Promise<Card | null> {
    if (!tech) return null;
    let cardPath: string;
    if (tech.icon?.endsWith('Agents.png')) {
        cardPath = `assets/Data/wpfg/${tech.icon}`;
    } else if (tech.icon?.endsWith('High_Chief_IRO.png')) {
        cardPath = `assets/Data/wpfg/${tech.icon}`;
    } else {
        cardPath = `assets/Data/wpfg/${tech.icon?.toLowerCase()}`;
    }
    let foodCost: number = 0;
    let woodCost: number = 0;
    let coinCost: number = 0;
    let influenceCost: number = 0;
    let shipmentCost: number = 0;
    if (tech.costs) {
        for (let j = 0; j < tech.costs.length; j++) {
            if (tech.costs[j].resourcetype == backend.TechResourceType.Food) {
                foodCost = tech.costs[j].amount!;
            } else if (tech.costs[j].resourcetype == backend.TechResourceType.Wood) {
                woodCost = tech.costs[j].amount!;
            } else if (tech.costs[j].resourcetype == backend.TechResourceType.Gold) {
                coinCost = tech.costs[j].amount!;
            } else if (tech.costs[j].resourcetype == backend.TechResourceType.Influence) {
                influenceCost = tech.costs[j].amount!;
            } else if (tech.costs[j].resourcetype == backend.TechResourceType.Ships) {
                shipmentCost = tech.costs[j].amount!;
            }
        }
    }

    let details: { text: string, pop: number }[] = [];
    let localizedStrings = await stringTableService.getLocalizedStrings([
        tech.displaynameid, tech.rollovertextid
    ]);
    let displayName: string = tech.displaynameid ? localizedStrings[Number(tech.displaynameid)] : '';
    let rolloverText: string = tech.rollovertextid ? localizedStrings[Number(tech.rollovertextid)] : '';
    if (rolloverText) {
        rolloverText = rolloverText.replaceAll('\\n', '<br>').replaceAll('·', '• ');
    } else {
        let effect: backend.ITechEffectInfo = tech.effects![0];
        if (effect.subtype?.startsWith('FreeHomeCityUnit')) {
            let unitHintKey: string;
            let unitInfo = protoTable[effect.unittype!];
            let unitHintObj = Object(unitInfo.rollovertextid!);
            if (Array.isArray(unitHintObj)) {
                unitHintKey = unitHintObj[0];
            } else {
                unitHintKey = unitHintObj;
            }
            let unitHint: string = await stringTableService.getLocalizedString(unitHintKey);
            if (unitHint.startsWith('{')) {
                if (idCiv == Civ.Japanese) {
                    let startIndex = unitHint.indexOf('{J^') + 3;
                    let endIndex = unitHint.indexOf('^}', startIndex);
                    unitHint = unitHint.substring(startIndex, endIndex);
                } else if (idCiv == Civ.Indians) {
                    let startIndex = unitHint.indexOf('{I^') + 3;
                    let endIndex = unitHint.indexOf('^}', startIndex);
                    unitHint = unitHint.substring(startIndex, endIndex);
                } else {
                    let startIndex = unitHint.indexOf('{E^') + 3;
                    let endIndex = unitHint.indexOf('^}', startIndex);
                    unitHint = unitHint.substring(startIndex, endIndex);
                }
            }
            details.push({
                text: unitHint.replace('\\n', '<br>').replace('·', '• '),
                pop: 0
            })
        }
    }
    if (maxCount == -1) {
        details.push({
            text: await stringTableService.getLocalizedString(36865),
            pop: 0
        })
    } else if (maxCount == 1) {
        details.push({
            text: await stringTableService.getLocalizedString(36866),
            pop: 0
        })
    } else if (maxCount == 2) {
        details.push({
            text: await stringTableService.getLocalizedString(36867),
            pop: 0
        })
    }
    details = details.concat(await getDetailFromTech(stringTableService, techTreeService, tech, idCiv, jsonService));
    let totalPop: number = 0;
    for (let k = 0; k < details.length; k++) {
        totalPop += details[k].pop;
    }

    let buildingIndex: number = -1;
    for (let k = 0; k < homeCity.homecity.building.length; k++) {
        let techs: HomeCityTech[] = Object(homeCity.homecity.building[k].activetechs).tech
        if (techs) {
            for (let m = 0; m < techs.length; m++) {
                if (techs[m]['#text'] == tech.name) {
                    buildingIndex = k;
                    break;
                }
            }
        }
    }
    if (cardPath.endsWith('time_line_age_2.png')) {
        cardPath = age2ButtonSrc;
    } else if (cardPath.endsWith('time_line_age_3.png')) {
        cardPath = age3ButtonSrc;
    } else if (cardPath.endsWith('time_line_age_4.png')) {
        cardPath = age4ButtonSrc;
    } else if (cardPath.endsWith('time_line_age_5.png')) {
        cardPath = age5ButtonSrc;
    }
    let card: Card = {
        iconSrc: cardPath,
        amount: amount,
        maxCount: maxCount,
        foodCost: foodCost,
        woodCost: woodCost,
        coinCost: coinCost,
        influenceCost: influenceCost,
        shipmentCost: shipmentCost,
        displayName: displayName + ' (' + tech.name + ')',
        techName: tech.name!,
        rolloverText: rolloverText,
        details: details,
        pop: totalPop,
        index: -1,
        age: age + 1,
        buildingIndex: buildingIndex,
        isSelected: false
    }
    return card;
}

async function getDetailFromTech(stringTableService: StrTableService, techTreeService: TechTreeService, tech: backend.ITechInfo, idCiv: Civ, jsonService: JsonService): Promise<{ text: string, pop: number }[]> {
    let details: { text: string, pop: number }[] = [];
    for (let k = 0; k < tech.effects!.length; k++) {
        if (idCiv == Civ.Ethiopians) {
            if (tech.name == 'DEHCBigLevy') {
                if (k == 1) continue;
            }
        }
        if (details.length == 24) {
            details.push({
                text: await stringTableService.getLocalizedString(19830),
                pop: 0
            })
            break;
        }
        let effect: backend.ITechEffectInfo = tech.effects![k];
        let type: string = effect.type!;
        let subType: string = effect.subtype!;
        let amount: number = effect.amount!;
        let unittypeKey: string = effect.unittype!;
        let unittype: string = '';
        let unitPop: number = 0;
        if (unittypeKey) {
            let unit = protoTable[unittypeKey];
            if (unit) {
                unittype = await stringTableService.getLocalizedString(unit.displaynameid!);
                if (unit.populationcount) {
                    unitPop = Number(unit.populationcount) * amount;
                } else {
                    unitPop = 0;
                }

            }
        }
        let detail: string = '';
        if (subType) {
            if (subType == 'FreeHomeCityUnitIfTechObtainable') {
                if (effect.tech == 'deDefaultCratesShadow' ||
                    effect.tech == 'deCardDeliverCreateShadow' ||
                    effect.tech == 'DEShipCavArcherShadow' ||
                    effect.tech == 'DEHCShipLongbowShadow' ||
                    effect.tech == 'DEHCShipCrossbowShadow' ||
                    effect.tech == 'DEShipJannissaryShadow' ||
                    effect.tech == 'Age0Ottoman' ||
                    effect.tech == 'DEHCShipRollingWoodMaltaShadow1' ||
                    effect.tech == 'DEZacatecasSilverExtraMines' ||
                    effect.tech == 'deCardIgnoreBuildLimit') {
                    detail = await stringTableService.getLocalizedString(42177);
                } else {
                    continue;
                }
                detail = formatReplace(detail, '%1d', amount.toFixed());
                detail = formatReplace(detail, '%2s', unittype);
            } else if (subType == 'FreeHomeCityUnitByShipmentCount') {
                detail = await stringTableService.getLocalizedString(42177);
                detail = formatReplace(detail, '%1d', amount.toFixed());
                detail = formatReplace(detail, '%2s', unittype);
            } else if (subType == 'FreeHomeCityUnitResource') {
                detail = await stringTableService.getLocalizedStringBySymbol('cStringFreeHomeCityUnitResourceEffect');
                // Delivers %1!d! %2!s! carrying additional %3!d! %4!s!
                let resValue: number = effect.resvalue!;
                let resource = await getResourceName(stringTableService, effect);
                detail = formatReplace(detail, '%1d', amount.toFixed());
                detail = formatReplace(detail, '%2s', unittype);
                detail = formatReplace(detail, '%3d', resValue.toFixed());
                detail = formatReplace(detail, '%4s', resource);
            } else if (subType == 'FreeHomeCityUnitByShipmentCountResource') {
                detail = await stringTableService.getLocalizedStringBySymbol('cStringFreeHomeCityUnitResourceEffect');
                // Delivers %1!d! %2!s! carrying additional %3!d! %4!s!
                let resValue: number = effect.resvalue!;
                let resource = await getResourceName(stringTableService, effect);
                detail = formatReplace(detail, '%1d', amount.toFixed());
                detail = formatReplace(detail, '%2s', unittype);
                detail = formatReplace(detail, '%3d', resValue.toFixed());
                detail = formatReplace(detail, '%4s', resource);
            } else if (subType == 'ResourceIfTechObtainable') {
                continue;
            }
            else if (subType == "FreeHomeCityUnitByUnitCount") {
                detail = await stringTableService.getLocalizedStringBySymbol(`cString${subType}Effect`);
                let counttypeKey: string = effect.counttype!;
                let counttype = await UnitKeyToName(stringTableService, techTreeService, idCiv, counttypeKey);
                detail = formatReplace(detail, '%1d', amount.toFixed());
                detail = formatReplace(detail, '%2s', unittype);
                detail = formatReplace(detail, '%3s', counttype);
            } else if (subType == 'ResourceTrickleRate') {
                detail = await stringTableService.getLocalizedStringBySymbol('cStringAddResourceTrickleRateEffect');
                let resource = await getResourceName(stringTableService, effect);
                let target = await stringTableService.getLocalizedString(22301);
                detail = formatReplace(detail, '%1s', target);
                detail = formatReplace(detail, '%2.2f', amount.toFixed(2));
                detail = formatReplace(detail, '%3s', resource);
            } else if (subType == 'Resource') {
                detail = await stringTableService.getLocalizedStringBySymbol('cStringResourceEffect');
                //%1s: Adds +%2.2f %3s to your inventory
                let resource = await getResourceName(stringTableService, effect);
                let target = await stringTableService.getLocalizedString(22301);
                detail = formatReplace(detail, '%1s', target);
                detail = formatReplace(detail, '%2.2f', amount.toFixed(2));
                detail = formatReplace(detail, '%3s', resource);
            } else if (subType == 'FreeHomeCityUnitTechActiveCycle') {
                detail = await stringTableService.getLocalizedStringBySymbol('cStringFreeHomeCityUnitEffect');
                if (amount < 0) {
                    amount = 0;
                }
                detail = formatReplace(detail, '%1d', amount.toFixed());
                detail = formatReplace(detail, '%2s', unittype);
            } else if (subType == 'FreeHomeCityUnitShipped') {
                detail = await stringTableService.getLocalizedStringBySymbol('cStringFreeHomeCityUnitEffectShipped');
                if (amount < 0) {
                    amount = 0;
                }
                let unittype2 = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.unittype2!);
                //Delivers %1!d! %2!s! with %3!d! %4!s! in it
                detail = formatReplace(detail, '%1d', amount.toFixed());
                detail = formatReplace(detail, '%2s', unittype);
                detail = formatReplace(detail, '%3d', effect.amount2!.toFixed());
                detail = formatReplace(detail, '%4s', unittype2);
            } else if (subType == 'FreeHomeCityUnit') {
                detail = await stringTableService.getLocalizedStringBySymbol('cStringFreeHomeCityUnitEffect');
                if (amount < 0) {
                    amount = 0;
                }
                detail = formatReplace(detail, '%1d', amount.toFixed());
                detail = formatReplace(detail, '%2s', unittype);
            } else if (subType == 'FreeHomeCityUnitToGatherPoint') {
                if (Number.isNaN(effect.resvalue!)) {
                    detail = await stringTableService.getLocalizedStringBySymbol('cStringFreeHomeCityUnitEffect');
                    if (amount < 0) {
                        amount = 0;
                    }
                    detail = formatReplace(detail, '%1d', amount.toFixed());
                    detail = formatReplace(detail, '%2s', unittype);
                } else {
                    detail = await stringTableService.getLocalizedStringBySymbol('cStringFreeHomeCityUnitResourceEffect');
                    if (amount < 0) {
                        amount = 0;
                    }
                    let resource = await getResourceName(stringTableService, effect);
                    detail = formatReplace(detail, '%1d', amount.toFixed());
                    detail = formatReplace(detail, '%2s', unittype);
                    detail = formatReplace(detail, '%3d', effect.resvalue!.toFixed());
                    detail = formatReplace(detail, '%4s', resource);
                }
            } else if (subType == 'FreeHomeCityUnitRandom') {
                detail = await stringTableService.getLocalizedStringBySymbol('cStringFreeHomeCityUnitRandomEffect');
                if (amount < 0) {
                    amount = 0;
                }
                unittype = await UnitKeyToName(stringTableService, techTreeService, idCiv, unittypeKey, effect.targettype!);
                detail = formatReplace(detail, '%1d', amount.toFixed());
                detail = formatReplace(detail, '%2s', unittype);
            } else if (subType == 'ArmorType') {
                detail = await stringTableService.getLocalizedStringBySymbol('cStringArmorTypeEffect');
                let target = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!);
                let armorType = await armorTypeToLocalizedText(stringTableService, effect.newtype!);
                detail = formatReplace(detail, '%1s', target);
                detail = formatReplace(detail, '%2s', armorType);
            } else if (subType == 'ArmorSpecific') {
                if (effect.relativity == backend.TechRelativity.Absolute) {
                    detail = await stringTableService.getLocalizedStringBySymbol('cStringAddArmorSpecificEffect');
                    let target = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!);
                    let armorType = await armorTypeToLocalizedText(stringTableService, effect.newtype!);
                    detail = formatReplace(detail, '%1s', target);
                    detail = formatReplace(detail, '%2.2f', amount.toFixed(2));
                    detail = formatReplace(detail, '%3s', armorType);
                }
            } else if (subType == 'Hitpoints' || subType == 'HitPoints') {
                if (isShowableLogicalType(effect.targettext!)) {
                    let target = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!);
                    if (target != '') {
                        if (amount > 1) {
                            detail = await stringTableService.getLocalizedStringBySymbol('cStringIncreaseHitpointsEffect');
                        } else {
                            detail = await stringTableService.getLocalizedStringBySymbol('cStringDecreaseHitpointsEffect');
                        }
                        detail = formatReplace(detail, '%1s', target);
                        detail = formatReplace(detail, '%2.0f', (amount * 100 - 100).toFixed());
                        detail = formatReplace(detail, '%%', '%');
                    }
                }
            } else if (subType == 'Armor') {
                if (isShowableLogicalType(effect.targettext!)) {
                    let target = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!);
                    if (target != '') {
                        if (effect.relativity == backend.TechRelativity.Absolute) {
                            detail = await stringTableService.getLocalizedStringBySymbol('cStringAddArmorEffect');
                            detail = formatReplace(detail, '%1s', target);
                            detail = formatReplace(detail, '%2.2f', amount.toFixed(2));
                        } else if (effect.relativity == backend.TechRelativity.BasePercent || effect.relativity == backend.TechRelativity.Percent) {
                            if (amount > 1) {
                                detail = await stringTableService.getLocalizedStringBySymbol('cStringIncreaseArmorEffect');
                            } else {
                                detail = await stringTableService.getLocalizedStringBySymbol('cStringDecreaseArmorEffect');
                            }
                            detail = formatReplace(detail, '%1s', target);
                            detail = formatReplace(detail, '%2.0f', (amount * 100 - 100).toFixed());
                            detail = formatReplace(detail, '%%', '%');
                        }
                    }
                }
            } else if (subType == 'Damage') {
                if (effect.allactions || effect.action) {
                    if (isShowableLogicalType(effect.targettext!)) {
                        let action: string = await getActionString(stringTableService, techTreeService, effect, idCiv, jsonService);
                        if (action != '') {
                            let target = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!);
                            if (target != '') {
                                if (effect.relativity == backend.TechRelativity.Absolute) {
                                    detail = await stringTableService.getLocalizedStringBySymbol('cStringAddDamageEffect');
                                    let action = await getActionString(stringTableService, techTreeService, effect, idCiv, jsonService);
                                    detail = formatReplace(detail, '%1s', target);
                                    detail = formatReplace(detail, '%2.2f', amount.toFixed(2));
                                    detail = formatReplace(detail, '%3s', action);
                                } else if (effect.relativity == backend.TechRelativity.BasePercent || effect.relativity == backend.TechRelativity.Percent) {
                                    if (amount > 1) {
                                        detail = await stringTableService.getLocalizedStringBySymbol('cStringIncreaseDamageEffect');
                                    } else {
                                        detail = await stringTableService.getLocalizedStringBySymbol('cStringDecreaseDamageEffect');
                                    }
                                    detail = formatReplace(detail, '%1s', target);
                                    detail = formatReplace(detail, '%2s', action);
                                    detail = formatReplace(detail, '%3.0f', (amount * 100 - 100).toFixed())
                                    detail = formatReplace(detail, '%%', '%');
                                } else if (effect.relativity == backend.TechRelativity.Assign) {
                                    detail = await stringTableService.getLocalizedStringBySymbol('cStringSetDamageEffect');
                                    let action = await getActionString(stringTableService, techTreeService, effect, idCiv, jsonService);
                                    detail = formatReplace(detail, '%1s', target);
                                    detail = formatReplace(detail, '%2s', action);
                                    detail = formatReplace(detail, '%3.2f', amount.toFixed(2));
                                }
                            }
                        }
                    }
                }
            } else if (subType == 'DamageForAllRangedLogicActions') {
                if (isShowableLogicalType(effect.targettext!)) {
                    let target = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!);
                    if (effect.relativity == backend.TechRelativity.Absolute) {
                        //%1s: Adds %2.2f to ranged attack damage
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringAddRangedDamageEffect');
                        detail = formatReplace(detail, '%1s', target);
                        detail = formatReplace(detail, '%2.2f', amount.toFixed(2));
                    } else if (effect.relativity == backend.TechRelativity.BasePercent || effect.relativity == backend.TechRelativity.Percent) {
                        if (amount > 1) {
                            detail = await stringTableService.getLocalizedStringBySymbol('cStringIncreaseRangedDamageEffect');
                        } else {
                            detail = await stringTableService.getLocalizedStringBySymbol('cStringDecreaseRangedDamageEffect');
                        }
                        //%1!s!: All ranged attack damage +%2!.0f!%%
                        detail = formatReplace(detail, '%1s', target);
                        detail = formatReplace(detail, '%2.0f', (amount * 100 - 100).toFixed())
                        detail = formatReplace(detail, '%%', '%');
                    } else if (effect.relativity == backend.TechRelativity.Assign) {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringSetRangedDamageEffect');
                        //%1s: Sets ranged attack damage to %2.2f
                        detail = formatReplace(detail, '%1s', target);
                        detail = formatReplace(detail, '%2.2f', amount.toFixed(2));
                    }
                }
            } else if (subType == 'DamageForAllHandLogicActions') {
                if (isShowableLogicalType(effect.targettext!)) {
                    let target = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!);
                    if (effect.relativity == backend.TechRelativity.Absolute) {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringAddHandDamageEffect');
                        detail = formatReplace(detail, '%1s', target);
                        detail = formatReplace(detail, '%2.2f', amount.toFixed(2));
                    } else if (effect.relativity == backend.TechRelativity.BasePercent || effect.relativity == backend.TechRelativity.Percent) {
                        if (amount > 1) {
                            detail = await stringTableService.getLocalizedStringBySymbol('cStringIncreaseHandDamageEffect');
                        } else {
                            detail = await stringTableService.getLocalizedStringBySymbol('cStringDecreaseHandDamageEffect');
                        }
                        detail = formatReplace(detail, '%1s', target);
                        detail = formatReplace(detail, '%2.0f', (amount * 100 - 100).toFixed())
                        detail = formatReplace(detail, '%%', '%');
                    } else if (effect.relativity == backend.TechRelativity.Assign) {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringSetHandDamageEffect');
                        detail = formatReplace(detail, '%1s', target);
                        detail = formatReplace(detail, '%2.2f', amount.toFixed(2));
                    }
                }
            } else if (subType == 'DamageArea') {
                let target: string = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!);
                if (effect.relativity == backend.TechRelativity.Absolute) {
                    detail = await stringTableService.getLocalizedStringBySymbol('cStringAddDamageAreaEffect');
                    let action = await getActionString(stringTableService, techTreeService, effect, idCiv, jsonService);
                    detail = formatReplace(detail, '%1s', target);
                    detail = formatReplace(detail, '%2.2f', amount.toFixed(2));
                    detail = formatReplace(detail, '%3s', action);
                } else if (effect.relativity == backend.TechRelativity.BasePercent || effect.relativity == backend.TechRelativity.Percent) {
                    if (amount > 1) {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringIncreaseDamageAreaEffect');
                    } else {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringDecreaseDamageAreaEffect');
                    }
                    let action: string = await getActionString(stringTableService, techTreeService, effect, idCiv, jsonService);
                    detail = formatReplace(detail, '%1s', target);
                    detail = formatReplace(detail, '%2s', action);
                    detail = formatReplace(detail, '%3.0f', (amount * 100 - 100).toString());
                    detail = formatReplace(detail, '%%', '%');
                } else if (effect.relativity == backend.TechRelativity.Assign) {
                    detail = await stringTableService.getLocalizedStringBySymbol('cStringSetDamageAreaEffect');
                    let action = await getActionString(stringTableService, techTreeService, effect, idCiv, jsonService);
                    detail = formatReplace(detail, '%1s', target);
                    detail = formatReplace(detail, '%2s', action);
                    detail = formatReplace(detail, '%3.2f', amount.toFixed(2));
                }
            } else if (subType == 'DamageBonus') {
                let target: string = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!);
                unittype = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.unittype!);
                if (unittype != '') {
                    if (effect.relativity == backend.TechRelativity.Absolute) {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringAddDamageBonusEffect');
                        let action = await getActionString(stringTableService, techTreeService, effect, idCiv, jsonService);
                        detail = formatReplace(detail, '%1s', target);
                        detail = formatReplace(detail, '%2.2f', amount.toFixed(2));
                        detail = formatReplace(detail, '%3s', action);
                        detail = formatReplace(detail, '%4s', unittype);
                    } else if (effect.relativity == backend.TechRelativity.BasePercent || effect.relativity == backend.TechRelativity.Percent) {
                        if (amount > 1) {
                            detail = await stringTableService.getLocalizedStringBySymbol('cStringIncreaseDamageBonusEffect');
                            // %1!s!: %2!s! Damage Bonus against %3!s! +%4!.0f!%%
                        } else {
                            detail = await stringTableService.getLocalizedStringBySymbol('cStringDecreaseDamageBonusEffect');
                            // %1!s!: %2!s! Damage Bonus against %3!s! %4!.0f!%%
                        }
                        let action: string = await getActionString(stringTableService, techTreeService, effect, idCiv, jsonService);
                        let unittype = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.unittype!);
                        detail = formatReplace(detail, '%1s', target);
                        detail = formatReplace(detail, '%2s', action);
                        detail = formatReplace(detail, '%3s', unittype);
                        detail = formatReplace(detail, '%4.0f', (amount * 100 - 100).toString());
                        detail = formatReplace(detail, '%%', '%');
                    } else if (effect.relativity == backend.TechRelativity.Assign) {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringSetDamageBonusEffect');
                        let action = await getActionString(stringTableService, techTreeService, effect, idCiv, jsonService);
                        let unittype = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.unittype!);
                        detail = formatReplace(detail, '%1s', target);
                        detail = formatReplace(detail, '%2s', action);
                        detail = formatReplace(detail, '%3s', unittype);
                        detail = formatReplace(detail, '%4.2f', amount.toFixed(2));
                    }
                }
            } else if (subType == 'Cost') {
                let target = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!);
                if (target != '') {
                    let resource = await getResourceName(stringTableService, effect);
                    if (effect.relativity == backend.TechRelativity.BasePercent || effect.relativity == backend.TechRelativity.Percent) {
                        if (amount > 1) {
                            detail = await stringTableService.getLocalizedStringBySymbol('cStringIncreaseCostEffect');
                        } else {
                            detail = await stringTableService.getLocalizedStringBySymbol('cStringDecreaseCostEffect');
                        }
                        detail = formatReplace(detail, '%1s', target);
                        detail = formatReplace(detail, '%2s', resource);
                        detail = formatReplace(detail, '%3.0f', (amount * 100 - 100).toFixed());
                        detail = formatReplace(detail, '%%', '%');
                    } else if (effect.relativity == backend.TechRelativity.Assign) {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringSetCostEffect');
                        detail = formatReplace(detail, '%1s', target);
                        detail = formatReplace(detail, '%2s', resource);
                        detail = formatReplace(detail, '%3.2f', amount.toFixed(2));
                    } else if (effect.relativity == backend.TechRelativity.Absolute) {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringAddCostEffect');
                        // "%1s: Adds %2.2f to %3s cost"
                        detail = formatReplace(detail, '%1s', target);
                        detail = formatReplace(detail, '%2.2f', amount.toFixed(2));
                        detail = formatReplace(detail, '%3s', resource);
                    }
                }
            } else if (subType == 'MaximumVelocity') {
                if (isShowableLogicalType(effect.targettext!)) {
                    let target = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!);
                    if (effect.relativity == backend.TechRelativity.BasePercent || effect.relativity == backend.TechRelativity.Percent) {
                        if (amount > 1) {
                            detail = await stringTableService.getLocalizedStringBySymbol('cStringIncreaseSpeedEffect');
                            detail = formatReplace(detail, '%1s', target);
                            detail = formatReplace(detail, '%2.0f', (amount * 100 - 100).toFixed());
                            detail = formatReplace(detail, '%%', '%');
                        } else {
                            detail = await stringTableService.getLocalizedStringBySymbol('cStringDecreaseSpeedEffect');
                            detail = formatReplace(detail, '%1s', target);
                            detail = formatReplace(detail, '%2.0f', (amount * 100 - 100).toFixed());
                            detail = formatReplace(detail, '%%', '%');
                        }
                    } else if (effect.relativity == backend.TechRelativity.Absolute) {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringAddSpeedEffect');
                        detail = formatReplace(detail, '%1s', target);
                        detail = formatReplace(detail, '%2.2f', amount.toFixed(2));
                    } else if (effect.relativity == backend.TechRelativity.Assign) {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringSetSpeedEffect');
                        detail = formatReplace(detail, '%1s', target);
                        detail = formatReplace(detail, '%2.2f', amount.toFixed(2));
                    }
                }
            } else if (subType == 'RateOfFire') {
                if (isShowableLogicalType(effect.targettext!)) {
                    let target = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!);
                    let action = await getActionString(stringTableService, techTreeService, effect, idCiv, jsonService);
                    if (action != '') {
                        if (effect.relativity == backend.TechRelativity.BasePercent || effect.relativity == backend.TechRelativity.Percent) {
                            if (amount > 1) {
                                detail = await stringTableService.getLocalizedStringBySymbol('cStringIncreaseRateOfFireEffect');
                                detail = formatReplace(detail, '%1s', target);
                                detail = formatReplace(detail, '%2s', action);
                                detail = formatReplace(detail, '%3.0f', (amount * 100 - 100).toString());
                                detail = formatReplace(detail, '%%', '%');
                            } else {
                                detail = await stringTableService.getLocalizedStringBySymbol('cStringDecreaseRateOfFireEffect');
                                detail = formatReplace(detail, '%1s', target);
                                detail = formatReplace(detail, '%2s', action);
                                detail = formatReplace(detail, '%3.0f', (amount * 100 - 100).toString());
                                detail = formatReplace(detail, '%%', '%');
                            }
                        } else if (effect.relativity == backend.TechRelativity.Absolute) {
                            detail = await stringTableService.getLocalizedStringBySymbol('cStringAddRateOfFireEffect');
                            detail = formatReplace(detail, '%1s', target);
                            detail = formatReplace(detail, '%2.2f', amount.toFixed(2));
                            detail = formatReplace(detail, '%3s', action);
                        } else if (effect.relativity == backend.TechRelativity.Assign) {
                            detail = await stringTableService.getLocalizedStringBySymbol('cStringSetRateOfFireEffect');
                            detail = formatReplace(detail, '%1s', target);
                            detail = formatReplace(detail, '%2s', action);
                            detail = formatReplace(detail, '%3.2f', amount.toFixed(2));
                        }
                    }
                }
            } else if (subType == 'MaximumRange') {
                let target = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!);
                let action: string = await getActionString(stringTableService, techTreeService, effect, idCiv, jsonService);
                if (action != '') {
                    if (effect.relativity == backend.TechRelativity.BasePercent || effect.relativity == backend.TechRelativity.Percent) {
                        if (amount > 1) {
                            //%1!s!: %2!s! Maximum Range +%3!.0f!%%
                            detail = await stringTableService.getLocalizedStringBySymbol('cStringIncreaseMaxRangeEffect');
                            detail = formatReplace(detail, '%1s', target);
                            detail = formatReplace(detail, '%2s', action);
                            detail = formatReplace(detail, '%3.0f', (amount * 100 - 100).toString());
                            detail = formatReplace(detail, '%%', '%');
                        } else {
                            detail = await stringTableService.getLocalizedStringBySymbol('cStringDecreaseMaxRangeEffect');
                            detail = formatReplace(detail, '%1s', target);
                            detail = formatReplace(detail, '%2s', action);
                            detail = formatReplace(detail, '%3.0f', (amount * 100 - 100).toString());
                            detail = formatReplace(detail, '%%', '%');
                        }
                    } else if (effect.relativity == backend.TechRelativity.Assign) {
                        //%1s: Sets %2s Maximum Range to %3.2f
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringSetMaxRangeEffect');
                        detail = formatReplace(detail, '%1s', target);
                        detail = formatReplace(detail, '%2s', action);
                        detail = formatReplace(detail, '%3.2f', amount.toFixed(2));
                    } else if (effect.relativity == backend.TechRelativity.Absolute) {
                        //"%1s: Adds %2.2f to %3s Maximum Range"
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringAddMaxRangeEffect');
                        detail = formatReplace(detail, '%1s', target);
                        detail = formatReplace(detail, '%2.2f', amount.toFixed(2));
                        detail = formatReplace(detail, '%3s', action);
                    }
                }
            } else if (subType == 'MinimumRange') {
                let target = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!);
                let action: string = await getActionString(stringTableService, techTreeService, effect, idCiv, jsonService);
                if (action != '') {
                    if (effect.relativity == backend.TechRelativity.BasePercent || effect.relativity == backend.TechRelativity.Percent) {
                        if (amount > 1) {
                            detail = await stringTableService.getLocalizedStringBySymbol('cStringIncreaseMinRangeEffect');
                            detail = formatReplace(detail, '%1s', target);
                            detail = formatReplace(detail, '%2s', action);
                            detail = formatReplace(detail, '%3.0f', (amount * 100 - 100).toString());
                            detail = formatReplace(detail, '%%', '%');
                        } else {
                            detail = await stringTableService.getLocalizedStringBySymbol('cStringDecreaseMinRangeEffect');
                            detail = formatReplace(detail, '%1s', target);
                            detail = formatReplace(detail, '%2s', action);
                            detail = formatReplace(detail, '%3.0f', (amount * 100 - 100).toString());
                            detail = formatReplace(detail, '%%', '%');
                        }
                    } else if (effect.relativity == backend.TechRelativity.Assign) {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringSetMinRangeEffect');
                        detail = formatReplace(detail, '%1s', target);
                        detail = formatReplace(detail, '%2s', action);
                        detail = formatReplace(detail, '%3.2f', amount.toFixed(2));
                    } else if (effect.relativity == backend.TechRelativity.Absolute) {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringAddMinRangeEffect');
                        detail = formatReplace(detail, '%1s', target);
                        detail = formatReplace(detail, '%2.2f', amount.toFixed(2));
                        detail = formatReplace(detail, '%3s', action);
                    }
                }
            } else if (subType == 'LOS') {
                if (effect.targettext != 'NatMercTracker') {
                    let target = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!);
                    if (target != '') {
                        if (effect.relativity == backend.TechRelativity.BasePercent || effect.relativity == backend.TechRelativity.Percent) {
                            if (amount > 1) {
                                detail = await stringTableService.getLocalizedStringBySymbol('cStringIncreaseLOSEffect');
                                detail = formatReplace(detail, '%1s', target);
                                detail = formatReplace(detail, '%2.0f', (amount * 100 - 100).toString());
                                detail = formatReplace(detail, '%%', '%');
                            } else {
                                detail = await stringTableService.getLocalizedStringBySymbol('cStringDecreaseLOSEffect');
                                detail = formatReplace(detail, '%1s', target);
                                detail = formatReplace(detail, '%2.0f', (amount * 100 - 100).toString());
                                detail = formatReplace(detail, '%%', '%');
                            }
                        } else if (effect.relativity == backend.TechRelativity.Assign) {
                            detail = await stringTableService.getLocalizedStringBySymbol('cStringSetLOSEffect');
                            detail = formatReplace(detail, '%1s', target);
                            detail = formatReplace(detail, '%2.2f', amount.toFixed(2));
                        } else if (effect.relativity == backend.TechRelativity.Absolute) {
                            detail = await stringTableService.getLocalizedStringBySymbol('cStringAddLOSEffect');
                            detail = formatReplace(detail, '%1s', target);
                            detail = formatReplace(detail, '%2.2f', amount.toFixed(2));
                        }
                    }
                }
            } else if (subType == 'Yield') {
                let action: string = await getActionString(stringTableService, techTreeService, effect, idCiv, jsonService);
                if (action != '') {
                    let unittype: string = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.unittype!);
                    let target = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!);
                    if (effect.relativity == backend.TechRelativity.Assign) {
                        //%1s: Sets %2s Yield for %3s to %4.2f
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringSetYieldEffect');
                        detail = formatReplace(detail, '%1s', target);
                        detail = formatReplace(detail, '%2s', action);
                        detail = formatReplace(detail, '%3s', unittype);
                        detail = formatReplace(detail, '%4.2f', amount.toFixed(2));
                    } else if (effect.relativity == backend.TechRelativity.Absolute) {
                        //%1s: Adds %2.2f to %3s Yield for %4s
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringAddYieldEffect');
                        detail = formatReplace(detail, '%1s', target);
                        detail = formatReplace(detail, '%2.2f', amount.toFixed(2));
                        detail = formatReplace(detail, '%3s', action);
                        detail = formatReplace(detail, '%4s', unittype);
                    } else {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringChangeYieldEffect');
                        detail = formatReplace(detail, '%1s', target);
                        detail = formatReplace(detail, '%2s', action);
                        detail = formatReplace(detail, '%3s', unittype);
                        detail = formatReplace(detail, '%4.0f', (amount * 100 - 100).toFixed());
                        detail = formatReplace(detail, '%%', '%');
                    }
                }
            } else if (subType == 'WorkRate') {
                let action: string = await getActionString(stringTableService, techTreeService, effect, idCiv, jsonService);
                if (action != '') {
                    let unittypeKey = effect.unittype!;
                    if (unittypeKey != 'AbstractInfiniteCrate') {
                        let unittype: string = await UnitKeyToName(stringTableService, techTreeService, idCiv, unittypeKey);
                        let target: string = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!, effect.targettype!);
                        if (effect.relativity == backend.TechRelativity.BasePercent || effect.relativity == backend.TechRelativity.Percent) {
                            if (amount != 1) {
                                if (amount > 1) {
                                    detail = await stringTableService.getLocalizedStringBySymbol('cStringIncreaseWorkRateEffect');
                                } else {
                                    detail = await stringTableService.getLocalizedStringBySymbol('cStringDecreaseWorkRateEffect');
                                }
                                detail = formatReplace(detail, '%1s', target);
                                detail = formatReplace(detail, '%2s', action);
                                detail = formatReplace(detail, '%3s', unittype);
                                detail = formatReplace(detail, '%4.0f', (amount * 100 - 100).toFixed());
                                detail = formatReplace(detail, '%%', '%');
                            }
                        } else if (effect.relativity == backend.TechRelativity.Assign) {
                            //%1s: Sets %2s Work Rate for %3s to %4.2f
                            detail = await stringTableService.getLocalizedStringBySymbol('cStringSetWorkRateEffect');
                            detail = formatReplace(detail, '%1s', target);
                            detail = formatReplace(detail, '%2s', action);
                            detail = formatReplace(detail, '%3s', unittype);
                            detail = formatReplace(detail, '%4.2f', amount.toFixed());
                        }
                    }
                }
            } else if (subType == 'BuildingWorkRate') {
                let target: string = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!);
                if (target != '') {
                    if (effect.relativity == backend.TechRelativity.BasePercent || effect.relativity == backend.TechRelativity.Percent) {
                        if (amount > 1) {
                            detail = await stringTableService.getLocalizedStringBySymbol('cStringIncreaseBuildingWorkRateEffect');
                        } else {
                            detail = await stringTableService.getLocalizedStringBySymbol('cStringDecreaseBuildingWorkRateEffect');
                        }
                        //%1!s!: Training and Research Work Rate +%2!.0f!%%
                        detail = formatReplace(detail, '%1s', target);
                        detail = formatReplace(detail, '%2.0f', (amount * 100 - 100).toFixed());
                        detail = formatReplace(detail, '%%', '%');
                    } else if (effect.relativity == backend.TechRelativity.Assign) {
                        //%1s: Sets Training and Research Work Rate to %2.2f
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringSetBuildingWorkRateEffect');
                        detail = formatReplace(detail, '%1s', target);
                        detail = formatReplace(detail, '%2.2f', amount.toFixed());
                    }
                }
            } else if (subType == 'WorkRateSpecific') {
                let action: string = await getActionString(stringTableService, techTreeService, effect, idCiv, jsonService);
                let unittype: string = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.unittype!);
                let target: string = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!);
                let resource: string = await getResourceName(stringTableService, effect);
                if (amount > 1) {
                    detail = await stringTableService.getLocalizedStringBySymbol('cStringIncreaseWorkRateEffectSpecific');
                } else {
                    detail = await stringTableService.getLocalizedStringBySymbol('cStringDecreaseWorkRateEffectSpecific');
                }
                detail = formatReplace(detail, '%1s', target);
                detail = formatReplace(detail, '%2s', action);
                detail = formatReplace(detail, '%3s', unittype);
                detail = formatReplace(detail, '%4.0f', (amount * 100 - 100).toFixed());
                detail = formatReplace(detail, '%5s', resource);
                detail = formatReplace(detail, '%%', '%');
            } else if (subType == 'InventoryRate') {
                detail = await stringTableService.getLocalizedStringBySymbol('cStringIncreaseWorkRateEffect');
                let action: string = await getActionString(stringTableService, techTreeService, effect, idCiv, jsonService);
                let unittype: string = '';
                unittype = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.unittype!);
                let target: string = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!);
                detail = formatReplace(detail, '%1s', target);
                detail = formatReplace(detail, '%2s', action);
                detail = formatReplace(detail, '%3s', unittype);
                detail = formatReplace(detail, '%4.0f', (amount * 100 - 100).toFixed());
                detail = formatReplace(detail, '%%', '%');
            } else if (subType == 'PopulationCapAddition') {
                let target: string = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!);
                if (target != '') {
                    detail = await stringTableService.getLocalizedStringBySymbol('cStringPopulationCapAddition');
                    detail = formatReplace(detail, '%1s', target);
                    detail = formatReplace(detail, '%2d', amount.toFixed());
                }
            } else if (subType == 'BuildLimit') {
                let target: string = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!);
                if (effect.relativity == backend.TechRelativity.Assign) {
                    detail = await stringTableService.getLocalizedStringBySymbol('cStringSetBuildLimitEffect');
                    detail = formatReplace(detail, '%1s', target);
                    detail = formatReplace(detail, '%2.2f', amount.toFixed(2));
                } else if (effect.relativity == backend.TechRelativity.Absolute) {
                    detail = await stringTableService.getLocalizedStringBySymbol('cStringAddBuildLimitEffect');
                    detail = formatReplace(detail, '%1s', target);
                    detail = formatReplace(detail, '%2.2f', amount.toFixed(2));
                } else if (effect.relativity == backend.TechRelativity.BasePercent || effect.relativity == backend.TechRelativity.Percent) {
                    if (amount > 1) {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringIncreaseBuildLimitEffect');
                    } else {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringDecreaseBuildLimitEffect');
                    }
                    detail = formatReplace(detail, '%1s', target);
                    detail = formatReplace(detail, '%2.0f', (amount * 100 - 100).toString());
                    detail = formatReplace(detail, '%%', '%');
                }
            } else if (subType == 'TrainPoints') {
                if (isShowableLogicalType(effect.targettext!)) {
                    let target: string = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!);
                    if (target != '') {
                        if (amount > 1) {
                            detail = await stringTableService.getLocalizedStringBySymbol('cStringIncreaseTrainPointsEffect');
                        } else {
                            detail = await stringTableService.getLocalizedStringBySymbol('cStringDecreaseTrainPointsEffect');
                        }
                        detail = formatReplace(detail, '%1s', target);
                        detail = formatReplace(detail, '%2.0f', (amount * 100 - 100).toFixed());
                        detail = formatReplace(detail, '%%', '%');
                    }
                }
            } else if (subType == 'BuildPoints') {
                let target: string = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!);
                if (target != '') {
                    if (amount > 1) {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringIncreaseBuildPointsEffect');
                    } else {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringDecreaseBuildPointsEffect');
                    }
                    detail = formatReplace(detail, '%1s', target);
                    detail = formatReplace(detail, '%2.0f', (amount * 100 - 100).toFixed());
                    detail = formatReplace(detail, '%%', '%');
                }
            } else if (subType == 'ResearchPoints') {
                let target: string = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!, effect.targettype!);
                if (target != '') {
                    if (effect.relativity == backend.TechRelativity.BasePercent || effect.relativity == backend.TechRelativity.Percent) {
                        if (amount > 1) {
                            detail = await stringTableService.getLocalizedStringBySymbol('cStringIncreaseResearchPointsEffect');
                        } else {
                            detail = await stringTableService.getLocalizedStringBySymbol('cStringDecreaseResearchPointsEffect');
                        }
                        detail = formatReplace(detail, '%1s', target);
                        detail = formatReplace(detail, '%2.0f', (amount * 100 - 100).toFixed());
                        detail = formatReplace(detail, '%%', '%');
                    } else if (effect.relativity == backend.TechRelativity.Assign) {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringSetResearchPointsEffect');
                        detail = formatReplace(detail, '%1s', target);
                        detail = formatReplace(detail, '%2.2f', amount.toFixed(2));
                    }
                }
            } else if (subType == 'BuildBounty') {
                if (isShowableLogicalType(effect.targettext!)) {
                    let target: string = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!);
                    if (effect.relativity == backend.TechRelativity.BasePercent || effect.relativity == backend.TechRelativity.Percent) {
                        if (amount > 1) {
                            detail = await stringTableService.getLocalizedStringBySymbol('cStringIncreaseBuildBountyEffect');
                        } else {
                            detail = await stringTableService.getLocalizedStringBySymbol('cStringDecreaseBuildBountyEffect');
                        }
                        detail = formatReplace(detail, '%1s', target);
                        detail = formatReplace(detail, '%2.0f', (amount * 100 - 100).toFixed());
                        detail = formatReplace(detail, '%%', '%');
                    } else if (effect.relativity == backend.TechRelativity.Assign) {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringSetBuildBountyEffect');
                        detail = formatReplace(detail, '%1s', target);
                        detail = formatReplace(detail, '%2.2f', amount.toFixed(2));
                    }
                }
            } else if (subType == 'BuildBountySpecific') {
                if (isShowableLogicalType(effect.targettext!)) {
                    let resource = await getResourceName(stringTableService, effect);
                    let target: string = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!);
                    if (effect.relativity == backend.TechRelativity.BasePercent || effect.relativity == backend.TechRelativity.Percent) {
                        if (amount > 1) {
                            //%1!s!: Build Bounty +%2!.0f!%% %3!s!
                            detail = await stringTableService.getLocalizedStringBySymbol('cStringIncreaseBuildBountySpecificEffect');
                        } else {
                            detail = await stringTableService.getLocalizedStringBySymbol('cStringDecreaseBuildBountySpecificEffect');
                        }
                        detail = formatReplace(detail, '%1s', target);
                        detail = formatReplace(detail, '%2.0f', (amount * 100 - 100).toFixed());
                        detail = formatReplace(detail, '%3s', resource);
                        detail = formatReplace(detail, '%%', '%');
                    } else if (effect.relativity == backend.TechRelativity.Assign) {
                        //%1s: Sets Build Bounty (%2s) to %3.2f
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringSetBuildBountySpecificEffect');
                        detail = formatReplace(detail, '%1s', target);
                        detail = formatReplace(detail, '%2s', resource);
                        detail = formatReplace(detail, '%3.2f', amount.toFixed(2));
                    } else if (effect.relativity == backend.TechRelativity.DefaultValue) {
                        //%1s: Sets Build Bounty (%2s) to default Build Bounty value
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringDefaultBuildBountySpecificEffect');
                        detail = formatReplace(detail, '%1s', target);
                        detail = formatReplace(detail, '%2s', resource);
                    }
                }
            } else if (subType == 'KillBounty') {
                let target: string = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!);
                if (effect.relativity == backend.TechRelativity.BasePercent || effect.relativity == backend.TechRelativity.Percent) {
                    if (amount > 1) {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringIncreaseKillBountyEffect');
                    } else {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringDecreaseKillBountyEffect');
                    }
                    detail = formatReplace(detail, '%1s', target);
                    detail = formatReplace(detail, '%2.0f', (amount * 100 - 100).toFixed());
                    detail = formatReplace(detail, '%%', '%');
                } else if (effect.relativity == backend.TechRelativity.Assign) {
                    detail = await stringTableService.getLocalizedStringBySymbol('cStringSetKillBountyEffect');
                    detail = formatReplace(detail, '%1s', target);
                    detail = formatReplace(detail, '%2.2f', amount.toFixed(2));
                }
            } else if (subType == 'ActionEnable') {
                if (effect.action != 'DefendRangedShipAttack' && effect.action != 'ChargePistolCoverAttack') {
                    if (effect.targettext! != 'NatMercTracker') {
                        let action: string = await getActionString(stringTableService, techTreeService, effect, idCiv, jsonService);
                        if (action != '') {
                            if (effect.targettext! != 'AbstractSPCEuroTower') {
                                let target: string = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!);
                                if (target != '') {
                                    detail = await stringTableService.getLocalizedStringBySymbol('cStringEnableActionEffect');
                                    detail = formatReplace(detail, '%1s', target);
                                    detail = formatReplace(detail, '%2s', action);
                                }
                            }
                        }
                    }
                }
            } else if (subType == 'Enable') {
                let target: string = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!);
                if (amount == 0) {
                    detail = await stringTableService.getLocalizedStringBySymbol('cStringDisableEffect');
                    detail = formatReplace(detail, '%1s', target);
                } else if (amount == 1) {
                    detail = await stringTableService.getLocalizedStringBySymbol('cStringEnableEffect');
                    detail = formatReplace(detail, '%1s', target);
                }
            } else if (subType == 'EnableDodge') {
                let target: string = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!);
                detail = await stringTableService.getLocalizedStringBySymbol('cStringEnableDodgeEffect');
                detail = formatReplace(detail, '%1s', target);
            } else if (subType == 'EnableAutoCrateGather') {
                let target: string = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!);
                detail = await stringTableService.getLocalizedStringBySymbol('cStringEnableAutoCrateGatherEffect');
                detail = formatReplace(detail, '%1s', target);
            } else if (subType == 'DodgeChance') {
                let target: string = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!);
                detail = await stringTableService.getLocalizedStringBySymbol('cStringSetDodgeChanceEffect');
                detail = formatReplace(detail, '%1s', target);
                detail = formatReplace(detail, '%3.2f', amount.toFixed(2));
            } else if (subType == 'Market') {
                let target: string = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!, effect.targettype!);
                if (effect.component == backend.TechComponentType.BuyFactor) {
                    if (amount > 1) {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringIncreaseMarketEffect');
                    } else {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringDecreaseMarketEffect');
                    }
                    let buyFactorString = await stringTableService.getLocalizedStringBySymbol('cStringBuyFactor');
                    detail = formatReplace(detail, '%1s', target);
                    detail = formatReplace(detail, '%2s', buyFactorString);
                    detail = formatReplace(detail, '%3.0f', (amount * 100 - 100).toFixed());
                    detail = formatReplace(detail, '%%', '%');
                } else if (effect.component == backend.TechComponentType.SellFactor) {
                    if (amount > 1) {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringIncreaseMarketEffect');
                    } else {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringDecreaseMarketEffect');
                    }
                    let sellFactorString = await stringTableService.getLocalizedStringBySymbol('cStringSellFactor');
                    detail = formatReplace(detail, '%1s', target);
                    detail = formatReplace(detail, '%2s', sellFactorString);
                    detail = formatReplace(detail, '%3.0f', (amount * 100 - 100).toFixed());
                    detail = formatReplace(detail, '%%', '%');
                } else if (effect.component == backend.TechComponentType.SellFactorSpecific) {
                    if (amount > 1) {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringIncreaseMarketEffect');
                    } else {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringDecreaseMarketEffect');
                    }
                    let sellFactorString = await stringTableService.getLocalizedStringBySymbol('cStringSellFactor');
                    detail = formatReplace(detail, '%1s', target);
                    detail = formatReplace(detail, '%2s', sellFactorString);
                    detail = formatReplace(detail, '%3.0f', (amount * 100 - 100).toFixed());
                    detail = formatReplace(detail, '%%', '%');
                }
            } else if (subType == 'CommunityPlazaWeight') {
                let target: string = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!);
                if (effect.relativity == backend.TechRelativity.Assign) {
                    detail = await stringTableService.getLocalizedStringBySymbol('cStringSetCommunityPlazaWeightEffect');
                    detail = formatReplace(detail, '%1s', target);
                    detail = formatReplace(detail, '%3.2f', amount.toFixed(2));
                } else if (effect.relativity == backend.TechRelativity.Absolute) {
                    detail = await stringTableService.getLocalizedStringBySymbol('cStringAddCommunityPlazaWeightEffect');
                    detail = formatReplace(detail, '%1s', target);
                    detail = formatReplace(detail, '%2.2f', amount.toFixed(2));
                } else if (effect.relativity == backend.TechRelativity.BasePercent || effect.relativity == backend.TechRelativity.Percent) {
                    if (amount > 1) {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringIncreaseCommunityPlazaWeightEffect');
                    } else {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringDecreaseCommunityPlazaWeightEffect');
                    }
                    detail = formatReplace(detail, '%1s', target);
                    detail = formatReplace(detail, '%2.0f', (amount * 100 - 100).toFixed());
                    detail = formatReplace(detail, '%%', '%');
                }
            } else if (subType == 'ResourceReturn') {
                let target: string = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!);
                let resource = await getResourceName(stringTableService, effect);
                if (effect.relativity == backend.TechRelativity.Assign) {
                    //%1s: Sets returned resource amount to %2.2f (%3s)
                    detail = await stringTableService.getLocalizedStringBySymbol('cStringSetResourceReturnEffect');
                    detail = formatReplace(detail, '%1s', target);
                    detail = formatReplace(detail, '%2.2f', amount.toFixed(2));
                    detail = formatReplace(detail, '%3s', resource);
                } else if (effect.relativity == backend.TechRelativity.Absolute) {
                    detail = await stringTableService.getLocalizedStringBySymbol('cStringAddResourceReturnEffect');
                    //%1s: Adds %2.2f to returned resource amount (%3s)
                    detail = formatReplace(detail, '%1s', target);
                    detail = formatReplace(detail, '%2.2f', amount.toFixed(2));
                    detail = formatReplace(detail, '%3s', resource);
                } else if (effect.relativity == backend.TechRelativity.BasePercent || effect.relativity == backend.TechRelativity.Percent) {
                    //%1!s!: Returned resource amount +%2!.0f!%% (%3!s!)
                    if (amount > 1) {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringIncreaseResourceReturnEffect');
                    } else {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringDereaseResourceReturnEffect');
                    }
                    detail = formatReplace(detail, '%1s', target);
                    detail = formatReplace(detail, '%2.0f', (amount * 100 - 100).toFixed());
                    detail = formatReplace(detail, '%3s', resource);
                    detail = formatReplace(detail, '%%', '%');
                }
            } else if (subType == 'LivestockRecoveryRate') {
                let target: string = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!, effect.targettype!);
                let resource = await getResourceName(stringTableService, effect);
                if (effect.relativity == backend.TechRelativity.Assign) {
                    //%1s: Sets %2s Livestock Recovery Rate to %3.2f
                    detail = await stringTableService.getLocalizedStringBySymbol('cStringSetLivestockRecoveryRateEffect');
                    detail = formatReplace(detail, '%1s', target);
                    detail = formatReplace(detail, '%2s', resource);
                    detail = formatReplace(detail, '%3.2f', amount.toFixed(2));
                } else if (effect.relativity == backend.TechRelativity.Absolute) {
                    detail = await stringTableService.getLocalizedStringBySymbol('cStringAddLivestockRecoveryRateEffect');
                    //%1s: Adds %2.2f to %3s Livestock Recovery Rate
                    detail = formatReplace(detail, '%1s', target);
                    detail = formatReplace(detail, '%2.2f', amount.toFixed(2));
                    detail = formatReplace(detail, '%3s', resource);
                } else if (effect.relativity == backend.TechRelativity.BasePercent || effect.relativity == backend.TechRelativity.Percent) {
                    //%1!s!: %2!s! Livestock Recovery Rate +%3!.0f!%%
                    if (amount > 1) {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringIncreaseLivestockRecoveryRateEffect');
                    } else {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringDecreaseLivestockRecoveryRateEffect');
                    }
                    detail = formatReplace(detail, '%1s', target);
                    detail = formatReplace(detail, '%2s', resource);
                    detail = formatReplace(detail, '%3.0f', (amount * 100 - 100).toFixed());
                    detail = formatReplace(detail, '%%', '%');
                }
            } else if (subType == 'LivestockExchangeRate') {
                let target: string = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!, effect.targettype!);
                let resource = await getResourceName(stringTableService, effect);
                if (effect.relativity == backend.TechRelativity.Assign) {
                    //%1s: Sets %2s Livestock Exchange Rate to %3.2f
                    detail = await stringTableService.getLocalizedStringBySymbol('cStringSetLivestockExchangeRateEffect');
                    detail = formatReplace(detail, '%1s', target);
                    detail = formatReplace(detail, '%2s', resource);
                    detail = formatReplace(detail, '%3.2f', amount.toFixed(2));
                } else if (effect.relativity == backend.TechRelativity.Absolute) {
                    detail = await stringTableService.getLocalizedStringBySymbol('cStringAddLivestockExchangeRateEffect');
                    //%1s: Adds %2.2f to %3s Livestock Recovery Rate
                    detail = formatReplace(detail, '%1s', target);
                    detail = formatReplace(detail, '%2.2f', amount.toFixed(2));
                    detail = formatReplace(detail, '%3s', resource);
                } else if (effect.relativity == backend.TechRelativity.BasePercent || effect.relativity == backend.TechRelativity.Percent) {
                    //%1!s!: %2!s! Livestock Recovery Rate +%3!.0f!%%
                    if (amount > 1) {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringIncreaseLivestockExchangeRateEffect');
                    } else {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringDecreaseLivestockExchangeRateEffect');
                    }
                    detail = formatReplace(detail, '%1s', target);
                    detail = formatReplace(detail, '%2s', resource);
                    detail = formatReplace(detail, '%3.0f', (amount * 100 - 100).toFixed());
                    detail = formatReplace(detail, '%%', '%');
                }
            } else if (subType == 'CarryCapacity') {
                let target: string = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!, effect.targettype!);
                let resource = await getResourceName(stringTableService, effect);
                if (effect.relativity == backend.TechRelativity.Assign) {
                    //%1s: Sets %2s Carry Capacity to %3.2f
                    detail = await stringTableService.getLocalizedStringBySymbol('cStringSetCarryCapacityEffect');
                    detail = formatReplace(detail, '%1s', target);
                    detail = formatReplace(detail, '%2s', resource);
                    detail = formatReplace(detail, '%3.2f', amount.toFixed(2));
                } else if (effect.relativity == backend.TechRelativity.Absolute) {
                    detail = await stringTableService.getLocalizedStringBySymbol('cStringAddCarryCapacityEffect');
                    //%1s: Adds %2.2f to %3s Livestock Recovery Rate
                    detail = formatReplace(detail, '%1s', target);
                    detail = formatReplace(detail, '%2.2f', amount.toFixed(2));
                    detail = formatReplace(detail, '%3s', resource);
                } else if (effect.relativity == backend.TechRelativity.BasePercent || effect.relativity == backend.TechRelativity.Percent) {
                    //%1!s!: %2!s! Livestock Recovery Rate +%3!.0f!%%
                    if (amount > 1) {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringIncreaseCarryCapacityEffect');
                    } else {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringDecreaseCarryCapacityEffect');
                    }
                    detail = formatReplace(detail, '%1s', target);
                    detail = formatReplace(detail, '%2s', resource);
                    detail = formatReplace(detail, '%3.0f', (amount * 100 - 100).toFixed());
                    detail = formatReplace(detail, '%%', '%');
                }
            } else if (subType == 'ModifyRate') {
                let target: string = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!, effect.targettype!);
                let action = await getActionString(stringTableService, techTreeService, effect, idCiv, jsonService);
                if (effect.relativity == backend.TechRelativity.Assign) {
                    //%1s: Sets %2s Modify Rate to %3.2f
                    detail = await stringTableService.getLocalizedStringBySymbol('cStringSetModifyRateEffect');
                    detail = formatReplace(detail, '%1s', target);
                    detail = formatReplace(detail, '%2s', action);
                    detail = formatReplace(detail, '%3.2f', amount.toFixed(2));
                } else if (effect.relativity == backend.TechRelativity.Absolute) {
                    detail = await stringTableService.getLocalizedStringBySymbol('cStringAddModifyRateEffect');
                    //%1s: Adds %2.2f to %3s Modify Rate
                    detail = formatReplace(detail, '%1s', target);
                    detail = formatReplace(detail, '%2.2f', amount.toFixed(2));
                    detail = formatReplace(detail, '%3s', action);
                } else if (effect.relativity == backend.TechRelativity.BasePercent || effect.relativity == backend.TechRelativity.Percent) {
                    //%1!s!: %2!s! Modify Rate +%3!.0f!%%
                    if (amount > 1) {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringIncreaseModifyRateEffect');
                    } else {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringDecreaseModifyRateEffect');
                    }
                    detail = formatReplace(detail, '%1s', target);
                    detail = formatReplace(detail, '%2s', action);
                    detail = formatReplace(detail, '%3.0f', (amount * 100 - 100).toFixed());
                    detail = formatReplace(detail, '%%', '%');
                }
            } else if (subType == 'InvestResource') {
                detail = await stringTableService.getLocalizedStringBySymbol('cStringInvestResourceEffect');
                //%1s: Adds +%2.2f %3s to invested resources
                let target: string = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!, effect.targettype!);
                let resource = await getResourceName(stringTableService, effect);
                detail = formatReplace(detail, '%1s', target);
                detail = formatReplace(detail, '%2.2f', amount.toFixed());
                detail = formatReplace(detail, '%3s', resource);
            } else if (subType == 'TacticArmor') {
                let target: string = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.targettext!, effect.targettype!);
                let tactic = await tacticToLocalizedText(stringTableService, effect.tactic!);
                let armorType = await armorTypeToLocalizedText(stringTableService, effect.armortype!);
                if (effect.relativity == backend.TechRelativity.Assign) {
                    //%1s: Sets %2s Armor to %3.2f (%4s tactic)
                    detail = await stringTableService.getLocalizedStringBySymbol('cStringSetTacticArmorEffect');
                    detail = formatReplace(detail, '%1s', target);
                    detail = formatReplace(detail, '%2s', armorType);
                    detail = formatReplace(detail, '%3.2f', amount.toFixed(2));
                    detail = formatReplace(detail, '%4s', tactic);
                } else if (effect.relativity == backend.TechRelativity.Absolute) {
                    detail = await stringTableService.getLocalizedStringBySymbol('cStringAddTacticArmorEffect');
                    //%1s: Adds %2.2f %3s Armor (%4s tactic)
                    detail = formatReplace(detail, '%1s', target);
                    detail = formatReplace(detail, '%2.2f', amount.toFixed(2));
                    detail = formatReplace(detail, '%3s', armorType);
                    detail = formatReplace(detail, '%4s', tactic);
                } else if (effect.relativity == backend.TechRelativity.BasePercent || effect.relativity == backend.TechRelativity.Percent) {
                    //%1!s!: %2!s! Armor +%3!.0f!%% (%4!s! tactic)
                    if (amount > 1) {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringIncreaseTacticArmorEffect');
                    } else {
                        detail = await stringTableService.getLocalizedStringBySymbol('cStringDecreaseTacticArmorEffect');
                    }
                    detail = formatReplace(detail, '%1s', target);
                    detail = formatReplace(detail, '%2s', armorType);
                    detail = formatReplace(detail, '%3.0f', (amount * 100 - 100).toFixed());
                    detail = formatReplace(detail, '%%', '%');
                    detail = formatReplace(detail, '%4s', armorType);
                }
            }

            if (detail != '') {
                details.push({
                    text: detail,
                    pop: unitPop
                });
            }
        }

        if (type == 'TechStatus' && !tech.name!.includes('BloodBrothers') && isNeedToShowEffect(effect.text!)) {
            let tech: backend.ITechInfo;
            if (techMap[effect.text!]) {
                tech = techMap[effect.text!];
            } else {
                tech = await getTechByName(techTreeService, effect.text!);
            }
            if (tech) {
                if (tech.displaynameid) {
                    let detail = await stringTableService.getLocalizedString(tech.displaynameid);
                    let formatString = await stringTableService.getLocalizedStringBySymbol('cStringTechSetStatusEffect');
                    let status = await statusToLocalizedText(stringTableService, effect.status!);
                    formatString = formatString.replace('%1s', detail);
                    formatString = formatString.replace('%2s', status);
                    details.push({
                        text: formatString,
                        pop: 0
                    });
                } else {
                    let target = await UnitKeyToName(stringTableService, techTreeService, idCiv, effect.text!);
                    if (target != '') {
                        let formatString = await stringTableService.getLocalizedStringBySymbol('cStringTechSetStatusEffect');
                        let status = await statusToLocalizedText(stringTableService, effect.status!);
                        formatString = formatString.replace('%1s', target);
                        formatString = formatString.replace('%2s', status);
                        details.push({
                            text: formatString,
                            pop: 0
                        });
                    }
                }
            } else {
                console.error('no tech: ' + effect.text)
            }
        }
    }
    if (tech.name == 'DEHCAdvancedLombard') {
        details.splice(3);
    }
    return details;
}

export function idCivToIndex(idCiv: Civ): number {
    switch (idCiv) {
        case Civ.Spanish:
            return 0;
        case Civ.British:
            return 1;
        case Civ.French:
            return 2;
        case Civ.Portuguese:
            return 3;
        case Civ.Dutch:
            return 4;
        case Civ.Russians:
            return 5;
        case Civ.Germans:
            return 6;
        case Civ.Ottoman:
            return 7;
        case Civ.Haudenosaunee:
            return 14;
        case Civ.Lakota:
            return 15;
        case Civ.Aztecs:
            return 16;
        case Civ.Japanese:
            return 18;
        case Civ.Chinese:
            return 19;
        case Civ.Indians:
            return 20;
        case Civ.Inca:
            return 26;
        case Civ.Swedes:
            return 27;
        case Civ.UnitedStates:
            return 37;
        case Civ.Ethiopians:
            return 38;
        case Civ.Hausa:
            return 39;
        case Civ.Mexicans:
            return 41;
        case Civ.Italians:
            return 43;
        case Civ.Maltese:
            return 44;
    }
}

export async function getCivUnit(techTreeService: TechTreeService, idCiv: Civ): Promise<Unit[]> {
    let ageTechArray = getArray(civs.civs.civ[idCivToIndex(idCiv)].agetech);
    return getUnitFromTech(techTreeService, ageTechArray[0].tech);
}

export async function getUnitFromTech(techTreeService: TechTreeService, techName: string): Promise<Unit[]> {
    let units: Unit[] = [];
    let tech = await getTechByName(techTreeService, techName);
    for (let i = 0; i < tech.effects!.length; i++) {
        let effect = tech.effects![i];
        if (effect.subtype == 'Enable') {
            if (effect.targettype == backend.TechTargetType.ProtoUnit) {
                let protoUnit = protoTable[effect.targettext!];
                if (protoUnit) {
                    units.push(protoUnit);
                }
            }
        }
    }
    return units;
}

export function formatReplace(format: string, target: string, value: string): string {
    if (target == '%%') {
        return format.replace('%%', '%');
    }
    let target2 = `%${target[1]}!${target.substring(2)}!`; // Chinese
    let target3 = `%${target[1]}!${target.substring(1)}!`; // German
    return format.replace(target, value).replace(target2, value).replace(target3, value);
}

let specialActionTable: { [k: string]: number } = {
    'BroadsideAttack': 38123,
    'BuildingAttack': 38118,
    'RangedAttack': 38133,
    'ChargeBroadsideAttack': 110529,
    'RoundelAttack': 125103,
    'RoundelPierceAttack': 125102,
    'LanceChargeAttack': 125108,
    'ChargeAttack': 38135,
    'LongRangedAttack': 38133,
    'BuckshotChargeAttack': 110085,
    'EagleEyeChargeAttack': 110581,
    'RifleAttack': 38133,
    'AutoGatherOldenburg': 43019,
    'BowAttack': 38133,
    'TrampleHandAttack': 38142,
    'GuardianRangedAttack': 42873,
    'RepeatingRangedAttack': 80875,
    'LanceHandAttack': 90321,
    'TuckTuckTuckAttack': 125111,
    'AutoGather': 43019,
    'AntiShipAttack': 38121,
    'Gather': 42178,
    'GatherHacienda': 42178,
    'ShrineGather': 63007,
    'AutoGatherXP': 61766,
    'Heal': 70488,
    'VolleyRangedAttack': 38127,
    'DefendRangedAttack': 38136,
    'StaggerRangedAttack': 38129,
    'RangedBuildingAttack': 113214,
    'Build': 69147,
    'ChargePistolAttack': 122272,
    'AutoGatherCoin': 43294,
    'AutoGatherFood': 43295,
    'GreenwichTime': 104848,
    'MortarAttack': 80907,
    'HandAttack': 38134,
    'Stealth': 46491,
    'AutoGatherGold50': 43019,
    'AutoGatherInfluence50': 43019,
    'AutoGatherGold75': 43019,
    'AutoGatherInfluence25': 43019,
    'AutoGatherGold25': 43019,
    'AutoGatherInfluence75': 43019,
    'AutoGatherGold100': 43019,
    'MeleeHandAttack': 38135,
    'CoverHandAttack': 38131,
    'DefendHandAttack': 38137,
    'ObsidianChargeAttack': 110555,
    'RoundhouseAttack': 68995,
    'CannonAttack': 38119,
    'FlameAttack': 70308,
    'IncreaseHPWithUnits': 110152,
    'IncreaseHPWithUnits2': 110152,
    'IncreaseDamageWithUnits': 110152,
    'IncreaseDamageWithUnits2': 110152,
    'AutoGatherGold50NoMine': 43019,
    'AutoGatherInfluence50NoMine': 43019,
    'AutoGatherGold75NoMine': 43019,
    'AutoGatherInfluence25NoMine': 43019,
    'AutoGatherGold25NoMine': 43019,
    'AutoGatherInfluence75NoMine': 43019,
    'AutoGatherGold100NoMine': 43019,
    'TreeGatherRateBonus': 68961,
    'NaturalFoodAuraGranary': 68961,
    'NaturalFoodAuraGranary2': 68961,
    'AutoGatherXPDefaultNative': 43019,
    'AutoGatherXPSouthNative': 43019,
    'AutoGatherXPAsianNative': 43019,
    'AutoGatherXPAfricanNative': 43019,
    'GatherField': 42178,
    'AutoGatherInfluence': 43019,
    'ChargeMusketAttack': 102627,
    'SolidAttack': 101111,
    'ExplosiveAttack': 101112,
    'ChargeCarbineAttack': 110171,
    'Autogather': 43019,
    'NATAutoGatherCoinPlant': 43019,
    'NATAutoGatherCoinAnimal': 43019,
    'BuildingHP': 48954,
    'SpawnStrelet': 69157,
    'StaggerHandAttack': 38132,
    'VolleyHandAttack': 38130,
    'SabotageAttack': 69742,
    'ExtraDamage': 48958,
    'SpawnSettler': 112438,
    'SpawnSoldado': 113109,
    'GuardianAttack': 42873,
    'CaseShotAttack': 91718,
    'AreaGatherMine': 91720,
    'ExtraBounty': 48943,
    'AreaGatherFoodCrate': 91721,
    'AreaGatherMine2': 91720,
    'AreaGatherWoodCrate': 91721,
    'AreaGatherCoinCrate': 91721,
    'AreaGatherInfiniteCrate': 91721,
    'BombardAttack': 38119,
    'AreaGatherTree': 91720,
    'AreaGatherTree2': 91720,
    'ChargeRangedAttack': 110597,
    'deSpawnSettlerWagon': 69180,
    'RepeatingAttack': 110145,
    'SpawnBison': 69158,
    'GatlingAttack': 38119,
    'GatlingRepeatingAttack': 110145,
    'RangedShipAttack': 38121,
    'DefendRangedShipAttack': 38121,
    'IncreaseHPWithMilitaryUnits': 110152,
    'AutoGatherWoodField': 103432,
    'BuildRateBonus': 103418,
    'BuildingWorkRateBonus': 103417,
    'MineGatherRateBonus': 68961,
    'TownCenterBuildRateBonus': 103418,
    'TownCenterWorkRateBonus': 103417,
    'AutoGatherFood2': 43295,
    'VolleyLongRangedAttack': 103116,
}

function abstractToTactics(unitKey: string, idCiv: Civ): string | null {
    if (unitKey == 'AbstractMonk') {
        switch (idCiv) {
            case Civ.Chinese:
                return 'ypchinesemonk.tactics';
            case Civ.Japanese:
                return 'ypjapanesemonk.tactics';
            case Civ.Indians:
                return 'ypindianmonk.tactics';
        }
    } else if (unitKey == 'AbstractChineseMonk') {
        return 'ypchinesemonk.tactics';
    } else if (unitKey == 'AbstractIndianMonk') {
        return 'ypindianmonk.tactics';
    } else if (unitKey == 'AbstractJapaneseMonk') {
        return 'ypjapanesemonk.tactics';
    } else if (unitKey == 'AbstractAfricanHero') {
        switch (idCiv) {
            case Civ.Ethiopians:
                return 'prince.tactics';
            case Civ.Hausa:
                return 'emir.tactics';
        }
    } else if (unitKey == 'AbstractMountainMonastery') {
        return 'monasteryethiopian.tactics';
    } else if (unitKey == 'Herdable' || unitKey == 'AbstractBovine' || unitKey == 'AbstractCaprine') {
        return 'herd.tactics';
    } else if (unitKey == 'AbstractWall') {
        return 'wall.tactics';
    } else if (unitKey == 'AbstractSowar' || unitKey == 'AbstractCamel') {
        return 'sowar.tactics'
    } else if (unitKey == 'AbstractFishingBoat') {
        return 'fishingboat.tactics';
    } else if (unitKey == 'AbstractVillager') {
        return 'settler.tactics'
    } else if (unitKey == 'LogicalTypeLandEconomy') {
        return 'settler.tactics'
    } else if (unitKey == 'AbstractGrenadier') {
        return 'grenadier.tactics';
    } else if (unitKey == 'AbstractTradingPost') {
        return 'tradingpost.tactics';
    } else if (unitKey == 'AbstractElephant') {
        return 'mahout.tactics';
    } else if (unitKey == 'AbstractShrine') {
        return 'shrine.tactics';
    } else if (unitKey == 'LogicalTypeNavalMilitary') {
        return 'caravel.tactics';
    } else if (unitKey == 'AbstractSPCEuroTower') {
        return 'combatbuilding.tactics';
    } else if (unitKey == 'AbstractMusketeer') {
        return 'soldado.tactics';
    }
    return null;
}

async function getActionString(stringTableService: StrTableService, techTreeService: TechTreeService, effect: backend.ITechEffectInfo, idCiv: Civ, jsonService: JsonService): Promise<string> {
    if (isIgnoredAction(effect.action!)) {
        return '';
    }
    if (effect.allactions) {
        return stringTableService.getLocalizedStringBySymbol('cStringAllActionsEffect');
    }
    if (specialActionTable[effect.action!]) {
        return stringTableService.getLocalizedString(specialActionTable[effect.action!]);
    }
    if (idCiv == Civ.Mexicans && effect.action == 'RangedAttack2') {
        return stringTableService.getLocalizedString(38133);
    }
    if (effect.targettype == backend.TechTargetType.ProtoUnit) {
        let actionString = await getActionStringByUnit(stringTableService, effect.targettext!, effect.action!, idCiv, jsonService);
        if (actionString != '') {
            return actionString;
        }
    }
    let units = await getCivUnit(techTreeService, idCiv);
    for (let unit of units) {
        let actionString = await getActionStringByUnit(stringTableService, unit["@name"], effect.action!, idCiv, jsonService);
        if (actionString != '') {
            return actionString;
        }
    }
    console.error('action not found in tactics: ' + effect.targettext + ', ' + JSON.stringify(effect));
    return '';
}

export async function getActionStringByUnit(stringTableService: StrTableService, protoKey: string, actionKey: string, idCiv: Civ, jsonService: JsonService): Promise<string> {
    let tacticsFilename: string | null = null;
    let unit = protoTable[protoKey];
    if (unit && unit.tactics) {
        tacticsFilename = unit.tactics.toLowerCase();
    }
    if (!tacticsFilename) {
        tacticsFilename = abstractToTactics(protoKey, idCiv);
    }
    if (!tacticsFilename) return '';
    let tacticsJson = await importTactics<SlingerTactics>(tacticsFilename, jsonService);
    let actions = getArray(tacticsJson.tactics.action);
    for (let action of actions) {
        if (action.name["#text"]) {
            if (action.name["#text"].toLowerCase() == actionKey.toLowerCase()) {
                return stringTableService.getLocalizedString(action.name["@stringid"]);
            }
        }
    }
    return '';
}

function isIgnoredAction(actionKey: string): boolean {
    return actionKey == 'StaggerLongRangedAttack' ||
        actionKey == 'DefendLongRangedAttack' ||
        actionKey == 'StaggerLongRangedAttack' ||
        actionKey == 'DefendLongRangedAttack' ||
        actionKey == 'RangedAttackContained' ||
        actionKey == 'ButtAttack' ||
        actionKey == 'MortarBuildingAttack';
}

export function isNeedToShowEffect(effectText: string): boolean {
    return !effectText.endsWith('Refund') &&
        effectText != 'DEHCImmigrantsStateCapitolShadow' &&
        effectText != 'DERollingArtilleryShipGatlingInf' &&
        effectText != 'deEnableBalloonPower' &&
        effectText != 'DEIndianFriendshipShadow' &&
        effectText != 'DEHCImmigrantsRussianShadow' &&
        effectText != 'DEFortConscription' &&
        effectText != 'ypFreeCoinCrate400Age1' &&
        effectText != 'DEHCRidingSchoolShadow' &&
        effectText != 'DEHCShipLongbowShadow' &&
        effectText != 'DEHCShipRangerShadow' &&
        effectText != 'deMapIsEuropean' &&
        effectText != 'DEWaardgeldersShadow' &&
        effectText != 'DEKeepImperialCrossbowmenTechsAlignedInBarracksShadow' &&
        effectText != 'DEKeepCrossbowmenTechsAlignedInBarracksShadow' &&
        effectText != 'DEHCShipCrossbowShadow' &&
        effectText != 'DEHCShipLandwehrShadow' &&
        effectText != 'DEHCShipWarWagonShadow' &&
        effectText != 'DEHCShipChevaulegerShadow' &&
        effectText != 'DECircleArmyIndicator' &&
        effectText != 'DEAltaCaliforniaShadow' &&
        effectText != 'EliteDogSoldierShadow' &&
        effectText != 'ChampionDogSoldierShadow' &&
        effectText != 'LegendaryDogSoldierShadow' &&
        effectText != 'deIndianDeliverVillagerShadow' &&
        effectText != 'DEHCBlueberriesShadow' &&
        effectText != 'MineWagonCardShadow' &&
        effectText != 'deEnableRoarOfTheLionPower' &&
        effectText != 'DESomaliHeyWatShadow' &&
        effectText != 'DESudaneseHeyWatShadow' &&
        effectText != 'DEJesuitHeyWatShadow' &&
        effectText != 'DEHCFazogliShadow' &&
        effectText != 'DEBigLevyUIFix' &&
        effectText != 'DEHegemonyGaananciShadow' &&
        effectText != 'DEHCFirearmsItalianShadow' &&
        effectText != 'DETransformCrateofInfluence' &&
        effectText != 'DESevenLawsShadow' &&
        effectText != 'DEMXLanceChargeShadow' &&
        effectText != 'DEDoloresImprovedShadow' &&
        effectText != 'DELombardyShadow' &&
        effectText != 'deAdvancedPoliticiansShadow' &&
        effectText != 'deDefaultPoliticianRewardShadow' &&
        effectText != 'DEHCShipHospitallerTeamShadow1' &&
        effectText != 'DEHCShipHospitallerTeamShadow2' &&
        effectText != 'DEHCShipRollingWoodMaltaShadow1' &&
        effectText != 'DEHCShipRollingWoodMaltaShadow2' &&
        effectText != 'NativeTreatyCree' &&
        effectText != 'ypNativeEmbassyEnableShadow' &&
        effectText != 'DEIndianFriendshipCree' &&
        effectText != 'deCardDeliverCreateShadow' &&
        effectText != 'deDefaultCratesShadow' &&
        effectText != 'deFedNewJerseyResourceShadow' &&
        effectText != 'DEImperialFlagShadow' &&
        effectText != 'DEZouaveShipShadowInf' &&
        effectText != 'DEHCFedTexanFortsShadow' &&
        effectText != 'ypNativeTreatyJesuit' &&
        effectText != 'DEIndianFriendshipJesuit' &&
        effectText != 'NativeTreatyZapotec' &&
        effectText != 'DEIndianFriendshipZapotec' &&
        effectText != 'NativeTreatyAztec' &&
        effectText != 'DEIndianFriendshipAztec' &&
        effectText != 'DEImperialFlagShadow' &&
        effectText != 'DEHFStringStrongNoblesHut' && // this tech doesn't exist
        effectText != 'DEHFStringMightyNoblesHut'; // this tech doesn't exist
}

async function UnitKeyToName(stringTableService: StrTableService, techTreeService: TechTreeService, idCiv: Civ, key: string, type?: backend.TechTargetType): Promise<string> {
    if (!key || key == '') {
        return '';
    }
    let originalKey = key;
    if (type != undefined) {
        if (type == backend.TechTargetType.TechAll) {
            return stringTableService.getLocalizedStringBySymbol('cStringGeneral');
        } else if (type == backend.TechTargetType.Player) {
            return stringTableService.getLocalizedStringBySymbol('cStringPlayer');
        }
    }
    if (key == 'DEFakeCard') {
        return stringTableService.getLocalizedStringBySymbol('cStringGeneral');
    } else if (key == 'DEAfricanSpecialTech') {
        return stringTableService.getLocalizedStringBySymbol('cStringGeneral');
    } else if (key == 'DEHospitalTechnology') {
        return stringTableService.getLocalizedStringBySymbol('cStringGeneral');
    }
    if (key.endsWith('Enable')) {
        return '';
    } else if (key == 'YPConsulateImprovement') {
        return stringTableService.getLocalizedStringBySymbol('cStringConsulateTech');
    } else if (key == 'ypConsulateBritishLifeGuards') {
        return stringTableService.getLocalizedString(64264);
    } else if (key == 'ypConsulateImprovementImperial') {
        return stringTableService.getLocalizedStringBySymbol('cStringGeneral');
    } else if (key == 'YPDockAsian') {
        return stringTableService.getLocalizedString(60381);
    }

    if (key == '\'dePrince2') {
        return '';
    }
    if (key == 'ypFishingBoatAsian') {
        return '';
    }
    if (key == 'deGeneral2') {
        return '';
    }
    if (key == 'deHanoverFactory') {
        return '';
    }
    let unitInfo = protoTable[key];
    if (unitInfo && unitInfo.displaynameid) {
        return stringTableService.getLocalizedString(unitInfo.displaynameid);
    }

    if (key.includes('Consulate')) {
        return '';
    } else if (key.startsWith('EarthCeremony')) {
        return '';
    } else if (key.startsWith('EarthGiftCeremony')) {
        return '';
    }
    if (key == 'deTorpGeneric') {
        return '';
    } else if (key == 'HouseMed') {
        return '';
    } else if (key == 'HouseEast') {
        return '';
    } else if (key == 'HouseAztec') {
        return '';
    } else if (key == 'ypHouseIndian') {
        return '';
    } else if (key == 'AbstractMusketeer') {
        return stringTableService.getLocalizedStringBySymbol('cStringMusketeer');
    } else if (key == 'AbstractGrenadier') {
        return stringTableService.getLocalizedStringBySymbol('cStringGrenadier');
    } else if (key == 'AbstractWall') {
        return stringTableService.getLocalizedStringBySymbol('cStringAbstractWall');
    } else if (key == 'AbstractLightInfantry') {
        return stringTableService.getLocalizedStringBySymbol('cStringLightInfantry');
    } else if (key.endsWith('MercShipment')) {
        return stringTableService.getLocalizedStringBySymbol('cStringGeneral');
    } else if (key == 'LogicalTypeHealed') {
        return stringTableService.getLocalizedString(113186);
    } else if (key == 'DEHCShipBattleshipRepeat') {
        return stringTableService.getLocalizedString(104845);
    } else if (key == 'AbstractAbusGun') {
        return stringTableService.getLocalizedStringBySymbol('cStringAbusGun');
    } else if (key == 'AbstractRifleman') {
        return stringTableService.getLocalizedStringBySymbol('cStringRifleman');
    }

    if (key == 'ypImperialMonitors') {
        return '';
    } else if (key == 'ypImperialManOWar') {
        return '';
    }
    if (key == 'MercType1') {
        return '';
    }
    if (key.endsWith('MercShipment')) {
        return '';
    }
    if (key == 'YPHCMercsRonin2') {
        return stringTableService.getLocalizedString(69415);
    } else if (key == 'YPHCMercsJatLancer1') {
        return stringTableService.getLocalizedString(61838);
    } else if (key == 'YPHCWokouChinese3') {
        return stringTableService.getLocalizedString(62849);
    } else if (key == 'ChurchGasLighting') {
        return stringTableService.getLocalizedString(23882);
    } else if (key == 'ChurchStandingArmy') {
        return stringTableService.getLocalizedString(23984);
    } else if (key == 'ChurchTownWatch') {
        return stringTableService.getLocalizedString(23389);
    } else if (key == 'ChurchMassCavalry') {
        return stringTableService.getLocalizedString(36207);
    } else if (key == 'ChurchMissionFervor') {
        return stringTableService.getLocalizedString(46980);
    } else if (key == 'DEMedicalScience') {
        return stringTableService.getLocalizedString(110141);
    } else if (key == 'DEBookOfAxum') {
        return stringTableService.getLocalizedString(103300);
    } else if (key == 'DEAxumChronicle') {
        return stringTableService.getLocalizedString(103404);
    } else if (key == 'DESolomonicDynasty') {
        return stringTableService.getLocalizedString(103302);
    } else if (key == 'AbstractCoyoteMan') {
        return stringTableService.getLocalizedStringBySymbol('cStringAbstractNameCoyote');
    } else if (key == 'DETradeRouteUpgrade') {
        return stringTableService.getLocalizedStringBySymbol('cStringGeneral');
    } else if (key == 'ypMarketBerryDogs') {
        return stringTableService.getLocalizedString(65469);
    } else if (key == 'ypMarketSpiritMedicine') {
        return stringTableService.getLocalizedString(66472);
    } else if (key == 'ypMarketWheelbarrow') {
        return stringTableService.getLocalizedString(68618);
    } else if (key == 'ypMarketGangsaw') {
        return stringTableService.getLocalizedString(63978);
    } else if (key == 'ypMarketHuntingDogs') {
        return stringTableService.getLocalizedString(63976);
    } else if (key == 'ypMarketPlacerMines') {
        return stringTableService.getLocalizedString(63980);
    } else if (key == 'DEAfricanVillagerHunting1') {
        return stringTableService.getLocalizedString(104100);
    } else if (key == 'DEAfricanVillagerWoodcutting1') {
        return stringTableService.getLocalizedString(104117);
    } else if (key == 'deSaloonHighwayman') {
        return '';
    } else if (key == 'BigDockCipactli') {
        return stringTableService.getLocalizedString(46182);
    } else if (key == 'AbstractLightCavalry') {
        return stringTableService.getLocalizedStringBySymbol('cStringLightCavalry');
    } else if (key == 'AbstractFoodCrate') {
        return stringTableService.getLocalizedString(26021);
    } else if (key == 'AbstractWoodCrate') {
        return stringTableService.getLocalizedString(26025);
    } else if (key == 'AbstractCoinCrate') {
        return stringTableService.getLocalizedString(26029);
    } else if (key == 'AbstractXPCrate') {
        return stringTableService.getLocalizedString(110518);
    } else if (key == 'ChurchWallensteinsContracts') {
        return stringTableService.getLocalizedString(23978);
    } else if (key == 'AbstractTradeFoodCrate') {
        return stringTableService.getLocalizedStringBySymbol('cStringTradeFoodCrate');
    } else if (key == 'AbstractTradeWoodCrate') {
        return stringTableService.getLocalizedStringBySymbol('cStringTradeWoodCrate');
    } else if (key == 'AbstractTradeCoinCrate') {
        return stringTableService.getLocalizedStringBySymbol('cStringTradeCoinCrate');
    } else if (key == 'AbstractTradeCrate') {
        return '';
    } else if (key == 'AbstractBovine') {
        return stringTableService.getLocalizedStringBySymbol('cStringAbstractBovine');
    } else if (key == 'AbstractCaprine') {
        return stringTableService.getLocalizedStringBySymbol('cStringAbstractCaprine');
    }

    if (idCiv == 9) {
        if (key.startsWith('BigCorral')) {
            key = key.replace('BigCorral', '');
        } else if (key.startsWith('BigSiegeshop')) {
            key = key.replace('BigSiegeshop', '');
        } else if (key.startsWith('BigFirepit')) {
            key = key.replace('BigFirepit', '');
        } else if (key.startsWith('BigFarm')) {
            return stringTableService.getLocalizedString(45713);
        } else if (key.startsWith('BigWarHut')) {
            key = key.replace('BigWarHut', '');
        } else if (key.startsWith('BigMarket')) {
            return stringTableService.getLocalizedString(45897);
        } else if (key.startsWith('BigPlantation')) {
            key = key.replace('BigPlantation', '');
        } else if (key.startsWith('BigLonghouse')) {
            key = key.replace('BigLonghouse', '');
        } else if (key.startsWith('BigDock')) {
            key = key.replace('BigDock', '');
        } else if (key.startsWith('Big')) {
            key = key.replace('Big', '');
            key = key.replace('Iroquois', 'Haudenosaunee');
        } else if (key.startsWith('deBig')) {
            key = key.replace('deBig', '');
            key = key.replace('Iroquois', 'Haudenosaunee');
        } else if (key.startsWith('DEBig')) {
            key = key.replace('DEBig', '');
            key = key.replace('Iroquois', 'Haudenosaunee');
        }
    }

    if (idCiv == 10) {
        if (key.endsWith('TransformTravois')) {
            return '';
        }
        key = key.replace('DogSoldier', 'TokalaSoldier');
        key = key.replace('Sioux', 'Lakota');
        if (key.startsWith('BigDock')) {
            key = key.replace('BigDock', '');
        } else if (key.startsWith('BigWarHut')) {
            key = key.replace('BigWarHut', '');
        } else if (key.startsWith('BigCorral')) {
            key = key.replace('BigCorral', '');
        } else if (key.startsWith('BigPlantation')) {
            key = key.replace('BigPlantation', '');
        } else if (key.startsWith('BigFarm')) {
            return stringTableService.getLocalizedString(46136);
        } else if (key.startsWith('BigMarket')) {
            return stringTableService.getLocalizedString(45897);
        } else if (key.startsWith('BigFirepit')) {
            key = key.replace('BigFirepit', '');
        } else if (key == 'DEBigTribalMarketplaceCoopLakota') {
            return stringTableService.getLocalizedString(72578);
        } else if (key == 'deBigEmbassyGunRunning') {
            key = key.replace('deBigEmbassy', '');
        } else if (key == 'deBigTeepeeLakotaLands') {
            return stringTableService.getLocalizedString(126746);
        } else if (key.startsWith('Big')) {
            key = key.replace('Big', '');
        } else if (key.startsWith('deBig')) {
            key = key.replace('deBig', '');
        } else if (key.startsWith('DEBig')) {
            key = key.replace('DEBig', '');
        }
    }

    if (key.startsWith('LogicalTypePickable')) {
        key = key.replace('LogicalTypePickable', '');
    } else if (key.startsWith('LogicalType')) {
        key = key.replace('LogicalType', '');
    } else if (key.startsWith('YP')) {
        key = key.substring(2);
    } else if (key.startsWith('yp')) {
        key = key.substring(2);
    } else if (key.startsWith('XP') && key.length > 2) {
        key = key.substring(2);
    } else if (key.startsWith('xp')) {
        key = key.substring(2);
    } else if (key.startsWith('deSPC')) {
        key = key.substring(5);
    } else if (key.startsWith('DE')) {
        key = key.substring(2);
    } else if (key.startsWith('de')) {
        key = key.substring(2);
    } else if (key.startsWith('Abstract')) {
        key = key.replace('Abstract', '');
    } else if (key.startsWith('BigDock')) {
        key = key.replace('BigDock', '');
    } else if (key.startsWith('Church')) {
        key = key.replace('Church', '');
    } else if (key.startsWith('HCXPIroquois')) {
        key = key.replace('HCXPIroquois', '');
    }

    if (key == 'LandEconomy') {
        return stringTableService.getLocalizedStringBySymbol('cStringLandEconomy');
    } else if (key == 'AbbassidMarket') {
        return stringTableService.getLocalizedString(32343);
    } else if (key == 'TopcuCorps') {
        return stringTableService.getLocalizedString(23768);
    } else if (key == 'TufanciCorps') {
        return stringTableService.getLocalizedString(23765);
    } else if (key == 'Warship' || key == 'NavalMilitary') {
        return stringTableService.getLocalizedStringBySymbol('cStringWarShip');
    } else if (key == 'Ship') {
        return stringTableService.getLocalizedStringBySymbol('cStringAbstractShips');
    } else if (key == 'Village') {
        return stringTableService.getLocalizedString(60227);
    } else if (key == 'Food' || key == 'Wood' || key == 'Gold' || key == 'XP') {
        return stringTableService.getLocalizedStringBySymbol(`cStringResourceName${key}`);
    } else if (key == 'Building') {
        return stringTableService.getLocalizedStringBySymbol('cStringAbstractNameBuilding');
    } else if (key == 'GroveBuilding') {
        return stringTableService.getLocalizedString(60958);
    } else if (key == 'BerryBuilding') {
        return stringTableService.getLocalizedString(65997);
    } else if (key == 'TorpBush2') {
        return stringTableService.getLocalizedString(91760);
    } else if (key == 'Huntable') {
        return stringTableService.getLocalizedStringBySymbol('cStringAbstractNameHuntable');
    } else if (key == 'Herdable') {
        return stringTableService.getLocalizedStringBySymbol('cStringAbstractNameHerdable');
    } else if (key == 'Plantation') {
        return stringTableService.getLocalizedString(26042);
    } else if (key == 'RicePaddy') {
        return stringTableService.getLocalizedString(60204);
    } else if (key == 'Gangsaw') {
        return stringTableService.getLocalizedString(11070);
    } else if (key == 'Flintlock') {
        return stringTableService.getLocalizedString(23331);
    } else if (key == 'VeteranUSRegulars') {
        return stringTableService.getLocalizedString(110072);
    } else if (key == 'USCavalry') {
        return stringTableService.getLocalizedString(110018);
    } else if (key == 'EconomicUnit') {
        return stringTableService.getLocalizedStringBySymbol('cStringHCMfgPlantGermanRolloverDELETEME');
    } else if (key == 'Lancer') {
        return stringTableService.getLocalizedStringBySymbol('cStringLancer');
    } else if (key == 'ImperialManOWar') {
        return stringTableService.getLocalizedString(31112);
    } else if (key == 'ShipHowitzers') {
        return stringTableService.getLocalizedString(27247);
    } else if (key == 'PercussionLocks') {
        return stringTableService.getLocalizedString(27245);
    } else if (key == 'ShipHowitzersAmerican') {
        return stringTableService.getLocalizedString(104875);
    } else if (key == 'WarCanoeDamage') {
        return stringTableService.getLocalizedString(104877);
    } else if (key == 'WarCanoeHitpoints') {
        return '';
    } else if (key == 'LegendaryWarCanoes') {
        return stringTableService.getLocalizedString(104879);
    } else if (key == 'RangedShockInfantry') {
        return stringTableService.getLocalizedString(44138);
    } else if (key == 'MonasteryTech') {
        return stringTableService.getLocalizedStringBySymbol('cStringMonasteryTech');
    } else if (key == 'UpgradeTech') {
        return stringTableService.getLocalizedStringBySymbol('cStringTechUpgrade');
    } else if (key == 'UnitClass') {
        return stringTableService.getLocalizedStringBySymbol('cStringAbstractUnit');
    } else if (key == 'Hero') {
        return stringTableService.getLocalizedString(42175);
    } else if (key == 'ChineseMonk') {
        return stringTableService.getLocalizedString(66323);
    } else if (key == 'JapaneseMonk') {
        return stringTableService.getLocalizedString(66351);
    } else if (key == 'HandInfantry') {
        return stringTableService.getLocalizedString(25628);
    } else if (key == 'FootArcher') {
        return stringTableService.getLocalizedString(110165);
    } else if (key == 'HandCavalry') {
        return stringTableService.getLocalizedString(25648);
    } else if (key == 'Cavalry') {
        return stringTableService.getLocalizedString(24100);
    } else if (key == 'Infantry') {
        return stringTableService.getLocalizedString(24098);
    } else if (key == 'RangedInfantry') {
        return stringTableService.getLocalizedString(42032);
    } else if (key == 'NativeImprovement') {
        return stringTableService.getLocalizedString(69381);
    } else if (key == 'NativeWarrior') {
        return stringTableService.getLocalizedString(19164);
    } else if (key == 'Villager') {
        return stringTableService.getLocalizedString(25708);
    } else if (key == 'Outpost') {
        return stringTableService.getLocalizedString(26307);
    } else if (key == 'Military') {
        return stringTableService.getLocalizedString(19038);
    } else if (key == 'Mercenary') {
        return stringTableService.getLocalizedString(42020);
    } else if (key == 'Fish') {
        return stringTableService.getLocalizedString(22207);
    } else if (key == 'FishingBoat') {
        return stringTableService.getLocalizedString(22962);
    } else if (key == 'Whale') {
        return stringTableService.getLocalizedString(43015);
    } else if (key == 'Tree') {
        return stringTableService.getLocalizedString(23828);
    } else if (key == 'Mine') {
        return stringTableService.getLocalizedString(42024);
    } else if (key == 'MountainMonastery') {
        return stringTableService.getLocalizedString(101137);
    } else if (key == 'Influence') {
        return stringTableService.getLocalizedString(101077);
    } else if (key == 'BerryBush') {
        return stringTableService.getLocalizedString(30221);
    } else if (key == 'WarShip') {
        return stringTableService.getLocalizedString(42036);
    } else if (key == 'Shrine') {
        return stringTableService.getLocalizedString(43496);
    } else if (key == 'HeavyInfantry') {
        return stringTableService.getLocalizedString(42017);
    } else if (key == 'Dock') {
        return stringTableService.getLocalizedString(22914);
    } else if (key == 'TradingPost') {
        return stringTableService.getLocalizedString(22837);
    } else if (key == 'Monk') {
        return stringTableService.getLocalizedString(63097);
    } else if (key == 'HeavyCavalry') {
        return stringTableService.getLocalizedString(25625);
    } else if (key == 'Artillery') {
        return stringTableService.getLocalizedString(24101);
    } else if (key == 'Unit') {
        return stringTableService.getLocalizedString(19160);
    } else if (key == 'BannerArmy') {
        return stringTableService.getLocalizedString(63673);
    } else if (key == 'SiegeElephant') {
        return stringTableService.getLocalizedString(60136);
    } else if (key == 'SequesterTech') {
        return stringTableService.getLocalizedString(61441);
    } else if (key == 'HomeCity') {
        return stringTableService.getLocalizedString(25942);
    } else if (key == 'Wonder') {
        return stringTableService.getLocalizedString(63669);
    } else if (key == 'MilitaryProductionBuilding') {
        return stringTableService.getLocalizedString(101098);
    } else if (key == 'GunpowderTrooper') {
        return stringTableService.getLocalizedString(42021);
    } else if (key == 'Outlaw') {
        return stringTableService.getLocalizedString(110185);
    } else if (key == 'AfricanHero') {
        return stringTableService.getLocalizedString(103437);
    } else if (key == 'Guardian') {
        return stringTableService.getLocalizedString(42025);
    } else if (key == 'SiegeTrooper') {
        return stringTableService.getLocalizedString(69637);
    } else if (key == 'LandMilitary') {
        return stringTableService.getLocalizedString(79820);
    } else if (key == 'Healer') {
        return stringTableService.getLocalizedString(25698);
    } else if (key == 'IndianMonk') {
        return stringTableService.getLocalizedString(68462);
    } else if (key == 'Sepoy') {
        return stringTableService.getLocalizedString(60807);
    } else if (key == 'Sowar') {
        return stringTableService.getLocalizedString(60120);
    } else if (key == 'Gurkha') {
        return stringTableService.getLocalizedString(60783);
    } else if (key == 'Camel') {
        return stringTableService.getLocalizedString(63668);
    } else if (key == 'Zamburak') {
        return stringTableService.getLocalizedString(60124);
    } else if (key == 'Elephant') {
        return stringTableService.getLocalizedString(63667);
    } else if (key == 'AgraFort') {
        return stringTableService.getLocalizedString(60263);
    } else if (key == 'Galleass') {
        return stringTableService.getLocalizedString(122307);
    } else if (key == 'Daimyo') {
        return stringTableService.getLocalizedString(60112);
    } else if (key == 'MilitaryBuilding') {
        return stringTableService.getLocalizedString(112772);
    } else if (key == 'RangedCavalry') {
        return stringTableService.getLocalizedString(25619);
    } else if (key == 'Torp') {
        return stringTableService.getLocalizedString(91523);
    }

    if (type = backend.TechTargetType.Tech) {
        if (techMap[originalKey]) {
            return stringTableService.getLocalizedString(techMap[originalKey].displaynameid!);
        }
        let tech = await getTechByName(techTreeService, originalKey);
        if (tech) {
            return stringTableService.getLocalizedString(tech.displaynameid!);
        }
    }
    console.error('UnitKeyToName not found: ' + key);
    return '';
}

function isShowableLogicalType(targetKey: string): boolean {
    return targetKey == 'LogicalTypeLandEconomy' || targetKey == 'LogicalTypeLandMilitary' || !targetKey.startsWith('Logical')
}

async function getResourceName(stringTableService: StrTableService, effect: backend.ITechEffectInfo): Promise<string> {
    let key: string = '';
    switch (effect.resource) {
        case backend.TechResourceType.Food:
            key = 'Food';
            break;
        case backend.TechResourceType.Gold:
            key = 'Gold';
            break;
        case backend.TechResourceType.Influence:
            key = 'Influence';
            break;
        case backend.TechResourceType.Ships:
            key = 'Ships';
            break;
        case backend.TechResourceType.Trade:
            key = 'Trade';
            break;
        case backend.TechResourceType.Wood:
            key = 'Wood';
            break;
        case backend.TechResourceType.XP:
            key = 'XP';
            break;
    }
    return stringTableService.getLocalizedStringBySymbol(`cStringResourceName${key}`);
}

export async function getTechByName(techTreeService: TechTreeService, techName: string): Promise<backend.ITechInfo> {
    let response = (await techTreeService.getTech(techName));
    if (!response) {
        console.error('tech not found: ' + techName);
    }
    return response;
}

export function isTechAppliedToUnit(tech: backend.ITechInfo, unit: Unit): boolean {
    if (tech.effects) {
        for (let effect of tech.effects) {
            if (!effect) continue;
            if (effect.targettype == backend.TechTargetType.ProtoUnit) {
                if (unit.unittype?.includes(effect.targettext!) || effect.targettext == unit['@name']) {
                    return true;
                }
            }
        }
    }
    return false;
}

export function getArray<T>(obj: T | T[] | undefined): T[] {
    if (!obj) return [];
    if (Array.isArray(obj)) return obj;
    return [obj];
}

async function armorTypeToLocalizedText(stringTableService: StrTableService, armorType: backend.TechArmorType): Promise<string> {
    switch (armorType) {
        case backend.TechArmorType.Hand:
            return stringTableService.getLocalizedString(35759);
        case backend.TechArmorType.Ranged:
            return stringTableService.getLocalizedString(35760);
        case backend.TechArmorType.Siege:
            return stringTableService.getLocalizedString(35761);
        default:
            return '';
    }
}

async function tacticToLocalizedText(stringTableService: StrTableService, tacticType: string): Promise<string> {
    switch (tacticType) {
        case TacticsType.Volley:
            return stringTableService.getLocalizedString(55193);
        case TacticsType.Stagger:
            return stringTableService.getLocalizedString(55194);
        case TacticsType.Melee:
            return stringTableService.getLocalizedString(55195);
        case TacticsType.Defend:
            return stringTableService.getLocalizedString(30229);
        case TacticsType.StandGround:
            return stringTableService.getLocalizedString(66067);
        default:
            return '';
    }
}

async function statusToLocalizedText(stringTableService: StrTableService, status: backend.TechStatus): Promise<string> {
    switch (status) {
        case backend.TechStatus.Active:
            return stringTableService.getLocalizedString(18970);
        case backend.TechStatus.None:
            return stringTableService.getLocalizedString(18302);
        case backend.TechStatus.Obtainable:
            return stringTableService.getLocalizedString(42090);
        case backend.TechStatus.Unobtainable:
            return stringTableService.getLocalizedString(42091);
    }
}