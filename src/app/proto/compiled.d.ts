import * as $protobuf from "protobufjs";
/** Namespace backend. */
export namespace backend {

    /** Properties of a DeckSave. */
    interface IDeckSave {

        /** DeckSave deckName */
        deckName?: (string|null);

        /** DeckSave idCiv */
        idCiv?: (number|null);

        /** DeckSave selectedLanguage */
        selectedLanguage?: (string|null);

        /** DeckSave radioType */
        radioType?: (number|null);

        /** DeckSave byAgeTab */
        byAgeTab?: (number|null);

        /** DeckSave byTypeTab */
        byTypeTab?: (number|null);

        /** DeckSave ageUpTab */
        ageUpTab?: (number|null);

        /** DeckSave age2Option */
        age2Option?: (number|null);

        /** DeckSave age3Option */
        age3Option?: (number|null);

        /** DeckSave age4Option */
        age4Option?: (number|null);

        /** DeckSave age5Option */
        age5Option?: (number|null);

        /** DeckSave search */
        search?: (string|null);

        /** DeckSave age1Array */
        age1Array?: (number[]|null);

        /** DeckSave age2Array */
        age2Array?: (number[]|null);

        /** DeckSave age3Array */
        age3Array?: (number[]|null);

        /** DeckSave age4Array */
        age4Array?: (number[]|null);
    }

    /** Represents a DeckSave. */
    class DeckSave implements IDeckSave {

        /**
         * Constructs a new DeckSave.
         * @param [properties] Properties to set
         */
        constructor(properties?: backend.IDeckSave);

        /** DeckSave deckName. */
        public deckName: string;

        /** DeckSave idCiv. */
        public idCiv: number;

        /** DeckSave selectedLanguage. */
        public selectedLanguage: string;

        /** DeckSave radioType. */
        public radioType: number;

        /** DeckSave byAgeTab. */
        public byAgeTab: number;

        /** DeckSave byTypeTab. */
        public byTypeTab: number;

        /** DeckSave ageUpTab. */
        public ageUpTab: number;

        /** DeckSave age2Option. */
        public age2Option: number;

        /** DeckSave age3Option. */
        public age3Option: number;

        /** DeckSave age4Option. */
        public age4Option: number;

        /** DeckSave age5Option. */
        public age5Option: number;

        /** DeckSave search. */
        public search: string;

        /** DeckSave age1Array. */
        public age1Array: number[];

        /** DeckSave age2Array. */
        public age2Array: number[];

        /** DeckSave age3Array. */
        public age3Array: number[];

        /** DeckSave age4Array. */
        public age4Array: number[];

        /**
         * Creates a new DeckSave instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeckSave instance
         */
        public static create(properties?: backend.IDeckSave): backend.DeckSave;

        /**
         * Encodes the specified DeckSave message. Does not implicitly {@link backend.DeckSave.verify|verify} messages.
         * @param message DeckSave message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: backend.IDeckSave, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeckSave message, length delimited. Does not implicitly {@link backend.DeckSave.verify|verify} messages.
         * @param message DeckSave message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: backend.IDeckSave, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeckSave message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeckSave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.DeckSave;

        /**
         * Decodes a DeckSave message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeckSave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.DeckSave;

        /**
         * Verifies a DeckSave message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeckSave message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeckSave
         */
        public static fromObject(object: { [k: string]: any }): backend.DeckSave;

        /**
         * Creates a plain object from a DeckSave message. Also converts values to other types if specified.
         * @param message DeckSave
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: backend.DeckSave, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeckSave to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LobbyGameList. */
    interface ILobbyGameList {

        /** LobbyGameList lastUpdateDate */
        lastUpdateDate?: (google.protobuf.ITimestamp|null);

        /** LobbyGameList lobbyGameInfoList */
        lobbyGameInfoList?: (backend.ILobbyGameInfo[]|null);
    }

    /** Represents a LobbyGameList. */
    class LobbyGameList implements ILobbyGameList {

        /**
         * Constructs a new LobbyGameList.
         * @param [properties] Properties to set
         */
        constructor(properties?: backend.ILobbyGameList);

        /** LobbyGameList lastUpdateDate. */
        public lastUpdateDate?: (google.protobuf.ITimestamp|null);

        /** LobbyGameList lobbyGameInfoList. */
        public lobbyGameInfoList: backend.ILobbyGameInfo[];

        /**
         * Creates a new LobbyGameList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LobbyGameList instance
         */
        public static create(properties?: backend.ILobbyGameList): backend.LobbyGameList;

        /**
         * Encodes the specified LobbyGameList message. Does not implicitly {@link backend.LobbyGameList.verify|verify} messages.
         * @param message LobbyGameList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: backend.ILobbyGameList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LobbyGameList message, length delimited. Does not implicitly {@link backend.LobbyGameList.verify|verify} messages.
         * @param message LobbyGameList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: backend.ILobbyGameList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LobbyGameList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LobbyGameList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.LobbyGameList;

        /**
         * Decodes a LobbyGameList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LobbyGameList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.LobbyGameList;

        /**
         * Verifies a LobbyGameList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LobbyGameList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LobbyGameList
         */
        public static fromObject(object: { [k: string]: any }): backend.LobbyGameList;

        /**
         * Creates a plain object from a LobbyGameList message. Also converts values to other types if specified.
         * @param message LobbyGameList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: backend.LobbyGameList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LobbyGameList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LobbyGameInfo. */
    interface ILobbyGameInfo {

        /** LobbyGameInfo idGame */
        idGame?: (number|Long|null);

        /** LobbyGameInfo gameName */
        gameName?: (string|null);

        /** LobbyGameInfo idHost */
        idHost?: (number|Long|null);

        /** LobbyGameInfo spectatorMode */
        spectatorMode?: (boolean|null);

        /** LobbyGameInfo spectatorDelay */
        spectatorDelay?: (number|null);

        /** LobbyGameInfo region */
        region?: (string|null);

        /** LobbyGameInfo map */
        map?: (string|null);

        /** LobbyGameInfo maxPlayer */
        maxPlayer?: (number|null);

        /** LobbyGameInfo gameSpeed */
        gameSpeed?: (number|null);

        /** LobbyGameInfo startingAge */
        startingAge?: (number|null);

