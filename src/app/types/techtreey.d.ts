export interface TechtreeRoot {
    techtree: Techtree;
}

export interface Techtree {
    "@version": string;
    "#text":    string;
    tech:       Tech[];
}

export interface Tech {
    "@name":                      string;
    "@type":                      TechType;
    "#text":                      string;
    dbid:                         string;
    status?:                      Status;
    flag?:                        string[] | FlagEnum;
    effects?:                     PurpleEffects | string;
    displaynameid?:               string;
    researchpoints?:              string;
    icon?:                        string;
    prereqs?:                     PrereqsClass | string;
    cost?:                        CostElement[] | CostElement;
    rollovertextid?:              string;
    icontexturecoords?:           string;
    effect?:                      PurpleEffect[] | FluffyEffect;
    prereqsnotmetrollovertextid?: string;
    iconwpf?:                     string;
    sequestertech?:               string;
    valuetext?:                   string;
    revolutionciv?:               string;
    researchlimit?:               string;
    unlocks?:                     Unlocks;
    dynamiccostkbstat?:           string;
    kbstatfactorcap?:             string;
}

export enum TechType {
    Normal = "Normal",
}

export interface CostElement {
    "@resourcetype": Resourcetype;
    "#text":         string;
}

export enum Resourcetype {
    Food = "Food",
    Gold = "Gold",
    Influence = "Influence",
    Ships = "Ships",
    Trade = "Trade",
    Wood = "Wood",
    XP = "XP",
}

export interface PurpleEffect {
    "@type":        EffectType;
    "@amount":      string;
    "@subtype":     Subtype;
    "@allactions"?: string;
    "@relativity":  Relativity;
    "#text":        string;
    target:         PurpleTarget;
    "@action"?:     Action;
    "@unittype"?:   string;
    "@stringid"?:   string;
}

export enum Action {
    DefendRangedAttack = "DefendRangedAttack",
    StaggerRangedAttack = "StaggerRangedAttack",
    VolleyRangedAttack = "VolleyRangedAttack",
}

export enum Relativity {
    Absolute = "Absolute",
    Assign = "Assign",
    BasePercent = "BasePercent",
    DefaultValue = "DefaultValue",
    Override = "Override",
    Percent = "Percent",
}

export enum Subtype {
    ActionAddAttachingUnit = "ActionAddAttachingUnit",
    ActionDisplayName = "ActionDisplayName",
    Damage = "Damage",
}

export enum EffectType {
    AddHomeCityCard = "AddHomeCityCard",
    AddTrickleByResource = "AddTrickleByResource",
    Blockade = "Blockade",
    CommandAdd = "CommandAdd",
    CommandRemove = "CommandRemove",
    CreatePower = "CreatePower",
    Data = "Data",
    Data2 = "Data2",
    ForbidTech = "ForbidTech",
    HomeCityCardMakeInfinite = "HomeCityCardMakeInfinite",
    InitiateRevolution = "InitiateRevolution",
    RandomTech = "RandomTech",
    ReplaceUnit = "ReplaceUnit",
    ResetActiveOnce = "ResetActiveOnce",
    ResetHomeCityCardCount = "ResetHomeCityCardCount",
    ResetResendableCards = "ResetResendableCards",
    ResourceExchange = "ResourceExchange",
    ResourceExchange2 = "ResourceExchange2",
    ResourceInventoryExchange = "ResourceInventoryExchange",
    RevertRevolution = "RevertRevolution",
    SetAge = "SetAge",
    SetName = "SetName",
    SetOnBuildingDeathTech = "SetOnBuildingDeathTech",
    SetOnShipmentSentTech = "SetOnShipmentSentTech",
    SetOnTechResearchedTech = "SetOnTechResearchedTech",
    SharedLOS = "SharedLOS",
    Sound = "Sound",
    TechStatus = "TechStatus",
    TextEffectOutput = "TextEffectOutput",
    TextOutput = "TextOutput",
    TextOutputTechName = "TextOutputTechName",
    TransformUnit = "TransformUnit",
    UIAlert = "UIAlert",
}

export interface PurpleTarget {
    "@type": TargetType;
    "#text": string;
}

export enum TargetType {
    Player = "Player",
    Proto = "Proto",
    ProtoUnit = "ProtoUnit",
    Tech = "Tech",
    TechAll = "techAll",
    TechWithFlag = "techWithFlag",
}

export interface FluffyEffect {
    "@type":        EffectType;
    "@amount"?:     string;
    "@subtype"?:    string;
    "@relativity"?: Relativity;
    "#text":        string;
    target?:        PurpleTarget;
    "@protopower"?: string;
    "@tech"?:       string;
    "@unittype"?:   string;
    "@status"?:     Status;
}

