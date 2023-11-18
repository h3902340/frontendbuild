export interface SlingerTactics {
    tactics: Tactics;
}

export interface Tactics {
    "#text": string;
    action: TacticsAction | TacticsAction[];
    tactic: Tactic | Tactic[];
}

export interface TacticsAction {
    "#text": string;
    name: Name;
    type: string;
    attackaction?: string;
    rangedlogic?: string;
    anim: string;
    reloadanim?: string;
    idleanim?: string;
    accuracy?: string;
    accuracyreductionfactor?: string;
    aimbonus?: string;
    maxspread?: string;
    spreadfactor?: string;
    trackrating?: string;
    unintentionaldamagemultiplier?: string;
    projectile?: string;
    impacteffect?: string;
    minrange?: string;
    rate: RateElement[] | RateElement;
    throw?: string;
    damage?: string;
    maxrange: string;
    rof?: string;
    perfectaccuracy?: string;
    handlogic?: string;
    speedboost?: string;
    targetspeedboost?: string;
    active?: string;
}

export interface Name {
    "@stringid": string;
    "#text": string;
}

export interface RateElement {
    "@type": string;
    "#text": Text;
}

export enum Text {
    The10 = "1.0 ",
    The20 = "2.0",
}

export interface Tactic {
    "#text": string;
    speedmodifier: string;
    action: Array<ActionAction>;
    attacktype: string;
    autoattacktype: string;
    attackresponsetype: string;
    runaway: string;
    autoretarget: string;
    idleanim: string;
    boredanim: string;
    deathanim: string;
    walkanim: string;
    joganim: string;
    runanim: string;
}

export interface ActionAction {
    "@priority": string;
    "#text": string;
}