        /** LobbyGameInfo endingAge */
        endingAge?: (number|null);

        /** LobbyGameInfo startingResources */
        startingResources?: (number|null);

        /** LobbyGameInfo allowCheat */
        allowCheat?: (boolean|null);

        /** LobbyGameInfo treatyTime */
        treatyTime?: (number|null);

        /** LobbyGameInfo koth */
        koth?: (boolean|null);

        /** LobbyGameInfo blockade */
        blockade?: (boolean|null);

        /** LobbyGameInfo playerList */
        playerList?: (backend.ILobbyGamePlayerInfo[]|null);
    }

    /** Represents a LobbyGameInfo. */
    class LobbyGameInfo implements ILobbyGameInfo {

        /**
         * Constructs a new LobbyGameInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: backend.ILobbyGameInfo);

        /** LobbyGameInfo idGame. */
        public idGame: (number|Long);

        /** LobbyGameInfo gameName. */
        public gameName: string;

        /** LobbyGameInfo idHost. */
        public idHost: (number|Long);

        /** LobbyGameInfo spectatorMode. */
        public spectatorMode: boolean;

        /** LobbyGameInfo spectatorDelay. */
        public spectatorDelay: number;

        /** LobbyGameInfo region. */
        public region: string;

        /** LobbyGameInfo map. */
        public map: string;

        /** LobbyGameInfo maxPlayer. */
        public maxPlayer: number;

        /** LobbyGameInfo gameSpeed. */
        public gameSpeed: number;

        /** LobbyGameInfo startingAge. */
        public startingAge: number;

        /** LobbyGameInfo endingAge. */
        public endingAge: number;

        /** LobbyGameInfo startingResources. */
        public startingResources: number;

        /** LobbyGameInfo allowCheat. */
        public allowCheat: boolean;

        /** LobbyGameInfo treatyTime. */
        public treatyTime: number;

        /** LobbyGameInfo koth. */
        public koth: boolean;

        /** LobbyGameInfo blockade. */
        public blockade: boolean;

        /** LobbyGameInfo playerList. */
        public playerList: backend.ILobbyGamePlayerInfo[];

        /**
         * Creates a new LobbyGameInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LobbyGameInfo instance
         */
        public static create(properties?: backend.ILobbyGameInfo): backend.LobbyGameInfo;

        /**
         * Encodes the specified LobbyGameInfo message. Does not implicitly {@link backend.LobbyGameInfo.verify|verify} messages.
         * @param message LobbyGameInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: backend.ILobbyGameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LobbyGameInfo message, length delimited. Does not implicitly {@link backend.LobbyGameInfo.verify|verify} messages.
         * @param message LobbyGameInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: backend.ILobbyGameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LobbyGameInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LobbyGameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.LobbyGameInfo;

        /**
         * Decodes a LobbyGameInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LobbyGameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.LobbyGameInfo;

        /**
         * Verifies a LobbyGameInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LobbyGameInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LobbyGameInfo
         */
        public static fromObject(object: { [k: string]: any }): backend.LobbyGameInfo;

        /**
         * Creates a plain object from a LobbyGameInfo message. Also converts values to other types if specified.
         * @param message LobbyGameInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: backend.LobbyGameInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LobbyGameInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LobbyGamePlayerInfo. */
    interface ILobbyGamePlayerInfo {

        /** LobbyGamePlayerInfo idPlayer */
        idPlayer?: (number|Long|null);

        /** LobbyGamePlayerInfo playerName */
        playerName?: (string|null);

        /** LobbyGamePlayerInfo playerElo */
        playerElo?: (number|null);

        /** LobbyGamePlayerInfo idCiv */
        idCiv?: (number|null);

        /** LobbyGamePlayerInfo team */
        team?: (number|null);

        /** LobbyGamePlayerInfo stationId */
        stationId?: (number|null);

        /** LobbyGamePlayerInfo isReady */
        isReady?: (boolean|null);

        /** LobbyGamePlayerInfo status */
        status?: (number|null);
    }

    /** Represents a LobbyGamePlayerInfo. */
    class LobbyGamePlayerInfo implements ILobbyGamePlayerInfo {

        /**
         * Constructs a new LobbyGamePlayerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: backend.ILobbyGamePlayerInfo);

        /** LobbyGamePlayerInfo idPlayer. */
        public idPlayer: (number|Long);

        /** LobbyGamePlayerInfo playerName. */
        public playerName: string;

        /** LobbyGamePlayerInfo playerElo. */
        public playerElo: number;

        /** LobbyGamePlayerInfo idCiv. */
        public idCiv: number;

        /** LobbyGamePlayerInfo team. */
        public team: number;

        /** LobbyGamePlayerInfo stationId. */
        public stationId: number;

        /** LobbyGamePlayerInfo isReady. */
        public isReady: boolean;

        /** LobbyGamePlayerInfo status. */
        public status: number;

        /**
         * Creates a new LobbyGamePlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LobbyGamePlayerInfo instance
         */
        public static create(properties?: backend.ILobbyGamePlayerInfo): backend.LobbyGamePlayerInfo;

        /**
         * Encodes the specified LobbyGamePlayerInfo message. Does not implicitly {@link backend.LobbyGamePlayerInfo.verify|verify} messages.
         * @param message LobbyGamePlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: backend.ILobbyGamePlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LobbyGamePlayerInfo message, length delimited. Does not implicitly {@link backend.LobbyGamePlayerInfo.verify|verify} messages.
         * @param message LobbyGamePlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: backend.ILobbyGamePlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LobbyGamePlayerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LobbyGamePlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.LobbyGamePlayerInfo;

        /**
         * Decodes a LobbyGamePlayerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LobbyGamePlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.LobbyGamePlayerInfo;

        /**
         * Verifies a LobbyGamePlayerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LobbyGamePlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LobbyGamePlayerInfo
         */
        public static fromObject(object: { [k: string]: any }): backend.LobbyGamePlayerInfo;

        /**
         * Creates a plain object from a LobbyGamePlayerInfo message. Also converts values to other types if specified.
         * @param message LobbyGamePlayerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: backend.LobbyGamePlayerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LobbyGamePlayerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MatchRecord. */
    interface IMatchRecord {