export enum Status {
    Active = "active",
    Obtainable = "obtainable",
    StatusActive = "Active",
    StatusOBTAINABLE = "OBTAINABLE",
    StatusUNOBTAINABLE = "UNOBTAINABLE",
    Unobtainable = "unobtainable",
}

export interface PurpleEffects {
    "#text":  string;
    effect:   TentacledEffect[] | StickyEffect;
    effects?: FluffyEffects;
    flag?:    string;
}

export interface TentacledEffect {
    "@type":               EffectType;
    "@amount"?:            string;
    "@subtype"?:           string;
    "@relativity"?:        Relativity;
    "#text":               string;
    target?:               FluffyTarget;
    "@status"?:            Status;
    "@action"?:            string;
    "@tech"?:              string;
    "@newname"?:           string;
    "@newrollover"?:       string;
    "@unittype"?:          string;
    "@skinid"?:            string;
    "@resource"?:          Resourcetype;
    "@allactions"?:        string;
    "@proto"?:             string;
    "@culture"?:           Culture;
    "@neweditorname"?:     string;
    "@newshortrollover"?:  string;
    "@tactic"?:            string;
    "@deactivate"?:        string;
    "@reqtech"?:           string;
    "@page"?:              string;
    "@column"?:            string;
    "@rank"?:              string;
    "@modifytype"?:        Modifytype;
    "@fromtactic"?:        string;
    "@totactic"?:          Totactic;
    "@stringid"?:          string;
    "@resvalue"?:          string;
    "@delay"?:             string;
    "@component"?:         Component;
    "@newtype"?:           Type;
    "@convertsettlers"?:   Convertsettlers;
    "@kbstat"?:            string;
    "@resourcecap"?:       string;
    "@protopower"?:        string;
    "@toprotoid"?:         string;
    "@fromprotoid"?:       string;
    "@multiplier"?:        string;
    "@toresource"?:        Resourcetype;
    "@fromresource"?:      Resourcetype;
    "@hitpercenttype"?:    Hitpercenttype;
    "@amount2"?:           string;
    "@unittype2"?:         Unittype2;
    "@civ"?:               string;
    "@reason"?:            Reason;
    "@selfmsg"?:           string;
    "@playermsg"?:         string;
    "@maxage"?:            string;
    "@command"?:           string;
    "@trcmdshift"?:        string;
    "@counttype"?:         string;
    "@forceapply"?:        string;
    "@copy"?:              string;
    "@flagid"?:            string;
    "@maxcount"?:          string;
    "@ageprereq"?:         string;
    "@unitcount"?:         string;
    "@infiniteinlastage"?: string;
    "@includeself"?:       string;
    "@select"?:            string;
    tech?:                 string[];
    "@calctype"?:          string;
    "@protoaction"?:       string;
    "@armortype"?:         Type;
    "@gpunittype"?:        Gpunittype;
    "@resource2"?:         Resourcetype;
    "@extrabounty"?:       string;
    "@bountyrate"?:        string;
    "@unitcap"?:           string;
    "@includedead"?:       Convertsettlers;
    "@empowertype"?:       string;
    "@keepunit"?:          Convertsettlers;
    "@queryunittype"?:     string;
    "@querystate"?:        Querystate;
    "@fromprotopower"?:    string;
    "@toprotopower"?:      string;
    units?:                Units;
    "@randomnametype"?:    string;
    "@savedeck"?:          Convertsettlers;
    "@extdeck"?:           string;
    "@allowinfinite"?:     string;
    "@target"?:            string;
    "@playername"?:        string;
    "@duration"?:          string;
    "@trshow"?:            string;
    "@kbparamresource"?:   Resourcetype;
    "@priority"?:          string;
}

export enum Type {
    Hand = "Hand",
    Ranged = "Ranged",
    Siege = "Siege",
}

export enum Component {
    BuyFactor = "BuyFactor",
    SellFactor = "SellFactor",
    SellFactorSpecific = "SellFactorSpecific",
}

export enum Convertsettlers {
    True = "True",
}

export enum Culture {
    None = "none",
}

export enum Gpunittype {
    DeLivestockMarket = "deLivestockMarket",
}

export enum Hitpercenttype {
    CriticalAttack = "CriticalAttack",
    Disciple = "Disciple",
}

export enum Modifytype {
    Damage = "Damage",
    HealRate = "HealRate",
    MaxHP = "MaxHP",
    Rof = "ROF",
}

export enum Querystate {
    Alive = "Alive",
    Dead = "Dead",
}

export enum Reason {
    Papal = "Papal",
    Revolution = "Revolution",
}

export enum Totactic {
    Defend = "Defend",
    Melee = "Melee",
    Stagger = "Stagger",
    StandGround = "StandGround",
    Volley = "Volley",
}

