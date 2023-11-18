/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const backend = $root.backend = (() => {

    /**
     * Namespace backend.
     * @exports backend
     * @namespace
     */
    const backend = {};

    backend.DeckSave = (function() {

        /**
         * Properties of a DeckSave.
         * @memberof backend
         * @interface IDeckSave
         * @property {string|null} [deckName] DeckSave deckName
         * @property {number|null} [idCiv] DeckSave idCiv
         * @property {string|null} [selectedLanguage] DeckSave selectedLanguage
         * @property {number|null} [radioType] DeckSave radioType
         * @property {number|null} [byAgeTab] DeckSave byAgeTab
         * @property {number|null} [byTypeTab] DeckSave byTypeTab
         * @property {number|null} [ageUpTab] DeckSave ageUpTab
         * @property {number|null} [age2Option] DeckSave age2Option
         * @property {number|null} [age3Option] DeckSave age3Option
         * @property {number|null} [age4Option] DeckSave age4Option
         * @property {number|null} [age5Option] DeckSave age5Option
         * @property {string|null} [search] DeckSave search
         * @property {Array.<number>|null} [age1Array] DeckSave age1Array
         * @property {Array.<number>|null} [age2Array] DeckSave age2Array
         * @property {Array.<number>|null} [age3Array] DeckSave age3Array
         * @property {Array.<number>|null} [age4Array] DeckSave age4Array
         */

        /**
         * Constructs a new DeckSave.
         * @memberof backend
         * @classdesc Represents a DeckSave.
         * @implements IDeckSave
         * @constructor
         * @param {backend.IDeckSave=} [properties] Properties to set
         */
        function DeckSave(properties) {
            this.age1Array = [];
            this.age2Array = [];
            this.age3Array = [];
            this.age4Array = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeckSave deckName.
         * @member {string} deckName
         * @memberof backend.DeckSave
         * @instance
         */
        DeckSave.prototype.deckName = "";

        /**
         * DeckSave idCiv.
         * @member {number} idCiv
         * @memberof backend.DeckSave
         * @instance
         */
        DeckSave.prototype.idCiv = 0;

        /**
         * DeckSave selectedLanguage.
         * @member {string} selectedLanguage
         * @memberof backend.DeckSave
         * @instance
         */
        DeckSave.prototype.selectedLanguage = "";

        /**
         * DeckSave radioType.
         * @member {number} radioType
         * @memberof backend.DeckSave
         * @instance
         */
        DeckSave.prototype.radioType = 0;

        /**
         * DeckSave byAgeTab.
         * @member {number} byAgeTab
         * @memberof backend.DeckSave
         * @instance
         */
        DeckSave.prototype.byAgeTab = 0;

        /**
         * DeckSave byTypeTab.
         * @member {number} byTypeTab
         * @memberof backend.DeckSave
         * @instance
         */
        DeckSave.prototype.byTypeTab = 0;

        /**
         * DeckSave ageUpTab.
         * @member {number} ageUpTab
         * @memberof backend.DeckSave
         * @instance
         */
        DeckSave.prototype.ageUpTab = 0;

        /**
         * DeckSave age2Option.
         * @member {number} age2Option
         * @memberof backend.DeckSave
         * @instance
         */
        DeckSave.prototype.age2Option = 0;

        /**
         * DeckSave age3Option.
         * @member {number} age3Option
         * @memberof backend.DeckSave
         * @instance
         */
        DeckSave.prototype.age3Option = 0;

        /**
         * DeckSave age4Option.
         * @member {number} age4Option
         * @memberof backend.DeckSave
         * @instance
         */
        DeckSave.prototype.age4Option = 0;

        /**
         * DeckSave age5Option.
         * @member {number} age5Option
         * @memberof backend.DeckSave
         * @instance
         */
        DeckSave.prototype.age5Option = 0;

        /**
         * DeckSave search.
         * @member {string} search
         * @memberof backend.DeckSave
         * @instance
         */
        DeckSave.prototype.search = "";

        /**
         * DeckSave age1Array.
         * @member {Array.<number>} age1Array
         * @memberof backend.DeckSave
         * @instance
         */
        DeckSave.prototype.age1Array = $util.emptyArray;

        /**
         * DeckSave age2Array.
         * @member {Array.<number>} age2Array
         * @memberof backend.DeckSave
         * @instance
         */
        DeckSave.prototype.age2Array = $util.emptyArray;

        /**
         * DeckSave age3Array.
         * @member {Array.<number>} age3Array
         * @memberof backend.DeckSave
         * @instance
         */
        DeckSave.prototype.age3Array = $util.emptyArray;

        /**
         * DeckSave age4Array.
         * @member {Array.<number>} age4Array
         * @memberof backend.DeckSave
         * @instance
         */
        DeckSave.prototype.age4Array = $util.emptyArray;

        /**
         * Creates a new DeckSave instance using the specified properties.
         * @function create
         * @memberof backend.DeckSave
         * @static
         * @param {backend.IDeckSave=} [properties] Properties to set
         * @returns {backend.DeckSave} DeckSave instance
         */
        DeckSave.create = function create(properties) {
            return new DeckSave(properties);
        };

        /**
         * Encodes the specified DeckSave message. Does not implicitly {@link backend.DeckSave.verify|verify} messages.
         * @function encode
         * @memberof backend.DeckSave
         * @static
         * @param {backend.IDeckSave} message DeckSave message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeckSave.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deckName != null && Object.hasOwnProperty.call(message, "deckName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.deckName);
            if (message.idCiv != null && Object.hasOwnProperty.call(message, "idCiv"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.idCiv);
            if (message.selectedLanguage != null && Object.hasOwnProperty.call(message, "selectedLanguage"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.selectedLanguage);
            if (message.radioType != null && Object.hasOwnProperty.call(message, "radioType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.radioType);
            if (message.byAgeTab != null && Object.hasOwnProperty.call(message, "byAgeTab"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.byAgeTab);
            if (message.byTypeTab != null && Object.hasOwnProperty.call(message, "byTypeTab"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.byTypeTab);
            if (message.ageUpTab != null && Object.hasOwnProperty.call(message, "ageUpTab"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.ageUpTab);
            if (message.age2Option != null && Object.hasOwnProperty.call(message, "age2Option"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.age2Option);
            if (message.age3Option != null && Object.hasOwnProperty.call(message, "age3Option"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.age3Option);
            if (message.age4Option != null && Object.hasOwnProperty.call(message, "age4Option"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.age4Option);
            if (message.age5Option != null && Object.hasOwnProperty.call(message, "age5Option"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.age5Option);
            if (message.search != null && Object.hasOwnProperty.call(message, "search"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.search);
            if (message.age1Array != null && message.age1Array.length) {
                writer.uint32(/* id 13, wireType 2 =*/106).fork();
                for (let i = 0; i < message.age1Array.length; ++i)
                    writer.int32(message.age1Array[i]);
                writer.ldelim();
            }
            if (message.age2Array != null && message.age2Array.length) {
                writer.uint32(/* id 14, wireType 2 =*/114).fork();
                for (let i = 0; i < message.age2Array.length; ++i)
                    writer.int32(message.age2Array[i]);
                writer.ldelim();
            }
            if (message.age3Array != null && message.age3Array.length) {
                writer.uint32(/* id 15, wireType 2 =*/122).fork();
                for (let i = 0; i < message.age3Array.length; ++i)
                    writer.int32(message.age3Array[i]);
                writer.ldelim();
            }
            if (message.age4Array != null && message.age4Array.length) {
                writer.uint32(/* id 16, wireType 2 =*/130).fork();
                for (let i = 0; i < message.age4Array.length; ++i)
                    writer.int32(message.age4Array[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified DeckSave message, length delimited. Does not implicitly {@link backend.DeckSave.verify|verify} messages.
         * @function encodeDelimited
         * @memberof backend.DeckSave
         * @static
         * @param {backend.IDeckSave} message DeckSave message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeckSave.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeckSave message from the specified reader or buffer.
         * @function decode
         * @memberof backend.DeckSave
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {backend.DeckSave} DeckSave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeckSave.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.DeckSave();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.deckName = reader.string();
                        break;
                    }
                case 2: {
                        message.idCiv = reader.int32();
                        break;
                    }
                case 3: {
                        message.selectedLanguage = reader.string();
                        break;
                    }
                case 4: {
                        message.radioType = reader.int32();
                        break;
                    }
                case 5: {
                        message.byAgeTab = reader.int32();
                        break;
                    }
                case 6: {
                        message.byTypeTab = reader.int32();
                        break;
                    }
                case 7: {
                        message.ageUpTab = reader.int32();
                        break;
                    }
                case 8: {
                        message.age2Option = reader.int32();
                        break;
                    }
                case 9: {
                        message.age3Option = reader.int32();
                        break;
                    }
                case 10: {
                        message.age4Option = reader.int32();
                        break;
                    }
                case 11: {
                        message.age5Option = reader.int32();
                        break;
                    }
                case 12: {
                        message.search = reader.string();
                        break;
                    }
                case 13: {
                        if (!(message.age1Array && message.age1Array.length))
                            message.age1Array = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.age1Array.push(reader.int32());
                        } else
                            message.age1Array.push(reader.int32());
                        break;
                    }
                case 14: {
                        if (!(message.age2Array && message.age2Array.length))
                            message.age2Array = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.age2Array.push(reader.int32());
                        } else
                            message.age2Array.push(reader.int32());
                        break;
                    }
                case 15: {
                        if (!(message.age3Array && message.age3Array.length))
                            message.age3Array = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.age3Array.push(reader.int32());
                        } else
                            message.age3Array.push(reader.int32());
                        break;
                    }
                case 16: {
                        if (!(message.age4Array && message.age4Array.length))
                            message.age4Array = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.age4Array.push(reader.int32());
                        } else
                            message.age4Array.push(reader.int32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeckSave message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof backend.DeckSave
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {backend.DeckSave} DeckSave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeckSave.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeckSave message.
         * @function verify
         * @memberof backend.DeckSave
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeckSave.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deckName != null && message.hasOwnProperty("deckName"))
                if (!$util.isString(message.deckName))
                    return "deckName: string expected";
            if (message.idCiv != null && message.hasOwnProperty("idCiv"))
                if (!$util.isInteger(message.idCiv))
                    return "idCiv: integer expected";
            if (message.selectedLanguage != null && message.hasOwnProperty("selectedLanguage"))
                if (!$util.isString(message.selectedLanguage))
                    return "selectedLanguage: string expected";
            if (message.radioType != null && message.hasOwnProperty("radioType"))
                if (!$util.isInteger(message.radioType))
                    return "radioType: integer expected";
            if (message.byAgeTab != null && message.hasOwnProperty("byAgeTab"))
                if (!$util.isInteger(message.byAgeTab))
                    return "byAgeTab: integer expected";
            if (message.byTypeTab != null && message.hasOwnProperty("byTypeTab"))
                if (!$util.isInteger(message.byTypeTab))
                    return "byTypeTab: integer expected";
            if (message.ageUpTab != null && message.hasOwnProperty("ageUpTab"))
                if (!$util.isInteger(message.ageUpTab))
                    return "ageUpTab: integer expected";
            if (message.age2Option != null && message.hasOwnProperty("age2Option"))
                if (!$util.isInteger(message.age2Option))
                    return "age2Option: integer expected";
            if (message.age3Option != null && message.hasOwnProperty("age3Option"))
                if (!$util.isInteger(message.age3Option))
                    return "age3Option: integer expected";
            if (message.age4Option != null && message.hasOwnProperty("age4Option"))
                if (!$util.isInteger(message.age4Option))
                    return "age4Option: integer expected";
            if (message.age5Option != null && message.hasOwnProperty("age5Option"))
                if (!$util.isInteger(message.age5Option))
                    return "age5Option: integer expected";
            if (message.search != null && message.hasOwnProperty("search"))
                if (!$util.isString(message.search))
                    return "search: string expected";
            if (message.age1Array != null && message.hasOwnProperty("age1Array")) {
                if (!Array.isArray(message.age1Array))
                    return "age1Array: array expected";
                for (let i = 0; i < message.age1Array.length; ++i)
                    if (!$util.isInteger(message.age1Array[i]))
                        return "age1Array: integer[] expected";
            }
            if (message.age2Array != null && message.hasOwnProperty("age2Array")) {
                if (!Array.isArray(message.age2Array))
                    return "age2Array: array expected";
                for (let i = 0; i < message.age2Array.length; ++i)
                    if (!$util.isInteger(message.age2Array[i]))
                        return "age2Array: integer[] expected";
            }
            if (message.age3Array != null && message.hasOwnProperty("age3Array")) {
                if (!Array.isArray(message.age3Array))
                    return "age3Array: array expected";
                for (let i = 0; i < message.age3Array.length; ++i)
                    if (!$util.isInteger(message.age3Array[i]))
                        return "age3Array: integer[] expected";
            }
            if (message.age4Array != null && message.hasOwnProperty("age4Array")) {
                if (!Array.isArray(message.age4Array))
                    return "age4Array: array expected";
                for (let i = 0; i < message.age4Array.length; ++i)
                    if (!$util.isInteger(message.age4Array[i]))
                        return "age4Array: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a DeckSave message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof backend.DeckSave
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {backend.DeckSave} DeckSave
         */
        DeckSave.fromObject = function fromObject(object) {
            if (object instanceof $root.backend.DeckSave)
                return object;
            let message = new $root.backend.DeckSave();
            if (object.deckName != null)
                message.deckName = String(object.deckName);
            if (object.idCiv != null)
                message.idCiv = object.idCiv | 0;
            if (object.selectedLanguage != null)
                message.selectedLanguage = String(object.selectedLanguage);
            if (object.radioType != null)
                message.radioType = object.radioType | 0;
            if (object.byAgeTab != null)
                message.byAgeTab = object.byAgeTab | 0;
            if (object.byTypeTab != null)
                message.byTypeTab = object.byTypeTab | 0;
            if (object.ageUpTab != null)
                message.ageUpTab = object.ageUpTab | 0;
            if (object.age2Option != null)
                message.age2Option = object.age2Option | 0;
            if (object.age3Option != null)
                message.age3Option = object.age3Option | 0;
            if (object.age4Option != null)
                message.age4Option = object.age4Option | 0;
            if (object.age5Option != null)
                message.age5Option = object.age5Option | 0;
            if (object.search != null)
                message.search = String(object.search);
            if (object.age1Array) {
                if (!Array.isArray(object.age1Array))
                    throw TypeError(".backend.DeckSave.age1Array: array expected");
                message.age1Array = [];
                for (let i = 0; i < object.age1Array.length; ++i)
                    message.age1Array[i] = object.age1Array[i] | 0;
            }
            if (object.age2Array) {
                if (!Array.isArray(object.age2Array))
                    throw TypeError(".backend.DeckSave.age2Array: array expected");
                message.age2Array = [];
                for (let i = 0; i < object.age2Array.length; ++i)
                    message.age2Array[i] = object.age2Array[i] | 0;
            }
            if (object.age3Array) {
                if (!Array.isArray(object.age3Array))
                    throw TypeError(".backend.DeckSave.age3Array: array expected");
                message.age3Array = [];
                for (let i = 0; i < object.age3Array.length; ++i)
                    message.age3Array[i] = object.age3Array[i] | 0;
            }
            if (object.age4Array) {
                if (!Array.isArray(object.age4Array))
                    throw TypeError(".backend.DeckSave.age4Array: array expected");
                message.age4Array = [];
                for (let i = 0; i < object.age4Array.length; ++i)
                    message.age4Array[i] = object.age4Array[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a DeckSave message. Also converts values to other types if specified.
         * @function toObject
         * @memberof backend.DeckSave
         * @static
         * @param {backend.DeckSave} message DeckSave
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeckSave.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.age1Array = [];
                object.age2Array = [];
                object.age3Array = [];
                object.age4Array = [];
            }
            if (options.defaults) {
                object.deckName = "";
                object.idCiv = 0;
                object.selectedLanguage = "";
                object.radioType = 0;
                object.byAgeTab = 0;
                object.byTypeTab = 0;
                object.ageUpTab = 0;
                object.age2Option = 0;
                object.age3Option = 0;
                object.age4Option = 0;
                object.age5Option = 0;
                object.search = "";
            }
            if (message.deckName != null && message.hasOwnProperty("deckName"))
                object.deckName = message.deckName;
            if (message.idCiv != null && message.hasOwnProperty("idCiv"))
                object.idCiv = message.idCiv;
            if (message.selectedLanguage != null && message.hasOwnProperty("selectedLanguage"))
                object.selectedLanguage = message.selectedLanguage;
            if (message.radioType != null && message.hasOwnProperty("radioType"))
                object.radioType = message.radioType;
            if (message.byAgeTab != null && message.hasOwnProperty("byAgeTab"))
                object.byAgeTab = message.byAgeTab;
            if (message.byTypeTab != null && message.hasOwnProperty("byTypeTab"))
                object.byTypeTab = message.byTypeTab;
            if (message.ageUpTab != null && message.hasOwnProperty("ageUpTab"))
                object.ageUpTab = message.ageUpTab;
            if (message.age2Option != null && message.hasOwnProperty("age2Option"))
                object.age2Option = message.age2Option;
            if (message.age3Option != null && message.hasOwnProperty("age3Option"))
                object.age3Option = message.age3Option;
            if (message.age4Option != null && message.hasOwnProperty("age4Option"))
                object.age4Option = message.age4Option;
            if (message.age5Option != null && message.hasOwnProperty("age5Option"))
                object.age5Option = message.age5Option;
            if (message.search != null && message.hasOwnProperty("search"))
                object.search = message.search;
            if (message.age1Array && message.age1Array.length) {
                object.age1Array = [];
                for (let j = 0; j < message.age1Array.length; ++j)
                    object.age1Array[j] = message.age1Array[j];
            }
            if (message.age2Array && message.age2Array.length) {
                object.age2Array = [];
                for (let j = 0; j < message.age2Array.length; ++j)
                    object.age2Array[j] = message.age2Array[j];
            }
            if (message.age3Array && message.age3Array.length) {
                object.age3Array = [];
                for (let j = 0; j < message.age3Array.length; ++j)
                    object.age3Array[j] = message.age3Array[j];
            }
            if (message.age4Array && message.age4Array.length) {
                object.age4Array = [];
                for (let j = 0; j < message.age4Array.length; ++j)
                    object.age4Array[j] = message.age4Array[j];
            }
            return object;
        };

        /**
         * Converts this DeckSave to JSON.
         * @function toJSON
         * @memberof backend.DeckSave
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeckSave.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DeckSave;
    })();

    backend.LobbyGameList = (function() {

        /**
         * Properties of a LobbyGameList.
         * @memberof backend
         * @interface ILobbyGameList
         * @property {google.protobuf.ITimestamp|null} [lastUpdateDate] LobbyGameList lastUpdateDate
         * @property {Array.<backend.ILobbyGameInfo>|null} [lobbyGameInfoList] LobbyGameList lobbyGameInfoList
         */

        /**
         * Constructs a new LobbyGameList.
         * @memberof backend
         * @classdesc Represents a LobbyGameList.
         * @implements ILobbyGameList
         * @constructor
         * @param {backend.ILobbyGameList=} [properties] Properties to set
         */
        function LobbyGameList(properties) {
            this.lobbyGameInfoList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LobbyGameList lastUpdateDate.
         * @member {google.protobuf.ITimestamp|null|undefined} lastUpdateDate
         * @memberof backend.LobbyGameList
         * @instance
         */
        LobbyGameList.prototype.lastUpdateDate = null;

        /**
         * LobbyGameList lobbyGameInfoList.
         * @member {Array.<backend.ILobbyGameInfo>} lobbyGameInfoList
         * @memberof backend.LobbyGameList
         * @instance
         */
        LobbyGameList.prototype.lobbyGameInfoList = $util.emptyArray;

        /**
         * Creates a new LobbyGameList instance using the specified properties.
         * @function create
         * @memberof backend.LobbyGameList
         * @static
         * @param {backend.ILobbyGameList=} [properties] Properties to set
         * @returns {backend.LobbyGameList} LobbyGameList instance
         */
        LobbyGameList.create = function create(properties) {
            return new LobbyGameList(properties);
        };

        /**
         * Encodes the specified LobbyGameList message. Does not implicitly {@link backend.LobbyGameList.verify|verify} messages.
         * @function encode
         * @memberof backend.LobbyGameList
         * @static
         * @param {backend.ILobbyGameList} message LobbyGameList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LobbyGameList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.lastUpdateDate != null && Object.hasOwnProperty.call(message, "lastUpdateDate"))
                $root.google.protobuf.Timestamp.encode(message.lastUpdateDate, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.lobbyGameInfoList != null && message.lobbyGameInfoList.length)
                for (let i = 0; i < message.lobbyGameInfoList.length; ++i)
                    $root.backend.LobbyGameInfo.encode(message.lobbyGameInfoList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LobbyGameList message, length delimited. Does not implicitly {@link backend.LobbyGameList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof backend.LobbyGameList
         * @static
         * @param {backend.ILobbyGameList} message LobbyGameList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LobbyGameList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LobbyGameList message from the specified reader or buffer.
         * @function decode
         * @memberof backend.LobbyGameList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {backend.LobbyGameList} LobbyGameList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LobbyGameList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.LobbyGameList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.lastUpdateDate = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        if (!(message.lobbyGameInfoList && message.lobbyGameInfoList.length))
                            message.lobbyGameInfoList = [];
                        message.lobbyGameInfoList.push($root.backend.LobbyGameInfo.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LobbyGameList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof backend.LobbyGameList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {backend.LobbyGameList} LobbyGameList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LobbyGameList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LobbyGameList message.
         * @function verify
         * @memberof backend.LobbyGameList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LobbyGameList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.lastUpdateDate != null && message.hasOwnProperty("lastUpdateDate")) {
                let error = $root.google.protobuf.Timestamp.verify(message.lastUpdateDate);
                if (error)
                    return "lastUpdateDate." + error;
            }
            if (message.lobbyGameInfoList != null && message.hasOwnProperty("lobbyGameInfoList")) {
                if (!Array.isArray(message.lobbyGameInfoList))
                    return "lobbyGameInfoList: array expected";
                for (let i = 0; i < message.lobbyGameInfoList.length; ++i) {
                    let error = $root.backend.LobbyGameInfo.verify(message.lobbyGameInfoList[i]);
                    if (error)
                        return "lobbyGameInfoList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a LobbyGameList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof backend.LobbyGameList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {backend.LobbyGameList} LobbyGameList
         */
        LobbyGameList.fromObject = function fromObject(object) {
            if (object instanceof $root.backend.LobbyGameList)
                return object;
            let message = new $root.backend.LobbyGameList();
            if (object.lastUpdateDate != null) {
                if (typeof object.lastUpdateDate !== "object")
                    throw TypeError(".backend.LobbyGameList.lastUpdateDate: object expected");
                message.lastUpdateDate = $root.google.protobuf.Timestamp.fromObject(object.lastUpdateDate);
            }
            if (object.lobbyGameInfoList) {
                if (!Array.isArray(object.lobbyGameInfoList))
                    throw TypeError(".backend.LobbyGameList.lobbyGameInfoList: array expected");
                message.lobbyGameInfoList = [];
                for (let i = 0; i < object.lobbyGameInfoList.length; ++i) {
                    if (typeof object.lobbyGameInfoList[i] !== "object")
                        throw TypeError(".backend.LobbyGameList.lobbyGameInfoList: object expected");
                    message.lobbyGameInfoList[i] = $root.backend.LobbyGameInfo.fromObject(object.lobbyGameInfoList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a LobbyGameList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof backend.LobbyGameList
         * @static
         * @param {backend.LobbyGameList} message LobbyGameList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LobbyGameList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.lobbyGameInfoList = [];
            if (options.defaults)
                object.lastUpdateDate = null;
            if (message.lastUpdateDate != null && message.hasOwnProperty("lastUpdateDate"))
                object.lastUpdateDate = $root.google.protobuf.Timestamp.toObject(message.lastUpdateDate, options);
            if (message.lobbyGameInfoList && message.lobbyGameInfoList.length) {
                object.lobbyGameInfoList = [];
                for (let j = 0; j < message.lobbyGameInfoList.length; ++j)
                    object.lobbyGameInfoList[j] = $root.backend.LobbyGameInfo.toObject(message.lobbyGameInfoList[j], options);
            }
            return object;
        };

        /**
         * Converts this LobbyGameList to JSON.
         * @function toJSON
         * @memberof backend.LobbyGameList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LobbyGameList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LobbyGameList;
    })();

    backend.LobbyGameInfo = (function() {

        /**
         * Properties of a LobbyGameInfo.
         * @memberof backend
         * @interface ILobbyGameInfo
         * @property {number|Long|null} [idGame] LobbyGameInfo idGame
         * @property {string|null} [gameName] LobbyGameInfo gameName
         * @property {number|Long|null} [idHost] LobbyGameInfo idHost
         * @property {boolean|null} [spectatorMode] LobbyGameInfo spectatorMode
         * @property {number|null} [spectatorDelay] LobbyGameInfo spectatorDelay
         * @property {string|null} [region] LobbyGameInfo region
         * @property {string|null} [map] LobbyGameInfo map
         * @property {number|null} [maxPlayer] LobbyGameInfo maxPlayer
         * @property {number|null} [gameSpeed] LobbyGameInfo gameSpeed
         * @property {number|null} [startingAge] LobbyGameInfo startingAge
         * @property {number|null} [endingAge] LobbyGameInfo endingAge
         * @property {number|null} [startingResources] LobbyGameInfo startingResources
         * @property {boolean|null} [allowCheat] LobbyGameInfo allowCheat
         * @property {number|null} [treatyTime] LobbyGameInfo treatyTime
         * @property {boolean|null} [koth] LobbyGameInfo koth
         * @property {boolean|null} [blockade] LobbyGameInfo blockade
         * @property {Array.<backend.ILobbyGamePlayerInfo>|null} [playerList] LobbyGameInfo playerList
         */

        /**
         * Constructs a new LobbyGameInfo.
         * @memberof backend
         * @classdesc Represents a LobbyGameInfo.
         * @implements ILobbyGameInfo
         * @constructor
         * @param {backend.ILobbyGameInfo=} [properties] Properties to set
         */
        function LobbyGameInfo(properties) {
            this.playerList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LobbyGameInfo idGame.
         * @member {number|Long} idGame
         * @memberof backend.LobbyGameInfo
         * @instance
         */
        LobbyGameInfo.prototype.idGame = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LobbyGameInfo gameName.
         * @member {string} gameName
         * @memberof backend.LobbyGameInfo
         * @instance
         */
        LobbyGameInfo.prototype.gameName = "";

        /**
         * LobbyGameInfo idHost.
         * @member {number|Long} idHost
         * @memberof backend.LobbyGameInfo
         * @instance
         */
        LobbyGameInfo.prototype.idHost = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LobbyGameInfo spectatorMode.
         * @member {boolean} spectatorMode
         * @memberof backend.LobbyGameInfo
         * @instance
         */
        LobbyGameInfo.prototype.spectatorMode = false;

        /**
         * LobbyGameInfo spectatorDelay.
         * @member {number} spectatorDelay
         * @memberof backend.LobbyGameInfo
         * @instance
         */
        LobbyGameInfo.prototype.spectatorDelay = 0;

        /**
         * LobbyGameInfo region.
         * @member {string} region
         * @memberof backend.LobbyGameInfo
         * @instance
         */
        LobbyGameInfo.prototype.region = "";

        /**
         * LobbyGameInfo map.
         * @member {string} map
         * @memberof backend.LobbyGameInfo
         * @instance
         */
        LobbyGameInfo.prototype.map = "";

        /**
         * LobbyGameInfo maxPlayer.
         * @member {number} maxPlayer
         * @memberof backend.LobbyGameInfo
         * @instance
         */
        LobbyGameInfo.prototype.maxPlayer = 0;

        /**
         * LobbyGameInfo gameSpeed.
         * @member {number} gameSpeed
         * @memberof backend.LobbyGameInfo
         * @instance
         */
        LobbyGameInfo.prototype.gameSpeed = 0;

        /**
         * LobbyGameInfo startingAge.
         * @member {number} startingAge
         * @memberof backend.LobbyGameInfo
         * @instance
         */
        LobbyGameInfo.prototype.startingAge = 0;

        /**
         * LobbyGameInfo endingAge.
         * @member {number} endingAge
         * @memberof backend.LobbyGameInfo
         * @instance
         */
        LobbyGameInfo.prototype.endingAge = 0;

        /**
         * LobbyGameInfo startingResources.
         * @member {number} startingResources
         * @memberof backend.LobbyGameInfo
         * @instance
         */
        LobbyGameInfo.prototype.startingResources = 0;

        /**
         * LobbyGameInfo allowCheat.
         * @member {boolean} allowCheat
         * @memberof backend.LobbyGameInfo
         * @instance
         */
        LobbyGameInfo.prototype.allowCheat = false;

        /**
         * LobbyGameInfo treatyTime.
         * @member {number} treatyTime
         * @memberof backend.LobbyGameInfo
         * @instance
         */
        LobbyGameInfo.prototype.treatyTime = 0;

        /**
         * LobbyGameInfo koth.
         * @member {boolean} koth
         * @memberof backend.LobbyGameInfo
         * @instance
         */
        LobbyGameInfo.prototype.koth = false;

        /**
         * LobbyGameInfo blockade.
         * @member {boolean} blockade
         * @memberof backend.LobbyGameInfo
         * @instance
         */
        LobbyGameInfo.prototype.blockade = false;

        /**
         * LobbyGameInfo playerList.
         * @member {Array.<backend.ILobbyGamePlayerInfo>} playerList
         * @memberof backend.LobbyGameInfo
         * @instance
         */
        LobbyGameInfo.prototype.playerList = $util.emptyArray;

        /**
         * Creates a new LobbyGameInfo instance using the specified properties.
         * @function create
         * @memberof backend.LobbyGameInfo
         * @static
         * @param {backend.ILobbyGameInfo=} [properties] Properties to set
         * @returns {backend.LobbyGameInfo} LobbyGameInfo instance
         */
        LobbyGameInfo.create = function create(properties) {
            return new LobbyGameInfo(properties);
        };

        /**
         * Encodes the specified LobbyGameInfo message. Does not implicitly {@link backend.LobbyGameInfo.verify|verify} messages.
         * @function encode
         * @memberof backend.LobbyGameInfo
         * @static
         * @param {backend.ILobbyGameInfo} message LobbyGameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LobbyGameInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.idGame != null && Object.hasOwnProperty.call(message, "idGame"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.idGame);
            if (message.gameName != null && Object.hasOwnProperty.call(message, "gameName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gameName);
            if (message.idHost != null && Object.hasOwnProperty.call(message, "idHost"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.idHost);
            if (message.spectatorMode != null && Object.hasOwnProperty.call(message, "spectatorMode"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.spectatorMode);
            if (message.spectatorDelay != null && Object.hasOwnProperty.call(message, "spectatorDelay"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.spectatorDelay);
            if (message.region != null && Object.hasOwnProperty.call(message, "region"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.region);
            if (message.map != null && Object.hasOwnProperty.call(message, "map"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.map);
            if (message.maxPlayer != null && Object.hasOwnProperty.call(message, "maxPlayer"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.maxPlayer);
            if (message.gameSpeed != null && Object.hasOwnProperty.call(message, "gameSpeed"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.gameSpeed);
            if (message.startingAge != null && Object.hasOwnProperty.call(message, "startingAge"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.startingAge);
            if (message.endingAge != null && Object.hasOwnProperty.call(message, "endingAge"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.endingAge);
            if (message.startingResources != null && Object.hasOwnProperty.call(message, "startingResources"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.startingResources);
            if (message.allowCheat != null && Object.hasOwnProperty.call(message, "allowCheat"))
                writer.uint32(/* id 13, wireType 0 =*/104).bool(message.allowCheat);
            if (message.treatyTime != null && Object.hasOwnProperty.call(message, "treatyTime"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.treatyTime);
            if (message.koth != null && Object.hasOwnProperty.call(message, "koth"))
                writer.uint32(/* id 15, wireType 0 =*/120).bool(message.koth);
            if (message.blockade != null && Object.hasOwnProperty.call(message, "blockade"))
                writer.uint32(/* id 16, wireType 0 =*/128).bool(message.blockade);
            if (message.playerList != null && message.playerList.length)
                for (let i = 0; i < message.playerList.length; ++i)
                    $root.backend.LobbyGamePlayerInfo.encode(message.playerList[i], writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LobbyGameInfo message, length delimited. Does not implicitly {@link backend.LobbyGameInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof backend.LobbyGameInfo
         * @static
         * @param {backend.ILobbyGameInfo} message LobbyGameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LobbyGameInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LobbyGameInfo message from the specified reader or buffer.
         * @function decode
         * @memberof backend.LobbyGameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {backend.LobbyGameInfo} LobbyGameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LobbyGameInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.LobbyGameInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.idGame = reader.int64();
                        break;
                    }
                case 2: {
                        message.gameName = reader.string();
                        break;
                    }
                case 3: {
                        message.idHost = reader.int64();
                        break;
                    }
                case 4: {
                        message.spectatorMode = reader.bool();
                        break;
                    }
                case 5: {
                        message.spectatorDelay = reader.int32();
                        break;
                    }
                case 6: {
                        message.region = reader.string();
                        break;
                    }
                case 7: {
                        message.map = reader.string();
                        break;
                    }
                case 8: {
                        message.maxPlayer = reader.int32();
                        break;
                    }
                case 9: {
                        message.gameSpeed = reader.int32();
                        break;
                    }
                case 10: {
                        message.startingAge = reader.int32();
                        break;
                    }
                case 11: {
                        message.endingAge = reader.int32();
                        break;
                    }
                case 12: {
                        message.startingResources = reader.int32();
                        break;
                    }
                case 13: {
                        message.allowCheat = reader.bool();
                        break;
                    }
                case 14: {
                        message.treatyTime = reader.int32();
                        break;
                    }
                case 15: {
                        message.koth = reader.bool();
                        break;
                    }
                case 16: {
                        message.blockade = reader.bool();
                        break;
                    }
                case 17: {
                        if (!(message.playerList && message.playerList.length))
                            message.playerList = [];
                        message.playerList.push($root.backend.LobbyGamePlayerInfo.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LobbyGameInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof backend.LobbyGameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {backend.LobbyGameInfo} LobbyGameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LobbyGameInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LobbyGameInfo message.
         * @function verify
         * @memberof backend.LobbyGameInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LobbyGameInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.idGame != null && message.hasOwnProperty("idGame"))
                if (!$util.isInteger(message.idGame) && !(message.idGame && $util.isInteger(message.idGame.low) && $util.isInteger(message.idGame.high)))
                    return "idGame: integer|Long expected";
            if (message.gameName != null && message.hasOwnProperty("gameName"))
                if (!$util.isString(message.gameName))
                    return "gameName: string expected";
            if (message.idHost != null && message.hasOwnProperty("idHost"))
                if (!$util.isInteger(message.idHost) && !(message.idHost && $util.isInteger(message.idHost.low) && $util.isInteger(message.idHost.high)))
                    return "idHost: integer|Long expected";
            if (message.spectatorMode != null && message.hasOwnProperty("spectatorMode"))
                if (typeof message.spectatorMode !== "boolean")
                    return "spectatorMode: boolean expected";
            if (message.spectatorDelay != null && message.hasOwnProperty("spectatorDelay"))
                if (!$util.isInteger(message.spectatorDelay))
                    return "spectatorDelay: integer expected";
            if (message.region != null && message.hasOwnProperty("region"))
                if (!$util.isString(message.region))
                    return "region: string expected";
            if (message.map != null && message.hasOwnProperty("map"))
                if (!$util.isString(message.map))
                    return "map: string expected";
            if (message.maxPlayer != null && message.hasOwnProperty("maxPlayer"))
                if (!$util.isInteger(message.maxPlayer))
                    return "maxPlayer: integer expected";
            if (message.gameSpeed != null && message.hasOwnProperty("gameSpeed"))
                if (!$util.isInteger(message.gameSpeed))
                    return "gameSpeed: integer expected";
            if (message.startingAge != null && message.hasOwnProperty("startingAge"))
                if (!$util.isInteger(message.startingAge))
                    return "startingAge: integer expected";
            if (message.endingAge != null && message.hasOwnProperty("endingAge"))
                if (!$util.isInteger(message.endingAge))
                    return "endingAge: integer expected";
            if (message.startingResources != null && message.hasOwnProperty("startingResources"))
                if (!$util.isInteger(message.startingResources))
                    return "startingResources: integer expected";
            if (message.allowCheat != null && message.hasOwnProperty("allowCheat"))
                if (typeof message.allowCheat !== "boolean")
                    return "allowCheat: boolean expected";
            if (message.treatyTime != null && message.hasOwnProperty("treatyTime"))
                if (!$util.isInteger(message.treatyTime))
                    return "treatyTime: integer expected";
            if (message.koth != null && message.hasOwnProperty("koth"))
                if (typeof message.koth !== "boolean")
                    return "koth: boolean expected";
            if (message.blockade != null && message.hasOwnProperty("blockade"))
                if (typeof message.blockade !== "boolean")
                    return "blockade: boolean expected";
            if (message.playerList != null && message.hasOwnProperty("playerList")) {
                if (!Array.isArray(message.playerList))
                    return "playerList: array expected";
                for (let i = 0; i < message.playerList.length; ++i) {
                    let error = $root.backend.LobbyGamePlayerInfo.verify(message.playerList[i]);
                    if (error)
                        return "playerList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a LobbyGameInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof backend.LobbyGameInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {backend.LobbyGameInfo} LobbyGameInfo
         */
        LobbyGameInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.backend.LobbyGameInfo)
                return object;
            let message = new $root.backend.LobbyGameInfo();
            if (object.idGame != null)
                if ($util.Long)
                    (message.idGame = $util.Long.fromValue(object.idGame)).unsigned = false;
                else if (typeof object.idGame === "string")
                    message.idGame = parseInt(object.idGame, 10);
                else if (typeof object.idGame === "number")
                    message.idGame = object.idGame;
                else if (typeof object.idGame === "object")
                    message.idGame = new $util.LongBits(object.idGame.low >>> 0, object.idGame.high >>> 0).toNumber();
            if (object.gameName != null)
                message.gameName = String(object.gameName);
            if (object.idHost != null)
                if ($util.Long)
                    (message.idHost = $util.Long.fromValue(object.idHost)).unsigned = false;
                else if (typeof object.idHost === "string")
                    message.idHost = parseInt(object.idHost, 10);
                else if (typeof object.idHost === "number")
                    message.idHost = object.idHost;
                else if (typeof object.idHost === "object")
                    message.idHost = new $util.LongBits(object.idHost.low >>> 0, object.idHost.high >>> 0).toNumber();
            if (object.spectatorMode != null)
                message.spectatorMode = Boolean(object.spectatorMode);
            if (object.spectatorDelay != null)
                message.spectatorDelay = object.spectatorDelay | 0;
            if (object.region != null)
                message.region = String(object.region);
            if (object.map != null)
                message.map = String(object.map);
            if (object.maxPlayer != null)
                message.maxPlayer = object.maxPlayer | 0;
            if (object.gameSpeed != null)
                message.gameSpeed = object.gameSpeed | 0;
            if (object.startingAge != null)
                message.startingAge = object.startingAge | 0;
            if (object.endingAge != null)
                message.endingAge = object.endingAge | 0;
            if (object.startingResources != null)
                message.startingResources = object.startingResources | 0;
            if (object.allowCheat != null)
                message.allowCheat = Boolean(object.allowCheat);
            if (object.treatyTime != null)
                message.treatyTime = object.treatyTime | 0;
            if (object.koth != null)
                message.koth = Boolean(object.koth);
            if (object.blockade != null)
                message.blockade = Boolean(object.blockade);
            if (object.playerList) {
                if (!Array.isArray(object.playerList))
                    throw TypeError(".backend.LobbyGameInfo.playerList: array expected");
                message.playerList = [];
                for (let i = 0; i < object.playerList.length; ++i) {
                    if (typeof object.playerList[i] !== "object")
                        throw TypeError(".backend.LobbyGameInfo.playerList: object expected");
                    message.playerList[i] = $root.backend.LobbyGamePlayerInfo.fromObject(object.playerList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a LobbyGameInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof backend.LobbyGameInfo
         * @static
         * @param {backend.LobbyGameInfo} message LobbyGameInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LobbyGameInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.playerList = [];
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.idGame = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.idGame = options.longs === String ? "0" : 0;
                object.gameName = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.idHost = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.idHost = options.longs === String ? "0" : 0;
                object.spectatorMode = false;
                object.spectatorDelay = 0;
                object.region = "";
                object.map = "";
                object.maxPlayer = 0;
                object.gameSpeed = 0;
                object.startingAge = 0;
                object.endingAge = 0;
                object.startingResources = 0;
                object.allowCheat = false;
                object.treatyTime = 0;
                object.koth = false;
                object.blockade = false;
            }
            if (message.idGame != null && message.hasOwnProperty("idGame"))
                if (typeof message.idGame === "number")
                    object.idGame = options.longs === String ? String(message.idGame) : message.idGame;
                else
                    object.idGame = options.longs === String ? $util.Long.prototype.toString.call(message.idGame) : options.longs === Number ? new $util.LongBits(message.idGame.low >>> 0, message.idGame.high >>> 0).toNumber() : message.idGame;
            if (message.gameName != null && message.hasOwnProperty("gameName"))
                object.gameName = message.gameName;
            if (message.idHost != null && message.hasOwnProperty("idHost"))
                if (typeof message.idHost === "number")
                    object.idHost = options.longs === String ? String(message.idHost) : message.idHost;
                else
                    object.idHost = options.longs === String ? $util.Long.prototype.toString.call(message.idHost) : options.longs === Number ? new $util.LongBits(message.idHost.low >>> 0, message.idHost.high >>> 0).toNumber() : message.idHost;
            if (message.spectatorMode != null && message.hasOwnProperty("spectatorMode"))
                object.spectatorMode = message.spectatorMode;
            if (message.spectatorDelay != null && message.hasOwnProperty("spectatorDelay"))
                object.spectatorDelay = message.spectatorDelay;
            if (message.region != null && message.hasOwnProperty("region"))
                object.region = message.region;
            if (message.map != null && message.hasOwnProperty("map"))
                object.map = message.map;
            if (message.maxPlayer != null && message.hasOwnProperty("maxPlayer"))
                object.maxPlayer = message.maxPlayer;
            if (message.gameSpeed != null && message.hasOwnProperty("gameSpeed"))
                object.gameSpeed = message.gameSpeed;
            if (message.startingAge != null && message.hasOwnProperty("startingAge"))
                object.startingAge = message.startingAge;
            if (message.endingAge != null && message.hasOwnProperty("endingAge"))
                object.endingAge = message.endingAge;
            if (message.startingResources != null && message.hasOwnProperty("startingResources"))
                object.startingResources = message.startingResources;
            if (message.allowCheat != null && message.hasOwnProperty("allowCheat"))
                object.allowCheat = message.allowCheat;
            if (message.treatyTime != null && message.hasOwnProperty("treatyTime"))
                object.treatyTime = message.treatyTime;
            if (message.koth != null && message.hasOwnProperty("koth"))
                object.koth = message.koth;
            if (message.blockade != null && message.hasOwnProperty("blockade"))
                object.blockade = message.blockade;
            if (message.playerList && message.playerList.length) {
                object.playerList = [];
                for (let j = 0; j < message.playerList.length; ++j)
                    object.playerList[j] = $root.backend.LobbyGamePlayerInfo.toObject(message.playerList[j], options);
            }
            return object;
        };

        /**
         * Converts this LobbyGameInfo to JSON.
         * @function toJSON
         * @memberof backend.LobbyGameInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LobbyGameInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LobbyGameInfo;
    })();

    backend.LobbyGamePlayerInfo = (function() {

        /**
         * Properties of a LobbyGamePlayerInfo.
         * @memberof backend
         * @interface ILobbyGamePlayerInfo
         * @property {number|Long|null} [idPlayer] LobbyGamePlayerInfo idPlayer
         * @property {string|null} [playerName] LobbyGamePlayerInfo playerName
         * @property {number|null} [playerElo] LobbyGamePlayerInfo playerElo
         * @property {number|null} [idCiv] LobbyGamePlayerInfo idCiv
         * @property {number|null} [team] LobbyGamePlayerInfo team
         * @property {number|null} [stationId] LobbyGamePlayerInfo stationId
         * @property {boolean|null} [isReady] LobbyGamePlayerInfo isReady
         * @property {number|null} [status] LobbyGamePlayerInfo status
         */

        /**
         * Constructs a new LobbyGamePlayerInfo.
         * @memberof backend
         * @classdesc Represents a LobbyGamePlayerInfo.
         * @implements ILobbyGamePlayerInfo
         * @constructor
         * @param {backend.ILobbyGamePlayerInfo=} [properties] Properties to set
         */
        function LobbyGamePlayerInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LobbyGamePlayerInfo idPlayer.
         * @member {number|Long} idPlayer
         * @memberof backend.LobbyGamePlayerInfo
         * @instance
         */
        LobbyGamePlayerInfo.prototype.idPlayer = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LobbyGamePlayerInfo playerName.
         * @member {string} playerName
         * @memberof backend.LobbyGamePlayerInfo
         * @instance
         */
        LobbyGamePlayerInfo.prototype.playerName = "";

        /**
         * LobbyGamePlayerInfo playerElo.
         * @member {number} playerElo
         * @memberof backend.LobbyGamePlayerInfo
         * @instance
         */
        LobbyGamePlayerInfo.prototype.playerElo = 0;

        /**
         * LobbyGamePlayerInfo idCiv.
         * @member {number} idCiv
         * @memberof backend.LobbyGamePlayerInfo
         * @instance
         */
        LobbyGamePlayerInfo.prototype.idCiv = 0;

        /**
         * LobbyGamePlayerInfo team.
         * @member {number} team
         * @memberof backend.LobbyGamePlayerInfo
         * @instance
         */
        LobbyGamePlayerInfo.prototype.team = 0;

        /**
         * LobbyGamePlayerInfo stationId.
         * @member {number} stationId
         * @memberof backend.LobbyGamePlayerInfo
         * @instance
         */
        LobbyGamePlayerInfo.prototype.stationId = 0;

        /**
         * LobbyGamePlayerInfo isReady.
         * @member {boolean} isReady
         * @memberof backend.LobbyGamePlayerInfo
         * @instance
         */
        LobbyGamePlayerInfo.prototype.isReady = false;

        /**
         * LobbyGamePlayerInfo status.
         * @member {number} status
         * @memberof backend.LobbyGamePlayerInfo
         * @instance
         */
        LobbyGamePlayerInfo.prototype.status = 0;

        /**
         * Creates a new LobbyGamePlayerInfo instance using the specified properties.
         * @function create
         * @memberof backend.LobbyGamePlayerInfo
         * @static
         * @param {backend.ILobbyGamePlayerInfo=} [properties] Properties to set
         * @returns {backend.LobbyGamePlayerInfo} LobbyGamePlayerInfo instance
         */
        LobbyGamePlayerInfo.create = function create(properties) {
            return new LobbyGamePlayerInfo(properties);
        };

        /**
         * Encodes the specified LobbyGamePlayerInfo message. Does not implicitly {@link backend.LobbyGamePlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof backend.LobbyGamePlayerInfo
         * @static
         * @param {backend.ILobbyGamePlayerInfo} message LobbyGamePlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LobbyGamePlayerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.idPlayer != null && Object.hasOwnProperty.call(message, "idPlayer"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.idPlayer);
            if (message.playerName != null && Object.hasOwnProperty.call(message, "playerName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.playerName);
            if (message.playerElo != null && Object.hasOwnProperty.call(message, "playerElo"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.playerElo);
            if (message.idCiv != null && Object.hasOwnProperty.call(message, "idCiv"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.idCiv);
            if (message.team != null && Object.hasOwnProperty.call(message, "team"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.team);
            if (message.stationId != null && Object.hasOwnProperty.call(message, "stationId"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.stationId);
            if (message.isReady != null && Object.hasOwnProperty.call(message, "isReady"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.isReady);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified LobbyGamePlayerInfo message, length delimited. Does not implicitly {@link backend.LobbyGamePlayerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof backend.LobbyGamePlayerInfo
         * @static
         * @param {backend.ILobbyGamePlayerInfo} message LobbyGamePlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LobbyGamePlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LobbyGamePlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof backend.LobbyGamePlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {backend.LobbyGamePlayerInfo} LobbyGamePlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LobbyGamePlayerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.LobbyGamePlayerInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.idPlayer = reader.int64();
                        break;
                    }
                case 2: {
                        message.playerName = reader.string();
                        break;
                    }
                case 3: {
                        message.playerElo = reader.int32();
                        break;
                    }
                case 4: {
                        message.idCiv = reader.int32();
                        break;
                    }
                case 5: {
                        message.team = reader.int32();
                        break;
                    }
                case 6: {
                        message.stationId = reader.int32();
                        break;
                    }
                case 7: {
                        message.isReady = reader.bool();
                        break;
                    }
                case 8: {
                        message.status = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LobbyGamePlayerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof backend.LobbyGamePlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {backend.LobbyGamePlayerInfo} LobbyGamePlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LobbyGamePlayerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LobbyGamePlayerInfo message.
         * @function verify
         * @memberof backend.LobbyGamePlayerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LobbyGamePlayerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.idPlayer != null && message.hasOwnProperty("idPlayer"))
                if (!$util.isInteger(message.idPlayer) && !(message.idPlayer && $util.isInteger(message.idPlayer.low) && $util.isInteger(message.idPlayer.high)))
                    return "idPlayer: integer|Long expected";
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                if (!$util.isString(message.playerName))
                    return "playerName: string expected";
            if (message.playerElo != null && message.hasOwnProperty("playerElo"))
                if (!$util.isInteger(message.playerElo))
                    return "playerElo: integer expected";
            if (message.idCiv != null && message.hasOwnProperty("idCiv"))
                if (!$util.isInteger(message.idCiv))
                    return "idCiv: integer expected";
            if (message.team != null && message.hasOwnProperty("team"))
                if (!$util.isInteger(message.team))
                    return "team: integer expected";
            if (message.stationId != null && message.hasOwnProperty("stationId"))
                if (!$util.isInteger(message.stationId))
                    return "stationId: integer expected";
            if (message.isReady != null && message.hasOwnProperty("isReady"))
                if (typeof message.isReady !== "boolean")
                    return "isReady: boolean expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            return null;
        };

        /**
         * Creates a LobbyGamePlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof backend.LobbyGamePlayerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {backend.LobbyGamePlayerInfo} LobbyGamePlayerInfo
         */
        LobbyGamePlayerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.backend.LobbyGamePlayerInfo)
                return object;
            let message = new $root.backend.LobbyGamePlayerInfo();
            if (object.idPlayer != null)
                if ($util.Long)
                    (message.idPlayer = $util.Long.fromValue(object.idPlayer)).unsigned = false;
                else if (typeof object.idPlayer === "string")
                    message.idPlayer = parseInt(object.idPlayer, 10);
                else if (typeof object.idPlayer === "number")
                    message.idPlayer = object.idPlayer;
                else if (typeof object.idPlayer === "object")
                    message.idPlayer = new $util.LongBits(object.idPlayer.low >>> 0, object.idPlayer.high >>> 0).toNumber();
            if (object.playerName != null)
                message.playerName = String(object.playerName);
            if (object.playerElo != null)
                message.playerElo = object.playerElo | 0;
            if (object.idCiv != null)
                message.idCiv = object.idCiv | 0;
            if (object.team != null)
                message.team = object.team | 0;
            if (object.stationId != null)
                message.stationId = object.stationId | 0;
            if (object.isReady != null)
                message.isReady = Boolean(object.isReady);
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from a LobbyGamePlayerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof backend.LobbyGamePlayerInfo
         * @static
         * @param {backend.LobbyGamePlayerInfo} message LobbyGamePlayerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LobbyGamePlayerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.idPlayer = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.idPlayer = options.longs === String ? "0" : 0;
                object.playerName = "";
                object.playerElo = 0;
                object.idCiv = 0;
                object.team = 0;
                object.stationId = 0;
                object.isReady = false;
                object.status = 0;
            }
            if (message.idPlayer != null && message.hasOwnProperty("idPlayer"))
                if (typeof message.idPlayer === "number")
                    object.idPlayer = options.longs === String ? String(message.idPlayer) : message.idPlayer;
                else
                    object.idPlayer = options.longs === String ? $util.Long.prototype.toString.call(message.idPlayer) : options.longs === Number ? new $util.LongBits(message.idPlayer.low >>> 0, message.idPlayer.high >>> 0).toNumber() : message.idPlayer;
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                object.playerName = message.playerName;
            if (message.playerElo != null && message.hasOwnProperty("playerElo"))
                object.playerElo = message.playerElo;
            if (message.idCiv != null && message.hasOwnProperty("idCiv"))
                object.idCiv = message.idCiv;
            if (message.team != null && message.hasOwnProperty("team"))
                object.team = message.team;
            if (message.stationId != null && message.hasOwnProperty("stationId"))
                object.stationId = message.stationId;
            if (message.isReady != null && message.hasOwnProperty("isReady"))
                object.isReady = message.isReady;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this LobbyGamePlayerInfo to JSON.
         * @function toJSON
         * @memberof backend.LobbyGamePlayerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LobbyGamePlayerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LobbyGamePlayerInfo;
    })();

    backend.MatchRecord = (function() {

        /**
         * Properties of a MatchRecord.
         * @memberof backend
         * @interface IMatchRecord
         * @property {Array.<backend.IMatchInfo>|null} [matchList] MatchRecord matchList
         */

        /**
         * Constructs a new MatchRecord.
         * @memberof backend
         * @classdesc Represents a MatchRecord.
         * @implements IMatchRecord
         * @constructor
         * @param {backend.IMatchRecord=} [properties] Properties to set
         */
        function MatchRecord(properties) {
            this.matchList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MatchRecord matchList.
         * @member {Array.<backend.IMatchInfo>} matchList
         * @memberof backend.MatchRecord
         * @instance
         */
        MatchRecord.prototype.matchList = $util.emptyArray;

        /**
         * Creates a new MatchRecord instance using the specified properties.
         * @function create
         * @memberof backend.MatchRecord
         * @static
         * @param {backend.IMatchRecord=} [properties] Properties to set
         * @returns {backend.MatchRecord} MatchRecord instance
         */
        MatchRecord.create = function create(properties) {
            return new MatchRecord(properties);
        };

        /**
         * Encodes the specified MatchRecord message. Does not implicitly {@link backend.MatchRecord.verify|verify} messages.
         * @function encode
         * @memberof backend.MatchRecord
         * @static
         * @param {backend.IMatchRecord} message MatchRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchRecord.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.matchList != null && message.matchList.length)
                for (let i = 0; i < message.matchList.length; ++i)
                    $root.backend.MatchInfo.encode(message.matchList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MatchRecord message, length delimited. Does not implicitly {@link backend.MatchRecord.verify|verify} messages.
         * @function encodeDelimited
         * @memberof backend.MatchRecord
         * @static
         * @param {backend.IMatchRecord} message MatchRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchRecord.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MatchRecord message from the specified reader or buffer.
         * @function decode
         * @memberof backend.MatchRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {backend.MatchRecord} MatchRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchRecord.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.MatchRecord();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.matchList && message.matchList.length))
                            message.matchList = [];
                        message.matchList.push($root.backend.MatchInfo.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MatchRecord message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof backend.MatchRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {backend.MatchRecord} MatchRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchRecord.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MatchRecord message.
         * @function verify
         * @memberof backend.MatchRecord
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MatchRecord.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.matchList != null && message.hasOwnProperty("matchList")) {
                if (!Array.isArray(message.matchList))
                    return "matchList: array expected";
                for (let i = 0; i < message.matchList.length; ++i) {
                    let error = $root.backend.MatchInfo.verify(message.matchList[i]);
                    if (error)
                        return "matchList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a MatchRecord message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof backend.MatchRecord
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {backend.MatchRecord} MatchRecord
         */
        MatchRecord.fromObject = function fromObject(object) {
            if (object instanceof $root.backend.MatchRecord)
                return object;
            let message = new $root.backend.MatchRecord();
            if (object.matchList) {
                if (!Array.isArray(object.matchList))
                    throw TypeError(".backend.MatchRecord.matchList: array expected");
                message.matchList = [];
                for (let i = 0; i < object.matchList.length; ++i) {
                    if (typeof object.matchList[i] !== "object")
                        throw TypeError(".backend.MatchRecord.matchList: object expected");
                    message.matchList[i] = $root.backend.MatchInfo.fromObject(object.matchList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MatchRecord message. Also converts values to other types if specified.
         * @function toObject
         * @memberof backend.MatchRecord
         * @static
         * @param {backend.MatchRecord} message MatchRecord
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MatchRecord.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.matchList = [];
            if (message.matchList && message.matchList.length) {
                object.matchList = [];
                for (let j = 0; j < message.matchList.length; ++j)
                    object.matchList[j] = $root.backend.MatchInfo.toObject(message.matchList[j], options);
            }
            return object;
        };

        /**
         * Converts this MatchRecord to JSON.
         * @function toJSON
         * @memberof backend.MatchRecord
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MatchRecord.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MatchRecord;
    })();

    backend.MatchInfo = (function() {

        /**
         * Properties of a MatchInfo.
         * @memberof backend
         * @interface IMatchInfo
         * @property {number|Long|null} [idGame] MatchInfo idGame
         * @property {number|null} [idMap] MatchInfo idMap
         * @property {google.protobuf.ITimestamp|null} [startDate] MatchInfo startDate
         * @property {google.protobuf.ITimestamp|null} [endDate] MatchInfo endDate
         * @property {number|Long|null} [gameLength] MatchInfo gameLength
         * @property {number|null} [gameMode] MatchInfo gameMode
         * @property {boolean|null} [isRanked] MatchInfo isRanked
         * @property {number|null} [playerCount] MatchInfo playerCount
         * @property {Array.<backend.IMatchPlayerInfo>|null} [playerInfoList] MatchInfo playerInfoList
         */

        /**
         * Constructs a new MatchInfo.
         * @memberof backend
         * @classdesc Represents a MatchInfo.
         * @implements IMatchInfo
         * @constructor
         * @param {backend.IMatchInfo=} [properties] Properties to set
         */
        function MatchInfo(properties) {
            this.playerInfoList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MatchInfo idGame.
         * @member {number|Long} idGame
         * @memberof backend.MatchInfo
         * @instance
         */
        MatchInfo.prototype.idGame = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MatchInfo idMap.
         * @member {number} idMap
         * @memberof backend.MatchInfo
         * @instance
         */
        MatchInfo.prototype.idMap = 0;

        /**
         * MatchInfo startDate.
         * @member {google.protobuf.ITimestamp|null|undefined} startDate
         * @memberof backend.MatchInfo
         * @instance
         */
        MatchInfo.prototype.startDate = null;

        /**
         * MatchInfo endDate.
         * @member {google.protobuf.ITimestamp|null|undefined} endDate
         * @memberof backend.MatchInfo
         * @instance
         */
        MatchInfo.prototype.endDate = null;

        /**
         * MatchInfo gameLength.
         * @member {number|Long} gameLength
         * @memberof backend.MatchInfo
         * @instance
         */
        MatchInfo.prototype.gameLength = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MatchInfo gameMode.
         * @member {number} gameMode
         * @memberof backend.MatchInfo
         * @instance
         */
        MatchInfo.prototype.gameMode = 0;

        /**
         * MatchInfo isRanked.
         * @member {boolean} isRanked
         * @memberof backend.MatchInfo
         * @instance
         */
        MatchInfo.prototype.isRanked = false;

        /**
         * MatchInfo playerCount.
         * @member {number} playerCount
         * @memberof backend.MatchInfo
         * @instance
         */
        MatchInfo.prototype.playerCount = 0;

        /**
         * MatchInfo playerInfoList.
         * @member {Array.<backend.IMatchPlayerInfo>} playerInfoList
         * @memberof backend.MatchInfo
         * @instance
         */
        MatchInfo.prototype.playerInfoList = $util.emptyArray;

        /**
         * Creates a new MatchInfo instance using the specified properties.
         * @function create
         * @memberof backend.MatchInfo
         * @static
         * @param {backend.IMatchInfo=} [properties] Properties to set
         * @returns {backend.MatchInfo} MatchInfo instance
         */
        MatchInfo.create = function create(properties) {
            return new MatchInfo(properties);
        };

        /**
         * Encodes the specified MatchInfo message. Does not implicitly {@link backend.MatchInfo.verify|verify} messages.
         * @function encode
         * @memberof backend.MatchInfo
         * @static
         * @param {backend.IMatchInfo} message MatchInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.idGame != null && Object.hasOwnProperty.call(message, "idGame"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.idGame);
            if (message.idMap != null && Object.hasOwnProperty.call(message, "idMap"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.idMap);
            if (message.startDate != null && Object.hasOwnProperty.call(message, "startDate"))
                $root.google.protobuf.Timestamp.encode(message.startDate, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.endDate != null && Object.hasOwnProperty.call(message, "endDate"))
                $root.google.protobuf.Timestamp.encode(message.endDate, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.gameLength != null && Object.hasOwnProperty.call(message, "gameLength"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.gameLength);
            if (message.gameMode != null && Object.hasOwnProperty.call(message, "gameMode"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.gameMode);
            if (message.isRanked != null && Object.hasOwnProperty.call(message, "isRanked"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.isRanked);
            if (message.playerCount != null && Object.hasOwnProperty.call(message, "playerCount"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.playerCount);
            if (message.playerInfoList != null && message.playerInfoList.length)
                for (let i = 0; i < message.playerInfoList.length; ++i)
                    $root.backend.MatchPlayerInfo.encode(message.playerInfoList[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MatchInfo message, length delimited. Does not implicitly {@link backend.MatchInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof backend.MatchInfo
         * @static
         * @param {backend.IMatchInfo} message MatchInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MatchInfo message from the specified reader or buffer.
         * @function decode
         * @memberof backend.MatchInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {backend.MatchInfo} MatchInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.MatchInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.idGame = reader.int64();
                        break;
                    }
                case 2: {
                        message.idMap = reader.int32();
                        break;
                    }
                case 3: {
                        message.startDate = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.endDate = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.gameLength = reader.int64();
                        break;
                    }
                case 6: {
                        message.gameMode = reader.int32();
                        break;
                    }
                case 7: {
                        message.isRanked = reader.bool();
                        break;
                    }
                case 8: {
                        message.playerCount = reader.int32();
                        break;
                    }
                case 9: {
                        if (!(message.playerInfoList && message.playerInfoList.length))
                            message.playerInfoList = [];
                        message.playerInfoList.push($root.backend.MatchPlayerInfo.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MatchInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof backend.MatchInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {backend.MatchInfo} MatchInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MatchInfo message.
         * @function verify
         * @memberof backend.MatchInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MatchInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.idGame != null && message.hasOwnProperty("idGame"))
                if (!$util.isInteger(message.idGame) && !(message.idGame && $util.isInteger(message.idGame.low) && $util.isInteger(message.idGame.high)))
                    return "idGame: integer|Long expected";
            if (message.idMap != null && message.hasOwnProperty("idMap"))
                if (!$util.isInteger(message.idMap))
                    return "idMap: integer expected";
            if (message.startDate != null && message.hasOwnProperty("startDate")) {
                let error = $root.google.protobuf.Timestamp.verify(message.startDate);
                if (error)
                    return "startDate." + error;
            }
            if (message.endDate != null && message.hasOwnProperty("endDate")) {
                let error = $root.google.protobuf.Timestamp.verify(message.endDate);
                if (error)
                    return "endDate." + error;
            }
            if (message.gameLength != null && message.hasOwnProperty("gameLength"))
                if (!$util.isInteger(message.gameLength) && !(message.gameLength && $util.isInteger(message.gameLength.low) && $util.isInteger(message.gameLength.high)))
                    return "gameLength: integer|Long expected";
            if (message.gameMode != null && message.hasOwnProperty("gameMode"))
                if (!$util.isInteger(message.gameMode))
                    return "gameMode: integer expected";
            if (message.isRanked != null && message.hasOwnProperty("isRanked"))
                if (typeof message.isRanked !== "boolean")
                    return "isRanked: boolean expected";
            if (message.playerCount != null && message.hasOwnProperty("playerCount"))
                if (!$util.isInteger(message.playerCount))
                    return "playerCount: integer expected";
            if (message.playerInfoList != null && message.hasOwnProperty("playerInfoList")) {
                if (!Array.isArray(message.playerInfoList))
                    return "playerInfoList: array expected";
                for (let i = 0; i < message.playerInfoList.length; ++i) {
                    let error = $root.backend.MatchPlayerInfo.verify(message.playerInfoList[i]);
                    if (error)
                        return "playerInfoList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a MatchInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof backend.MatchInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {backend.MatchInfo} MatchInfo
         */
        MatchInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.backend.MatchInfo)
                return object;
            let message = new $root.backend.MatchInfo();
            if (object.idGame != null)
                if ($util.Long)
                    (message.idGame = $util.Long.fromValue(object.idGame)).unsigned = false;
                else if (typeof object.idGame === "string")
                    message.idGame = parseInt(object.idGame, 10);
                else if (typeof object.idGame === "number")
                    message.idGame = object.idGame;
                else if (typeof object.idGame === "object")
                    message.idGame = new $util.LongBits(object.idGame.low >>> 0, object.idGame.high >>> 0).toNumber();
            if (object.idMap != null)
                message.idMap = object.idMap | 0;
            if (object.startDate != null) {
                if (typeof object.startDate !== "object")
                    throw TypeError(".backend.MatchInfo.startDate: object expected");
                message.startDate = $root.google.protobuf.Timestamp.fromObject(object.startDate);
            }
            if (object.endDate != null) {
                if (typeof object.endDate !== "object")
                    throw TypeError(".backend.MatchInfo.endDate: object expected");
                message.endDate = $root.google.protobuf.Timestamp.fromObject(object.endDate);
            }
            if (object.gameLength != null)
                if ($util.Long)
                    (message.gameLength = $util.Long.fromValue(object.gameLength)).unsigned = false;
                else if (typeof object.gameLength === "string")
                    message.gameLength = parseInt(object.gameLength, 10);
                else if (typeof object.gameLength === "number")
                    message.gameLength = object.gameLength;
                else if (typeof object.gameLength === "object")
                    message.gameLength = new $util.LongBits(object.gameLength.low >>> 0, object.gameLength.high >>> 0).toNumber();
            if (object.gameMode != null)
                message.gameMode = object.gameMode | 0;
            if (object.isRanked != null)
                message.isRanked = Boolean(object.isRanked);
            if (object.playerCount != null)
                message.playerCount = object.playerCount | 0;
            if (object.playerInfoList) {
                if (!Array.isArray(object.playerInfoList))
                    throw TypeError(".backend.MatchInfo.playerInfoList: array expected");
                message.playerInfoList = [];
                for (let i = 0; i < object.playerInfoList.length; ++i) {
                    if (typeof object.playerInfoList[i] !== "object")
                        throw TypeError(".backend.MatchInfo.playerInfoList: object expected");
                    message.playerInfoList[i] = $root.backend.MatchPlayerInfo.fromObject(object.playerInfoList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MatchInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof backend.MatchInfo
         * @static
         * @param {backend.MatchInfo} message MatchInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MatchInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.playerInfoList = [];
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.idGame = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.idGame = options.longs === String ? "0" : 0;
                object.idMap = 0;
                object.startDate = null;
                object.endDate = null;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.gameLength = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gameLength = options.longs === String ? "0" : 0;
                object.gameMode = 0;
                object.isRanked = false;
                object.playerCount = 0;
            }
            if (message.idGame != null && message.hasOwnProperty("idGame"))
                if (typeof message.idGame === "number")
                    object.idGame = options.longs === String ? String(message.idGame) : message.idGame;
                else
                    object.idGame = options.longs === String ? $util.Long.prototype.toString.call(message.idGame) : options.longs === Number ? new $util.LongBits(message.idGame.low >>> 0, message.idGame.high >>> 0).toNumber() : message.idGame;
            if (message.idMap != null && message.hasOwnProperty("idMap"))
                object.idMap = message.idMap;
            if (message.startDate != null && message.hasOwnProperty("startDate"))
                object.startDate = $root.google.protobuf.Timestamp.toObject(message.startDate, options);
            if (message.endDate != null && message.hasOwnProperty("endDate"))
                object.endDate = $root.google.protobuf.Timestamp.toObject(message.endDate, options);
            if (message.gameLength != null && message.hasOwnProperty("gameLength"))
                if (typeof message.gameLength === "number")
                    object.gameLength = options.longs === String ? String(message.gameLength) : message.gameLength;
                else
                    object.gameLength = options.longs === String ? $util.Long.prototype.toString.call(message.gameLength) : options.longs === Number ? new $util.LongBits(message.gameLength.low >>> 0, message.gameLength.high >>> 0).toNumber() : message.gameLength;
            if (message.gameMode != null && message.hasOwnProperty("gameMode"))
                object.gameMode = message.gameMode;
            if (message.isRanked != null && message.hasOwnProperty("isRanked"))
                object.isRanked = message.isRanked;
            if (message.playerCount != null && message.hasOwnProperty("playerCount"))
                object.playerCount = message.playerCount;
            if (message.playerInfoList && message.playerInfoList.length) {
                object.playerInfoList = [];
                for (let j = 0; j < message.playerInfoList.length; ++j)
                    object.playerInfoList[j] = $root.backend.MatchPlayerInfo.toObject(message.playerInfoList[j], options);
            }
            return object;
        };

        /**
         * Converts this MatchInfo to JSON.
         * @function toJSON
         * @memberof backend.MatchInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MatchInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MatchInfo;
    })();

    backend.MatchPlayerInfo = (function() {

        /**
         * Properties of a MatchPlayerInfo.
         * @memberof backend
         * @interface IMatchPlayerInfo
         * @property {number|Long|null} [idPlayer] MatchPlayerInfo idPlayer
         * @property {string|null} [playerName] MatchPlayerInfo playerName
         * @property {number|null} [team] MatchPlayerInfo team
         * @property {number|null} [result] MatchPlayerInfo result
         * @property {number|null} [eloBefore] MatchPlayerInfo eloBefore
         * @property {number|null} [eloAfter] MatchPlayerInfo eloAfter
         * @property {number|null} [idCiv] MatchPlayerInfo idCiv
         */

        /**
         * Constructs a new MatchPlayerInfo.
         * @memberof backend
         * @classdesc Represents a MatchPlayerInfo.
         * @implements IMatchPlayerInfo
         * @constructor
         * @param {backend.IMatchPlayerInfo=} [properties] Properties to set
         */
        function MatchPlayerInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MatchPlayerInfo idPlayer.
         * @member {number|Long} idPlayer
         * @memberof backend.MatchPlayerInfo
         * @instance
         */
        MatchPlayerInfo.prototype.idPlayer = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MatchPlayerInfo playerName.
         * @member {string} playerName
         * @memberof backend.MatchPlayerInfo
         * @instance
         */
        MatchPlayerInfo.prototype.playerName = "";

        /**
         * MatchPlayerInfo team.
         * @member {number} team
         * @memberof backend.MatchPlayerInfo
         * @instance
         */
        MatchPlayerInfo.prototype.team = 0;

        /**
         * MatchPlayerInfo result.
         * @member {number} result
         * @memberof backend.MatchPlayerInfo
         * @instance
         */
        MatchPlayerInfo.prototype.result = 0;

        /**
         * MatchPlayerInfo eloBefore.
         * @member {number} eloBefore
         * @memberof backend.MatchPlayerInfo
         * @instance
         */
        MatchPlayerInfo.prototype.eloBefore = 0;

        /**
         * MatchPlayerInfo eloAfter.
         * @member {number} eloAfter
         * @memberof backend.MatchPlayerInfo
         * @instance
         */
        MatchPlayerInfo.prototype.eloAfter = 0;

        /**
         * MatchPlayerInfo idCiv.
         * @member {number} idCiv
         * @memberof backend.MatchPlayerInfo
         * @instance
         */
        MatchPlayerInfo.prototype.idCiv = 0;

        /**
         * Creates a new MatchPlayerInfo instance using the specified properties.
         * @function create
         * @memberof backend.MatchPlayerInfo
         * @static
         * @param {backend.IMatchPlayerInfo=} [properties] Properties to set
         * @returns {backend.MatchPlayerInfo} MatchPlayerInfo instance
         */
        MatchPlayerInfo.create = function create(properties) {
            return new MatchPlayerInfo(properties);
        };

        /**
         * Encodes the specified MatchPlayerInfo message. Does not implicitly {@link backend.MatchPlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof backend.MatchPlayerInfo
         * @static
         * @param {backend.IMatchPlayerInfo} message MatchPlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchPlayerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.idPlayer != null && Object.hasOwnProperty.call(message, "idPlayer"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.idPlayer);
            if (message.playerName != null && Object.hasOwnProperty.call(message, "playerName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.playerName);
            if (message.team != null && Object.hasOwnProperty.call(message, "team"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.team);
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.result);
            if (message.eloBefore != null && Object.hasOwnProperty.call(message, "eloBefore"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.eloBefore);
            if (message.eloAfter != null && Object.hasOwnProperty.call(message, "eloAfter"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.eloAfter);
            if (message.idCiv != null && Object.hasOwnProperty.call(message, "idCiv"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.idCiv);
            return writer;
        };

        /**
         * Encodes the specified MatchPlayerInfo message, length delimited. Does not implicitly {@link backend.MatchPlayerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof backend.MatchPlayerInfo
         * @static
         * @param {backend.IMatchPlayerInfo} message MatchPlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchPlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MatchPlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof backend.MatchPlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {backend.MatchPlayerInfo} MatchPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchPlayerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.MatchPlayerInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.idPlayer = reader.int64();
                        break;
                    }
                case 2: {
                        message.playerName = reader.string();
                        break;
                    }
                case 3: {
                        message.team = reader.int32();
                        break;
                    }
                case 4: {
                        message.result = reader.int32();
                        break;
                    }
                case 5: {
                        message.eloBefore = reader.int32();
                        break;
                    }
                case 6: {
                        message.eloAfter = reader.int32();
                        break;
                    }
                case 7: {
                        message.idCiv = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MatchPlayerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof backend.MatchPlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {backend.MatchPlayerInfo} MatchPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchPlayerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MatchPlayerInfo message.
         * @function verify
         * @memberof backend.MatchPlayerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MatchPlayerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.idPlayer != null && message.hasOwnProperty("idPlayer"))
                if (!$util.isInteger(message.idPlayer) && !(message.idPlayer && $util.isInteger(message.idPlayer.low) && $util.isInteger(message.idPlayer.high)))
                    return "idPlayer: integer|Long expected";
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                if (!$util.isString(message.playerName))
                    return "playerName: string expected";
            if (message.team != null && message.hasOwnProperty("team"))
                if (!$util.isInteger(message.team))
                    return "team: integer expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.eloBefore != null && message.hasOwnProperty("eloBefore"))
                if (!$util.isInteger(message.eloBefore))
                    return "eloBefore: integer expected";
            if (message.eloAfter != null && message.hasOwnProperty("eloAfter"))
                if (!$util.isInteger(message.eloAfter))
                    return "eloAfter: integer expected";
            if (message.idCiv != null && message.hasOwnProperty("idCiv"))
                if (!$util.isInteger(message.idCiv))
                    return "idCiv: integer expected";
            return null;
        };

        /**
         * Creates a MatchPlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof backend.MatchPlayerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {backend.MatchPlayerInfo} MatchPlayerInfo
         */
        MatchPlayerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.backend.MatchPlayerInfo)
                return object;
            let message = new $root.backend.MatchPlayerInfo();
            if (object.idPlayer != null)
                if ($util.Long)
                    (message.idPlayer = $util.Long.fromValue(object.idPlayer)).unsigned = false;
                else if (typeof object.idPlayer === "string")
                    message.idPlayer = parseInt(object.idPlayer, 10);
                else if (typeof object.idPlayer === "number")
                    message.idPlayer = object.idPlayer;
                else if (typeof object.idPlayer === "object")
                    message.idPlayer = new $util.LongBits(object.idPlayer.low >>> 0, object.idPlayer.high >>> 0).toNumber();
            if (object.playerName != null)
                message.playerName = String(object.playerName);
            if (object.team != null)
                message.team = object.team | 0;
            if (object.result != null)
                message.result = object.result | 0;
            if (object.eloBefore != null)
                message.eloBefore = object.eloBefore | 0;
            if (object.eloAfter != null)
                message.eloAfter = object.eloAfter | 0;
            if (object.idCiv != null)
                message.idCiv = object.idCiv | 0;
            return message;
        };

        /**
         * Creates a plain object from a MatchPlayerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof backend.MatchPlayerInfo
         * @static
         * @param {backend.MatchPlayerInfo} message MatchPlayerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MatchPlayerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.idPlayer = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.idPlayer = options.longs === String ? "0" : 0;
                object.playerName = "";
                object.team = 0;
                object.result = 0;
                object.eloBefore = 0;
                object.eloAfter = 0;
                object.idCiv = 0;
            }
            if (message.idPlayer != null && message.hasOwnProperty("idPlayer"))
                if (typeof message.idPlayer === "number")
                    object.idPlayer = options.longs === String ? String(message.idPlayer) : message.idPlayer;
                else
                    object.idPlayer = options.longs === String ? $util.Long.prototype.toString.call(message.idPlayer) : options.longs === Number ? new $util.LongBits(message.idPlayer.low >>> 0, message.idPlayer.high >>> 0).toNumber() : message.idPlayer;
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                object.playerName = message.playerName;
            if (message.team != null && message.hasOwnProperty("team"))
                object.team = message.team;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.eloBefore != null && message.hasOwnProperty("eloBefore"))
                object.eloBefore = message.eloBefore;
            if (message.eloAfter != null && message.hasOwnProperty("eloAfter"))
                object.eloAfter = message.eloAfter;
            if (message.idCiv != null && message.hasOwnProperty("idCiv"))
                object.idCiv = message.idCiv;
            return object;
        };

        /**
         * Converts this MatchPlayerInfo to JSON.
         * @function toJSON
         * @memberof backend.MatchPlayerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MatchPlayerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MatchPlayerInfo;
    })();

    backend.MatchPlayerDetail = (function() {

        /**
         * Properties of a MatchPlayerDetail.
         * @memberof backend
         * @interface IMatchPlayerDetail
         * @property {number|Long|null} [idPlayer] MatchPlayerDetail idPlayer
         * @property {string|null} [playerName] MatchPlayerDetail playerName
         * @property {number|null} [team] MatchPlayerDetail team
         * @property {number|null} [result] MatchPlayerDetail result
         * @property {number|null} [eloBefore] MatchPlayerDetail eloBefore
         * @property {number|null} [eloAfter] MatchPlayerDetail eloAfter
         * @property {number|null} [idCiv] MatchPlayerDetail idCiv
         * @property {number|null} [isHigestScore] MatchPlayerDetail isHigestScore
         * @property {number|null} [isLeastResources] MatchPlayerDetail isLeastResources
         * @property {number|null} [isMostImprovements] MatchPlayerDetail isMostImprovements
         * @property {number|null} [isMostKills] MatchPlayerDetail isMostKills
         * @property {number|null} [isMostLosses] MatchPlayerDetail isMostLosses
         * @property {number|null} [isMostMilitary] MatchPlayerDetail isMostMilitary
         * @property {number|null} [isMostResources] MatchPlayerDetail isMostResources
         * @property {number|null} [isMostTreasures] MatchPlayerDetail isMostTreasures
         * @property {number|null} [scoreEconomic] MatchPlayerDetail scoreEconomic
         * @property {number|null} [scoreMilitary] MatchPlayerDetail scoreMilitary
         * @property {number|null} [scoreTotal] MatchPlayerDetail scoreTotal
         * @property {number|null} [buildingLost] MatchPlayerDetail buildingLost
         * @property {number|null} [buildingRazed] MatchPlayerDetail buildingRazed
         * @property {number|null} [unitsConverted] MatchPlayerDetail unitsConverted
         * @property {number|null} [unitsKilled] MatchPlayerDetail unitsKilled
         * @property {number|null} [unitsLost] MatchPlayerDetail unitsLost
         */

        /**
         * Constructs a new MatchPlayerDetail.
         * @memberof backend
         * @classdesc Represents a MatchPlayerDetail.
         * @implements IMatchPlayerDetail
         * @constructor
         * @param {backend.IMatchPlayerDetail=} [properties] Properties to set
         */
        function MatchPlayerDetail(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MatchPlayerDetail idPlayer.
         * @member {number|Long} idPlayer
         * @memberof backend.MatchPlayerDetail
         * @instance
         */
        MatchPlayerDetail.prototype.idPlayer = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MatchPlayerDetail playerName.
         * @member {string} playerName
         * @memberof backend.MatchPlayerDetail
         * @instance
         */
        MatchPlayerDetail.prototype.playerName = "";

        /**
         * MatchPlayerDetail team.
         * @member {number} team
         * @memberof backend.MatchPlayerDetail
         * @instance
         */
        MatchPlayerDetail.prototype.team = 0;

        /**
         * MatchPlayerDetail result.
         * @member {number} result
         * @memberof backend.MatchPlayerDetail
         * @instance
         */
        MatchPlayerDetail.prototype.result = 0;

        /**
         * MatchPlayerDetail eloBefore.
         * @member {number} eloBefore
         * @memberof backend.MatchPlayerDetail
         * @instance
         */
        MatchPlayerDetail.prototype.eloBefore = 0;

        /**
         * MatchPlayerDetail eloAfter.
         * @member {number} eloAfter
         * @memberof backend.MatchPlayerDetail
         * @instance
         */
        MatchPlayerDetail.prototype.eloAfter = 0;

        /**
         * MatchPlayerDetail idCiv.
         * @member {number} idCiv
         * @memberof backend.MatchPlayerDetail
         * @instance
         */
        MatchPlayerDetail.prototype.idCiv = 0;

        /**
         * MatchPlayerDetail isHigestScore.
         * @member {number} isHigestScore
         * @memberof backend.MatchPlayerDetail
         * @instance
         */
        MatchPlayerDetail.prototype.isHigestScore = 0;

        /**
         * MatchPlayerDetail isLeastResources.
         * @member {number} isLeastResources
         * @memberof backend.MatchPlayerDetail
         * @instance
         */
        MatchPlayerDetail.prototype.isLeastResources = 0;

        /**
         * MatchPlayerDetail isMostImprovements.
         * @member {number} isMostImprovements
         * @memberof backend.MatchPlayerDetail
         * @instance
         */
        MatchPlayerDetail.prototype.isMostImprovements = 0;

        /**
         * MatchPlayerDetail isMostKills.
         * @member {number} isMostKills
         * @memberof backend.MatchPlayerDetail
         * @instance
         */
        MatchPlayerDetail.prototype.isMostKills = 0;

        /**
         * MatchPlayerDetail isMostLosses.
         * @member {number} isMostLosses
         * @memberof backend.MatchPlayerDetail
         * @instance
         */
        MatchPlayerDetail.prototype.isMostLosses = 0;

        /**
         * MatchPlayerDetail isMostMilitary.
         * @member {number} isMostMilitary
         * @memberof backend.MatchPlayerDetail
         * @instance
         */
        MatchPlayerDetail.prototype.isMostMilitary = 0;

        /**
         * MatchPlayerDetail isMostResources.
         * @member {number} isMostResources
         * @memberof backend.MatchPlayerDetail
         * @instance
         */
        MatchPlayerDetail.prototype.isMostResources = 0;

        /**
         * MatchPlayerDetail isMostTreasures.
         * @member {number} isMostTreasures
         * @memberof backend.MatchPlayerDetail
         * @instance
         */
        MatchPlayerDetail.prototype.isMostTreasures = 0;

        /**
         * MatchPlayerDetail scoreEconomic.
         * @member {number} scoreEconomic
         * @memberof backend.MatchPlayerDetail
         * @instance
         */
        MatchPlayerDetail.prototype.scoreEconomic = 0;

        /**
         * MatchPlayerDetail scoreMilitary.
         * @member {number} scoreMilitary
         * @memberof backend.MatchPlayerDetail
         * @instance
         */
        MatchPlayerDetail.prototype.scoreMilitary = 0;

        /**
         * MatchPlayerDetail scoreTotal.
         * @member {number} scoreTotal
         * @memberof backend.MatchPlayerDetail
         * @instance
         */
        MatchPlayerDetail.prototype.scoreTotal = 0;

        /**
         * MatchPlayerDetail buildingLost.
         * @member {number} buildingLost
         * @memberof backend.MatchPlayerDetail
         * @instance
         */
        MatchPlayerDetail.prototype.buildingLost = 0;

        /**
         * MatchPlayerDetail buildingRazed.
         * @member {number} buildingRazed
         * @memberof backend.MatchPlayerDetail
         * @instance
         */
        MatchPlayerDetail.prototype.buildingRazed = 0;

        /**
         * MatchPlayerDetail unitsConverted.
         * @member {number} unitsConverted
         * @memberof backend.MatchPlayerDetail
         * @instance
         */
        MatchPlayerDetail.prototype.unitsConverted = 0;

        /**
         * MatchPlayerDetail unitsKilled.
         * @member {number} unitsKilled
         * @memberof backend.MatchPlayerDetail
         * @instance
         */
        MatchPlayerDetail.prototype.unitsKilled = 0;

        /**
         * MatchPlayerDetail unitsLost.
         * @member {number} unitsLost
         * @memberof backend.MatchPlayerDetail
         * @instance
         */
        MatchPlayerDetail.prototype.unitsLost = 0;

        /**
         * Creates a new MatchPlayerDetail instance using the specified properties.
         * @function create
         * @memberof backend.MatchPlayerDetail
         * @static
         * @param {backend.IMatchPlayerDetail=} [properties] Properties to set
         * @returns {backend.MatchPlayerDetail} MatchPlayerDetail instance
         */
        MatchPlayerDetail.create = function create(properties) {
            return new MatchPlayerDetail(properties);
        };

        /**
         * Encodes the specified MatchPlayerDetail message. Does not implicitly {@link backend.MatchPlayerDetail.verify|verify} messages.
         * @function encode
         * @memberof backend.MatchPlayerDetail
         * @static
         * @param {backend.IMatchPlayerDetail} message MatchPlayerDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchPlayerDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.idPlayer != null && Object.hasOwnProperty.call(message, "idPlayer"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.idPlayer);
            if (message.playerName != null && Object.hasOwnProperty.call(message, "playerName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.playerName);
            if (message.team != null && Object.hasOwnProperty.call(message, "team"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.team);
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.result);
            if (message.eloBefore != null && Object.hasOwnProperty.call(message, "eloBefore"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.eloBefore);
            if (message.eloAfter != null && Object.hasOwnProperty.call(message, "eloAfter"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.eloAfter);
            if (message.idCiv != null && Object.hasOwnProperty.call(message, "idCiv"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.idCiv);
            if (message.isHigestScore != null && Object.hasOwnProperty.call(message, "isHigestScore"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.isHigestScore);
            if (message.isLeastResources != null && Object.hasOwnProperty.call(message, "isLeastResources"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.isLeastResources);
            if (message.isMostImprovements != null && Object.hasOwnProperty.call(message, "isMostImprovements"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.isMostImprovements);
            if (message.isMostKills != null && Object.hasOwnProperty.call(message, "isMostKills"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.isMostKills);
            if (message.isMostLosses != null && Object.hasOwnProperty.call(message, "isMostLosses"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.isMostLosses);
            if (message.isMostMilitary != null && Object.hasOwnProperty.call(message, "isMostMilitary"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.isMostMilitary);
            if (message.isMostResources != null && Object.hasOwnProperty.call(message, "isMostResources"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.isMostResources);
            if (message.isMostTreasures != null && Object.hasOwnProperty.call(message, "isMostTreasures"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.isMostTreasures);
            if (message.scoreEconomic != null && Object.hasOwnProperty.call(message, "scoreEconomic"))
                writer.uint32(/* id 16, wireType 0 =*/128).int32(message.scoreEconomic);
            if (message.scoreMilitary != null && Object.hasOwnProperty.call(message, "scoreMilitary"))
                writer.uint32(/* id 17, wireType 0 =*/136).int32(message.scoreMilitary);
            if (message.scoreTotal != null && Object.hasOwnProperty.call(message, "scoreTotal"))
                writer.uint32(/* id 18, wireType 0 =*/144).int32(message.scoreTotal);
            if (message.buildingLost != null && Object.hasOwnProperty.call(message, "buildingLost"))
                writer.uint32(/* id 19, wireType 0 =*/152).int32(message.buildingLost);
            if (message.buildingRazed != null && Object.hasOwnProperty.call(message, "buildingRazed"))
                writer.uint32(/* id 20, wireType 0 =*/160).int32(message.buildingRazed);
            if (message.unitsConverted != null && Object.hasOwnProperty.call(message, "unitsConverted"))
                writer.uint32(/* id 21, wireType 0 =*/168).int32(message.unitsConverted);
            if (message.unitsKilled != null && Object.hasOwnProperty.call(message, "unitsKilled"))
                writer.uint32(/* id 22, wireType 0 =*/176).int32(message.unitsKilled);
            if (message.unitsLost != null && Object.hasOwnProperty.call(message, "unitsLost"))
                writer.uint32(/* id 23, wireType 0 =*/184).int32(message.unitsLost);
            return writer;
        };

        /**
         * Encodes the specified MatchPlayerDetail message, length delimited. Does not implicitly {@link backend.MatchPlayerDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof backend.MatchPlayerDetail
         * @static
         * @param {backend.IMatchPlayerDetail} message MatchPlayerDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchPlayerDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MatchPlayerDetail message from the specified reader or buffer.
         * @function decode
         * @memberof backend.MatchPlayerDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {backend.MatchPlayerDetail} MatchPlayerDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchPlayerDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.MatchPlayerDetail();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.idPlayer = reader.int64();
                        break;
                    }
                case 2: {
                        message.playerName = reader.string();
                        break;
                    }
                case 3: {
                        message.team = reader.int32();
                        break;
                    }
                case 4: {
                        message.result = reader.int32();
                        break;
                    }
                case 5: {
                        message.eloBefore = reader.int32();
                        break;
                    }
                case 6: {
                        message.eloAfter = reader.int32();
                        break;
                    }
                case 7: {
                        message.idCiv = reader.int32();
                        break;
                    }
                case 8: {
                        message.isHigestScore = reader.int32();
                        break;
                    }
                case 9: {
                        message.isLeastResources = reader.int32();
                        break;
                    }
                case 10: {
                        message.isMostImprovements = reader.int32();
                        break;
                    }
                case 11: {
                        message.isMostKills = reader.int32();
                        break;
                    }
                case 12: {
                        message.isMostLosses = reader.int32();
                        break;
                    }
                case 13: {
                        message.isMostMilitary = reader.int32();
                        break;
                    }
                case 14: {
                        message.isMostResources = reader.int32();
                        break;
                    }
                case 15: {
                        message.isMostTreasures = reader.int32();
                        break;
                    }
                case 16: {
                        message.scoreEconomic = reader.int32();
                        break;
                    }
                case 17: {
                        message.scoreMilitary = reader.int32();
                        break;
                    }
                case 18: {
                        message.scoreTotal = reader.int32();
                        break;
                    }
                case 19: {
                        message.buildingLost = reader.int32();
                        break;
                    }
                case 20: {
                        message.buildingRazed = reader.int32();
                        break;
                    }
                case 21: {
                        message.unitsConverted = reader.int32();
                        break;
                    }
                case 22: {
                        message.unitsKilled = reader.int32();
                        break;
                    }
                case 23: {
                        message.unitsLost = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MatchPlayerDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof backend.MatchPlayerDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {backend.MatchPlayerDetail} MatchPlayerDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchPlayerDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MatchPlayerDetail message.
         * @function verify
         * @memberof backend.MatchPlayerDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MatchPlayerDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.idPlayer != null && message.hasOwnProperty("idPlayer"))
                if (!$util.isInteger(message.idPlayer) && !(message.idPlayer && $util.isInteger(message.idPlayer.low) && $util.isInteger(message.idPlayer.high)))
                    return "idPlayer: integer|Long expected";
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                if (!$util.isString(message.playerName))
                    return "playerName: string expected";
            if (message.team != null && message.hasOwnProperty("team"))
                if (!$util.isInteger(message.team))
                    return "team: integer expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.eloBefore != null && message.hasOwnProperty("eloBefore"))
                if (!$util.isInteger(message.eloBefore))
                    return "eloBefore: integer expected";
            if (message.eloAfter != null && message.hasOwnProperty("eloAfter"))
                if (!$util.isInteger(message.eloAfter))
                    return "eloAfter: integer expected";
            if (message.idCiv != null && message.hasOwnProperty("idCiv"))
                if (!$util.isInteger(message.idCiv))
                    return "idCiv: integer expected";
            if (message.isHigestScore != null && message.hasOwnProperty("isHigestScore"))
                if (!$util.isInteger(message.isHigestScore))
                    return "isHigestScore: integer expected";
            if (message.isLeastResources != null && message.hasOwnProperty("isLeastResources"))
                if (!$util.isInteger(message.isLeastResources))
                    return "isLeastResources: integer expected";
            if (message.isMostImprovements != null && message.hasOwnProperty("isMostImprovements"))
                if (!$util.isInteger(message.isMostImprovements))
                    return "isMostImprovements: integer expected";
            if (message.isMostKills != null && message.hasOwnProperty("isMostKills"))
                if (!$util.isInteger(message.isMostKills))
                    return "isMostKills: integer expected";
            if (message.isMostLosses != null && message.hasOwnProperty("isMostLosses"))
                if (!$util.isInteger(message.isMostLosses))
                    return "isMostLosses: integer expected";
            if (message.isMostMilitary != null && message.hasOwnProperty("isMostMilitary"))
                if (!$util.isInteger(message.isMostMilitary))
                    return "isMostMilitary: integer expected";
            if (message.isMostResources != null && message.hasOwnProperty("isMostResources"))
                if (!$util.isInteger(message.isMostResources))
                    return "isMostResources: integer expected";
            if (message.isMostTreasures != null && message.hasOwnProperty("isMostTreasures"))
                if (!$util.isInteger(message.isMostTreasures))
                    return "isMostTreasures: integer expected";
            if (message.scoreEconomic != null && message.hasOwnProperty("scoreEconomic"))
                if (!$util.isInteger(message.scoreEconomic))
                    return "scoreEconomic: integer expected";
            if (message.scoreMilitary != null && message.hasOwnProperty("scoreMilitary"))
                if (!$util.isInteger(message.scoreMilitary))
                    return "scoreMilitary: integer expected";
            if (message.scoreTotal != null && message.hasOwnProperty("scoreTotal"))
                if (!$util.isInteger(message.scoreTotal))
                    return "scoreTotal: integer expected";
            if (message.buildingLost != null && message.hasOwnProperty("buildingLost"))
                if (!$util.isInteger(message.buildingLost))
                    return "buildingLost: integer expected";
            if (message.buildingRazed != null && message.hasOwnProperty("buildingRazed"))
                if (!$util.isInteger(message.buildingRazed))
                    return "buildingRazed: integer expected";
            if (message.unitsConverted != null && message.hasOwnProperty("unitsConverted"))
                if (!$util.isInteger(message.unitsConverted))
                    return "unitsConverted: integer expected";
            if (message.unitsKilled != null && message.hasOwnProperty("unitsKilled"))
                if (!$util.isInteger(message.unitsKilled))
                    return "unitsKilled: integer expected";
            if (message.unitsLost != null && message.hasOwnProperty("unitsLost"))
                if (!$util.isInteger(message.unitsLost))
                    return "unitsLost: integer expected";
            return null;
        };

        /**
         * Creates a MatchPlayerDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof backend.MatchPlayerDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {backend.MatchPlayerDetail} MatchPlayerDetail
         */
        MatchPlayerDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.backend.MatchPlayerDetail)
                return object;
            let message = new $root.backend.MatchPlayerDetail();
            if (object.idPlayer != null)
                if ($util.Long)
                    (message.idPlayer = $util.Long.fromValue(object.idPlayer)).unsigned = false;
                else if (typeof object.idPlayer === "string")
                    message.idPlayer = parseInt(object.idPlayer, 10);
                else if (typeof object.idPlayer === "number")
                    message.idPlayer = object.idPlayer;
                else if (typeof object.idPlayer === "object")
                    message.idPlayer = new $util.LongBits(object.idPlayer.low >>> 0, object.idPlayer.high >>> 0).toNumber();
            if (object.playerName != null)
                message.playerName = String(object.playerName);
            if (object.team != null)
                message.team = object.team | 0;
            if (object.result != null)
                message.result = object.result | 0;
            if (object.eloBefore != null)
                message.eloBefore = object.eloBefore | 0;
            if (object.eloAfter != null)
                message.eloAfter = object.eloAfter | 0;
            if (object.idCiv != null)
                message.idCiv = object.idCiv | 0;
            if (object.isHigestScore != null)
                message.isHigestScore = object.isHigestScore | 0;
            if (object.isLeastResources != null)
                message.isLeastResources = object.isLeastResources | 0;
            if (object.isMostImprovements != null)
                message.isMostImprovements = object.isMostImprovements | 0;
            if (object.isMostKills != null)
                message.isMostKills = object.isMostKills | 0;
            if (object.isMostLosses != null)
                message.isMostLosses = object.isMostLosses | 0;
            if (object.isMostMilitary != null)
                message.isMostMilitary = object.isMostMilitary | 0;
            if (object.isMostResources != null)
                message.isMostResources = object.isMostResources | 0;
            if (object.isMostTreasures != null)
                message.isMostTreasures = object.isMostTreasures | 0;
            if (object.scoreEconomic != null)
                message.scoreEconomic = object.scoreEconomic | 0;
            if (object.scoreMilitary != null)
                message.scoreMilitary = object.scoreMilitary | 0;
            if (object.scoreTotal != null)
                message.scoreTotal = object.scoreTotal | 0;
            if (object.buildingLost != null)
                message.buildingLost = object.buildingLost | 0;
            if (object.buildingRazed != null)
                message.buildingRazed = object.buildingRazed | 0;
            if (object.unitsConverted != null)
                message.unitsConverted = object.unitsConverted | 0;
            if (object.unitsKilled != null)
                message.unitsKilled = object.unitsKilled | 0;
            if (object.unitsLost != null)
                message.unitsLost = object.unitsLost | 0;
            return message;
        };

        /**
         * Creates a plain object from a MatchPlayerDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof backend.MatchPlayerDetail
         * @static
         * @param {backend.MatchPlayerDetail} message MatchPlayerDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MatchPlayerDetail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.idPlayer = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.idPlayer = options.longs === String ? "0" : 0;
                object.playerName = "";
                object.team = 0;
                object.result = 0;
                object.eloBefore = 0;
                object.eloAfter = 0;
                object.idCiv = 0;
                object.isHigestScore = 0;
                object.isLeastResources = 0;
                object.isMostImprovements = 0;
                object.isMostKills = 0;
                object.isMostLosses = 0;
                object.isMostMilitary = 0;
                object.isMostResources = 0;
                object.isMostTreasures = 0;
                object.scoreEconomic = 0;
                object.scoreMilitary = 0;
                object.scoreTotal = 0;
                object.buildingLost = 0;
                object.buildingRazed = 0;
                object.unitsConverted = 0;
                object.unitsKilled = 0;
                object.unitsLost = 0;
            }
            if (message.idPlayer != null && message.hasOwnProperty("idPlayer"))
                if (typeof message.idPlayer === "number")
                    object.idPlayer = options.longs === String ? String(message.idPlayer) : message.idPlayer;
                else
                    object.idPlayer = options.longs === String ? $util.Long.prototype.toString.call(message.idPlayer) : options.longs === Number ? new $util.LongBits(message.idPlayer.low >>> 0, message.idPlayer.high >>> 0).toNumber() : message.idPlayer;
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                object.playerName = message.playerName;
            if (message.team != null && message.hasOwnProperty("team"))
                object.team = message.team;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.eloBefore != null && message.hasOwnProperty("eloBefore"))
                object.eloBefore = message.eloBefore;
            if (message.eloAfter != null && message.hasOwnProperty("eloAfter"))
                object.eloAfter = message.eloAfter;
            if (message.idCiv != null && message.hasOwnProperty("idCiv"))
                object.idCiv = message.idCiv;
            if (message.isHigestScore != null && message.hasOwnProperty("isHigestScore"))
                object.isHigestScore = message.isHigestScore;
            if (message.isLeastResources != null && message.hasOwnProperty("isLeastResources"))
                object.isLeastResources = message.isLeastResources;
            if (message.isMostImprovements != null && message.hasOwnProperty("isMostImprovements"))
                object.isMostImprovements = message.isMostImprovements;
            if (message.isMostKills != null && message.hasOwnProperty("isMostKills"))
                object.isMostKills = message.isMostKills;
            if (message.isMostLosses != null && message.hasOwnProperty("isMostLosses"))
                object.isMostLosses = message.isMostLosses;
            if (message.isMostMilitary != null && message.hasOwnProperty("isMostMilitary"))
                object.isMostMilitary = message.isMostMilitary;
            if (message.isMostResources != null && message.hasOwnProperty("isMostResources"))
                object.isMostResources = message.isMostResources;
            if (message.isMostTreasures != null && message.hasOwnProperty("isMostTreasures"))
                object.isMostTreasures = message.isMostTreasures;
            if (message.scoreEconomic != null && message.hasOwnProperty("scoreEconomic"))
                object.scoreEconomic = message.scoreEconomic;
            if (message.scoreMilitary != null && message.hasOwnProperty("scoreMilitary"))
                object.scoreMilitary = message.scoreMilitary;
            if (message.scoreTotal != null && message.hasOwnProperty("scoreTotal"))
                object.scoreTotal = message.scoreTotal;
            if (message.buildingLost != null && message.hasOwnProperty("buildingLost"))
                object.buildingLost = message.buildingLost;
            if (message.buildingRazed != null && message.hasOwnProperty("buildingRazed"))
                object.buildingRazed = message.buildingRazed;
            if (message.unitsConverted != null && message.hasOwnProperty("unitsConverted"))
                object.unitsConverted = message.unitsConverted;
            if (message.unitsKilled != null && message.hasOwnProperty("unitsKilled"))
                object.unitsKilled = message.unitsKilled;
            if (message.unitsLost != null && message.hasOwnProperty("unitsLost"))
                object.unitsLost = message.unitsLost;
            return object;
        };

        /**
         * Converts this MatchPlayerDetail to JSON.
         * @function toJSON
         * @memberof backend.MatchPlayerDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MatchPlayerDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MatchPlayerDetail;
    })();

    backend.ObservableList = (function() {

        /**
         * Properties of an ObservableList.
         * @memberof backend
         * @interface IObservableList
         * @property {google.protobuf.ITimestamp|null} [lastUpdateDate] ObservableList lastUpdateDate
         * @property {Array.<backend.IObservableMatchInfo>|null} [observableList] ObservableList observableList
         */

        /**
         * Constructs a new ObservableList.
         * @memberof backend
         * @classdesc Represents an ObservableList.
         * @implements IObservableList
         * @constructor
         * @param {backend.IObservableList=} [properties] Properties to set
         */
        function ObservableList(properties) {
            this.observableList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ObservableList lastUpdateDate.
         * @member {google.protobuf.ITimestamp|null|undefined} lastUpdateDate
         * @memberof backend.ObservableList
         * @instance
         */
        ObservableList.prototype.lastUpdateDate = null;

        /**
         * ObservableList observableList.
         * @member {Array.<backend.IObservableMatchInfo>} observableList
         * @memberof backend.ObservableList
         * @instance
         */
        ObservableList.prototype.observableList = $util.emptyArray;

        /**
         * Creates a new ObservableList instance using the specified properties.
         * @function create
         * @memberof backend.ObservableList
         * @static
         * @param {backend.IObservableList=} [properties] Properties to set
         * @returns {backend.ObservableList} ObservableList instance
         */
        ObservableList.create = function create(properties) {
            return new ObservableList(properties);
        };

        /**
         * Encodes the specified ObservableList message. Does not implicitly {@link backend.ObservableList.verify|verify} messages.
         * @function encode
         * @memberof backend.ObservableList
         * @static
         * @param {backend.IObservableList} message ObservableList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObservableList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.lastUpdateDate != null && Object.hasOwnProperty.call(message, "lastUpdateDate"))
                $root.google.protobuf.Timestamp.encode(message.lastUpdateDate, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.observableList != null && message.observableList.length)
                for (let i = 0; i < message.observableList.length; ++i)
                    $root.backend.ObservableMatchInfo.encode(message.observableList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ObservableList message, length delimited. Does not implicitly {@link backend.ObservableList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof backend.ObservableList
         * @static
         * @param {backend.IObservableList} message ObservableList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObservableList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ObservableList message from the specified reader or buffer.
         * @function decode
         * @memberof backend.ObservableList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {backend.ObservableList} ObservableList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObservableList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.ObservableList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.lastUpdateDate = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        if (!(message.observableList && message.observableList.length))
                            message.observableList = [];
                        message.observableList.push($root.backend.ObservableMatchInfo.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ObservableList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof backend.ObservableList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {backend.ObservableList} ObservableList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObservableList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ObservableList message.
         * @function verify
         * @memberof backend.ObservableList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ObservableList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.lastUpdateDate != null && message.hasOwnProperty("lastUpdateDate")) {
                let error = $root.google.protobuf.Timestamp.verify(message.lastUpdateDate);
                if (error)
                    return "lastUpdateDate." + error;
            }
            if (message.observableList != null && message.hasOwnProperty("observableList")) {
                if (!Array.isArray(message.observableList))
                    return "observableList: array expected";
                for (let i = 0; i < message.observableList.length; ++i) {
                    let error = $root.backend.ObservableMatchInfo.verify(message.observableList[i]);
                    if (error)
                        return "observableList." + error;
                }
            }
            return null;
        };

        /**
         * Creates an ObservableList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof backend.ObservableList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {backend.ObservableList} ObservableList
         */
        ObservableList.fromObject = function fromObject(object) {
            if (object instanceof $root.backend.ObservableList)
                return object;
            let message = new $root.backend.ObservableList();
            if (object.lastUpdateDate != null) {
                if (typeof object.lastUpdateDate !== "object")
                    throw TypeError(".backend.ObservableList.lastUpdateDate: object expected");
                message.lastUpdateDate = $root.google.protobuf.Timestamp.fromObject(object.lastUpdateDate);
            }
            if (object.observableList) {
                if (!Array.isArray(object.observableList))
                    throw TypeError(".backend.ObservableList.observableList: array expected");
                message.observableList = [];
                for (let i = 0; i < object.observableList.length; ++i) {
                    if (typeof object.observableList[i] !== "object")
                        throw TypeError(".backend.ObservableList.observableList: object expected");
                    message.observableList[i] = $root.backend.ObservableMatchInfo.fromObject(object.observableList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an ObservableList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof backend.ObservableList
         * @static
         * @param {backend.ObservableList} message ObservableList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ObservableList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.observableList = [];
            if (options.defaults)
                object.lastUpdateDate = null;
            if (message.lastUpdateDate != null && message.hasOwnProperty("lastUpdateDate"))
                object.lastUpdateDate = $root.google.protobuf.Timestamp.toObject(message.lastUpdateDate, options);
            if (message.observableList && message.observableList.length) {
                object.observableList = [];
                for (let j = 0; j < message.observableList.length; ++j)
                    object.observableList[j] = $root.backend.ObservableMatchInfo.toObject(message.observableList[j], options);
            }
            return object;
        };

        /**
         * Converts this ObservableList to JSON.
         * @function toJSON
         * @memberof backend.ObservableList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ObservableList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ObservableList;
    })();

    backend.ObservableMatchInfo = (function() {

        /**
         * Properties of an ObservableMatchInfo.
         * @memberof backend
         * @interface IObservableMatchInfo
         * @property {number|Long|null} [idGame] ObservableMatchInfo idGame
         * @property {number|null} [idGroup] ObservableMatchInfo idGroup
         * @property {string|null} [gameName] ObservableMatchInfo gameName
         * @property {number|Long|null} [idHost] ObservableMatchInfo idHost
         * @property {number|null} [playerCount] ObservableMatchInfo playerCount
         * @property {google.protobuf.ITimestamp|null} [startDate] ObservableMatchInfo startDate
         * @property {string|null} [region] ObservableMatchInfo region
         * @property {number|null} [gameMode] ObservableMatchInfo gameMode
         * @property {Array.<backend.IObservableMatchPlayerInfo>|null} [playerInfoList] ObservableMatchInfo playerInfoList
         */

        /**
         * Constructs a new ObservableMatchInfo.
         * @memberof backend
         * @classdesc Represents an ObservableMatchInfo.
         * @implements IObservableMatchInfo
         * @constructor
         * @param {backend.IObservableMatchInfo=} [properties] Properties to set
         */
        function ObservableMatchInfo(properties) {
            this.playerInfoList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ObservableMatchInfo idGame.
         * @member {number|Long} idGame
         * @memberof backend.ObservableMatchInfo
         * @instance
         */
        ObservableMatchInfo.prototype.idGame = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ObservableMatchInfo idGroup.
         * @member {number} idGroup
         * @memberof backend.ObservableMatchInfo
         * @instance
         */
        ObservableMatchInfo.prototype.idGroup = 0;

        /**
         * ObservableMatchInfo gameName.
         * @member {string} gameName
         * @memberof backend.ObservableMatchInfo
         * @instance
         */
        ObservableMatchInfo.prototype.gameName = "";

        /**
         * ObservableMatchInfo idHost.
         * @member {number|Long} idHost
         * @memberof backend.ObservableMatchInfo
         * @instance
         */
        ObservableMatchInfo.prototype.idHost = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ObservableMatchInfo playerCount.
         * @member {number} playerCount
         * @memberof backend.ObservableMatchInfo
         * @instance
         */
        ObservableMatchInfo.prototype.playerCount = 0;

        /**
         * ObservableMatchInfo startDate.
         * @member {google.protobuf.ITimestamp|null|undefined} startDate
         * @memberof backend.ObservableMatchInfo
         * @instance
         */
        ObservableMatchInfo.prototype.startDate = null;

        /**
         * ObservableMatchInfo region.
         * @member {string} region
         * @memberof backend.ObservableMatchInfo
         * @instance
         */
        ObservableMatchInfo.prototype.region = "";

        /**
         * ObservableMatchInfo gameMode.
         * @member {number} gameMode
         * @memberof backend.ObservableMatchInfo
         * @instance
         */
        ObservableMatchInfo.prototype.gameMode = 0;

        /**
         * ObservableMatchInfo playerInfoList.
         * @member {Array.<backend.IObservableMatchPlayerInfo>} playerInfoList
         * @memberof backend.ObservableMatchInfo
         * @instance
         */
        ObservableMatchInfo.prototype.playerInfoList = $util.emptyArray;

        /**
         * Creates a new ObservableMatchInfo instance using the specified properties.
         * @function create
         * @memberof backend.ObservableMatchInfo
         * @static
         * @param {backend.IObservableMatchInfo=} [properties] Properties to set
         * @returns {backend.ObservableMatchInfo} ObservableMatchInfo instance
         */
        ObservableMatchInfo.create = function create(properties) {
            return new ObservableMatchInfo(properties);
        };

        /**
         * Encodes the specified ObservableMatchInfo message. Does not implicitly {@link backend.ObservableMatchInfo.verify|verify} messages.
         * @function encode
         * @memberof backend.ObservableMatchInfo
         * @static
         * @param {backend.IObservableMatchInfo} message ObservableMatchInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObservableMatchInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.idGame != null && Object.hasOwnProperty.call(message, "idGame"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.idGame);
            if (message.idGroup != null && Object.hasOwnProperty.call(message, "idGroup"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.idGroup);
            if (message.gameName != null && Object.hasOwnProperty.call(message, "gameName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.gameName);
            if (message.idHost != null && Object.hasOwnProperty.call(message, "idHost"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.idHost);
            if (message.playerCount != null && Object.hasOwnProperty.call(message, "playerCount"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.playerCount);
            if (message.startDate != null && Object.hasOwnProperty.call(message, "startDate"))
                $root.google.protobuf.Timestamp.encode(message.startDate, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.region != null && Object.hasOwnProperty.call(message, "region"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.region);
            if (message.gameMode != null && Object.hasOwnProperty.call(message, "gameMode"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.gameMode);
            if (message.playerInfoList != null && message.playerInfoList.length)
                for (let i = 0; i < message.playerInfoList.length; ++i)
                    $root.backend.ObservableMatchPlayerInfo.encode(message.playerInfoList[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ObservableMatchInfo message, length delimited. Does not implicitly {@link backend.ObservableMatchInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof backend.ObservableMatchInfo
         * @static
         * @param {backend.IObservableMatchInfo} message ObservableMatchInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObservableMatchInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ObservableMatchInfo message from the specified reader or buffer.
         * @function decode
         * @memberof backend.ObservableMatchInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {backend.ObservableMatchInfo} ObservableMatchInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObservableMatchInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.ObservableMatchInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.idGame = reader.int64();
                        break;
                    }
                case 2: {
                        message.idGroup = reader.int32();
                        break;
                    }
                case 3: {
                        message.gameName = reader.string();
                        break;
                    }
                case 4: {
                        message.idHost = reader.int64();
                        break;
                    }
                case 5: {
                        message.playerCount = reader.int32();
                        break;
                    }
                case 6: {
                        message.startDate = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.region = reader.string();
                        break;
                    }
                case 8: {
                        message.gameMode = reader.int32();
                        break;
                    }
                case 9: {
                        if (!(message.playerInfoList && message.playerInfoList.length))
                            message.playerInfoList = [];
                        message.playerInfoList.push($root.backend.ObservableMatchPlayerInfo.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ObservableMatchInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof backend.ObservableMatchInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {backend.ObservableMatchInfo} ObservableMatchInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObservableMatchInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ObservableMatchInfo message.
         * @function verify
         * @memberof backend.ObservableMatchInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ObservableMatchInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.idGame != null && message.hasOwnProperty("idGame"))
                if (!$util.isInteger(message.idGame) && !(message.idGame && $util.isInteger(message.idGame.low) && $util.isInteger(message.idGame.high)))
                    return "idGame: integer|Long expected";
            if (message.idGroup != null && message.hasOwnProperty("idGroup"))
                if (!$util.isInteger(message.idGroup))
                    return "idGroup: integer expected";
            if (message.gameName != null && message.hasOwnProperty("gameName"))
                if (!$util.isString(message.gameName))
                    return "gameName: string expected";
            if (message.idHost != null && message.hasOwnProperty("idHost"))
                if (!$util.isInteger(message.idHost) && !(message.idHost && $util.isInteger(message.idHost.low) && $util.isInteger(message.idHost.high)))
                    return "idHost: integer|Long expected";
            if (message.playerCount != null && message.hasOwnProperty("playerCount"))
                if (!$util.isInteger(message.playerCount))
                    return "playerCount: integer expected";
            if (message.startDate != null && message.hasOwnProperty("startDate")) {
                let error = $root.google.protobuf.Timestamp.verify(message.startDate);
                if (error)
                    return "startDate." + error;
            }
            if (message.region != null && message.hasOwnProperty("region"))
                if (!$util.isString(message.region))
                    return "region: string expected";
            if (message.gameMode != null && message.hasOwnProperty("gameMode"))
                if (!$util.isInteger(message.gameMode))
                    return "gameMode: integer expected";
            if (message.playerInfoList != null && message.hasOwnProperty("playerInfoList")) {
                if (!Array.isArray(message.playerInfoList))
                    return "playerInfoList: array expected";
                for (let i = 0; i < message.playerInfoList.length; ++i) {
                    let error = $root.backend.ObservableMatchPlayerInfo.verify(message.playerInfoList[i]);
                    if (error)
                        return "playerInfoList." + error;
                }
            }
            return null;
        };

        /**
         * Creates an ObservableMatchInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof backend.ObservableMatchInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {backend.ObservableMatchInfo} ObservableMatchInfo
         */
        ObservableMatchInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.backend.ObservableMatchInfo)
                return object;
            let message = new $root.backend.ObservableMatchInfo();
            if (object.idGame != null)
                if ($util.Long)
                    (message.idGame = $util.Long.fromValue(object.idGame)).unsigned = false;
                else if (typeof object.idGame === "string")
                    message.idGame = parseInt(object.idGame, 10);
                else if (typeof object.idGame === "number")
                    message.idGame = object.idGame;
                else if (typeof object.idGame === "object")
                    message.idGame = new $util.LongBits(object.idGame.low >>> 0, object.idGame.high >>> 0).toNumber();
            if (object.idGroup != null)
                message.idGroup = object.idGroup | 0;
            if (object.gameName != null)
                message.gameName = String(object.gameName);
            if (object.idHost != null)
                if ($util.Long)
                    (message.idHost = $util.Long.fromValue(object.idHost)).unsigned = false;
                else if (typeof object.idHost === "string")
                    message.idHost = parseInt(object.idHost, 10);
                else if (typeof object.idHost === "number")
                    message.idHost = object.idHost;
                else if (typeof object.idHost === "object")
                    message.idHost = new $util.LongBits(object.idHost.low >>> 0, object.idHost.high >>> 0).toNumber();
            if (object.playerCount != null)
                message.playerCount = object.playerCount | 0;
            if (object.startDate != null) {
                if (typeof object.startDate !== "object")
                    throw TypeError(".backend.ObservableMatchInfo.startDate: object expected");
                message.startDate = $root.google.protobuf.Timestamp.fromObject(object.startDate);
            }
            if (object.region != null)
                message.region = String(object.region);
            if (object.gameMode != null)
                message.gameMode = object.gameMode | 0;
            if (object.playerInfoList) {
                if (!Array.isArray(object.playerInfoList))
                    throw TypeError(".backend.ObservableMatchInfo.playerInfoList: array expected");
                message.playerInfoList = [];
                for (let i = 0; i < object.playerInfoList.length; ++i) {
                    if (typeof object.playerInfoList[i] !== "object")
                        throw TypeError(".backend.ObservableMatchInfo.playerInfoList: object expected");
                    message.playerInfoList[i] = $root.backend.ObservableMatchPlayerInfo.fromObject(object.playerInfoList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an ObservableMatchInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof backend.ObservableMatchInfo
         * @static
         * @param {backend.ObservableMatchInfo} message ObservableMatchInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ObservableMatchInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.playerInfoList = [];
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.idGame = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.idGame = options.longs === String ? "0" : 0;
                object.idGroup = 0;
                object.gameName = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.idHost = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.idHost = options.longs === String ? "0" : 0;
                object.playerCount = 0;
                object.startDate = null;
                object.region = "";
                object.gameMode = 0;
            }
            if (message.idGame != null && message.hasOwnProperty("idGame"))
                if (typeof message.idGame === "number")
                    object.idGame = options.longs === String ? String(message.idGame) : message.idGame;
                else
                    object.idGame = options.longs === String ? $util.Long.prototype.toString.call(message.idGame) : options.longs === Number ? new $util.LongBits(message.idGame.low >>> 0, message.idGame.high >>> 0).toNumber() : message.idGame;
            if (message.idGroup != null && message.hasOwnProperty("idGroup"))
                object.idGroup = message.idGroup;
            if (message.gameName != null && message.hasOwnProperty("gameName"))
                object.gameName = message.gameName;
            if (message.idHost != null && message.hasOwnProperty("idHost"))
                if (typeof message.idHost === "number")
                    object.idHost = options.longs === String ? String(message.idHost) : message.idHost;
                else
                    object.idHost = options.longs === String ? $util.Long.prototype.toString.call(message.idHost) : options.longs === Number ? new $util.LongBits(message.idHost.low >>> 0, message.idHost.high >>> 0).toNumber() : message.idHost;
            if (message.playerCount != null && message.hasOwnProperty("playerCount"))
                object.playerCount = message.playerCount;
            if (message.startDate != null && message.hasOwnProperty("startDate"))
                object.startDate = $root.google.protobuf.Timestamp.toObject(message.startDate, options);
            if (message.region != null && message.hasOwnProperty("region"))
                object.region = message.region;
            if (message.gameMode != null && message.hasOwnProperty("gameMode"))
                object.gameMode = message.gameMode;
            if (message.playerInfoList && message.playerInfoList.length) {
                object.playerInfoList = [];
                for (let j = 0; j < message.playerInfoList.length; ++j)
                    object.playerInfoList[j] = $root.backend.ObservableMatchPlayerInfo.toObject(message.playerInfoList[j], options);
            }
            return object;
        };

        /**
         * Converts this ObservableMatchInfo to JSON.
         * @function toJSON
         * @memberof backend.ObservableMatchInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ObservableMatchInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ObservableMatchInfo;
    })();

    backend.ObservableMatchPlayerInfo = (function() {

        /**
         * Properties of an ObservableMatchPlayerInfo.
         * @memberof backend
         * @interface IObservableMatchPlayerInfo
         * @property {number|Long|null} [idPlayer] ObservableMatchPlayerInfo idPlayer
         * @property {string|null} [playerName] ObservableMatchPlayerInfo playerName
         * @property {number|null} [playerElo] ObservableMatchPlayerInfo playerElo
         * @property {number|null} [idCiv] ObservableMatchPlayerInfo idCiv
         * @property {number|null} [team] ObservableMatchPlayerInfo team
         * @property {number|null} [status] ObservableMatchPlayerInfo status
         */

        /**
         * Constructs a new ObservableMatchPlayerInfo.
         * @memberof backend
         * @classdesc Represents an ObservableMatchPlayerInfo.
         * @implements IObservableMatchPlayerInfo
         * @constructor
         * @param {backend.IObservableMatchPlayerInfo=} [properties] Properties to set
         */
        function ObservableMatchPlayerInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ObservableMatchPlayerInfo idPlayer.
         * @member {number|Long} idPlayer
         * @memberof backend.ObservableMatchPlayerInfo
         * @instance
         */
        ObservableMatchPlayerInfo.prototype.idPlayer = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ObservableMatchPlayerInfo playerName.
         * @member {string} playerName
         * @memberof backend.ObservableMatchPlayerInfo
         * @instance
         */
        ObservableMatchPlayerInfo.prototype.playerName = "";

        /**
         * ObservableMatchPlayerInfo playerElo.
         * @member {number} playerElo
         * @memberof backend.ObservableMatchPlayerInfo
         * @instance
         */
        ObservableMatchPlayerInfo.prototype.playerElo = 0;

        /**
         * ObservableMatchPlayerInfo idCiv.
         * @member {number} idCiv
         * @memberof backend.ObservableMatchPlayerInfo
         * @instance
         */
        ObservableMatchPlayerInfo.prototype.idCiv = 0;

        /**
         * ObservableMatchPlayerInfo team.
         * @member {number} team
         * @memberof backend.ObservableMatchPlayerInfo
         * @instance
         */
        ObservableMatchPlayerInfo.prototype.team = 0;

        /**
         * ObservableMatchPlayerInfo status.
         * @member {number} status
         * @memberof backend.ObservableMatchPlayerInfo
         * @instance
         */
        ObservableMatchPlayerInfo.prototype.status = 0;

        /**
         * Creates a new ObservableMatchPlayerInfo instance using the specified properties.
         * @function create
         * @memberof backend.ObservableMatchPlayerInfo
         * @static
         * @param {backend.IObservableMatchPlayerInfo=} [properties] Properties to set
         * @returns {backend.ObservableMatchPlayerInfo} ObservableMatchPlayerInfo instance
         */
        ObservableMatchPlayerInfo.create = function create(properties) {
            return new ObservableMatchPlayerInfo(properties);
        };

        /**
         * Encodes the specified ObservableMatchPlayerInfo message. Does not implicitly {@link backend.ObservableMatchPlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof backend.ObservableMatchPlayerInfo
         * @static
         * @param {backend.IObservableMatchPlayerInfo} message ObservableMatchPlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObservableMatchPlayerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.idPlayer != null && Object.hasOwnProperty.call(message, "idPlayer"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.idPlayer);
            if (message.playerName != null && Object.hasOwnProperty.call(message, "playerName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.playerName);
            if (message.playerElo != null && Object.hasOwnProperty.call(message, "playerElo"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.playerElo);
            if (message.idCiv != null && Object.hasOwnProperty.call(message, "idCiv"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.idCiv);
            if (message.team != null && Object.hasOwnProperty.call(message, "team"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.team);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified ObservableMatchPlayerInfo message, length delimited. Does not implicitly {@link backend.ObservableMatchPlayerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof backend.ObservableMatchPlayerInfo
         * @static
         * @param {backend.IObservableMatchPlayerInfo} message ObservableMatchPlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObservableMatchPlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ObservableMatchPlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof backend.ObservableMatchPlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {backend.ObservableMatchPlayerInfo} ObservableMatchPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObservableMatchPlayerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.ObservableMatchPlayerInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.idPlayer = reader.int64();
                        break;
                    }
                case 2: {
                        message.playerName = reader.string();
                        break;
                    }
                case 3: {
                        message.playerElo = reader.int32();
                        break;
                    }
                case 4: {
                        message.idCiv = reader.int32();
                        break;
                    }
                case 5: {
                        message.team = reader.int32();
                        break;
                    }
                case 6: {
                        message.status = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ObservableMatchPlayerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof backend.ObservableMatchPlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {backend.ObservableMatchPlayerInfo} ObservableMatchPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObservableMatchPlayerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ObservableMatchPlayerInfo message.
         * @function verify
         * @memberof backend.ObservableMatchPlayerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ObservableMatchPlayerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.idPlayer != null && message.hasOwnProperty("idPlayer"))
                if (!$util.isInteger(message.idPlayer) && !(message.idPlayer && $util.isInteger(message.idPlayer.low) && $util.isInteger(message.idPlayer.high)))
                    return "idPlayer: integer|Long expected";
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                if (!$util.isString(message.playerName))
                    return "playerName: string expected";
            if (message.playerElo != null && message.hasOwnProperty("playerElo"))
                if (!$util.isInteger(message.playerElo))
                    return "playerElo: integer expected";
            if (message.idCiv != null && message.hasOwnProperty("idCiv"))
                if (!$util.isInteger(message.idCiv))
                    return "idCiv: integer expected";
            if (message.team != null && message.hasOwnProperty("team"))
                if (!$util.isInteger(message.team))
                    return "team: integer expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            return null;
        };

        /**
         * Creates an ObservableMatchPlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof backend.ObservableMatchPlayerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {backend.ObservableMatchPlayerInfo} ObservableMatchPlayerInfo
         */
        ObservableMatchPlayerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.backend.ObservableMatchPlayerInfo)
                return object;
            let message = new $root.backend.ObservableMatchPlayerInfo();
            if (object.idPlayer != null)
                if ($util.Long)
                    (message.idPlayer = $util.Long.fromValue(object.idPlayer)).unsigned = false;
                else if (typeof object.idPlayer === "string")
                    message.idPlayer = parseInt(object.idPlayer, 10);
                else if (typeof object.idPlayer === "number")
                    message.idPlayer = object.idPlayer;
                else if (typeof object.idPlayer === "object")
                    message.idPlayer = new $util.LongBits(object.idPlayer.low >>> 0, object.idPlayer.high >>> 0).toNumber();
            if (object.playerName != null)
                message.playerName = String(object.playerName);
            if (object.playerElo != null)
                message.playerElo = object.playerElo | 0;
            if (object.idCiv != null)
                message.idCiv = object.idCiv | 0;
            if (object.team != null)
                message.team = object.team | 0;
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from an ObservableMatchPlayerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof backend.ObservableMatchPlayerInfo
         * @static
         * @param {backend.ObservableMatchPlayerInfo} message ObservableMatchPlayerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ObservableMatchPlayerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.idPlayer = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.idPlayer = options.longs === String ? "0" : 0;
                object.playerName = "";
                object.playerElo = 0;
                object.idCiv = 0;
                object.team = 0;
                object.status = 0;
            }
            if (message.idPlayer != null && message.hasOwnProperty("idPlayer"))
                if (typeof message.idPlayer === "number")
                    object.idPlayer = options.longs === String ? String(message.idPlayer) : message.idPlayer;
                else
                    object.idPlayer = options.longs === String ? $util.Long.prototype.toString.call(message.idPlayer) : options.longs === Number ? new $util.LongBits(message.idPlayer.low >>> 0, message.idPlayer.high >>> 0).toNumber() : message.idPlayer;
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                object.playerName = message.playerName;
            if (message.playerElo != null && message.hasOwnProperty("playerElo"))
                object.playerElo = message.playerElo;
            if (message.idCiv != null && message.hasOwnProperty("idCiv"))
                object.idCiv = message.idCiv;
            if (message.team != null && message.hasOwnProperty("team"))
                object.team = message.team;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this ObservableMatchPlayerInfo to JSON.
         * @function toJSON
         * @memberof backend.ObservableMatchPlayerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ObservableMatchPlayerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ObservableMatchPlayerInfo;
    })();

    backend.TechInfoList = (function() {

        /**
         * Properties of a TechInfoList.
         * @memberof backend
         * @interface ITechInfoList
         * @property {Array.<backend.ITechInfo>|null} [techInfoList] TechInfoList techInfoList
         */

        /**
         * Constructs a new TechInfoList.
         * @memberof backend
         * @classdesc Represents a TechInfoList.
         * @implements ITechInfoList
         * @constructor
         * @param {backend.ITechInfoList=} [properties] Properties to set
         */
        function TechInfoList(properties) {
            this.techInfoList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TechInfoList techInfoList.
         * @member {Array.<backend.ITechInfo>} techInfoList
         * @memberof backend.TechInfoList
         * @instance
         */
        TechInfoList.prototype.techInfoList = $util.emptyArray;

        /**
         * Creates a new TechInfoList instance using the specified properties.
         * @function create
         * @memberof backend.TechInfoList
         * @static
         * @param {backend.ITechInfoList=} [properties] Properties to set
         * @returns {backend.TechInfoList} TechInfoList instance
         */
        TechInfoList.create = function create(properties) {
            return new TechInfoList(properties);
        };

        /**
         * Encodes the specified TechInfoList message. Does not implicitly {@link backend.TechInfoList.verify|verify} messages.
         * @function encode
         * @memberof backend.TechInfoList
         * @static
         * @param {backend.ITechInfoList} message TechInfoList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TechInfoList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.techInfoList != null && message.techInfoList.length)
                for (let i = 0; i < message.techInfoList.length; ++i)
                    $root.backend.TechInfo.encode(message.techInfoList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TechInfoList message, length delimited. Does not implicitly {@link backend.TechInfoList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof backend.TechInfoList
         * @static
         * @param {backend.ITechInfoList} message TechInfoList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TechInfoList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TechInfoList message from the specified reader or buffer.
         * @function decode
         * @memberof backend.TechInfoList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {backend.TechInfoList} TechInfoList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TechInfoList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.TechInfoList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.techInfoList && message.techInfoList.length))
                            message.techInfoList = [];
                        message.techInfoList.push($root.backend.TechInfo.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TechInfoList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof backend.TechInfoList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {backend.TechInfoList} TechInfoList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TechInfoList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TechInfoList message.
         * @function verify
         * @memberof backend.TechInfoList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TechInfoList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.techInfoList != null && message.hasOwnProperty("techInfoList")) {
                if (!Array.isArray(message.techInfoList))
                    return "techInfoList: array expected";
                for (let i = 0; i < message.techInfoList.length; ++i) {
                    let error = $root.backend.TechInfo.verify(message.techInfoList[i]);
                    if (error)
                        return "techInfoList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TechInfoList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof backend.TechInfoList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {backend.TechInfoList} TechInfoList
         */
        TechInfoList.fromObject = function fromObject(object) {
            if (object instanceof $root.backend.TechInfoList)
                return object;
            let message = new $root.backend.TechInfoList();
            if (object.techInfoList) {
                if (!Array.isArray(object.techInfoList))
                    throw TypeError(".backend.TechInfoList.techInfoList: array expected");
                message.techInfoList = [];
                for (let i = 0; i < object.techInfoList.length; ++i) {
                    if (typeof object.techInfoList[i] !== "object")
                        throw TypeError(".backend.TechInfoList.techInfoList: object expected");
                    message.techInfoList[i] = $root.backend.TechInfo.fromObject(object.techInfoList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TechInfoList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof backend.TechInfoList
         * @static
         * @param {backend.TechInfoList} message TechInfoList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TechInfoList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.techInfoList = [];
            if (message.techInfoList && message.techInfoList.length) {
                object.techInfoList = [];
                for (let j = 0; j < message.techInfoList.length; ++j)
                    object.techInfoList[j] = $root.backend.TechInfo.toObject(message.techInfoList[j], options);
            }
            return object;
        };

        /**
         * Converts this TechInfoList to JSON.
         * @function toJSON
         * @memberof backend.TechInfoList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TechInfoList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TechInfoList;
    })();

    backend.TechInfo = (function() {

        /**
         * Properties of a TechInfo.
         * @memberof backend
         * @interface ITechInfo
         * @property {string|null} [name] TechInfo name
         * @property {string|null} [type] TechInfo type
         * @property {backend.TechStatus|null} [status] TechInfo status
         * @property {number|null} [displaynameid] TechInfo displaynameid
         * @property {number|null} [researchpoints] TechInfo researchpoints
         * @property {string|null} [icon] TechInfo icon
         * @property {number|null} [rollovertextid] TechInfo rollovertextid
         * @property {Array.<backend.ITechEffectInfo>|null} [effects] TechInfo effects
         * @property {Array.<backend.ITechCostInfo>|null} [costs] TechInfo costs
         */

        /**
         * Constructs a new TechInfo.
         * @memberof backend
         * @classdesc Represents a TechInfo.
         * @implements ITechInfo
         * @constructor
         * @param {backend.ITechInfo=} [properties] Properties to set
         */
        function TechInfo(properties) {
            this.effects = [];
            this.costs = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TechInfo name.
         * @member {string} name
         * @memberof backend.TechInfo
         * @instance
         */
        TechInfo.prototype.name = "";

        /**
         * TechInfo type.
         * @member {string} type
         * @memberof backend.TechInfo
         * @instance
         */
        TechInfo.prototype.type = "";

        /**
         * TechInfo status.
         * @member {backend.TechStatus} status
         * @memberof backend.TechInfo
         * @instance
         */
        TechInfo.prototype.status = 0;

        /**
         * TechInfo displaynameid.
         * @member {number} displaynameid
         * @memberof backend.TechInfo
         * @instance
         */
        TechInfo.prototype.displaynameid = 0;

        /**
         * TechInfo researchpoints.
         * @member {number} researchpoints
         * @memberof backend.TechInfo
         * @instance
         */
        TechInfo.prototype.researchpoints = 0;

        /**
         * TechInfo icon.
         * @member {string} icon
         * @memberof backend.TechInfo
         * @instance
         */
        TechInfo.prototype.icon = "";

        /**
         * TechInfo rollovertextid.
         * @member {number} rollovertextid
         * @memberof backend.TechInfo
         * @instance
         */
        TechInfo.prototype.rollovertextid = 0;

        /**
         * TechInfo effects.
         * @member {Array.<backend.ITechEffectInfo>} effects
         * @memberof backend.TechInfo
         * @instance
         */
        TechInfo.prototype.effects = $util.emptyArray;

        /**
         * TechInfo costs.
         * @member {Array.<backend.ITechCostInfo>} costs
         * @memberof backend.TechInfo
         * @instance
         */
        TechInfo.prototype.costs = $util.emptyArray;

        /**
         * Creates a new TechInfo instance using the specified properties.
         * @function create
         * @memberof backend.TechInfo
         * @static
         * @param {backend.ITechInfo=} [properties] Properties to set
         * @returns {backend.TechInfo} TechInfo instance
         */
        TechInfo.create = function create(properties) {
            return new TechInfo(properties);
        };

        /**
         * Encodes the specified TechInfo message. Does not implicitly {@link backend.TechInfo.verify|verify} messages.
         * @function encode
         * @memberof backend.TechInfo
         * @static
         * @param {backend.ITechInfo} message TechInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TechInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.status);
            if (message.displaynameid != null && Object.hasOwnProperty.call(message, "displaynameid"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.displaynameid);
            if (message.researchpoints != null && Object.hasOwnProperty.call(message, "researchpoints"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.researchpoints);
            if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.icon);
            if (message.rollovertextid != null && Object.hasOwnProperty.call(message, "rollovertextid"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.rollovertextid);
            if (message.effects != null && message.effects.length)
                for (let i = 0; i < message.effects.length; ++i)
                    $root.backend.TechEffectInfo.encode(message.effects[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.costs != null && message.costs.length)
                for (let i = 0; i < message.costs.length; ++i)
                    $root.backend.TechCostInfo.encode(message.costs[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TechInfo message, length delimited. Does not implicitly {@link backend.TechInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof backend.TechInfo
         * @static
         * @param {backend.ITechInfo} message TechInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TechInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TechInfo message from the specified reader or buffer.
         * @function decode
         * @memberof backend.TechInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {backend.TechInfo} TechInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TechInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.TechInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.type = reader.string();
                        break;
                    }
                case 3: {
                        message.status = reader.int32();
                        break;
                    }
                case 4: {
                        message.displaynameid = reader.int32();
                        break;
                    }
                case 5: {
                        message.researchpoints = reader.float();
                        break;
                    }
                case 6: {
                        message.icon = reader.string();
                        break;
                    }
                case 7: {
                        message.rollovertextid = reader.int32();
                        break;
                    }
                case 8: {
                        if (!(message.effects && message.effects.length))
                            message.effects = [];
                        message.effects.push($root.backend.TechEffectInfo.decode(reader, reader.uint32()));
                        break;
                    }
                case 9: {
                        if (!(message.costs && message.costs.length))
                            message.costs = [];
                        message.costs.push($root.backend.TechCostInfo.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TechInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof backend.TechInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {backend.TechInfo} TechInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TechInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TechInfo message.
         * @function verify
         * @memberof backend.TechInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TechInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.displaynameid != null && message.hasOwnProperty("displaynameid"))
                if (!$util.isInteger(message.displaynameid))
                    return "displaynameid: integer expected";
            if (message.researchpoints != null && message.hasOwnProperty("researchpoints"))
                if (typeof message.researchpoints !== "number")
                    return "researchpoints: number expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.rollovertextid != null && message.hasOwnProperty("rollovertextid"))
                if (!$util.isInteger(message.rollovertextid))
                    return "rollovertextid: integer expected";
            if (message.effects != null && message.hasOwnProperty("effects")) {
                if (!Array.isArray(message.effects))
                    return "effects: array expected";
                for (let i = 0; i < message.effects.length; ++i) {
                    let error = $root.backend.TechEffectInfo.verify(message.effects[i]);
                    if (error)
                        return "effects." + error;
                }
            }
            if (message.costs != null && message.hasOwnProperty("costs")) {
                if (!Array.isArray(message.costs))
                    return "costs: array expected";
                for (let i = 0; i < message.costs.length; ++i) {
                    let error = $root.backend.TechCostInfo.verify(message.costs[i]);
                    if (error)
                        return "costs." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TechInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof backend.TechInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {backend.TechInfo} TechInfo
         */
        TechInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.backend.TechInfo)
                return object;
            let message = new $root.backend.TechInfo();
            if (object.name != null)
                message.name = String(object.name);
            if (object.type != null)
                message.type = String(object.type);
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "None":
            case 0:
                message.status = 0;
                break;
            case "Active":
            case 1:
                message.status = 1;
                break;
            case "Obtainable":
            case 2:
                message.status = 2;
                break;
            case "Unobtainable":
            case 3:
                message.status = 3;
                break;
            }
            if (object.displaynameid != null)
                message.displaynameid = object.displaynameid | 0;
            if (object.researchpoints != null)
                message.researchpoints = Number(object.researchpoints);
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.rollovertextid != null)
                message.rollovertextid = object.rollovertextid | 0;
            if (object.effects) {
                if (!Array.isArray(object.effects))
                    throw TypeError(".backend.TechInfo.effects: array expected");
                message.effects = [];
                for (let i = 0; i < object.effects.length; ++i) {
                    if (typeof object.effects[i] !== "object")
                        throw TypeError(".backend.TechInfo.effects: object expected");
                    message.effects[i] = $root.backend.TechEffectInfo.fromObject(object.effects[i]);
                }
            }
            if (object.costs) {
                if (!Array.isArray(object.costs))
                    throw TypeError(".backend.TechInfo.costs: array expected");
                message.costs = [];
                for (let i = 0; i < object.costs.length; ++i) {
                    if (typeof object.costs[i] !== "object")
                        throw TypeError(".backend.TechInfo.costs: object expected");
                    message.costs[i] = $root.backend.TechCostInfo.fromObject(object.costs[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TechInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof backend.TechInfo
         * @static
         * @param {backend.TechInfo} message TechInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TechInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.effects = [];
                object.costs = [];
            }
            if (options.defaults) {
                object.name = "";
                object.type = "";
                object.status = options.enums === String ? "None" : 0;
                object.displaynameid = 0;
                object.researchpoints = 0;
                object.icon = "";
                object.rollovertextid = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.backend.TechStatus[message.status] === undefined ? message.status : $root.backend.TechStatus[message.status] : message.status;
            if (message.displaynameid != null && message.hasOwnProperty("displaynameid"))
                object.displaynameid = message.displaynameid;
            if (message.researchpoints != null && message.hasOwnProperty("researchpoints"))
                object.researchpoints = options.json && !isFinite(message.researchpoints) ? String(message.researchpoints) : message.researchpoints;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.rollovertextid != null && message.hasOwnProperty("rollovertextid"))
                object.rollovertextid = message.rollovertextid;
            if (message.effects && message.effects.length) {
                object.effects = [];
                for (let j = 0; j < message.effects.length; ++j)
                    object.effects[j] = $root.backend.TechEffectInfo.toObject(message.effects[j], options);
            }
            if (message.costs && message.costs.length) {
                object.costs = [];
                for (let j = 0; j < message.costs.length; ++j)
                    object.costs[j] = $root.backend.TechCostInfo.toObject(message.costs[j], options);
            }
            return object;
        };

        /**
         * Converts this TechInfo to JSON.
         * @function toJSON
         * @memberof backend.TechInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TechInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TechInfo;
    })();

    backend.TechEffectInfo = (function() {

        /**
         * Properties of a TechEffectInfo.
         * @memberof backend
         * @interface ITechEffectInfo
         * @property {string|null} [type] TechEffectInfo type
         * @property {number|null} [amount] TechEffectInfo amount
         * @property {string|null} [subtype] TechEffectInfo subtype
         * @property {backend.TechRelativity|null} [relativity] TechEffectInfo relativity
         * @property {string|null} [text] TechEffectInfo text
         * @property {backend.TechTargetType|null} [targettype] TechEffectInfo targettype
         * @property {string|null} [targettext] TechEffectInfo targettext
         * @property {backend.TechStatus|null} [status] TechEffectInfo status
         * @property {string|null} [action] TechEffectInfo action
         * @property {string|null} [tech] TechEffectInfo tech
         * @property {number|null} [newname] TechEffectInfo newname
         * @property {number|null} [newrollover] TechEffectInfo newrollover
         * @property {string|null} [unittype] TechEffectInfo unittype
         * @property {backend.TechResourceType|null} [resource] TechEffectInfo resource
         * @property {boolean|null} [allactions] TechEffectInfo allactions
         * @property {string|null} [proto] TechEffectInfo proto
         * @property {number|null} [neweditorname] TechEffectInfo neweditorname
         * @property {number|null} [newshortrollover] TechEffectInfo newshortrollover
         * @property {number|null} [stringid] TechEffectInfo stringid
         * @property {number|null} [resvalue] TechEffectInfo resvalue
         * @property {backend.TechComponentType|null} [component] TechEffectInfo component
         * @property {backend.TechArmorType|null} [newtype] TechEffectInfo newtype
         * @property {number|null} [resourcecap] TechEffectInfo resourcecap
         * @property {string|null} [protopower] TechEffectInfo protopower
         * @property {string|null} [toprotoid] TechEffectInfo toprotoid
         * @property {string|null} [fromprotoid] TechEffectInfo fromprotoid
         * @property {number|null} [multiplier] TechEffectInfo multiplier
         * @property {backend.TechResourceType|null} [toresource] TechEffectInfo toresource
         * @property {backend.TechResourceType|null} [fromresource] TechEffectInfo fromresource
         * @property {number|null} [amount2] TechEffectInfo amount2
         * @property {string|null} [unittype2] TechEffectInfo unittype2
         * @property {string|null} [civ] TechEffectInfo civ
         * @property {string|null} [counttype] TechEffectInfo counttype
         * @property {number|null} [maxcount] TechEffectInfo maxcount
         * @property {number|null} [ageprereq] TechEffectInfo ageprereq
         * @property {number|null} [unitcount] TechEffectInfo unitcount
         * @property {boolean|null} [includeself] TechEffectInfo includeself
         * @property {string|null} [protoaction] TechEffectInfo protoaction
         * @property {backend.TechArmorType|null} [armortype] TechEffectInfo armortype
         * @property {backend.TechResourceType|null} [resource2] TechEffectInfo resource2
         * @property {boolean|null} [extrabounty] TechEffectInfo extrabounty
         * @property {number|null} [bountyrate] TechEffectInfo bountyrate
         * @property {number|null} [unitcap] TechEffectInfo unitcap
         * @property {string|null} [tactic] TechEffectInfo tactic
         */

        /**
         * Constructs a new TechEffectInfo.
         * @memberof backend
         * @classdesc Represents a TechEffectInfo.
         * @implements ITechEffectInfo
         * @constructor
         * @param {backend.ITechEffectInfo=} [properties] Properties to set
         */
        function TechEffectInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TechEffectInfo type.
         * @member {string} type
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.type = "";

        /**
         * TechEffectInfo amount.
         * @member {number} amount
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.amount = 0;

        /**
         * TechEffectInfo subtype.
         * @member {string} subtype
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.subtype = "";

        /**
         * TechEffectInfo relativity.
         * @member {backend.TechRelativity} relativity
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.relativity = 0;

        /**
         * TechEffectInfo text.
         * @member {string} text
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.text = "";

        /**
         * TechEffectInfo targettype.
         * @member {backend.TechTargetType} targettype
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.targettype = 0;

        /**
         * TechEffectInfo targettext.
         * @member {string} targettext
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.targettext = "";

        /**
         * TechEffectInfo status.
         * @member {backend.TechStatus} status
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.status = 0;

        /**
         * TechEffectInfo action.
         * @member {string} action
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.action = "";

        /**
         * TechEffectInfo tech.
         * @member {string} tech
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.tech = "";

        /**
         * TechEffectInfo newname.
         * @member {number} newname
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.newname = 0;

        /**
         * TechEffectInfo newrollover.
         * @member {number} newrollover
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.newrollover = 0;

        /**
         * TechEffectInfo unittype.
         * @member {string} unittype
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.unittype = "";

        /**
         * TechEffectInfo resource.
         * @member {backend.TechResourceType} resource
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.resource = 0;

        /**
         * TechEffectInfo allactions.
         * @member {boolean} allactions
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.allactions = false;

        /**
         * TechEffectInfo proto.
         * @member {string} proto
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.proto = "";

        /**
         * TechEffectInfo neweditorname.
         * @member {number} neweditorname
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.neweditorname = 0;

        /**
         * TechEffectInfo newshortrollover.
         * @member {number} newshortrollover
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.newshortrollover = 0;

        /**
         * TechEffectInfo stringid.
         * @member {number} stringid
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.stringid = 0;

        /**
         * TechEffectInfo resvalue.
         * @member {number} resvalue
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.resvalue = 0;

        /**
         * TechEffectInfo component.
         * @member {backend.TechComponentType} component
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.component = 0;

        /**
         * TechEffectInfo newtype.
         * @member {backend.TechArmorType} newtype
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.newtype = 0;

        /**
         * TechEffectInfo resourcecap.
         * @member {number} resourcecap
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.resourcecap = 0;

        /**
         * TechEffectInfo protopower.
         * @member {string} protopower
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.protopower = "";

        /**
         * TechEffectInfo toprotoid.
         * @member {string} toprotoid
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.toprotoid = "";

        /**
         * TechEffectInfo fromprotoid.
         * @member {string} fromprotoid
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.fromprotoid = "";

        /**
         * TechEffectInfo multiplier.
         * @member {number} multiplier
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.multiplier = 0;

        /**
         * TechEffectInfo toresource.
         * @member {backend.TechResourceType} toresource
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.toresource = 0;

        /**
         * TechEffectInfo fromresource.
         * @member {backend.TechResourceType} fromresource
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.fromresource = 0;

        /**
         * TechEffectInfo amount2.
         * @member {number} amount2
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.amount2 = 0;

        /**
         * TechEffectInfo unittype2.
         * @member {string} unittype2
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.unittype2 = "";

        /**
         * TechEffectInfo civ.
         * @member {string} civ
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.civ = "";

        /**
         * TechEffectInfo counttype.
         * @member {string} counttype
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.counttype = "";

        /**
         * TechEffectInfo maxcount.
         * @member {number} maxcount
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.maxcount = 0;

        /**
         * TechEffectInfo ageprereq.
         * @member {number} ageprereq
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.ageprereq = 0;

        /**
         * TechEffectInfo unitcount.
         * @member {number} unitcount
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.unitcount = 0;

        /**
         * TechEffectInfo includeself.
         * @member {boolean} includeself
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.includeself = false;

        /**
         * TechEffectInfo protoaction.
         * @member {string} protoaction
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.protoaction = "";

        /**
         * TechEffectInfo armortype.
         * @member {backend.TechArmorType} armortype
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.armortype = 0;

        /**
         * TechEffectInfo resource2.
         * @member {backend.TechResourceType} resource2
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.resource2 = 0;

        /**
         * TechEffectInfo extrabounty.
         * @member {boolean} extrabounty
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.extrabounty = false;

        /**
         * TechEffectInfo bountyrate.
         * @member {number} bountyrate
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.bountyrate = 0;

        /**
         * TechEffectInfo unitcap.
         * @member {number} unitcap
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.unitcap = 0;

        /**
         * TechEffectInfo tactic.
         * @member {string} tactic
         * @memberof backend.TechEffectInfo
         * @instance
         */
        TechEffectInfo.prototype.tactic = "";

        /**
         * Creates a new TechEffectInfo instance using the specified properties.
         * @function create
         * @memberof backend.TechEffectInfo
         * @static
         * @param {backend.ITechEffectInfo=} [properties] Properties to set
         * @returns {backend.TechEffectInfo} TechEffectInfo instance
         */
        TechEffectInfo.create = function create(properties) {
            return new TechEffectInfo(properties);
        };

        /**
         * Encodes the specified TechEffectInfo message. Does not implicitly {@link backend.TechEffectInfo.verify|verify} messages.
         * @function encode
         * @memberof backend.TechEffectInfo
         * @static
         * @param {backend.ITechEffectInfo} message TechEffectInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TechEffectInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.amount);
            if (message.subtype != null && Object.hasOwnProperty.call(message, "subtype"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.subtype);
            if (message.relativity != null && Object.hasOwnProperty.call(message, "relativity"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.relativity);
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.text);
            if (message.targettype != null && Object.hasOwnProperty.call(message, "targettype"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.targettype);
            if (message.targettext != null && Object.hasOwnProperty.call(message, "targettext"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.targettext);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.status);
            if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.action);
            if (message.tech != null && Object.hasOwnProperty.call(message, "tech"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.tech);
            if (message.newname != null && Object.hasOwnProperty.call(message, "newname"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.newname);
            if (message.newrollover != null && Object.hasOwnProperty.call(message, "newrollover"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.newrollover);
            if (message.unittype != null && Object.hasOwnProperty.call(message, "unittype"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.unittype);
            if (message.resource != null && Object.hasOwnProperty.call(message, "resource"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.resource);
            if (message.allactions != null && Object.hasOwnProperty.call(message, "allactions"))
                writer.uint32(/* id 15, wireType 0 =*/120).bool(message.allactions);
            if (message.proto != null && Object.hasOwnProperty.call(message, "proto"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.proto);
            if (message.neweditorname != null && Object.hasOwnProperty.call(message, "neweditorname"))
                writer.uint32(/* id 17, wireType 0 =*/136).int32(message.neweditorname);
            if (message.newshortrollover != null && Object.hasOwnProperty.call(message, "newshortrollover"))
                writer.uint32(/* id 18, wireType 0 =*/144).int32(message.newshortrollover);
            if (message.stringid != null && Object.hasOwnProperty.call(message, "stringid"))
                writer.uint32(/* id 19, wireType 0 =*/152).int32(message.stringid);
            if (message.resvalue != null && Object.hasOwnProperty.call(message, "resvalue"))
                writer.uint32(/* id 20, wireType 5 =*/165).float(message.resvalue);
            if (message.component != null && Object.hasOwnProperty.call(message, "component"))
                writer.uint32(/* id 21, wireType 0 =*/168).int32(message.component);
            if (message.newtype != null && Object.hasOwnProperty.call(message, "newtype"))
                writer.uint32(/* id 22, wireType 0 =*/176).int32(message.newtype);
            if (message.resourcecap != null && Object.hasOwnProperty.call(message, "resourcecap"))
                writer.uint32(/* id 23, wireType 5 =*/189).float(message.resourcecap);
            if (message.protopower != null && Object.hasOwnProperty.call(message, "protopower"))
                writer.uint32(/* id 24, wireType 2 =*/194).string(message.protopower);
            if (message.toprotoid != null && Object.hasOwnProperty.call(message, "toprotoid"))
                writer.uint32(/* id 25, wireType 2 =*/202).string(message.toprotoid);
            if (message.fromprotoid != null && Object.hasOwnProperty.call(message, "fromprotoid"))
                writer.uint32(/* id 26, wireType 2 =*/210).string(message.fromprotoid);
            if (message.multiplier != null && Object.hasOwnProperty.call(message, "multiplier"))
                writer.uint32(/* id 27, wireType 5 =*/221).float(message.multiplier);
            if (message.toresource != null && Object.hasOwnProperty.call(message, "toresource"))
                writer.uint32(/* id 28, wireType 0 =*/224).int32(message.toresource);
            if (message.fromresource != null && Object.hasOwnProperty.call(message, "fromresource"))
                writer.uint32(/* id 29, wireType 0 =*/232).int32(message.fromresource);
            if (message.amount2 != null && Object.hasOwnProperty.call(message, "amount2"))
                writer.uint32(/* id 30, wireType 5 =*/245).float(message.amount2);
            if (message.unittype2 != null && Object.hasOwnProperty.call(message, "unittype2"))
                writer.uint32(/* id 31, wireType 2 =*/250).string(message.unittype2);
            if (message.civ != null && Object.hasOwnProperty.call(message, "civ"))
                writer.uint32(/* id 32, wireType 2 =*/258).string(message.civ);
            if (message.counttype != null && Object.hasOwnProperty.call(message, "counttype"))
                writer.uint32(/* id 33, wireType 2 =*/266).string(message.counttype);
            if (message.maxcount != null && Object.hasOwnProperty.call(message, "maxcount"))
                writer.uint32(/* id 34, wireType 0 =*/272).int32(message.maxcount);
            if (message.ageprereq != null && Object.hasOwnProperty.call(message, "ageprereq"))
                writer.uint32(/* id 35, wireType 0 =*/280).int32(message.ageprereq);
            if (message.unitcount != null && Object.hasOwnProperty.call(message, "unitcount"))
                writer.uint32(/* id 36, wireType 0 =*/288).int32(message.unitcount);
            if (message.includeself != null && Object.hasOwnProperty.call(message, "includeself"))
                writer.uint32(/* id 37, wireType 0 =*/296).bool(message.includeself);
            if (message.protoaction != null && Object.hasOwnProperty.call(message, "protoaction"))
                writer.uint32(/* id 38, wireType 2 =*/306).string(message.protoaction);
            if (message.armortype != null && Object.hasOwnProperty.call(message, "armortype"))
                writer.uint32(/* id 39, wireType 0 =*/312).int32(message.armortype);
            if (message.resource2 != null && Object.hasOwnProperty.call(message, "resource2"))
                writer.uint32(/* id 40, wireType 0 =*/320).int32(message.resource2);
            if (message.extrabounty != null && Object.hasOwnProperty.call(message, "extrabounty"))
                writer.uint32(/* id 41, wireType 0 =*/328).bool(message.extrabounty);
            if (message.bountyrate != null && Object.hasOwnProperty.call(message, "bountyrate"))
                writer.uint32(/* id 42, wireType 5 =*/341).float(message.bountyrate);
            if (message.unitcap != null && Object.hasOwnProperty.call(message, "unitcap"))
                writer.uint32(/* id 43, wireType 5 =*/349).float(message.unitcap);
            if (message.tactic != null && Object.hasOwnProperty.call(message, "tactic"))
                writer.uint32(/* id 44, wireType 2 =*/354).string(message.tactic);
            return writer;
        };

        /**
         * Encodes the specified TechEffectInfo message, length delimited. Does not implicitly {@link backend.TechEffectInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof backend.TechEffectInfo
         * @static
         * @param {backend.ITechEffectInfo} message TechEffectInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TechEffectInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TechEffectInfo message from the specified reader or buffer.
         * @function decode
         * @memberof backend.TechEffectInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {backend.TechEffectInfo} TechEffectInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TechEffectInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.TechEffectInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.string();
                        break;
                    }
                case 2: {
                        message.amount = reader.float();
                        break;
                    }
                case 3: {
                        message.subtype = reader.string();
                        break;
                    }
                case 4: {
                        message.relativity = reader.int32();
                        break;
                    }
                case 5: {
                        message.text = reader.string();
                        break;
                    }
                case 6: {
                        message.targettype = reader.int32();
                        break;
                    }
                case 7: {
                        message.targettext = reader.string();
                        break;
                    }
                case 8: {
                        message.status = reader.int32();
                        break;
                    }
                case 9: {
                        message.action = reader.string();
                        break;
                    }
                case 10: {
                        message.tech = reader.string();
                        break;
                    }
                case 11: {
                        message.newname = reader.int32();
                        break;
                    }
                case 12: {
                        message.newrollover = reader.int32();
                        break;
                    }
                case 13: {
                        message.unittype = reader.string();
                        break;
                    }
                case 14: {
                        message.resource = reader.int32();
                        break;
                    }
                case 15: {
                        message.allactions = reader.bool();
                        break;
                    }
                case 16: {
                        message.proto = reader.string();
                        break;
                    }
                case 17: {
                        message.neweditorname = reader.int32();
                        break;
                    }
                case 18: {
                        message.newshortrollover = reader.int32();
                        break;
                    }
                case 19: {
                        message.stringid = reader.int32();
                        break;
                    }
                case 20: {
                        message.resvalue = reader.float();
                        break;
                    }
                case 21: {
                        message.component = reader.int32();
                        break;
                    }
                case 22: {
                        message.newtype = reader.int32();
                        break;
                    }
                case 23: {
                        message.resourcecap = reader.float();
                        break;
                    }
                case 24: {
                        message.protopower = reader.string();
                        break;
                    }
                case 25: {
                        message.toprotoid = reader.string();
                        break;
                    }
                case 26: {
                        message.fromprotoid = reader.string();
                        break;
                    }
                case 27: {
                        message.multiplier = reader.float();
                        break;
                    }
                case 28: {
                        message.toresource = reader.int32();
                        break;
                    }
                case 29: {
                        message.fromresource = reader.int32();
                        break;
                    }
                case 30: {
                        message.amount2 = reader.float();
                        break;
                    }
                case 31: {
                        message.unittype2 = reader.string();
                        break;
                    }
                case 32: {
                        message.civ = reader.string();
                        break;
                    }
                case 33: {
                        message.counttype = reader.string();
                        break;
                    }
                case 34: {
                        message.maxcount = reader.int32();
                        break;
                    }
                case 35: {
                        message.ageprereq = reader.int32();
                        break;
                    }
                case 36: {
                        message.unitcount = reader.int32();
                        break;
                    }
                case 37: {
                        message.includeself = reader.bool();
                        break;
                    }
                case 38: {
                        message.protoaction = reader.string();
                        break;
                    }
                case 39: {
                        message.armortype = reader.int32();
                        break;
                    }
                case 40: {
                        message.resource2 = reader.int32();
                        break;
                    }
                case 41: {
                        message.extrabounty = reader.bool();
                        break;
                    }
                case 42: {
                        message.bountyrate = reader.float();
                        break;
                    }
                case 43: {
                        message.unitcap = reader.float();
                        break;
                    }
                case 44: {
                        message.tactic = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TechEffectInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof backend.TechEffectInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {backend.TechEffectInfo} TechEffectInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TechEffectInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TechEffectInfo message.
         * @function verify
         * @memberof backend.TechEffectInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TechEffectInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount !== "number")
                    return "amount: number expected";
            if (message.subtype != null && message.hasOwnProperty("subtype"))
                if (!$util.isString(message.subtype))
                    return "subtype: string expected";
            if (message.relativity != null && message.hasOwnProperty("relativity"))
                switch (message.relativity) {
                default:
                    return "relativity: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            if (message.targettype != null && message.hasOwnProperty("targettype"))
                switch (message.targettype) {
                default:
                    return "targettype: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.targettext != null && message.hasOwnProperty("targettext"))
                if (!$util.isString(message.targettext))
                    return "targettext: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.action != null && message.hasOwnProperty("action"))
                if (!$util.isString(message.action))
                    return "action: string expected";
            if (message.tech != null && message.hasOwnProperty("tech"))
                if (!$util.isString(message.tech))
                    return "tech: string expected";
            if (message.newname != null && message.hasOwnProperty("newname"))
                if (!$util.isInteger(message.newname))
                    return "newname: integer expected";
            if (message.newrollover != null && message.hasOwnProperty("newrollover"))
                if (!$util.isInteger(message.newrollover))
                    return "newrollover: integer expected";
            if (message.unittype != null && message.hasOwnProperty("unittype"))
                if (!$util.isString(message.unittype))
                    return "unittype: string expected";
            if (message.resource != null && message.hasOwnProperty("resource"))
                switch (message.resource) {
                default:
                    return "resource: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            if (message.allactions != null && message.hasOwnProperty("allactions"))
                if (typeof message.allactions !== "boolean")
                    return "allactions: boolean expected";
            if (message.proto != null && message.hasOwnProperty("proto"))
                if (!$util.isString(message.proto))
                    return "proto: string expected";
            if (message.neweditorname != null && message.hasOwnProperty("neweditorname"))
                if (!$util.isInteger(message.neweditorname))
                    return "neweditorname: integer expected";
            if (message.newshortrollover != null && message.hasOwnProperty("newshortrollover"))
                if (!$util.isInteger(message.newshortrollover))
                    return "newshortrollover: integer expected";
            if (message.stringid != null && message.hasOwnProperty("stringid"))
                if (!$util.isInteger(message.stringid))
                    return "stringid: integer expected";
            if (message.resvalue != null && message.hasOwnProperty("resvalue"))
                if (typeof message.resvalue !== "number")
                    return "resvalue: number expected";
            if (message.component != null && message.hasOwnProperty("component"))
                switch (message.component) {
                default:
                    return "component: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.newtype != null && message.hasOwnProperty("newtype"))
                switch (message.newtype) {
                default:
                    return "newtype: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.resourcecap != null && message.hasOwnProperty("resourcecap"))
                if (typeof message.resourcecap !== "number")
                    return "resourcecap: number expected";
            if (message.protopower != null && message.hasOwnProperty("protopower"))
                if (!$util.isString(message.protopower))
                    return "protopower: string expected";
            if (message.toprotoid != null && message.hasOwnProperty("toprotoid"))
                if (!$util.isString(message.toprotoid))
                    return "toprotoid: string expected";
            if (message.fromprotoid != null && message.hasOwnProperty("fromprotoid"))
                if (!$util.isString(message.fromprotoid))
                    return "fromprotoid: string expected";
            if (message.multiplier != null && message.hasOwnProperty("multiplier"))
                if (typeof message.multiplier !== "number")
                    return "multiplier: number expected";
            if (message.toresource != null && message.hasOwnProperty("toresource"))
                switch (message.toresource) {
                default:
                    return "toresource: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            if (message.fromresource != null && message.hasOwnProperty("fromresource"))
                switch (message.fromresource) {
                default:
                    return "fromresource: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            if (message.amount2 != null && message.hasOwnProperty("amount2"))
                if (typeof message.amount2 !== "number")
                    return "amount2: number expected";
            if (message.unittype2 != null && message.hasOwnProperty("unittype2"))
                if (!$util.isString(message.unittype2))
                    return "unittype2: string expected";
            if (message.civ != null && message.hasOwnProperty("civ"))
                if (!$util.isString(message.civ))
                    return "civ: string expected";
            if (message.counttype != null && message.hasOwnProperty("counttype"))
                if (!$util.isString(message.counttype))
                    return "counttype: string expected";
            if (message.maxcount != null && message.hasOwnProperty("maxcount"))
                if (!$util.isInteger(message.maxcount))
                    return "maxcount: integer expected";
            if (message.ageprereq != null && message.hasOwnProperty("ageprereq"))
                if (!$util.isInteger(message.ageprereq))
                    return "ageprereq: integer expected";
            if (message.unitcount != null && message.hasOwnProperty("unitcount"))
                if (!$util.isInteger(message.unitcount))
                    return "unitcount: integer expected";
            if (message.includeself != null && message.hasOwnProperty("includeself"))
                if (typeof message.includeself !== "boolean")
                    return "includeself: boolean expected";
            if (message.protoaction != null && message.hasOwnProperty("protoaction"))
                if (!$util.isString(message.protoaction))
                    return "protoaction: string expected";
            if (message.armortype != null && message.hasOwnProperty("armortype"))
                switch (message.armortype) {
                default:
                    return "armortype: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.resource2 != null && message.hasOwnProperty("resource2"))
                switch (message.resource2) {
                default:
                    return "resource2: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            if (message.extrabounty != null && message.hasOwnProperty("extrabounty"))
                if (typeof message.extrabounty !== "boolean")
                    return "extrabounty: boolean expected";
            if (message.bountyrate != null && message.hasOwnProperty("bountyrate"))
                if (typeof message.bountyrate !== "number")
                    return "bountyrate: number expected";
            if (message.unitcap != null && message.hasOwnProperty("unitcap"))
                if (typeof message.unitcap !== "number")
                    return "unitcap: number expected";
            if (message.tactic != null && message.hasOwnProperty("tactic"))
                if (!$util.isString(message.tactic))
                    return "tactic: string expected";
            return null;
        };

        /**
         * Creates a TechEffectInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof backend.TechEffectInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {backend.TechEffectInfo} TechEffectInfo
         */
        TechEffectInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.backend.TechEffectInfo)
                return object;
            let message = new $root.backend.TechEffectInfo();
            if (object.type != null)
                message.type = String(object.type);
            if (object.amount != null)
                message.amount = Number(object.amount);
            if (object.subtype != null)
                message.subtype = String(object.subtype);
            switch (object.relativity) {
            default:
                if (typeof object.relativity === "number") {
                    message.relativity = object.relativity;
                    break;
                }
                break;
            case "Absolute":
            case 0:
                message.relativity = 0;
                break;
            case "Assign":
            case 1:
                message.relativity = 1;
                break;
            case "BasePercent":
            case 2:
                message.relativity = 2;
                break;
            case "DefaultValue":
            case 3:
                message.relativity = 3;
                break;
            case "Override":
            case 4:
                message.relativity = 4;
                break;
            case "Percent":
            case 5:
                message.relativity = 5;
                break;
            }
            if (object.text != null)
                message.text = String(object.text);
            switch (object.targettype) {
            default:
                if (typeof object.targettype === "number") {
                    message.targettype = object.targettype;
                    break;
                }
                break;
            case "Player":
            case 0:
                message.targettype = 0;
                break;
            case "Proto":
            case 1:
                message.targettype = 1;
                break;
            case "ProtoUnit":
            case 2:
                message.targettype = 2;
                break;
            case "Tech":
            case 3:
                message.targettype = 3;
                break;
            case "TechAll":
            case 4:
                message.targettype = 4;
                break;
            case "TechWithFlag":
            case 5:
                message.targettype = 5;
                break;
            }
            if (object.targettext != null)
                message.targettext = String(object.targettext);
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "None":
            case 0:
                message.status = 0;
                break;
            case "Active":
            case 1:
                message.status = 1;
                break;
            case "Obtainable":
            case 2:
                message.status = 2;
                break;
            case "Unobtainable":
            case 3:
                message.status = 3;
                break;
            }
            if (object.action != null)
                message.action = String(object.action);
            if (object.tech != null)
                message.tech = String(object.tech);
            if (object.newname != null)
                message.newname = object.newname | 0;
            if (object.newrollover != null)
                message.newrollover = object.newrollover | 0;
            if (object.unittype != null)
                message.unittype = String(object.unittype);
            switch (object.resource) {
            default:
                if (typeof object.resource === "number") {
                    message.resource = object.resource;
                    break;
                }
                break;
            case "Food":
            case 0:
                message.resource = 0;
                break;
            case "Gold":
            case 1:
                message.resource = 1;
                break;
            case "Influence":
            case 2:
                message.resource = 2;
                break;
            case "Ships":
            case 3:
                message.resource = 3;
                break;
            case "Trade":
            case 4:
                message.resource = 4;
                break;
            case "Wood":
            case 5:
                message.resource = 5;
                break;
            case "XP":
            case 6:
                message.resource = 6;
                break;
            }
            if (object.allactions != null)
                message.allactions = Boolean(object.allactions);
            if (object.proto != null)
                message.proto = String(object.proto);
            if (object.neweditorname != null)
                message.neweditorname = object.neweditorname | 0;
            if (object.newshortrollover != null)
                message.newshortrollover = object.newshortrollover | 0;
            if (object.stringid != null)
                message.stringid = object.stringid | 0;
            if (object.resvalue != null)
                message.resvalue = Number(object.resvalue);
            switch (object.component) {
            default:
                if (typeof object.component === "number") {
                    message.component = object.component;
                    break;
                }
                break;
            case "BuyFactor":
            case 0:
                message.component = 0;
                break;
            case "SellFactor":
            case 1:
                message.component = 1;
                break;
            case "SellFactorSpecific":
            case 2:
                message.component = 2;
                break;
            }
            switch (object.newtype) {
            default:
                if (typeof object.newtype === "number") {
                    message.newtype = object.newtype;
                    break;
                }
                break;
            case "Hand":
            case 0:
                message.newtype = 0;
                break;
            case "Ranged":
            case 1:
                message.newtype = 1;
                break;
            case "Siege":
            case 2:
                message.newtype = 2;
                break;
            }
            if (object.resourcecap != null)
                message.resourcecap = Number(object.resourcecap);
            if (object.protopower != null)
                message.protopower = String(object.protopower);
            if (object.toprotoid != null)
                message.toprotoid = String(object.toprotoid);
            if (object.fromprotoid != null)
                message.fromprotoid = String(object.fromprotoid);
            if (object.multiplier != null)
                message.multiplier = Number(object.multiplier);
            switch (object.toresource) {
            default:
                if (typeof object.toresource === "number") {
                    message.toresource = object.toresource;
                    break;
                }
                break;
            case "Food":
            case 0:
                message.toresource = 0;
                break;
            case "Gold":
            case 1:
                message.toresource = 1;
                break;
            case "Influence":
            case 2:
                message.toresource = 2;
                break;
            case "Ships":
            case 3:
                message.toresource = 3;
                break;
            case "Trade":
            case 4:
                message.toresource = 4;
                break;
            case "Wood":
            case 5:
                message.toresource = 5;
                break;
            case "XP":
            case 6:
                message.toresource = 6;
                break;
            }
            switch (object.fromresource) {
            default:
                if (typeof object.fromresource === "number") {
                    message.fromresource = object.fromresource;
                    break;
                }
                break;
            case "Food":
            case 0:
                message.fromresource = 0;
                break;
            case "Gold":
            case 1:
                message.fromresource = 1;
                break;
            case "Influence":
            case 2:
                message.fromresource = 2;
                break;
            case "Ships":
            case 3:
                message.fromresource = 3;
                break;
            case "Trade":
            case 4:
                message.fromresource = 4;
                break;
            case "Wood":
            case 5:
                message.fromresource = 5;
                break;
            case "XP":
            case 6:
                message.fromresource = 6;
                break;
            }
            if (object.amount2 != null)
                message.amount2 = Number(object.amount2);
            if (object.unittype2 != null)
                message.unittype2 = String(object.unittype2);
            if (object.civ != null)
                message.civ = String(object.civ);
            if (object.counttype != null)
                message.counttype = String(object.counttype);
            if (object.maxcount != null)
                message.maxcount = object.maxcount | 0;
            if (object.ageprereq != null)
                message.ageprereq = object.ageprereq | 0;
            if (object.unitcount != null)
                message.unitcount = object.unitcount | 0;
            if (object.includeself != null)
                message.includeself = Boolean(object.includeself);
            if (object.protoaction != null)
                message.protoaction = String(object.protoaction);
            switch (object.armortype) {
            default:
                if (typeof object.armortype === "number") {
                    message.armortype = object.armortype;
                    break;
                }
                break;
            case "Hand":
            case 0:
                message.armortype = 0;
                break;
            case "Ranged":
            case 1:
                message.armortype = 1;
                break;
            case "Siege":
            case 2:
                message.armortype = 2;
                break;
            }
            switch (object.resource2) {
            default:
                if (typeof object.resource2 === "number") {
                    message.resource2 = object.resource2;
                    break;
                }
                break;
            case "Food":
            case 0:
                message.resource2 = 0;
                break;
            case "Gold":
            case 1:
                message.resource2 = 1;
                break;
            case "Influence":
            case 2:
                message.resource2 = 2;
                break;
            case "Ships":
            case 3:
                message.resource2 = 3;
                break;
            case "Trade":
            case 4:
                message.resource2 = 4;
                break;
            case "Wood":
            case 5:
                message.resource2 = 5;
                break;
            case "XP":
            case 6:
                message.resource2 = 6;
                break;
            }
            if (object.extrabounty != null)
                message.extrabounty = Boolean(object.extrabounty);
            if (object.bountyrate != null)
                message.bountyrate = Number(object.bountyrate);
            if (object.unitcap != null)
                message.unitcap = Number(object.unitcap);
            if (object.tactic != null)
                message.tactic = String(object.tactic);
            return message;
        };

        /**
         * Creates a plain object from a TechEffectInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof backend.TechEffectInfo
         * @static
         * @param {backend.TechEffectInfo} message TechEffectInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TechEffectInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.type = "";
                object.amount = 0;
                object.subtype = "";
                object.relativity = options.enums === String ? "Absolute" : 0;
                object.text = "";
                object.targettype = options.enums === String ? "Player" : 0;
                object.targettext = "";
                object.status = options.enums === String ? "None" : 0;
                object.action = "";
                object.tech = "";
                object.newname = 0;
                object.newrollover = 0;
                object.unittype = "";
                object.resource = options.enums === String ? "Food" : 0;
                object.allactions = false;
                object.proto = "";
                object.neweditorname = 0;
                object.newshortrollover = 0;
                object.stringid = 0;
                object.resvalue = 0;
                object.component = options.enums === String ? "BuyFactor" : 0;
                object.newtype = options.enums === String ? "Hand" : 0;
                object.resourcecap = 0;
                object.protopower = "";
                object.toprotoid = "";
                object.fromprotoid = "";
                object.multiplier = 0;
                object.toresource = options.enums === String ? "Food" : 0;
                object.fromresource = options.enums === String ? "Food" : 0;
                object.amount2 = 0;
                object.unittype2 = "";
                object.civ = "";
                object.counttype = "";
                object.maxcount = 0;
                object.ageprereq = 0;
                object.unitcount = 0;
                object.includeself = false;
                object.protoaction = "";
                object.armortype = options.enums === String ? "Hand" : 0;
                object.resource2 = options.enums === String ? "Food" : 0;
                object.extrabounty = false;
                object.bountyrate = 0;
                object.unitcap = 0;
                object.tactic = "";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = options.json && !isFinite(message.amount) ? String(message.amount) : message.amount;
            if (message.subtype != null && message.hasOwnProperty("subtype"))
                object.subtype = message.subtype;
            if (message.relativity != null && message.hasOwnProperty("relativity"))
                object.relativity = options.enums === String ? $root.backend.TechRelativity[message.relativity] === undefined ? message.relativity : $root.backend.TechRelativity[message.relativity] : message.relativity;
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            if (message.targettype != null && message.hasOwnProperty("targettype"))
                object.targettype = options.enums === String ? $root.backend.TechTargetType[message.targettype] === undefined ? message.targettype : $root.backend.TechTargetType[message.targettype] : message.targettype;
            if (message.targettext != null && message.hasOwnProperty("targettext"))
                object.targettext = message.targettext;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.backend.TechStatus[message.status] === undefined ? message.status : $root.backend.TechStatus[message.status] : message.status;
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = message.action;
            if (message.tech != null && message.hasOwnProperty("tech"))
                object.tech = message.tech;
            if (message.newname != null && message.hasOwnProperty("newname"))
                object.newname = message.newname;
            if (message.newrollover != null && message.hasOwnProperty("newrollover"))
                object.newrollover = message.newrollover;
            if (message.unittype != null && message.hasOwnProperty("unittype"))
                object.unittype = message.unittype;
            if (message.resource != null && message.hasOwnProperty("resource"))
                object.resource = options.enums === String ? $root.backend.TechResourceType[message.resource] === undefined ? message.resource : $root.backend.TechResourceType[message.resource] : message.resource;
            if (message.allactions != null && message.hasOwnProperty("allactions"))
                object.allactions = message.allactions;
            if (message.proto != null && message.hasOwnProperty("proto"))
                object.proto = message.proto;
            if (message.neweditorname != null && message.hasOwnProperty("neweditorname"))
                object.neweditorname = message.neweditorname;
            if (message.newshortrollover != null && message.hasOwnProperty("newshortrollover"))
                object.newshortrollover = message.newshortrollover;
            if (message.stringid != null && message.hasOwnProperty("stringid"))
                object.stringid = message.stringid;
            if (message.resvalue != null && message.hasOwnProperty("resvalue"))
                object.resvalue = options.json && !isFinite(message.resvalue) ? String(message.resvalue) : message.resvalue;
            if (message.component != null && message.hasOwnProperty("component"))
                object.component = options.enums === String ? $root.backend.TechComponentType[message.component] === undefined ? message.component : $root.backend.TechComponentType[message.component] : message.component;
            if (message.newtype != null && message.hasOwnProperty("newtype"))
                object.newtype = options.enums === String ? $root.backend.TechArmorType[message.newtype] === undefined ? message.newtype : $root.backend.TechArmorType[message.newtype] : message.newtype;
            if (message.resourcecap != null && message.hasOwnProperty("resourcecap"))
                object.resourcecap = options.json && !isFinite(message.resourcecap) ? String(message.resourcecap) : message.resourcecap;
            if (message.protopower != null && message.hasOwnProperty("protopower"))
                object.protopower = message.protopower;
            if (message.toprotoid != null && message.hasOwnProperty("toprotoid"))
                object.toprotoid = message.toprotoid;
            if (message.fromprotoid != null && message.hasOwnProperty("fromprotoid"))
                object.fromprotoid = message.fromprotoid;
            if (message.multiplier != null && message.hasOwnProperty("multiplier"))
                object.multiplier = options.json && !isFinite(message.multiplier) ? String(message.multiplier) : message.multiplier;
            if (message.toresource != null && message.hasOwnProperty("toresource"))
                object.toresource = options.enums === String ? $root.backend.TechResourceType[message.toresource] === undefined ? message.toresource : $root.backend.TechResourceType[message.toresource] : message.toresource;
            if (message.fromresource != null && message.hasOwnProperty("fromresource"))
                object.fromresource = options.enums === String ? $root.backend.TechResourceType[message.fromresource] === undefined ? message.fromresource : $root.backend.TechResourceType[message.fromresource] : message.fromresource;
            if (message.amount2 != null && message.hasOwnProperty("amount2"))
                object.amount2 = options.json && !isFinite(message.amount2) ? String(message.amount2) : message.amount2;
            if (message.unittype2 != null && message.hasOwnProperty("unittype2"))
                object.unittype2 = message.unittype2;
            if (message.civ != null && message.hasOwnProperty("civ"))
                object.civ = message.civ;
            if (message.counttype != null && message.hasOwnProperty("counttype"))
                object.counttype = message.counttype;
            if (message.maxcount != null && message.hasOwnProperty("maxcount"))
                object.maxcount = message.maxcount;
            if (message.ageprereq != null && message.hasOwnProperty("ageprereq"))
                object.ageprereq = message.ageprereq;
            if (message.unitcount != null && message.hasOwnProperty("unitcount"))
                object.unitcount = message.unitcount;
            if (message.includeself != null && message.hasOwnProperty("includeself"))
                object.includeself = message.includeself;
            if (message.protoaction != null && message.hasOwnProperty("protoaction"))
                object.protoaction = message.protoaction;
            if (message.armortype != null && message.hasOwnProperty("armortype"))
                object.armortype = options.enums === String ? $root.backend.TechArmorType[message.armortype] === undefined ? message.armortype : $root.backend.TechArmorType[message.armortype] : message.armortype;
            if (message.resource2 != null && message.hasOwnProperty("resource2"))
                object.resource2 = options.enums === String ? $root.backend.TechResourceType[message.resource2] === undefined ? message.resource2 : $root.backend.TechResourceType[message.resource2] : message.resource2;
            if (message.extrabounty != null && message.hasOwnProperty("extrabounty"))
                object.extrabounty = message.extrabounty;
            if (message.bountyrate != null && message.hasOwnProperty("bountyrate"))
                object.bountyrate = options.json && !isFinite(message.bountyrate) ? String(message.bountyrate) : message.bountyrate;
            if (message.unitcap != null && message.hasOwnProperty("unitcap"))
                object.unitcap = options.json && !isFinite(message.unitcap) ? String(message.unitcap) : message.unitcap;
            if (message.tactic != null && message.hasOwnProperty("tactic"))
                object.tactic = message.tactic;
            return object;
        };

        /**
         * Converts this TechEffectInfo to JSON.
         * @function toJSON
         * @memberof backend.TechEffectInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TechEffectInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TechEffectInfo;
    })();

    backend.TechCostInfo = (function() {

        /**
         * Properties of a TechCostInfo.
         * @memberof backend
         * @interface ITechCostInfo
         * @property {backend.TechResourceType|null} [resourcetype] TechCostInfo resourcetype
         * @property {number|null} [amount] TechCostInfo amount
         */

        /**
         * Constructs a new TechCostInfo.
         * @memberof backend
         * @classdesc Represents a TechCostInfo.
         * @implements ITechCostInfo
         * @constructor
         * @param {backend.ITechCostInfo=} [properties] Properties to set
         */
        function TechCostInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TechCostInfo resourcetype.
         * @member {backend.TechResourceType} resourcetype
         * @memberof backend.TechCostInfo
         * @instance
         */
        TechCostInfo.prototype.resourcetype = 0;

        /**
         * TechCostInfo amount.
         * @member {number} amount
         * @memberof backend.TechCostInfo
         * @instance
         */
        TechCostInfo.prototype.amount = 0;

        /**
         * Creates a new TechCostInfo instance using the specified properties.
         * @function create
         * @memberof backend.TechCostInfo
         * @static
         * @param {backend.ITechCostInfo=} [properties] Properties to set
         * @returns {backend.TechCostInfo} TechCostInfo instance
         */
        TechCostInfo.create = function create(properties) {
            return new TechCostInfo(properties);
        };

        /**
         * Encodes the specified TechCostInfo message. Does not implicitly {@link backend.TechCostInfo.verify|verify} messages.
         * @function encode
         * @memberof backend.TechCostInfo
         * @static
         * @param {backend.ITechCostInfo} message TechCostInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TechCostInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.resourcetype != null && Object.hasOwnProperty.call(message, "resourcetype"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.resourcetype);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.amount);
            return writer;
        };

        /**
         * Encodes the specified TechCostInfo message, length delimited. Does not implicitly {@link backend.TechCostInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof backend.TechCostInfo
         * @static
         * @param {backend.ITechCostInfo} message TechCostInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TechCostInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TechCostInfo message from the specified reader or buffer.
         * @function decode
         * @memberof backend.TechCostInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {backend.TechCostInfo} TechCostInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TechCostInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.TechCostInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.resourcetype = reader.int32();
                        break;
                    }
                case 2: {
                        message.amount = reader.float();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TechCostInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof backend.TechCostInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {backend.TechCostInfo} TechCostInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TechCostInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TechCostInfo message.
         * @function verify
         * @memberof backend.TechCostInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TechCostInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.resourcetype != null && message.hasOwnProperty("resourcetype"))
                switch (message.resourcetype) {
                default:
                    return "resourcetype: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount !== "number")
                    return "amount: number expected";
            return null;
        };

        /**
         * Creates a TechCostInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof backend.TechCostInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {backend.TechCostInfo} TechCostInfo
         */
        TechCostInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.backend.TechCostInfo)
                return object;
            let message = new $root.backend.TechCostInfo();
            switch (object.resourcetype) {
            default:
                if (typeof object.resourcetype === "number") {
                    message.resourcetype = object.resourcetype;
                    break;
                }
                break;
            case "Food":
            case 0:
                message.resourcetype = 0;
                break;
            case "Gold":
            case 1:
                message.resourcetype = 1;
                break;
            case "Influence":
            case 2:
                message.resourcetype = 2;
                break;
            case "Ships":
            case 3:
                message.resourcetype = 3;
                break;
            case "Trade":
            case 4:
                message.resourcetype = 4;
                break;
            case "Wood":
            case 5:
                message.resourcetype = 5;
                break;
            case "XP":
            case 6:
                message.resourcetype = 6;
                break;
            }
            if (object.amount != null)
                message.amount = Number(object.amount);
            return message;
        };

        /**
         * Creates a plain object from a TechCostInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof backend.TechCostInfo
         * @static
         * @param {backend.TechCostInfo} message TechCostInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TechCostInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.resourcetype = options.enums === String ? "Food" : 0;
                object.amount = 0;
            }
            if (message.resourcetype != null && message.hasOwnProperty("resourcetype"))
                object.resourcetype = options.enums === String ? $root.backend.TechResourceType[message.resourcetype] === undefined ? message.resourcetype : $root.backend.TechResourceType[message.resourcetype] : message.resourcetype;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = options.json && !isFinite(message.amount) ? String(message.amount) : message.amount;
            return object;
        };

        /**
         * Converts this TechCostInfo to JSON.
         * @function toJSON
         * @memberof backend.TechCostInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TechCostInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TechCostInfo;
    })();

    /**
     * TechStatus enum.
     * @name backend.TechStatus
     * @enum {number}
     * @property {number} None=0 None value
     * @property {number} Active=1 Active value
     * @property {number} Obtainable=2 Obtainable value
     * @property {number} Unobtainable=3 Unobtainable value
     */
    backend.TechStatus = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "None"] = 0;
        values[valuesById[1] = "Active"] = 1;
        values[valuesById[2] = "Obtainable"] = 2;
        values[valuesById[3] = "Unobtainable"] = 3;
        return values;
    })();

    /**
     * TechRelativity enum.
     * @name backend.TechRelativity
     * @enum {number}
     * @property {number} Absolute=0 Absolute value
     * @property {number} Assign=1 Assign value
     * @property {number} BasePercent=2 BasePercent value
     * @property {number} DefaultValue=3 DefaultValue value
     * @property {number} Override=4 Override value
     * @property {number} Percent=5 Percent value
     */
    backend.TechRelativity = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Absolute"] = 0;
        values[valuesById[1] = "Assign"] = 1;
        values[valuesById[2] = "BasePercent"] = 2;
        values[valuesById[3] = "DefaultValue"] = 3;
        values[valuesById[4] = "Override"] = 4;
        values[valuesById[5] = "Percent"] = 5;
        return values;
    })();

    /**
     * TechArmorType enum.
     * @name backend.TechArmorType
     * @enum {number}
     * @property {number} Hand=0 Hand value
     * @property {number} Ranged=1 Ranged value
     * @property {number} Siege=2 Siege value
     */
    backend.TechArmorType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Hand"] = 0;
        values[valuesById[1] = "Ranged"] = 1;
        values[valuesById[2] = "Siege"] = 2;
        return values;
    })();

    /**
     * TechResourceType enum.
     * @name backend.TechResourceType
     * @enum {number}
     * @property {number} Food=0 Food value
     * @property {number} Gold=1 Gold value
     * @property {number} Influence=2 Influence value
     * @property {number} Ships=3 Ships value
     * @property {number} Trade=4 Trade value
     * @property {number} Wood=5 Wood value
     * @property {number} XP=6 XP value
     */
    backend.TechResourceType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Food"] = 0;
        values[valuesById[1] = "Gold"] = 1;
        values[valuesById[2] = "Influence"] = 2;
        values[valuesById[3] = "Ships"] = 3;
        values[valuesById[4] = "Trade"] = 4;
        values[valuesById[5] = "Wood"] = 5;
        values[valuesById[6] = "XP"] = 6;
        return values;
    })();

    /**
     * TechComponentType enum.
     * @name backend.TechComponentType
     * @enum {number}
     * @property {number} BuyFactor=0 BuyFactor value
     * @property {number} SellFactor=1 SellFactor value
     * @property {number} SellFactorSpecific=2 SellFactorSpecific value
     */
    backend.TechComponentType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "BuyFactor"] = 0;
        values[valuesById[1] = "SellFactor"] = 1;
        values[valuesById[2] = "SellFactorSpecific"] = 2;
        return values;
    })();

    /**
     * TechTargetType enum.
     * @name backend.TechTargetType
     * @enum {number}
     * @property {number} Player=0 Player value
     * @property {number} Proto=1 Proto value
     * @property {number} ProtoUnit=2 ProtoUnit value
     * @property {number} Tech=3 Tech value
     * @property {number} TechAll=4 TechAll value
     * @property {number} TechWithFlag=5 TechWithFlag value
     */
    backend.TechTargetType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Player"] = 0;
        values[valuesById[1] = "Proto"] = 1;
        values[valuesById[2] = "ProtoUnit"] = 2;
        values[valuesById[3] = "Tech"] = 3;
        values[valuesById[4] = "TechAll"] = 4;
        values[valuesById[5] = "TechWithFlag"] = 5;
        return values;
    })();

    backend.TierListSave = (function() {

        /**
         * Properties of a TierListSave.
         * @memberof backend
         * @interface ITierListSave
         * @property {Array.<number>|null} [sTier] TierListSave sTier
         * @property {Array.<number>|null} [aTier] TierListSave aTier
         * @property {Array.<number>|null} [bTier] TierListSave bTier
         * @property {Array.<number>|null} [cTier] TierListSave cTier
         * @property {Array.<number>|null} [dTier] TierListSave dTier
         * @property {Array.<number>|null} [eTier] TierListSave eTier
         * @property {Array.<number>|null} [fTier] TierListSave fTier
         * @property {Array.<number>|null} [civList] TierListSave civList
         * @property {number|null} [tierCount] TierListSave tierCount
         */

        /**
         * Constructs a new TierListSave.
         * @memberof backend
         * @classdesc Represents a TierListSave.
         * @implements ITierListSave
         * @constructor
         * @param {backend.ITierListSave=} [properties] Properties to set
         */
        function TierListSave(properties) {
            this.sTier = [];
            this.aTier = [];
            this.bTier = [];
            this.cTier = [];
            this.dTier = [];
            this.eTier = [];
            this.fTier = [];
            this.civList = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TierListSave sTier.
         * @member {Array.<number>} sTier
         * @memberof backend.TierListSave
         * @instance
         */
        TierListSave.prototype.sTier = $util.emptyArray;

        /**
         * TierListSave aTier.
         * @member {Array.<number>} aTier
         * @memberof backend.TierListSave
         * @instance
         */
        TierListSave.prototype.aTier = $util.emptyArray;

        /**
         * TierListSave bTier.
         * @member {Array.<number>} bTier
         * @memberof backend.TierListSave
         * @instance
         */
        TierListSave.prototype.bTier = $util.emptyArray;

        /**
         * TierListSave cTier.
         * @member {Array.<number>} cTier
         * @memberof backend.TierListSave
         * @instance
         */
        TierListSave.prototype.cTier = $util.emptyArray;

        /**
         * TierListSave dTier.
         * @member {Array.<number>} dTier
         * @memberof backend.TierListSave
         * @instance
         */
        TierListSave.prototype.dTier = $util.emptyArray;

        /**
         * TierListSave eTier.
         * @member {Array.<number>} eTier
         * @memberof backend.TierListSave
         * @instance
         */
        TierListSave.prototype.eTier = $util.emptyArray;

        /**
         * TierListSave fTier.
         * @member {Array.<number>} fTier
         * @memberof backend.TierListSave
         * @instance
         */
        TierListSave.prototype.fTier = $util.emptyArray;

        /**
         * TierListSave civList.
         * @member {Array.<number>} civList
         * @memberof backend.TierListSave
         * @instance
         */
        TierListSave.prototype.civList = $util.emptyArray;

        /**
         * TierListSave tierCount.
         * @member {number} tierCount
         * @memberof backend.TierListSave
         * @instance
         */
        TierListSave.prototype.tierCount = 0;

        /**
         * Creates a new TierListSave instance using the specified properties.
         * @function create
         * @memberof backend.TierListSave
         * @static
         * @param {backend.ITierListSave=} [properties] Properties to set
         * @returns {backend.TierListSave} TierListSave instance
         */
        TierListSave.create = function create(properties) {
            return new TierListSave(properties);
        };

        /**
         * Encodes the specified TierListSave message. Does not implicitly {@link backend.TierListSave.verify|verify} messages.
         * @function encode
         * @memberof backend.TierListSave
         * @static
         * @param {backend.ITierListSave} message TierListSave message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TierListSave.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sTier != null && message.sTier.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (let i = 0; i < message.sTier.length; ++i)
                    writer.int32(message.sTier[i]);
                writer.ldelim();
            }
            if (message.aTier != null && message.aTier.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (let i = 0; i < message.aTier.length; ++i)
                    writer.int32(message.aTier[i]);
                writer.ldelim();
            }
            if (message.bTier != null && message.bTier.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (let i = 0; i < message.bTier.length; ++i)
                    writer.int32(message.bTier[i]);
                writer.ldelim();
            }
            if (message.cTier != null && message.cTier.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (let i = 0; i < message.cTier.length; ++i)
                    writer.int32(message.cTier[i]);
                writer.ldelim();
            }
            if (message.dTier != null && message.dTier.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (let i = 0; i < message.dTier.length; ++i)
                    writer.int32(message.dTier[i]);
                writer.ldelim();
            }
            if (message.eTier != null && message.eTier.length) {
                writer.uint32(/* id 6, wireType 2 =*/50).fork();
                for (let i = 0; i < message.eTier.length; ++i)
                    writer.int32(message.eTier[i]);
                writer.ldelim();
            }
            if (message.fTier != null && message.fTier.length) {
                writer.uint32(/* id 7, wireType 2 =*/58).fork();
                for (let i = 0; i < message.fTier.length; ++i)
                    writer.int32(message.fTier[i]);
                writer.ldelim();
            }
            if (message.civList != null && message.civList.length) {
                writer.uint32(/* id 8, wireType 2 =*/66).fork();
                for (let i = 0; i < message.civList.length; ++i)
                    writer.int32(message.civList[i]);
                writer.ldelim();
            }
            if (message.tierCount != null && Object.hasOwnProperty.call(message, "tierCount"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.tierCount);
            return writer;
        };

        /**
         * Encodes the specified TierListSave message, length delimited. Does not implicitly {@link backend.TierListSave.verify|verify} messages.
         * @function encodeDelimited
         * @memberof backend.TierListSave
         * @static
         * @param {backend.ITierListSave} message TierListSave message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TierListSave.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TierListSave message from the specified reader or buffer.
         * @function decode
         * @memberof backend.TierListSave
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {backend.TierListSave} TierListSave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TierListSave.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.TierListSave();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.sTier && message.sTier.length))
                            message.sTier = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.sTier.push(reader.int32());
                        } else
                            message.sTier.push(reader.int32());
                        break;
                    }
                case 2: {
                        if (!(message.aTier && message.aTier.length))
                            message.aTier = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.aTier.push(reader.int32());
                        } else
                            message.aTier.push(reader.int32());
                        break;
                    }
                case 3: {
                        if (!(message.bTier && message.bTier.length))
                            message.bTier = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.bTier.push(reader.int32());
                        } else
                            message.bTier.push(reader.int32());
                        break;
                    }
                case 4: {
                        if (!(message.cTier && message.cTier.length))
                            message.cTier = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.cTier.push(reader.int32());
                        } else
                            message.cTier.push(reader.int32());
                        break;
                    }
                case 5: {
                        if (!(message.dTier && message.dTier.length))
                            message.dTier = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.dTier.push(reader.int32());
                        } else
                            message.dTier.push(reader.int32());
                        break;
                    }
                case 6: {
                        if (!(message.eTier && message.eTier.length))
                            message.eTier = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.eTier.push(reader.int32());
                        } else
                            message.eTier.push(reader.int32());
                        break;
                    }
                case 7: {
                        if (!(message.fTier && message.fTier.length))
                            message.fTier = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.fTier.push(reader.int32());
                        } else
                            message.fTier.push(reader.int32());
                        break;
                    }
                case 8: {
                        if (!(message.civList && message.civList.length))
                            message.civList = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.civList.push(reader.int32());
                        } else
                            message.civList.push(reader.int32());
                        break;
                    }
                case 9: {
                        message.tierCount = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TierListSave message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof backend.TierListSave
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {backend.TierListSave} TierListSave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TierListSave.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TierListSave message.
         * @function verify
         * @memberof backend.TierListSave
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TierListSave.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sTier != null && message.hasOwnProperty("sTier")) {
                if (!Array.isArray(message.sTier))
                    return "sTier: array expected";
                for (let i = 0; i < message.sTier.length; ++i)
                    if (!$util.isInteger(message.sTier[i]))
                        return "sTier: integer[] expected";
            }
            if (message.aTier != null && message.hasOwnProperty("aTier")) {
                if (!Array.isArray(message.aTier))
                    return "aTier: array expected";
                for (let i = 0; i < message.aTier.length; ++i)
                    if (!$util.isInteger(message.aTier[i]))
                        return "aTier: integer[] expected";
            }
            if (message.bTier != null && message.hasOwnProperty("bTier")) {
                if (!Array.isArray(message.bTier))
                    return "bTier: array expected";
                for (let i = 0; i < message.bTier.length; ++i)
                    if (!$util.isInteger(message.bTier[i]))
                        return "bTier: integer[] expected";
            }
            if (message.cTier != null && message.hasOwnProperty("cTier")) {
                if (!Array.isArray(message.cTier))
                    return "cTier: array expected";
                for (let i = 0; i < message.cTier.length; ++i)
                    if (!$util.isInteger(message.cTier[i]))
                        return "cTier: integer[] expected";
            }
            if (message.dTier != null && message.hasOwnProperty("dTier")) {
                if (!Array.isArray(message.dTier))
                    return "dTier: array expected";
                for (let i = 0; i < message.dTier.length; ++i)
                    if (!$util.isInteger(message.dTier[i]))
                        return "dTier: integer[] expected";
            }
            if (message.eTier != null && message.hasOwnProperty("eTier")) {
                if (!Array.isArray(message.eTier))
                    return "eTier: array expected";
                for (let i = 0; i < message.eTier.length; ++i)
                    if (!$util.isInteger(message.eTier[i]))
                        return "eTier: integer[] expected";
            }
            if (message.fTier != null && message.hasOwnProperty("fTier")) {
                if (!Array.isArray(message.fTier))
                    return "fTier: array expected";
                for (let i = 0; i < message.fTier.length; ++i)
                    if (!$util.isInteger(message.fTier[i]))
                        return "fTier: integer[] expected";
            }
            if (message.civList != null && message.hasOwnProperty("civList")) {
                if (!Array.isArray(message.civList))
                    return "civList: array expected";
                for (let i = 0; i < message.civList.length; ++i)
                    if (!$util.isInteger(message.civList[i]))
                        return "civList: integer[] expected";
            }
            if (message.tierCount != null && message.hasOwnProperty("tierCount"))
                if (!$util.isInteger(message.tierCount))
                    return "tierCount: integer expected";
            return null;
        };

        /**
         * Creates a TierListSave message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof backend.TierListSave
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {backend.TierListSave} TierListSave
         */
        TierListSave.fromObject = function fromObject(object) {
            if (object instanceof $root.backend.TierListSave)
                return object;
            let message = new $root.backend.TierListSave();
            if (object.sTier) {
                if (!Array.isArray(object.sTier))
                    throw TypeError(".backend.TierListSave.sTier: array expected");
                message.sTier = [];
                for (let i = 0; i < object.sTier.length; ++i)
                    message.sTier[i] = object.sTier[i] | 0;
            }
            if (object.aTier) {
                if (!Array.isArray(object.aTier))
                    throw TypeError(".backend.TierListSave.aTier: array expected");
                message.aTier = [];
                for (let i = 0; i < object.aTier.length; ++i)
                    message.aTier[i] = object.aTier[i] | 0;
            }
            if (object.bTier) {
                if (!Array.isArray(object.bTier))
                    throw TypeError(".backend.TierListSave.bTier: array expected");
                message.bTier = [];
                for (let i = 0; i < object.bTier.length; ++i)
                    message.bTier[i] = object.bTier[i] | 0;
            }
            if (object.cTier) {
                if (!Array.isArray(object.cTier))
                    throw TypeError(".backend.TierListSave.cTier: array expected");
                message.cTier = [];
                for (let i = 0; i < object.cTier.length; ++i)
                    message.cTier[i] = object.cTier[i] | 0;
            }
            if (object.dTier) {
                if (!Array.isArray(object.dTier))
                    throw TypeError(".backend.TierListSave.dTier: array expected");
                message.dTier = [];
                for (let i = 0; i < object.dTier.length; ++i)
                    message.dTier[i] = object.dTier[i] | 0;
            }
            if (object.eTier) {
                if (!Array.isArray(object.eTier))
                    throw TypeError(".backend.TierListSave.eTier: array expected");
                message.eTier = [];
                for (let i = 0; i < object.eTier.length; ++i)
                    message.eTier[i] = object.eTier[i] | 0;
            }
            if (object.fTier) {
                if (!Array.isArray(object.fTier))
                    throw TypeError(".backend.TierListSave.fTier: array expected");
                message.fTier = [];
                for (let i = 0; i < object.fTier.length; ++i)
                    message.fTier[i] = object.fTier[i] | 0;
            }
            if (object.civList) {
                if (!Array.isArray(object.civList))
                    throw TypeError(".backend.TierListSave.civList: array expected");
                message.civList = [];
                for (let i = 0; i < object.civList.length; ++i)
                    message.civList[i] = object.civList[i] | 0;
            }
            if (object.tierCount != null)
                message.tierCount = object.tierCount | 0;
            return message;
        };

        /**
         * Creates a plain object from a TierListSave message. Also converts values to other types if specified.
         * @function toObject
         * @memberof backend.TierListSave
         * @static
         * @param {backend.TierListSave} message TierListSave
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TierListSave.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.sTier = [];
                object.aTier = [];
                object.bTier = [];
                object.cTier = [];
                object.dTier = [];
                object.eTier = [];
                object.fTier = [];
                object.civList = [];
            }
            if (options.defaults)
                object.tierCount = 0;
            if (message.sTier && message.sTier.length) {
                object.sTier = [];
                for (let j = 0; j < message.sTier.length; ++j)
                    object.sTier[j] = message.sTier[j];
            }
            if (message.aTier && message.aTier.length) {
                object.aTier = [];
                for (let j = 0; j < message.aTier.length; ++j)
                    object.aTier[j] = message.aTier[j];
            }
            if (message.bTier && message.bTier.length) {
                object.bTier = [];
                for (let j = 0; j < message.bTier.length; ++j)
                    object.bTier[j] = message.bTier[j];
            }
            if (message.cTier && message.cTier.length) {
                object.cTier = [];
                for (let j = 0; j < message.cTier.length; ++j)
                    object.cTier[j] = message.cTier[j];
            }
            if (message.dTier && message.dTier.length) {
                object.dTier = [];
                for (let j = 0; j < message.dTier.length; ++j)
                    object.dTier[j] = message.dTier[j];
            }
            if (message.eTier && message.eTier.length) {
                object.eTier = [];
                for (let j = 0; j < message.eTier.length; ++j)
                    object.eTier[j] = message.eTier[j];
            }
            if (message.fTier && message.fTier.length) {
                object.fTier = [];
                for (let j = 0; j < message.fTier.length; ++j)
                    object.fTier[j] = message.fTier[j];
            }
            if (message.civList && message.civList.length) {
                object.civList = [];
                for (let j = 0; j < message.civList.length; ++j)
                    object.civList[j] = message.civList[j];
            }
            if (message.tierCount != null && message.hasOwnProperty("tierCount"))
                object.tierCount = message.tierCount;
            return object;
        };

        /**
         * Converts this TierListSave to JSON.
         * @function toJSON
         * @memberof backend.TierListSave
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TierListSave.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TierListSave;
    })();

    backend.UnitSave = (function() {

        /**
         * Properties of an UnitSave.
         * @memberof backend
         * @interface IUnitSave
         * @property {string|null} [selectedLanguage] UnitSave selectedLanguage
         * @property {number|null} [selectedIdCiv] UnitSave selectedIdCiv
         * @property {string|null} [selectedUnitType] UnitSave selectedUnitType
         */

        /**
         * Constructs a new UnitSave.
         * @memberof backend
         * @classdesc Represents an UnitSave.
         * @implements IUnitSave
         * @constructor
         * @param {backend.IUnitSave=} [properties] Properties to set
         */
        function UnitSave(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UnitSave selectedLanguage.
         * @member {string} selectedLanguage
         * @memberof backend.UnitSave
         * @instance
         */
        UnitSave.prototype.selectedLanguage = "";

        /**
         * UnitSave selectedIdCiv.
         * @member {number} selectedIdCiv
         * @memberof backend.UnitSave
         * @instance
         */
        UnitSave.prototype.selectedIdCiv = 0;

        /**
         * UnitSave selectedUnitType.
         * @member {string} selectedUnitType
         * @memberof backend.UnitSave
         * @instance
         */
        UnitSave.prototype.selectedUnitType = "";

        /**
         * Creates a new UnitSave instance using the specified properties.
         * @function create
         * @memberof backend.UnitSave
         * @static
         * @param {backend.IUnitSave=} [properties] Properties to set
         * @returns {backend.UnitSave} UnitSave instance
         */
        UnitSave.create = function create(properties) {
            return new UnitSave(properties);
        };

        /**
         * Encodes the specified UnitSave message. Does not implicitly {@link backend.UnitSave.verify|verify} messages.
         * @function encode
         * @memberof backend.UnitSave
         * @static
         * @param {backend.IUnitSave} message UnitSave message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnitSave.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.selectedLanguage != null && Object.hasOwnProperty.call(message, "selectedLanguage"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.selectedLanguage);
            if (message.selectedIdCiv != null && Object.hasOwnProperty.call(message, "selectedIdCiv"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.selectedIdCiv);
            if (message.selectedUnitType != null && Object.hasOwnProperty.call(message, "selectedUnitType"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.selectedUnitType);
            return writer;
        };

        /**
         * Encodes the specified UnitSave message, length delimited. Does not implicitly {@link backend.UnitSave.verify|verify} messages.
         * @function encodeDelimited
         * @memberof backend.UnitSave
         * @static
         * @param {backend.IUnitSave} message UnitSave message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnitSave.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UnitSave message from the specified reader or buffer.
         * @function decode
         * @memberof backend.UnitSave
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {backend.UnitSave} UnitSave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnitSave.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.UnitSave();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.selectedLanguage = reader.string();
                        break;
                    }
                case 2: {
                        message.selectedIdCiv = reader.int32();
                        break;
                    }
                case 3: {
                        message.selectedUnitType = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UnitSave message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof backend.UnitSave
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {backend.UnitSave} UnitSave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnitSave.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UnitSave message.
         * @function verify
         * @memberof backend.UnitSave
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UnitSave.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.selectedLanguage != null && message.hasOwnProperty("selectedLanguage"))
                if (!$util.isString(message.selectedLanguage))
                    return "selectedLanguage: string expected";
            if (message.selectedIdCiv != null && message.hasOwnProperty("selectedIdCiv"))
                if (!$util.isInteger(message.selectedIdCiv))
                    return "selectedIdCiv: integer expected";
            if (message.selectedUnitType != null && message.hasOwnProperty("selectedUnitType"))
                if (!$util.isString(message.selectedUnitType))
                    return "selectedUnitType: string expected";
            return null;
        };

        /**
         * Creates an UnitSave message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof backend.UnitSave
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {backend.UnitSave} UnitSave
         */
        UnitSave.fromObject = function fromObject(object) {
            if (object instanceof $root.backend.UnitSave)
                return object;
            let message = new $root.backend.UnitSave();
            if (object.selectedLanguage != null)
                message.selectedLanguage = String(object.selectedLanguage);
            if (object.selectedIdCiv != null)
                message.selectedIdCiv = object.selectedIdCiv | 0;
            if (object.selectedUnitType != null)
                message.selectedUnitType = String(object.selectedUnitType);
            return message;
        };

        /**
         * Creates a plain object from an UnitSave message. Also converts values to other types if specified.
         * @function toObject
         * @memberof backend.UnitSave
         * @static
         * @param {backend.UnitSave} message UnitSave
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UnitSave.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.selectedLanguage = "";
                object.selectedIdCiv = 0;
                object.selectedUnitType = "";
            }
            if (message.selectedLanguage != null && message.hasOwnProperty("selectedLanguage"))
                object.selectedLanguage = message.selectedLanguage;
            if (message.selectedIdCiv != null && message.hasOwnProperty("selectedIdCiv"))
                object.selectedIdCiv = message.selectedIdCiv;
            if (message.selectedUnitType != null && message.hasOwnProperty("selectedUnitType"))
                object.selectedUnitType = message.selectedUnitType;
            return object;
        };

        /**
         * Converts this UnitSave to JSON.
         * @function toJSON
         * @memberof backend.UnitSave
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UnitSave.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UnitSave;
    })();

    return backend;
})();

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.seconds = reader.int64();
                            break;
                        }
                    case 2: {
                            message.nanos = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                let message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

export { $root as default };