        /** MatchRecord matchList */
        matchList?: (backend.IMatchInfo[]|null);
    }

    /** Represents a MatchRecord. */
    class MatchRecord implements IMatchRecord {

        /**
         * Constructs a new MatchRecord.
         * @param [properties] Properties to set
         */
        constructor(properties?: backend.IMatchRecord);

        /** MatchRecord matchList. */
        public matchList: backend.IMatchInfo[];

        /**
         * Creates a new MatchRecord instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatchRecord instance
         */
        public static create(properties?: backend.IMatchRecord): backend.MatchRecord;

        /**
         * Encodes the specified MatchRecord message. Does not implicitly {@link backend.MatchRecord.verify|verify} messages.
         * @param message MatchRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: backend.IMatchRecord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MatchRecord message, length delimited. Does not implicitly {@link backend.MatchRecord.verify|verify} messages.
         * @param message MatchRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: backend.IMatchRecord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MatchRecord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MatchRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.MatchRecord;

        /**
         * Decodes a MatchRecord message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MatchRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.MatchRecord;

        /**
         * Verifies a MatchRecord message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MatchRecord message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MatchRecord
         */
        public static fromObject(object: { [k: string]: any }): backend.MatchRecord;

        /**
         * Creates a plain object from a MatchRecord message. Also converts values to other types if specified.
         * @param message MatchRecord
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: backend.MatchRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MatchRecord to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MatchInfo. */
    interface IMatchInfo {

        /** MatchInfo idGame */
        idGame?: (number|Long|null);

        /** MatchInfo idMap */
        idMap?: (number|null);

        /** MatchInfo startDate */
        startDate?: (google.protobuf.ITimestamp|null);

        /** MatchInfo endDate */
        endDate?: (google.protobuf.ITimestamp|null);

        /** MatchInfo gameLength */
        gameLength?: (number|Long|null);

        /** MatchInfo gameMode */
        gameMode?: (number|null);

        /** MatchInfo isRanked */
        isRanked?: (boolean|null);

        /** MatchInfo playerCount */
        playerCount?: (number|null);

        /** MatchInfo playerInfoList */
        playerInfoList?: (backend.IMatchPlayerInfo[]|null);
    }

    /** Represents a MatchInfo. */
    class MatchInfo implements IMatchInfo {

        /**
         * Constructs a new MatchInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: backend.IMatchInfo);

        /** MatchInfo idGame. */
        public idGame: (number|Long);

        /** MatchInfo idMap. */
        public idMap: number;

        /** MatchInfo startDate. */
        public startDate?: (google.protobuf.ITimestamp|null);

        /** MatchInfo endDate. */
        public endDate?: (google.protobuf.ITimestamp|null);

        /** MatchInfo gameLength. */
        public gameLength: (number|Long);

        /** MatchInfo gameMode. */
        public gameMode: number;

        /** MatchInfo isRanked. */
        public isRanked: boolean;

        /** MatchInfo playerCount. */
        public playerCount: number;

        /** MatchInfo playerInfoList. */
        public playerInfoList: backend.IMatchPlayerInfo[];

        /**
         * Creates a new MatchInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatchInfo instance
         */
        public static create(properties?: backend.IMatchInfo): backend.MatchInfo;

        /**
         * Encodes the specified MatchInfo message. Does not implicitly {@link backend.MatchInfo.verify|verify} messages.
         * @param message MatchInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: backend.IMatchInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MatchInfo message, length delimited. Does not implicitly {@link backend.MatchInfo.verify|verify} messages.
         * @param message MatchInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: backend.IMatchInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MatchInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MatchInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.MatchInfo;

        /**
         * Decodes a MatchInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MatchInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.MatchInfo;

        /**
         * Verifies a MatchInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MatchInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MatchInfo
         */
        public static fromObject(object: { [k: string]: any }): backend.MatchInfo;

        /**
         * Creates a plain object from a MatchInfo message. Also converts values to other types if specified.
         * @param message MatchInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: backend.MatchInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MatchInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MatchPlayerInfo. */
    interface IMatchPlayerInfo {

        /** MatchPlayerInfo idPlayer */
        idPlayer?: (number|Long|null);

        /** MatchPlayerInfo playerName */
        playerName?: (string|null);

        /** MatchPlayerInfo team */
        team?: (number|null);

        /** MatchPlayerInfo result */
        result?: (number|null);

        /** MatchPlayerInfo eloBefore */
        eloBefore?: (number|null);

        /** MatchPlayerInfo eloAfter */
        eloAfter?: (number|null);

        /** MatchPlayerInfo idCiv */
        idCiv?: (number|null);
    }

    /** Represents a MatchPlayerInfo. */
    class MatchPlayerInfo implements IMatchPlayerInfo {

        /**
         * Constructs a new MatchPlayerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: backend.IMatchPlayerInfo);

        /** MatchPlayerInfo idPlayer. */
        public idPlayer: (number|Long);

        /** MatchPlayerInfo playerName. */
        public playerName: string;

        /** MatchPlayerInfo team. */
        public team: number;

        /** MatchPlayerInfo result. */
        public result: number;

        /** MatchPlayerInfo eloBefore. */
        public eloBefore: number;

        /** MatchPlayerInfo eloAfter. */
        public eloAfter: number;

        /** MatchPlayerInfo idCiv. */
        public idCiv: number;

        /**
         * Creates a new MatchPlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatchPlayerInfo instance
         */
        public static create(properties?: backend.IMatchPlayerInfo): backend.MatchPlayerInfo;

        /**
         * Encodes the specified MatchPlayerInfo message. Does not implicitly {@link backend.MatchPlayerInfo.verify|verify} messages.
         * @param message MatchPlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: backend.IMatchPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MatchPlayerInfo message, length delimited. Does not implicitly {@link backend.MatchPlayerInfo.verify|verify} messages.
         * @param message MatchPlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: backend.IMatchPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MatchPlayerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MatchPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.MatchPlayerInfo;

        /**
         * Decodes a MatchPlayerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MatchPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.MatchPlayerInfo;

        /**
         * Verifies a MatchPlayerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MatchPlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MatchPlayerInfo
         */
        public static fromObject(object: { [k: string]: any }): backend.MatchPlayerInfo;