export enum Unittype2 {
    XPPetard = "xpPetard",
    YpDacoit = "ypDacoit",
    YpThuggee = "ypThuggee",
}

export interface FluffyTarget {
    "@type":          TargetType;
    "#text":          string;
    "@ignorecards"?:  string;
    "@ignoreageups"?: string;
}

export interface Units {
    "#text": string;
    unit:    string[];
}

export interface StickyEffect {
    "@type":              EffectType;
    "@amount"?:           string;
    "@subtype"?:          string;
    "@relativity"?:       Relativity;
    "#text":              string;
    target?:              PurpleTarget;
    "@status"?:           Status;
    "@unittype"?:         string;
    "@resource"?:         Resourcetype;
    "@tech"?:             string;
    "@allactions"?:       string;
    "@all"?:              string;
    "@delay"?:            string;
    "@action"?:           string;
    "@convertsettlers"?:  Convertsettlers;
    "@tactic"?:           string;
    "@amount2"?:          string;
    "@unittype2"?:        string;
    "@resvalue"?:         string;
    "@command"?:          string;
    "@proto"?:            string;
    "@culture"?:          Culture;
    "@newname"?:          string;
    "@newrollover"?:      string;
    "@newshortrollover"?: string;
    "@includeself"?:      string;
    "@protopower"?:       string;
    units?:               Units;
    "@gpunittype"?:       Gpunittype;
    "@multiplier"?:       string;
    "@toresource"?:       Resourcetype;
    "@fromresource"?:     Resourcetype;
    "@minvalue"?:         string;
    "@maxvalue"?:         string;
    "@minsrcvalue"?:      string;
    "@maxsrcvalue"?:      string;
    "@srcresource1"?:     Resourcetype;
    "@srcresource2"?:     Resourcetype;
    "@multiplier2"?:      string;
    "@toresource2"?:      Resourcetype;
    "@page"?:             string;
    "@column"?:           string;
    "@counttype"?:        string;
    "@reason"?:           Reason;
    "@selfmsg"?:          string;
    "@playermsg"?:        string;
    "@unitcap"?:          string;
    "@civ"?:              string;
    "@priority"?:         string;
    "@bountyrate"?:       string;
    "@protoaction"?:      string;
    "@queryunittype"?:    string;
    "@querystate"?:       Querystate;
    "@resourcecap"?:      string;
    "@timeout"?:          string;
    "@landtech"?:         string;
    "@watertech"?:        string;
    "@rivertech"?:        string;
    "@toprotoid"?:        string;
    "@fromprotoid"?:      string;
}

export interface FluffyEffects {
    "#text": string;
    effect:  EffectsEffectClass;
}

export interface EffectsEffectClass {
    "@type":       EffectType;
    "@amount":     string;
    "@amount2":    string;
    "@subtype":    string;
    "@unittype":   string;
    "@unittype2":  string;
    "@relativity": Relativity;
    "#text":       string;
    target:        PurpleTarget;
}

export enum FlagEnum {
    CheckLandHCGatherPoint = "CheckLandHCGatherPoint",
    CountsTowardEconomicScore = "CountsTowardEconomicScore",
    CountsTowardMilitaryScore = "CountsTowardMilitaryScore",
    DEUsesValueText = "DEUsesValueText",
    HomeCity = "HomeCity",
    Shadow = "Shadow",
    TeamTech = "TeamTech",
    UniqueTech = "UniqueTech",
    UpgradeTech = "UpgradeTech",
    YPInfiniteTech = "YPInfiniteTech",
    YPNativeImprovement = "YPNativeImprovement",
    YPNoTextMessage = "YPNoTextMessage",
}

export interface PrereqsClass {
    "#text":      string;
    techstatus?:  TechstatusElement[] | TechstatusElement;
    specificage?: Specificage;
    typecount?:   TypecountElement[] | TypecountElement;
    kbstat?:      Kbstat;
}

export interface Kbstat {
    "@kbstat":   string;
    "@kbparam":  string;
    "@value":    string;
    "@operator": string;
    "#text":     string;
}

export interface Specificage {
    "@operator": string;
    "#text":     string;
}

export interface TechstatusElement {
    "@status": TechstatusStatus;
    "#text":   string;
}

export enum TechstatusStatus {
    Active = "Active",
    Obtainable = "OBTAINABLE",
    StatusActive = "active",
    StatusObtainable = "Obtainable",
    Unobtainable = "Unobtainable",
}

export interface TypecountElement {
    "@unit":     string;
    "@count":    string;
    "@operator": string;
    "@state":    string;
    "#text":     string;
}

export interface Unlocks {
    "#text":  string;
    unlockid: string[];
}
