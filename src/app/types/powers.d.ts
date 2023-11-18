export interface PowersRoot {
    powers: Powers;
}

export interface Powers {
    "#text": string;
    power: Power[];
}

export interface Power {
    "@name": string;
    "@type": string;
    "#text": string;
    displaynameid?: string;
    rolloverid?: string;
    icon?: string;
    allowduringnorush?: string;
    minimapeventtime?: Minimapeventtime;
    activetime?: string;
    effect?: EffectElement[] | PurpleEffect;
    placement?: Placement;
    soundset?: Soundset;
    startsoundset?: string;
    explicitlyrestrictedattacktargettype?: string[] | ExplicitlyrestrictedattacktargettypeEnum;
    radius?: string;
    unitaction?: string;
    abstractattacktargettype?: string[] | string;
    stundamage?: string;
    rangeindicatorprotoid?: Rangeindicatorprotoid;
    hitpointstoheal?: string;
    ignorehitpointcap?: string;
    rate?: string;
    messagealertplayerrelation?: Messagealertplayerrelation;
    createunit?: CreateunitElement[] | PurpleCreateunit;
    alwaysaddtoplayer?: string;
    unitmodify?: UnitmodifyElement[] | PurpleUnitmodify;
    powerplayerrelation?: string;
    forceglobalcooldown?: string;
    forceshowrollover?: string;
    msgenemystringid?: string;
    msgselfstringid?: string;
    msgallystringid?: string;
    auxiliarypower?: string;
    auxiliarypowertargettype?: string;
    timerrolloverid?: string;
    isauxiliarypower?: string;
    displayplacementruleserrors?: string;
    castingpower?: string;
    modelattachment?: string;
    modelattachmentbone?: string;
    allowwhileattacking?: string;
    forceattacktarget?: string;
    allplayers?: string;
    powerescalation?: string;
    powermaxlevel?: string;
    levelrollover?: Levelrollover;
    powerescalationrate?: string;
    placementprotounitid?: string;
}

export interface CreateunitElement {
    "@pattern": string;
    "@quantity": string;
    "@delay": string;
    "@permanent": string;
    "#text": string;
    "@reqtech"?: string;
}

export interface PurpleCreateunit {
    "@quantity": string;
    "@radius"?: string;
    "@delay": string;
    "#text": string;
    "@permanent"?: string;
    "@singleinstance"?: string;
    "@chaos"?: string;
    "@buildbounty"?: string;
    "@pattern"?: string;
}

export interface EffectElement {
    "@type": string;
    "@relativity"?: Relativity;
    "@amount"?: string;
    "#text": string;
    target: Target;
    "@squadmode"?: string;
    "@attachprotounit"?: Attachprotounit;
    "@unittype"?: string;
    "@includegaia"?: string;
    "@action"?: string;
    "@resource"?: Resource;
    "@reqtech"?: Reqtech;
}

export enum Attachprotounit {
    DeHausaMineRevealer = "deHausaMineRevealer",
    DeSomaliLighthouseRevealer = "deSomaliLighthouseRevealer",
}

export enum Relativity {
    Absolute = "Absolute",
    Assign = "Assign",
    BasePercent = "BasePercent",
}

export enum Reqtech {
    DEGreekRevolutionColonial = "DEGreekRevolutionColonial",
    DEGreekRevolutionFortress = "DEGreekRevolutionFortress",
    DEGreekRevolutionImperial = "DEGreekRevolutionImperial",
    DEGreekRevolutionIndustrial = "DEGreekRevolutionIndustrial",
}

export enum Resource {
    Food = "Food",
    Gold = "Gold",
    Wood = "Wood",
}

export interface Target {
    "@type": TargetType;
    "#text": string;
}

export enum TargetType {
    General = "General",
    Player = "Player",
    ProtoUnit = "ProtoUnit",
}

export interface PurpleEffect {
    "@type": string;
    "@relativity"?: string;
    "@amount"?: string;
    "#text": string;
    target: Target;
    "@action"?: string;
}

export enum ExplicitlyrestrictedattacktargettypeEnum {
    WaterGuardian = "WaterGuardian",
}

export interface Levelrollover {
    "#text": string;
    stringid: string[];
}

export enum Messagealertplayerrelation {
    All = "all",
    Ally = "ally",
    None = "none",
    Player = "player",
}

export interface Minimapeventtime {
    "@sendalertto": Messagealertplayerrelation;
    "#text": string;
}

export interface Placement {
    "@forceonmap": string;
    "@ally"?: string;
    "#text": PlacementText;
    "@enemy"?: string;
    "@allowgaia"?: string;
    "@gaiaonly"?: string;
}

export enum PlacementText {
    Full = "full",
    LOSDontCare = "LOSDontCare",
    Unit = "unit",
}

export interface Rangeindicatorprotoid {
    "@radius": string;
    "@indicatorcount": string;
    "@speed": string;
    "#text": RangeindicatorprotoidText;
}

export enum RangeindicatorprotoidText {
    PowerRanger = "PowerRanger",
}

export interface Soundset {
    "@type": SoundsetType;
    "@listenertype": Listenertype;
    "#text": string;
    "@positional"?: string;
}

export enum Listenertype {
    All = "All",
    Caster = "Caster",
    IfOnScreenAll = "IfOnScreenAll",
}

export enum SoundsetType {
    StartSound = "StartSound",
}

export interface UnitmodifyElement {
    "@amount": string;
    "@apply": string;
    "#text": string;
}

export interface PurpleUnitmodify {
    "@amount"?: string;
    "@apply": string;
    "#text": string;
    "@nostackignorepuid"?: string;
    "@flagoverrideunit"?: string;
}