        /**
         * Creates a plain object from a MatchPlayerInfo message. Also converts values to other types if specified.
         * @param message MatchPlayerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: backend.MatchPlayerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MatchPlayerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MatchPlayerDetail. */
    interface IMatchPlayerDetail {

        /** MatchPlayerDetail idPlayer */
        idPlayer?: (number|Long|null);

        /** MatchPlayerDetail playerName */
        playerName?: (string|null);

        /** MatchPlayerDetail team */
        team?: (number|null);

        /** MatchPlayerDetail result */
        result?: (number|null);

        /** MatchPlayerDetail eloBefore */
        eloBefore?: (number|null);

        /** MatchPlayerDetail eloAfter */
        eloAfter?: (number|null);

        /** MatchPlayerDetail idCiv */
        idCiv?: (number|null);

        /** MatchPlayerDetail isHigestScore */
        isHigestScore?: (number|null);

        /** MatchPlayerDetail isLeastResources */
        isLeastResources?: (number|null);

        /** MatchPlayerDetail isMostImprovements */
        isMostImprovements?: (number|null);

        /** MatchPlayerDetail isMostKills */
        isMostKills?: (number|null);

        /** MatchPlayerDetail isMostLosses */
        isMostLosses?: (number|null);

        /** MatchPlayerDetail isMostMilitary */
        isMostMilitary?: (number|null);

        /** MatchPlayerDetail isMostResources */
        isMostResources?: (number|null);

        /** MatchPlayerDetail isMostTreasures */
        isMostTreasures?: (number|null);

        /** MatchPlayerDetail scoreEconomic */
        scoreEconomic?: (number|null);

        /** MatchPlayerDetail scoreMilitary */
        scoreMilitary?: (number|null);

        /** MatchPlayerDetail scoreTotal */
        scoreTotal?: (number|null);

        /** MatchPlayerDetail buildingLost */
        buildingLost?: (number|null);

        /** MatchPlayerDetail buildingRazed */
        buildingRazed?: (number|null);

        /** MatchPlayerDetail unitsConverted */
        unitsConverted?: (number|null);

        /** MatchPlayerDetail unitsKilled */
        unitsKilled?: (number|null);

        /** MatchPlayerDetail unitsLost */
        unitsLost?: (number|null);
    }

    /** Represents a MatchPlayerDetail. */
    class MatchPlayerDetail implements IMatchPlayerDetail {

        /**
         * Constructs a new MatchPlayerDetail.
         * @param [properties] Properties to set
         */
        constructor(properties?: backend.IMatchPlayerDetail);

        /** MatchPlayerDetail idPlayer. */
        public idPlayer: (number|Long);

        /** MatchPlayerDetail playerName. */
        public playerName: string;

        /** MatchPlayerDetail team. */
        public team: number;

        /** MatchPlayerDetail result. */
        public result: number;

        /** MatchPlayerDetail eloBefore. */
        public eloBefore: number;

        /** MatchPlayerDetail eloAfter. */
        public eloAfter: number;

        /** MatchPlayerDetail idCiv. */
        public idCiv: number;

        /** MatchPlayerDetail isHigestScore. */
        public isHigestScore: number;

        /** MatchPlayerDetail isLeastResources. */
        public isLeastResources: number;

        /** MatchPlayerDetail isMostImprovements. */
        public isMostImprovements: number;

        /** MatchPlayerDetail isMostKills. */
        public isMostKills: number;

        /** MatchPlayerDetail isMostLosses. */
        public isMostLosses: number;

        /** MatchPlayerDetail isMostMilitary. */
        public isMostMilitary: number;

        /** MatchPlayerDetail isMostResources. */
        public isMostResources: number;

        /** MatchPlayerDetail isMostTreasures. */
        public isMostTreasures: number;

        /** MatchPlayerDetail scoreEconomic. */
        public scoreEconomic: number;

        /** MatchPlayerDetail scoreMilitary. */
        public scoreMilitary: number;

        /** MatchPlayerDetail scoreTotal. */
        public scoreTotal: number;

        /** MatchPlayerDetail buildingLost. */
        public buildingLost: number;

        /** MatchPlayerDetail buildingRazed. */
        public buildingRazed: number;

        /** MatchPlayerDetail unitsConverted. */
        public unitsConverted: number;

        /** MatchPlayerDetail unitsKilled. */
        public unitsKilled: number;

        /** MatchPlayerDetail unitsLost. */
        public unitsLost: number;

        /**
         * Creates a new MatchPlayerDetail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatchPlayerDetail instance
         */
        public static create(properties?: backend.IMatchPlayerDetail): backend.MatchPlayerDetail;

        /**
         * Encodes the specified MatchPlayerDetail message. Does not implicitly {@link backend.MatchPlayerDetail.verify|verify} messages.
         * @param message MatchPlayerDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: backend.IMatchPlayerDetail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MatchPlayerDetail message, length delimited. Does not implicitly {@link backend.MatchPlayerDetail.verify|verify} messages.
         * @param message MatchPlayerDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: backend.IMatchPlayerDetail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MatchPlayerDetail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MatchPlayerDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.MatchPlayerDetail;

        /**
         * Decodes a MatchPlayerDetail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MatchPlayerDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.MatchPlayerDetail;

        /**
         * Verifies a MatchPlayerDetail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MatchPlayerDetail message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MatchPlayerDetail
         */
        public static fromObject(object: { [k: string]: any }): backend.MatchPlayerDetail;

        /**
         * Creates a plain object from a MatchPlayerDetail message. Also converts values to other types if specified.
         * @param message MatchPlayerDetail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: backend.MatchPlayerDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MatchPlayerDetail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ObservableList. */
    interface IObservableList {

        /** ObservableList lastUpdateDate */
        lastUpdateDate?: (google.protobuf.ITimestamp|null);

        /** ObservableList observableList */
        observableList?: (backend.IObservableMatchInfo[]|null);
    }

    /** Represents an ObservableList. */
    class ObservableList implements IObservableList {

        /**
         * Constructs a new ObservableList.
         * @param [properties] Properties to set
         */
        constructor(properties?: backend.IObservableList);

        /** ObservableList lastUpdateDate. */
        public lastUpdateDate?: (google.protobuf.ITimestamp|null);

        /** ObservableList observableList. */
        public observableList: backend.IObservableMatchInfo[];

