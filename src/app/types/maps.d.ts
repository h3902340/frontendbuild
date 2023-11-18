export interface MapInfo {
    id: number;
    idStr: string;
    displayNameID: string;
    details: string;
    imagepath: string;
    isLarge?: boolean;
}

export interface MapResources {
    "Map Name": string;
    "File Name": string;
    "Food in Hunts in Thousands": number | string;
    "Coin in Mines in Thousands": number | string;
    "Wood in Thousands": number | string;
    "Food in Fish in Thousands": number | string;
    "Number of Whales": number | string;
    "Map Width (m)": number;
    "Map Area (m^2)": number;
    isCompetitive: boolean;
    isStandard: boolean;
    isAsian: boolean;
    isAmerican: boolean;
    isAfrican: boolean;
    isTeamGame: boolean;
    isLand: boolean;
    isWater: boolean;
    isHybrid: boolean;
    isTreaty: boolean;
    isHistorical: boolean;
    isEuropean: boolean;
    isSpecial: boolean;
    "Map Length - if stretched (m)"?: number;
}


