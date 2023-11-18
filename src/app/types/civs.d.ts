export interface CivsRoot {
    civs: Civs;
}

export interface Civs {
    "#text": string;
    subcivalliancecost: Subcivalliancecost;
    subcivalliancecostfactor: string;
    maxdecksize: string;
    defaultpoplimit: string;
    defaultpopextralimit: string;
    defaultcontainedregenrate: string;
    displayfame: string;
    civ: CivInfo[];
}

export interface CivInfo {
    "#text": string;
    name: string;
    main: string;
    statsid?: string;
    portrait?: string;
    culture?: string;
    settlerprotoname?: Settlerprotoname;
    displaynameid?: string;
    rollovernameid?: string;
    alliedid?: string;
    alliedotherid?: string;
    unalliedid?: string;
    hcshipmentmodifier?: string;
    agetech?: AgetechElement[] | AgetechElement;
    postindustrialtech?: string;
    postimperialtech?: string;
    deathmatchtech?: Deathmatchtech;
    treatytech?: Treatytech;
    empirewarstech?: Empirewarstech;
    buildingefficiency?: string;
    freebuildingefficiency?: string;
    gold?: string;
    food?: string;
    wood?: string;
    startingunit?: string[] | string;
    townstartingunit?: Array<DeathmatchstartingunitClass | TownstartingunitEnum>;
    empirewarsstartingunit?: Array<DeathmatchstartingunitClass | Settlerprotoname>;
    empirewarsresources?: Empirewarsresources;
    empirewarsshipmentxpmaximummodifier?: string;
    empirewarsshipmentgrowthmodifier?: string;
    empirewarsshipmentmodifier?: string;
    empirewarsshipmentrates?: Empirewarsageuprates;
    empirewarsageuprates?: Empirewarsageuprates;
    randomstartingunits?: string;
    homecityfilename?: string;
    homecityflagtexture?: string;
    homecityflagiconwpf?: string;
    homecitypreviewwpf?: string;
    homecityflagbuttonwpf?: string;
    homecityflagbuttonset?: string;
    homecityflagbuttonsetlarge?: string;
    postgameflagtexture?: string;
    postgameflagiconwpf?: string;
    matchmakingtextures?: Matchmakingtextures;
    unitregen?: UnitregenElement[] | UnitregenElement;
    multipleblocktrain?: Multipleblocktrain[];
    blocktrain?: Blocktrain[];
    civtype?: string;
    visible?: string;
    visibleineditor?: string;
    gameid?: Gameid;
    polcivname?: string;
    homecityflagforceteamcolor?: string;
    maximumageupresourcecost?: Empirewarsageuprates;
    bountymodifier?: string;
    hcshipmentgrowthmodifier?: string;
    hcmaxshipmentmaxgrowthmodifier?: string;
    additionalwonderbuildrate?: string[];
    startingresourcesmultiplier?: Empirewarsresources;
    key?: string;
    campaignxpbonushc?: string;
    partisans?: string;
    useextendeddeckui?: string;
    herohclabelid?: string;
    influencerate?: Subcivalliancecost;
    deathmatchstartingunit?: DeathmatchstartingunitClass;
    additionalfoaktech?: string;
    usetwoheronames?: string;
    secondherohclabelid?: string;
    canpayfreefoundations?: string;
    subcivtype?: string;
    allyunit?: string[];
    displayrevolutionflag?: string;
    revolutionflagwpf?: string;
    revolutionhomecityname?: string;
    revolutiondecksize?: string;
}

export interface AgetechElement {
    "#text": string;
    age: Age;
    tech: string;
}

export enum Age {
    Age0 = "Age0",
    Age1 = "Age1",
    Age2 = "Age2",
    Age3 = "Age3",
    Age4 = "Age4",
}

export interface Blocktrain {
    "#text": string;
    building: string;
    unit: string;
    count: string;
}

export interface DeathmatchstartingunitClass {
    "@resourceamount": string;
    "#text": Text;
}

export enum Text {
    DeSangaCattle = "deSangaCattle",
    DeZebuCattle = "deZebuCattle",
}

export enum Deathmatchtech {
    DEDeathMatch = "DEDeathMatch",
}

export interface Empirewarsageuprates {
    "#text": string;
    age1: string;
    age2: string;
    age3: string;
    age4?: string;
    age0?: string;
}

export interface Empirewarsresources {
    "#text": string;
    food: string;
    wood: string;
    gold: string;
    xp?: string;
    ships?: string;
    trade?: string;
    influence?: string;
}

export enum Settlerprotoname {
    Coureur = "Coureur",
    CrateofFoodLarge = "CrateofFoodLarge",
    DeArchitect = "deArchitect",
    DeCrateofFoodLarge400 = "deCrateofFoodLarge400",
    DeCrateofFoodLarge600 = "deCrateofFoodLarge600",
    DeSettlerAfrican = "deSettlerAfrican",
    OutpostWagon = "OutpostWagon",
    Settler = "Settler",
    SettlerNative = "SettlerNative",
    SettlerWagon = "SettlerWagon",
    XPBuilderStart = "xpBuilderStart",
    YPCastleWagon = "YPCastleWagon",
    YpGoat = "ypGoat",
    YpSettlerAsian = "ypSettlerAsian",
    YpSettlerIndian = "ypSettlerIndian",
    YpSettlerJapanese = "ypSettlerJapanese",
}

export enum Empirewarstech {
    DEEmpireWars = "DEEmpireWars",
}

export enum Gameid {
    De = "de",
    Xpack = "xpack",
    Ypack = "ypack",
}