        /**
         * Creates a new ObservableList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObservableList instance
         */
        public static create(properties?: backend.IObservableList): backend.ObservableList;

        /**
         * Encodes the specified ObservableList message. Does not implicitly {@link backend.ObservableList.verify|verify} messages.
         * @param message ObservableList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: backend.IObservableList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ObservableList message, length delimited. Does not implicitly {@link backend.ObservableList.verify|verify} messages.
         * @param message ObservableList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: backend.IObservableList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ObservableList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObservableList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.ObservableList;

        /**
         * Decodes an ObservableList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ObservableList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.ObservableList;

        /**
         * Verifies an ObservableList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ObservableList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ObservableList
         */
        public static fromObject(object: { [k: string]: any }): backend.ObservableList;

        /**
         * Creates a plain object from an ObservableList message. Also converts values to other types if specified.
         * @param message ObservableList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: backend.ObservableList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ObservableList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ObservableMatchInfo. */
    interface IObservableMatchInfo {

        /** ObservableMatchInfo idGame */
        idGame?: (number|Long|null);

        /** ObservableMatchInfo idGroup */
        idGroup?: (number|null);

        /** ObservableMatchInfo gameName */
        gameName?: (string|null);

        /** ObservableMatchInfo idHost */
        idHost?: (number|Long|null);

        /** ObservableMatchInfo playerCount */
        playerCount?: (number|null);

        /** ObservableMatchInfo startDate */
        startDate?: (google.protobuf.ITimestamp|null);

        /** ObservableMatchInfo region */
        region?: (string|null);

        /** ObservableMatchInfo gameMode */
        gameMode?: (number|null);

        /** ObservableMatchInfo playerInfoList */
        playerInfoList?: (backend.IObservableMatchPlayerInfo[]|null);
    }

    /** Represents an ObservableMatchInfo. */
    class ObservableMatchInfo implements IObservableMatchInfo {

        /**
         * Constructs a new ObservableMatchInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: backend.IObservableMatchInfo);

        /** ObservableMatchInfo idGame. */
        public idGame: (number|Long);

        /** ObservableMatchInfo idGroup. */
        public idGroup: number;

        /** ObservableMatchInfo gameName. */
        public gameName: string;

        /** ObservableMatchInfo idHost. */
        public idHost: (number|Long);

        /** ObservableMatchInfo playerCount. */
        public playerCount: number;

        /** ObservableMatchInfo startDate. */
        public startDate?: (google.protobuf.ITimestamp|null);

        /** ObservableMatchInfo region. */
        public region: string;

        /** ObservableMatchInfo gameMode. */
        public gameMode: number;

        /** ObservableMatchInfo playerInfoList. */
        public playerInfoList: backend.IObservableMatchPlayerInfo[];

        /**
         * Creates a new ObservableMatchInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObservableMatchInfo instance
         */
        public static create(properties?: backend.IObservableMatchInfo): backend.ObservableMatchInfo;

        /**
         * Encodes the specified ObservableMatchInfo message. Does not implicitly {@link backend.ObservableMatchInfo.verify|verify} messages.
         * @param message ObservableMatchInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: backend.IObservableMatchInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ObservableMatchInfo message, length delimited. Does not implicitly {@link backend.ObservableMatchInfo.verify|verify} messages.
         * @param message ObservableMatchInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: backend.IObservableMatchInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ObservableMatchInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObservableMatchInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.ObservableMatchInfo;

        /**
         * Decodes an ObservableMatchInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ObservableMatchInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.ObservableMatchInfo;

        /**
         * Verifies an ObservableMatchInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ObservableMatchInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ObservableMatchInfo
         */
        public static fromObject(object: { [k: string]: any }): backend.ObservableMatchInfo;

        /**
         * Creates a plain object from an ObservableMatchInfo message. Also converts values to other types if specified.
         * @param message ObservableMatchInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: backend.ObservableMatchInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ObservableMatchInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ObservableMatchPlayerInfo. */
    interface IObservableMatchPlayerInfo {

        /** ObservableMatchPlayerInfo idPlayer */
        idPlayer?: (number|Long|null);

        /** ObservableMatchPlayerInfo playerName */
        playerName?: (string|null);

        /** ObservableMatchPlayerInfo playerElo */
        playerElo?: (number|null);

        /** ObservableMatchPlayerInfo idCiv */
        idCiv?: (number|null);

        /** ObservableMatchPlayerInfo team */
        team?: (number|null);

        /** ObservableMatchPlayerInfo status */
        status?: (number|null);
    }

    /** Represents an ObservableMatchPlayerInfo. */
    class ObservableMatchPlayerInfo implements IObservableMatchPlayerInfo {

        /**
         * Constructs a new ObservableMatchPlayerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: backend.IObservableMatchPlayerInfo);

        /** ObservableMatchPlayerInfo idPlayer. */
        public idPlayer: (number|Long);

        /** ObservableMatchPlayerInfo playerName. */
        public playerName: string;

        /** ObservableMatchPlayerInfo playerElo. */
        public playerElo: number;

        /** ObservableMatchPlayerInfo idCiv. */
        public idCiv: number;

        /** ObservableMatchPlayerInfo team. */
        public team: number;

        /** ObservableMatchPlayerInfo status. */
        public status: number;

        /**
         * Creates a new ObservableMatchPlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObservableMatchPlayerInfo instance
         */
        public static create(properties?: backend.IObservableMatchPlayerInfo): backend.ObservableMatchPlayerInfo;

        /**
         * Encodes the specified ObservableMatchPlayerInfo message. Does not implicitly {@link backend.ObservableMatchPlayerInfo.verify|verify} messages.
         * @param message ObservableMatchPlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: backend.IObservableMatchPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ObservableMatchPlayerInfo message, length delimited. Does not implicitly {@link backend.ObservableMatchPlayerInfo.verify|verify} messages.
         * @param message ObservableMatchPlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: backend.IObservableMatchPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ObservableMatchPlayerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObservableMatchPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.ObservableMatchPlayerInfo;

        /**
         * Decodes an ObservableMatchPlayerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ObservableMatchPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.ObservableMatchPlayerInfo;

        /**
         * Verifies an ObservableMatchPlayerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ObservableMatchPlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ObservableMatchPlayerInfo
         */
        public static fromObject(object: { [k: string]: any }): backend.ObservableMatchPlayerInfo;

