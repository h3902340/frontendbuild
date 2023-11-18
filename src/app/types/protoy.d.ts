export interface ProtoRoot {
    proto: Proto;
}

export interface Proto {
    "@version": string;
    "#text":    string;
    unit:       Unit[];
}

export interface Unit {
    "@id":                        string;
    "@name":                      string;
    "#text":                      string;
    dbid:                         string;
    displaynameid?:               string;
    editornameid?:                string;
    obstructionradiusx?:          string;
    obstructionradiusz?:          string;
    maxvelocity?:                 string;
    movementtype?:                Movementtype;
    animfile?:                    string;
    lifespan?:                    string;
    los?:                         string;
    unittype?:                    string[] | UnittypeEnum;
    flag?:                        string[];
    icon?:                        string;
    portraiticon?:                string;
    decay?:                       Decay;
    maxrunvelocity?:              string;
    trainpoints?:                 string;
    rollovertextid?:              string[] | string;
    shortrollovertextid?:         string;
    idletimeout?:                 string;
    initialhitpoints?:            string;
    maxhitpoints?:                string;
    unitaitype?:                  UnitaitypeElement[] | UnitaitypeElement;
    turnrate?:                    string;
    minimapcolor?:                MinimapcolorElement[] | MinimapcolorElement;
    initialresource?:             Resourcereturn[] | Resourcereturn;
    resourcesubtype?:             Resourcesubtype;
    buildingworkrate?:            string[] | string;
    gathererlimit?:               string;
    minimapicon?:                 string;
    command?:                     Array<FakecardElement | CommandEnum> | FakecardElement;
    capturedminimapicon?:         Capturedminimapicon;
    impacttype?:                  Resourcetype[] | ImpacttypeEnum;
    bounty?:                      Resourcereturn[] | Resourcereturn | string;
    subciv?:                      string;
    socketbuildprotounit?:        Socketbuildprotounit;
    socketbuildrate?:             string;
    socketbuildcommandid?:        Socketbuildcommandid;
    autoconvertsoundset?:         Autoconvertsoundset;
    legacyhotkeycontext?:         string[] | string;
    tactics?:                     string;
    buildpoints?:                 string;
    cost?:                        Resourcereturn[] | Resourcereturn;
    armor?:                       ArmorElement[] | ArmorElement;
    corpsedecaltime?:             string;
    populationcapaddition?:       string;
    notcontain?:                  NotcontainElement[] | PurpleNotcontain;
    contain?:                     Array<ContainClass | string> | ContainEnum;
    allowedage?:                  string[] | string;
    corpsedecaydelay?:            string;
    civflagoverride?:             string;
    animstatemachine?:            string;
    projectileprotounit?:         Projectileprotounit;
    formationcategory?:           Formationcategory;
    physicsinfo?:                 Physicsinfo;
    buildlimit?:                  string;
    buildbounty?:                 string;
    carrycapacity?:               Resourcereturn[] | Resourcereturn;
    maxcontained?:                string;
    protoaction?:                 ProtoactionElement[] | PurpleProtoaction;
    train?:                       FakecardElement[] | FakecardElement;
    flattenterrainexpand?:        string;
    populationcount?:             string;
    selectionpriority?:           string;
    tech?:                        FakecardElement[] | FakecardElement;
    placementobstructionradiusx?: string;
    placementobstructionradiusz?: string;
    deadreplacement?:             string;
    deadreplacementlifespan?:     string;
    placementfile?:               string;
    freebuildpoints?:             string;
    builderlimit?:                string;
    autoattackrange?:             string;
    wanderdistance?:              string;
    sharedbuildlimitunit?:        string;
    sharedbuildlimitunittypes?:   Sharedunittypes;
    resourcedecay?:               string;
    communityplazaweight?:        string;
    subcivlos?:                   string;
    rechargetime?:                string;
    chargeusagetime?:             string;
    socketunittype?:              string;
    displayedrange?:              string;
    containedregenrate?:          string;
    transformcommand?:            string;
    unithelpoverride?:            string;
    autogathertype?:              string;
    stealthdiscoveryradius?:      string;
    sharedselectionunittypes?:    Sharedunittypes;
    unitregen?:                   UnitregenClass | string;
    initialunitaistance?:         Initialunitaistance;
    socketoffsetx?:               string;
    socketoffsetz?:               string;
    scalingaurascale?:            string;
    allowedheightvariance?:       string;
    hovertextoverride?:           string;
    buildtextoverride?:           string;
    communityplazalimit?:         string;
    initialtactic?:               string;
    auxrechargetime?:             string;
    dodgechance?:                 string;
    dodgemessageid?:              string;
    dodgesoundset?:               string;
    unitsellcommand?:             string;
    unitsellrate?:                string;
    containedspeedbonus?:         string;
    gatherratemultiplier?:        string;
    detonationprotoaction?:       string;
    detonationcommand?:           string;
    detonationhitpointthreshold?: string;
    detonationhitpointdecay?:     string;
    knockouttextid?:              string;
    knockoutrescuehitpointratio?: string;
    ageupcostabsolutemultiplier?: string;
    farmingradiusx?:              string;
    farmingradiusz?:              string;
    farmingobstructionradiusx?:   string;
    farmingobstructionradiusz?:   string;
    farmingnumstops?:             string;
    socketedminimapicon?:         string;
    containedhitpointbonus?:      string;
    trainbatchsize?:              string;
    chaosduration?:               string;
    fakecard?:                    FakecardElement[];
    recharge?:                    Recharge;
    veterancybonus?:              Veterancybonus;
    auxchargeusagetime?:          string;
    minimapsize?:                 string;
    roundeltiercount?:            string;
    panelnameid?:                 string;
    panelrolloverid?:             string;
    aistancebasedistance?:        string;
    disabledduringnorush?:        string;
    deploymentcommand?:           string;
    resourcereturn?:              Resourcereturn;
}