export interface Subcivalliancecost {
    "#text": string;
    gold?: string;
    food: string;
    wood: string;
}

export interface Matchmakingtextures {
    "#text": string;
    bannertexture?: Bannertexture;
    bannertexturecoords?: string;
    portraittexture?: Portraittexture;
    portraittexturecoords?: Portraittexturecoords;
    smallportraittexture?: string;
    smallportraittexturecoords?: Smallportraittexturecoords;
    smallportraittexturewpf?: string;
}

export enum Bannertexture {
    UIEsoCivFlagsQuickLaunch = "ui\\eso\\civ_flags_quick_launch",
    UIEsoCivFlagsQuickLaunch02 = "ui\\eso\\civ_flags_quick_launch_02",
    UIEsoCivFlagsQuickLaunchY = "ui\\eso\\civ_flags_quick_launch_y",
}

export enum Portraittexture {
    UIEsoEsoQuickSearchPoliticians01 = "ui\\eso\\eso_quick_search_politicians_01",
    UIEsoEsoQuickSearchPoliticians02 = "ui\\eso\\eso_quick_search_politicians_02",
    UIEsoEsoQuickSearchPoliticians03 = "ui\\eso\\eso_quick_search_politicians_03",
    UIEsoEsoQuickSearchPoliticians04 = "ui\\eso\\eso_quick_search_politicians_04",
}

export enum Portraittexturecoords {
    The000585937500039062503964843750392578125 = "0.005859375 0.00390625 0.396484375 0.392578125",
    The00058593750429687503964843750814453125 = "0.005859375 0.4296875 0.396484375 0.814453125",
    The0437500039062508300781250392578125 = "0.4375 0.00390625 0.830078125 0.392578125",
    The043750429687508300781250814453125 = "0.4375 0.4296875 0.830078125 0.814453125",
}

export enum Smallportraittexturecoords {
    The0011 = "0 0 1 1",
}

export interface Multipleblocktrain {
    "#text": string;
    building: Building;
    multipleblockunit: string;
    units: UnitClass[] | UnitsClass;
    unitcounts: Unitcount[] | UnitcountsClass;
}

export enum Building {
    Blockhouse = "Blockhouse",
    DeHacienda = "deHacienda",
    DeSPCCommandPost = "deSPCCommandPost",
    DeStateCapitol = "deStateCapitol",
    DeTavern = "deTavern",
    DeTorp = "deTorp",
    FortFrontier = "FortFrontier",
    House = "House",
    Mill = "Mill",
    Outpost = "Outpost",
    Plantation = "Plantation",
    TownCenter = "TownCenter",
    TradingPost = "TradingPost",
    YpCastle = "ypCastle",
    YpConsulate = "ypConsulate",
    YpDojo = "ypDojo",
    YpFuchuan = "ypFuchuan",
    YpVillage = "ypVillage",
    YpWCSummerPalace2 = "ypWCSummerPalace2",
    YpWCSummerPalace3 = "ypWCSummerPalace3",
    YpWCSummerPalace4 = "ypWCSummerPalace4",
    YpWCSummerPalace5 = "ypWCSummerPalace5",
    YpWarAcademy = "ypWarAcademy",
}

export interface Unitcount {
    "#text": string;
    count: string;
}

export interface UnitcountsClass {
    "#text": string;
    count: string[] | string;
}

export interface UnitClass {
    "#text": string;
    unit: string;
}

export interface UnitsClass {
    "#text": string;
    unit: UnitEnum[] | string;
}

export enum UnitEnum {
    DeSPCGreatBombardNoPop = "deSPCGreatBombardNoPop",
    DeSPCJanissaryNoPop = "deSPCJanissaryNoPop",
    MercManchu = "MercManchu",
    YpArquebusier = "ypArquebusier",
    YpChangdao = "ypChangdao",
    YpChuKoNu = "ypChuKoNu",
    YpGoatFat = "ypGoatFat",
    YpIronFlail = "ypIronFlail",
    YpKeshik = "ypKeshik",
    YpMercIronTroop = "ypMercIronTroop",
    YpMeteorHammer = "ypMeteorHammer",
    YpQiangPikeman = "ypQiangPikeman",
    YpSettlerAsian = "ypSettlerAsian",
    YpSteppeRider = "ypSteppeRider",
    YpWokouBlindMonk = "ypWokouBlindMonk",
    YpWokouPirate = "ypWokouPirate",
}

export enum TownstartingunitEnum {
    Coureur = "Coureur",
    CrateofCoin = "CrateofCoin",
    CrateofFood = "CrateofFood",
    CrateofWood = "CrateofWood",
    DeAutoSangaCattle = "deAutoSangaCattle",
    DeAutoZebuCattle = "deAutoZebuCattle",
    DeCrateofFood50 = "deCrateofFood50",
    DeCrateofXP = "deCrateofXP",
    DeSettlerAfrican = "deSettlerAfrican",
    Settler = "Settler",
    SettlerNative = "SettlerNative",
    SettlerWagon = "SettlerWagon",
    XPBuilderStart = "xpBuilderStart",
    YpGoat = "ypGoat",
    YpSettlerAsian = "ypSettlerAsian",
    YpSettlerIndian = "ypSettlerIndian",
    YpSettlerJapanese = "ypSettlerJapanese",
}

export enum Treatytech {
    DETreatyShadow = "DETreatyShadow",
}

export interface UnitregenElement {
    "#text": string;
    unittype: string;
    rate?: string;
    idletimeout?: string;
    absolute?: string;
}