        /**
         * Creates a plain object from an ObservableMatchPlayerInfo message. Also converts values to other types if specified.
         * @param message ObservableMatchPlayerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: backend.ObservableMatchPlayerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ObservableMatchPlayerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TechInfoList. */
    interface ITechInfoList {

        /** TechInfoList techInfoList */
        techInfoList?: (backend.ITechInfo[]|null);
    }

    /** Represents a TechInfoList. */
    class TechInfoList implements ITechInfoList {

        /**
         * Constructs a new TechInfoList.
         * @param [properties] Properties to set
         */
        constructor(properties?: backend.ITechInfoList);

        /** TechInfoList techInfoList. */
        public techInfoList: backend.ITechInfo[];

        /**
         * Creates a new TechInfoList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TechInfoList instance
         */
        public static create(properties?: backend.ITechInfoList): backend.TechInfoList;

        /**
         * Encodes the specified TechInfoList message. Does not implicitly {@link backend.TechInfoList.verify|verify} messages.
         * @param message TechInfoList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: backend.ITechInfoList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TechInfoList message, length delimited. Does not implicitly {@link backend.TechInfoList.verify|verify} messages.
         * @param message TechInfoList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: backend.ITechInfoList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TechInfoList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TechInfoList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.TechInfoList;

        /**
         * Decodes a TechInfoList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TechInfoList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.TechInfoList;

        /**
         * Verifies a TechInfoList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TechInfoList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TechInfoList
         */
        public static fromObject(object: { [k: string]: any }): backend.TechInfoList;

        /**
         * Creates a plain object from a TechInfoList message. Also converts values to other types if specified.
         * @param message TechInfoList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: backend.TechInfoList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TechInfoList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TechInfo. */
    interface ITechInfo {

        /** TechInfo name */
        name?: (string|null);

        /** TechInfo type */
        type?: (string|null);

        /** TechInfo status */
        status?: (backend.TechStatus|null);

        /** TechInfo displaynameid */
        displaynameid?: (number|null);

        /** TechInfo researchpoints */
        researchpoints?: (number|null);

        /** TechInfo icon */
        icon?: (string|null);

        /** TechInfo rollovertextid */
        rollovertextid?: (number|null);

        /** TechInfo effects */
        effects?: (backend.ITechEffectInfo[]|null);

        /** TechInfo costs */
        costs?: (backend.ITechCostInfo[]|null);
    }

    /** Represents a TechInfo. */
    class TechInfo implements ITechInfo {

        /**
         * Constructs a new TechInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: backend.ITechInfo);

        /** TechInfo name. */
        public name: string;

        /** TechInfo type. */
        public type: string;

        /** TechInfo status. */
        public status: backend.TechStatus;

        /** TechInfo displaynameid. */
        public displaynameid: number;

        /** TechInfo researchpoints. */
        public researchpoints: number;

        /** TechInfo icon. */
        public icon: string;

        /** TechInfo rollovertextid. */
        public rollovertextid: number;

        /** TechInfo effects. */
        public effects: backend.ITechEffectInfo[];

        /** TechInfo costs. */
        public costs: backend.ITechCostInfo[];

        /**
         * Creates a new TechInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TechInfo instance
         */
        public static create(properties?: backend.ITechInfo): backend.TechInfo;

        /**
         * Encodes the specified TechInfo message. Does not implicitly {@link backend.TechInfo.verify|verify} messages.
         * @param message TechInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: backend.ITechInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TechInfo message, length delimited. Does not implicitly {@link backend.TechInfo.verify|verify} messages.
         * @param message TechInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: backend.ITechInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TechInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TechInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.TechInfo;

        /**
         * Decodes a TechInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TechInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.TechInfo;

        /**
         * Verifies a TechInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TechInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TechInfo
         */
        public static fromObject(object: { [k: string]: any }): backend.TechInfo;

        /**
         * Creates a plain object from a TechInfo message. Also converts values to other types if specified.
         * @param message TechInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: backend.TechInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TechInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TechEffectInfo. */
    interface ITechEffectInfo {

        /** TechEffectInfo type */
        type?: (string|null);

        /** TechEffectInfo amount */
        amount?: (number|null);

        /** TechEffectInfo subtype */
        subtype?: (string|null);

        /** TechEffectInfo relativity */
        relativity?: (backend.TechRelativity|null);

        /** TechEffectInfo text */
        text?: (string|null);

        /** TechEffectInfo targettype */
        targettype?: (backend.TechTargetType|null);

        /** TechEffectInfo targettext */
        targettext?: (string|null);

        /** TechEffectInfo status */
        status?: (backend.TechStatus|null);

        /** TechEffectInfo action */
        action?: (string|null);

        /** TechEffectInfo tech */
        tech?: (string|null);

        /** TechEffectInfo newname */
        newname?: (number|null);

        /** TechEffectInfo newrollover */
        newrollover?: (number|null);

        /** TechEffectInfo unittype */
        unittype?: (string|null);

        /** TechEffectInfo resource */
        resource?: (backend.TechResourceType|null);

        /** TechEffectInfo allactions */
        allactions?: (boolean|null);

        /** TechEffectInfo proto */
        proto?: (string|null);

        /** TechEffectInfo neweditorname */
        neweditorname?: (number|null);

        /** TechEffectInfo newshortrollover */
        newshortrollover?: (number|null);

        /** TechEffectInfo stringid */
        stringid?: (number|null);

        /** TechEffectInfo resvalue */
        resvalue?: (number|null);

        /** TechEffectInfo component */
        component?: (backend.TechComponentType|null);

        /** TechEffectInfo newtype */
        newtype?: (backend.TechArmorType|null);

        /** TechEffectInfo resourcecap */
        resourcecap?: (number|null);

        /** TechEffectInfo protopower */
        protopower?: (string|null);

        /** TechEffectInfo toprotoid */
        toprotoid?: (string|null);

        /** TechEffectInfo fromprotoid */
        fromprotoid?: (string|null);

        /** TechEffectInfo multiplier */
        multiplier?: (number|null);