export interface ArmorElement {
    "@type":  TypeElement;
    "@value": string;
    "#text":  string;
}

export enum TypeElement {
    Hand = "Hand",
    Ranged = "Ranged",
    Siege = "Siege",
}

export enum Autoconvertsoundset {
    SocketCapture = "SocketCapture",
    TradeSiteEurope = "TradeSiteEurope",
}

export interface Resourcereturn {
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

export enum Capturedminimapicon {
    UIMinimapAsianNativeSiteC = "ui\\minimap\\asian_native_site_c",
    UIMinimapNC = "ui\\minimap\\n_c",
    UIMinimapRoyalHouseC = "ui\\minimap\\royal_house_c",
}

export interface FakecardElement {
    "@page"?:    string;
    "@column"?:  string;
    "#text":     string;
    "@row"?:     string;
    "@natshow"?: string;
    "@trshow"?:  string;
}

export enum CommandEnum {
    CancelNativeDance = "CancelNativeDance",
    SetHomeCityWaterSpawnPoint = "SetHomeCityWaterSpawnPoint",
    StartNativeDance = "StartNativeDance",
}

export interface ContainClass {
    "@indelay"?:     string;
    "@outdelay"?:    string;
    "#text":         string;
    "@popdiscount"?: string;
}

export enum ContainEnum {
    AbstractVillager = "AbstractVillager",
    All = "All",
    LogicalTypeGarrisonInShips = "LogicalTypeGarrisonInShips",
}

export interface Decay {
    "@delay":    string;
    "@duration": string;
    "#text":     string;
}

export enum Formationcategory {
    Body = "Body",
    Mobile = "Mobile",
    Protected = "Protected",
    Ranged = "Ranged",
}

export enum ImpacttypeEnum {
    Animal = "Animal",
    Flesh = "Flesh",
    Stone = "Stone",
    Wood = "Wood",
}

export enum Initialunitaistance {
    Aggressive = "Aggressive",
    Defensive = "Defensive",
}

export interface MinimapcolorElement {
    "@red":   string;
    "@blue":  string;
    "@green": string;
    "#text":  string;
}

export enum Movementtype {
    Air = "air",
    Land = "land",
    Water = "water",
}

export enum NotcontainElement {
    AbstractFishingBoat = "AbstractFishingBoat",
    AbstractMonk = "AbstractMonk",
    DeStealthPetard = "deStealthPetard",
    ExcludeFromRansom = "ExcludeFromRansom",
    LogicalTypeNavalMilitary = "LogicalTypeNavalMilitary",
    XPPetard = "xpPetard",
    XPPetardNitro = "xpPetardNitro",
}

export enum PurpleNotcontain {
    AbstractArtillery = "AbstractArtillery",
    AbstractFishingBoat = "AbstractFishingBoat",
}

export enum Physicsinfo {
    Barracks = "barracks",
    Blockhouse = "blockhouse",
    Cav = "cav",
    Dock = "dock",
    Dude = "dude",
    House = "house",
    Livestockpen = "livestockpen",
    Mill = "mill",
    Mine = "mine",
    Outpost = "outpost",
    SpcFountainofyouth = "spc_fountainofyouth",
    Stable = "stable",
    Tower = "tower",
    Towncenter = "towncenter",
}

export enum Projectileprotounit {
    Arrow = "Arrow",
    Cannonball = "Cannonball",
    CannonballSmall = "CannonballSmall",
    Dynamite = "Dynamite",
    Grenade = "Grenade",
    Hoop = "Hoop",
    InvisibleProjectile = "InvisibleProjectile",
    InvisibleProjectileNoTracer = "InvisibleProjectileNoTracer",
    Javelin = "Javelin",
    Knife = "Knife",
    Lasso = "Lasso",
    MortarShell = "MortarShell",
    SudaneseKnife = "SudaneseKnife",
    Thrombash = "Thrombash",
    Tomahawk = "Tomahawk",
    TorchProjectile = "TorchProjectile",
    YpChakram = "ypChakram",
    YpCrow = "ypCrow",
    YpFlamingArrowAmmo = "ypFlamingArrowAmmo",
    YpShuriken = "ypShuriken",
}

export interface ProtoactionElement {
    "#text":                   string;
    name:                      string;
    type?:                     TypeEnum;
    rate?:                     RateElement[] | Typedmaxrange;
    damage?:                   string;
    damagetype?:               TypeElement[] | TypeElement;
    minrange?:                 string[] | string;
    maxrange?:                 string;
    typedminrange?:            Typedmaxrange;
    typedmaxrange?:            Typedmaxrange;
    rof?:                      string[] | RofClass | string;
    damagebonus?:              Typedmaxrange[] | Typedmaxrange;
    handattackdisplayrange?:   string;
    damagecap?:                string;
    damagearea?:               string[] | string;
    damageflags?:              Damageflags;
    fullcapacitymultiplier?:   string;
    projectile?:               string;
    active?:                   string[] | string;
    targetlock?:               string;
    accuracy?:                 string;
    attachprotounit?:          string;
    numberprojectiles?:        string;
    maxheight?:                string;
    chargeaction?:             string;
    auxchargeaction?:          string;
    hitpercent?:               string;
    hitpercenttype?:           Hitpercenttype;
    damagemultiplier?:         string;
    basedamagecap?:            string;
    attachforcediewithunit?:   string;
    hitpercentsoundset?:       Hitpercentsoundset;
    freebuildrate?:            Typedmaxrange;
    walkanim?:                 string;
    joganim?:                  string;
    runanim?:                  string;
    converttogaiaifforbidden?: string;
    modifyprotoid?:            string;
}

export interface Typedmaxrange {
    "@type": string;
    "#text": string;
}

export enum Damageflags {
    Enemy = "Enemy",
    GAIAEnemy = "GAIAEnemy",
    GAIASelfAllyEnemy = "GAIASelfAllyEnemy",
    SelfAllyEnemy = "SelfAllyEnemy",
}

export enum Hitpercentsoundset {
    DEMexicanStandoff = "DEMexicanStandoff",
}

export enum Hitpercenttype {
    CriticalAttack = "CriticalAttack",
    KillingBlow = "KillingBlow",
    Sweep = "Sweep",
}

export interface RateElement {
    "@type":           string;
    "#text":           string;
    "@resource"?:      Resourcetype;
    "@yield"?:         string;
    "@inventoryrate"?: string;
}

export interface RofClass {
    "@type":   Type;
    "@target": string;
    "#text":   string;
}

export enum Type {
    HitpointRatio = "HitpointRatio",
    MinRange = "MinRange",
}

export enum TypeEnum {
    AutoGather = "AutoGather",
    Gather = "Gather",
    Heal = "Heal",
    Maintain = "Maintain",
}

export interface PurpleProtoaction {
    "#text":                 string;
    name:                    string;
    damage?:                 string;
    damagetype?:             TypeElement[] | TypeElement;
    minrange?:               string;
    maxrange?:               string;
    rof?:                    string;
    damagecap?:              string;
    damagebonus?:            Typedmaxrange[] | Typedmaxrange;
    damagearea?:             string;
    damageflags?:            Damageflags;
    projectile?:             string;
    rate?:                   Typedmaxrange[] | Typedmaxrange;
    targetlock?:             string;
    type?:                   TypeEnum;
    numberprojectiles?:      string;
    accuracy?:               string;
    maxheight?:              string;
    active?:                 string;
    typedmaxrange?:          Typedmaxrange;
    handattackdisplayrange?: string;
}

export interface Recharge {
    "@init": string;
    "@type": string;
    "#text": string;
}

export enum Resourcesubtype {
    Fame = "Fame",
    Fish = "fish",
    Forage = "forage",
    Gold = "Gold",
    Grain = "grain",
    Influence = "Influence",
    Meat = "meat",
    ResourcesubtypeGold = "gold",
    ResourcesubtypeWood = "wood",
    Wood = "Wood",
    XP = "XP",
}

export interface Sharedunittypes {
    "#text":  string;
    unittype: string[] | string;
}

export enum Socketbuildcommandid {
    DeSocketBuildAfrican = "deSocketBuildAfrican",
    DeSocketBuildAsian = "deSocketBuildAsian",
    DeSocketBuildEuropean = "deSocketBuildEuropean",
    DeSocketBuildNative = "deSocketBuildNative",
    DeSocketBuildSouthNative = "deSocketBuildSouthNative",
}

export enum Socketbuildprotounit {
    DeSPCCityTower = "deSPCCityTower",
    DeSPCEuroTower = "deSPCEuroTower",
    DeSPCWoodenTower = "deSPCWoodenTower",
    TradingPost = "TradingPost",
}

export enum UnitaitypeElement {
    Civilian = "Civilian",
    HandCombative = "HandCombative",
    HerdAnimal = "HerdAnimal",
    Hero = "Hero",
    Passive = "Passive",
    Predator = "Predator",
    RangedCombative = "RangedCombative",
    Reactive = "Reactive",
}

export interface UnitregenClass {
    "@idletimeout"?:   string;
    "#text":           string;
    "@damagetimeout"?: string;
}

export enum UnittypeEnum {
    BuildingClass = "BuildingClass",
    EmbellishmentClass = "EmbellishmentClass",
    Unit = "Unit",
}

export interface Veterancybonus {
    "#text":       string;
    rank:          Rank[];
    includetypes?: Includetypes;
}

export interface Includetypes {
    "#text":  string;
    unittype: string;
}

export interface Rank {
    "@id":           string;
    "#text":         string;
    veterancymodify: VeterancymodifyElement[] | VeterancymodifyElement;
}

export interface VeterancymodifyElement {
    "@modifytype": Modifytype;
    "#text":       string;
}

export enum Modifytype {
    Damage = "Damage",
    MaxHP = "MaxHP",
    RangeAbsolute = "RangeAbsolute",
    Rof = "ROF",
    Speed = "Speed",
}
