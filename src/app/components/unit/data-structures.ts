import { AnimfileRoot } from "src/app/types/animfile";
import { Card } from "src/app/utility"

export type AttachmentInfo = {
    modelPath: string,
    fromBone: string,
    toBone: string,
    syncanims: boolean,
}

export type UpgradeInfo = {
    buildingSrc: string,
    buildingTooltip: string,
    cards: Card[],
}

export enum UnitType {
    Military = 'Military',
    Building = 'Building',
}

export type HealRateInfo = {
    src: string,
    amount: number,
    range: number,
}

export type BuildRateInfo = {
    src: string,
    tooltip: string,
    amount: number,
}

export type GatherRateInfo = {
    src: string,
    tooltip: string,
    amount: number,
}

export type PostureInfo = {
    tactics: TacticsType,
    card: Card,
    speedMultiplier: number,
    anims: string[],
}

export type AbilityInfo = {
    src: string,
    displayName: string,
    rolloverText: string,
}

export type ArmorInfo = {
    src: string,
    amount: number,
}

export type DamageBonusInfo = {
    src: string,
    tooltip: string,
    amount: number,
}

export enum TacticsType {
    None = '',
    Stealth = 'Stealth',
    Volley = 'Volley',
    Stagger = 'Stagger',
    Melee = 'Melee',
    Cover = 'Cover',
    Trample = 'Trample',
    Defend = 'Defend',
    StandGround = 'StandGround',
    Bombard = 'Bombard',
    Limber = 'Limber',
}

export type AttackInfo = {
    name: string,
    actionKey: string,
    hidden: boolean,
    src: string,
    amount: number,
    range: number,
    rof: number,
    damageArea: number,
    damageBonuses: DamageBonusInfo[]
}

export type UnitInfo = {
    src: string,
    name: string,
    animFileInfo: AnimfileRoot,
    protoKey: string,
    rolloverText: string;
    foodCost: number,
    woodCost: number,
    goldCost: number,
    influenceCost: number,
    pop: number,
    initialHP: number,
    maxHP: number,
    speed: number,
    los: number,
    trainTime: number,
    buildBounty: number,
    killBounty: number,
    types: string,
    isRanged: boolean,
    allowAgeSrc: string,
    postures: PostureInfo[],
    armors: ArmorInfo[],
    attackInfos: AttackInfo[],
    abilities: Card[],
    healRate: HealRateInfo | null,
    gatherRates: GatherRateInfo[],
    buildRates: BuildRateInfo[],
    upgrades: UpgradeInfo[],
    age2ShadowTechs: Card[],
    age3ShadowTechs: Card[],
    age4ShadowTechs: Card[],
    age5ShadowTechs: Card[],
}