        /** TechEffectInfo toresource */
        toresource?: (backend.TechResourceType|null);

        /** TechEffectInfo fromresource */
        fromresource?: (backend.TechResourceType|null);

        /** TechEffectInfo amount2 */
        amount2?: (number|null);

        /** TechEffectInfo unittype2 */
        unittype2?: (string|null);

        /** TechEffectInfo civ */
        civ?: (string|null);

        /** TechEffectInfo counttype */
        counttype?: (string|null);

        /** TechEffectInfo maxcount */
        maxcount?: (number|null);

        /** TechEffectInfo ageprereq */
        ageprereq?: (number|null);

        /** TechEffectInfo unitcount */
        unitcount?: (number|null);

        /** TechEffectInfo includeself */
        includeself?: (boolean|null);

        /** TechEffectInfo protoaction */
        protoaction?: (string|null);

        /** TechEffectInfo armortype */
        armortype?: (backend.TechArmorType|null);

        /** TechEffectInfo resource2 */
        resource2?: (backend.TechResourceType|null);

        /** TechEffectInfo extrabounty */
        extrabounty?: (boolean|null);

        /** TechEffectInfo bountyrate */
        bountyrate?: (number|null);

        /** TechEffectInfo unitcap */
        unitcap?: (number|null);

        /** TechEffectInfo tactic */
        tactic?: (string|null);
    }

    /** Represents a TechEffectInfo. */
    class TechEffectInfo implements ITechEffectInfo {

        /**
         * Constructs a new TechEffectInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: backend.ITechEffectInfo);

        /** TechEffectInfo type. */
        public type: string;

        /** TechEffectInfo amount. */
        public amount: number;

        /** TechEffectInfo subtype. */
        public subtype: string;

        /** TechEffectInfo relativity. */
        public relativity: backend.TechRelativity;

        /** TechEffectInfo text. */
        public text: string;

        /** TechEffectInfo targettype. */
        public targettype: backend.TechTargetType;

        /** TechEffectInfo targettext. */
        public targettext: string;

        /** TechEffectInfo status. */
        public status: backend.TechStatus;

        /** TechEffectInfo action. */
        public action: string;

        /** TechEffectInfo tech. */
        public tech: string;

        /** TechEffectInfo newname. */
        public newname: number;

        /** TechEffectInfo newrollover. */
        public newrollover: number;

        /** TechEffectInfo unittype. */
        public unittype: string;

        /** TechEffectInfo resource. */
        public resource: backend.TechResourceType;

        /** TechEffectInfo allactions. */
        public allactions: boolean;

        /** TechEffectInfo proto. */
        public proto: string;

        /** TechEffectInfo neweditorname. */
        public neweditorname: number;

        /** TechEffectInfo newshortrollover. */
        public newshortrollover: number;

        /** TechEffectInfo stringid. */
        public stringid: number;

        /** TechEffectInfo resvalue. */
        public resvalue: number;

        /** TechEffectInfo component. */
        public component: backend.TechComponentType;

        /** TechEffectInfo newtype. */
        public newtype: backend.TechArmorType;

        /** TechEffectInfo resourcecap. */
        public resourcecap: number;

        /** TechEffectInfo protopower. */
        public protopower: string;

        /** TechEffectInfo toprotoid. */
        public toprotoid: string;

        /** TechEffectInfo fromprotoid. */
        public fromprotoid: string;

        /** TechEffectInfo multiplier. */
        public multiplier: number;

        /** TechEffectInfo toresource. */
        public toresource: backend.TechResourceType;

        /** TechEffectInfo fromresource. */
        public fromresource: backend.TechResourceType;

        /** TechEffectInfo amount2. */
        public amount2: number;

        /** TechEffectInfo unittype2. */
        public unittype2: string;

        /** TechEffectInfo civ. */
        public civ: string;

        /** TechEffectInfo counttype. */
        public counttype: string;

        /** TechEffectInfo maxcount. */
        public maxcount: number;

        /** TechEffectInfo ageprereq. */
        public ageprereq: number;

        /** TechEffectInfo unitcount. */
        public unitcount: number;

        /** TechEffectInfo includeself. */
        public includeself: boolean;

        /** TechEffectInfo protoaction. */
        public protoaction: string;

        /** TechEffectInfo armortype. */
        public armortype: backend.TechArmorType;

        /** TechEffectInfo resource2. */
        public resource2: backend.TechResourceType;

        /** TechEffectInfo extrabounty. */
        public extrabounty: boolean;

        /** TechEffectInfo bountyrate. */
        public bountyrate: number;

        /** TechEffectInfo unitcap. */
        public unitcap: number;

        /** TechEffectInfo tactic. */
        public tactic: string;

        /**
         * Creates a new TechEffectInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TechEffectInfo instance
         */
        public static create(properties?: backend.ITechEffectInfo): backend.TechEffectInfo;

        /**
         * Encodes the specified TechEffectInfo message. Does not implicitly {@link backend.TechEffectInfo.verify|verify} messages.
         * @param message TechEffectInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: backend.ITechEffectInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TechEffectInfo message, length delimited. Does not implicitly {@link backend.TechEffectInfo.verify|verify} messages.
         * @param message TechEffectInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: backend.ITechEffectInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TechEffectInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TechEffectInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.TechEffectInfo;

        /**
         * Decodes a TechEffectInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TechEffectInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.TechEffectInfo;

        /**
         * Verifies a TechEffectInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TechEffectInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TechEffectInfo
         */
        public static fromObject(object: { [k: string]: any }): backend.TechEffectInfo;

        /**
         * Creates a plain object from a TechEffectInfo message. Also converts values to other types if specified.
         * @param message TechEffectInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: backend.TechEffectInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TechEffectInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TechCostInfo. */
    interface ITechCostInfo {

        /** TechCostInfo resourcetype */
        resourcetype?: (backend.TechResourceType|null);

        /** TechCostInfo amount */
        amount?: (number|null);
    }

    /** Represents a TechCostInfo. */
    class TechCostInfo implements ITechCostInfo {

        /**
         * Constructs a new TechCostInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: backend.ITechCostInfo);

        /** TechCostInfo resourcetype. */
        public resourcetype: backend.TechResourceType;

        /** TechCostInfo amount. */
        public amount: number;

        /**
         * Creates a new TechCostInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TechCostInfo instance
         */
        public static create(properties?: backend.ITechCostInfo): backend.TechCostInfo;

        /**
         * Encodes the specified TechCostInfo message. Does not implicitly {@link backend.TechCostInfo.verify|verify} messages.
         * @param message TechCostInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: backend.ITechCostInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TechCostInfo message, length delimited. Does not implicitly {@link backend.TechCostInfo.verify|verify} messages.
         * @param message TechCostInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: backend.ITechCostInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TechCostInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TechCostInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.TechCostInfo;

        /**
         * Decodes a TechCostInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TechCostInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.TechCostInfo;

        /**
         * Verifies a TechCostInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TechCostInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TechCostInfo
         */
        public static fromObject(object: { [k: string]: any }): backend.TechCostInfo;

        /**
         * Creates a plain object from a TechCostInfo message. Also converts values to other types if specified.
         * @param message TechCostInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: backend.TechCostInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TechCostInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** TechStatus enum. */
    enum TechStatus {
        None = 0,
        Active = 1,
        Obtainable = 2,
        Unobtainable = 3
    }

    /** TechRelativity enum. */
    enum TechRelativity {
        Absolute = 0,
        Assign = 1,
        BasePercent = 2,
        DefaultValue = 3,
        Override = 4,
        Percent = 5
    }

    /** TechArmorType enum. */
    enum TechArmorType {
        Hand = 0,
        Ranged = 1,
        Siege = 2
    }

    /** TechResourceType enum. */
    enum TechResourceType {
        Food = 0,
        Gold = 1,
        Influence = 2,
        Ships = 3,
        Trade = 4,
        Wood = 5,
        XP = 6
    }

    /** TechComponentType enum. */
    enum TechComponentType {
        BuyFactor = 0,
        SellFactor = 1,
        SellFactorSpecific = 2
    }

    /** TechTargetType enum. */
    enum TechTargetType {
        Player = 0,
        Proto = 1,
        ProtoUnit = 2,
        Tech = 3,
        TechAll = 4,
        TechWithFlag = 5
    }

    /** Properties of a TierListSave. */
    interface ITierListSave {

        /** TierListSave sTier */
        sTier?: (number[]|null);

        /** TierListSave aTier */
        aTier?: (number[]|null);

        /** TierListSave bTier */
        bTier?: (number[]|null);

        /** TierListSave cTier */
        cTier?: (number[]|null);

        /** TierListSave dTier */
        dTier?: (number[]|null);

        /** TierListSave eTier */
        eTier?: (number[]|null);

        /** TierListSave fTier */
        fTier?: (number[]|null);

        /** TierListSave civList */
        civList?: (number[]|null);

        /** TierListSave tierCount */
        tierCount?: (number|null);
    }

    /** Represents a TierListSave. */
    class TierListSave implements ITierListSave {

        /**
         * Constructs a new TierListSave.
         * @param [properties] Properties to set
         */
        constructor(properties?: backend.ITierListSave);

        /** TierListSave sTier. */
        public sTier: number[];

        /** TierListSave aTier. */
        public aTier: number[];

        /** TierListSave bTier. */
        public bTier: number[];

        /** TierListSave cTier. */
        public cTier: number[];

        /** TierListSave dTier. */
        public dTier: number[];

        /** TierListSave eTier. */
        public eTier: number[];

        /** TierListSave fTier. */
        public fTier: number[];

        /** TierListSave civList. */
        public civList: number[];

        /** TierListSave tierCount. */
        public tierCount: number;

        /**
         * Creates a new TierListSave instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TierListSave instance
         */
        public static create(properties?: backend.ITierListSave): backend.TierListSave;

        /**
         * Encodes the specified TierListSave message. Does not implicitly {@link backend.TierListSave.verify|verify} messages.
         * @param message TierListSave message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: backend.ITierListSave, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TierListSave message, length delimited. Does not implicitly {@link backend.TierListSave.verify|verify} messages.
         * @param message TierListSave message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: backend.ITierListSave, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TierListSave message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TierListSave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.TierListSave;

        /**
         * Decodes a TierListSave message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TierListSave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.TierListSave;

        /**
         * Verifies a TierListSave message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TierListSave message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TierListSave
         */
        public static fromObject(object: { [k: string]: any }): backend.TierListSave;

        /**
         * Creates a plain object from a TierListSave message. Also converts values to other types if specified.
         * @param message TierListSave
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: backend.TierListSave, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TierListSave to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UnitSave. */
    interface IUnitSave {

        /** UnitSave selectedLanguage */
        selectedLanguage?: (string|null);

        /** UnitSave selectedIdCiv */
        selectedIdCiv?: (number|null);

        /** UnitSave selectedUnitType */
        selectedUnitType?: (string|null);
    }

    /** Represents an UnitSave. */
    class UnitSave implements IUnitSave {

        /**
         * Constructs a new UnitSave.
         * @param [properties] Properties to set
         */
        constructor(properties?: backend.IUnitSave);

        /** UnitSave selectedLanguage. */
        public selectedLanguage: string;

        /** UnitSave selectedIdCiv. */
        public selectedIdCiv: number;

        /** UnitSave selectedUnitType. */
        public selectedUnitType: string;

        /**
         * Creates a new UnitSave instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UnitSave instance
         */
        public static create(properties?: backend.IUnitSave): backend.UnitSave;

        /**
         * Encodes the specified UnitSave message. Does not implicitly {@link backend.UnitSave.verify|verify} messages.
         * @param message UnitSave message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: backend.IUnitSave, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UnitSave message, length delimited. Does not implicitly {@link backend.UnitSave.verify|verify} messages.
         * @param message UnitSave message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: backend.IUnitSave, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UnitSave message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UnitSave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.UnitSave;

        /**
         * Decodes an UnitSave message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UnitSave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.UnitSave;

        /**
         * Verifies an UnitSave message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UnitSave message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UnitSave
         */
        public static fromObject(object: { [k: string]: any }): backend.UnitSave;

        /**
         * Creates a plain object from an UnitSave message. Also converts values to other types if specified.
         * @param message UnitSave
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: backend.UnitSave, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UnitSave to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
