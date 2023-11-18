export interface HerdTactics {
    tactics: Tactics;
}

export interface Tactics {
    "#text": string;
    action: Action[];
    tactic: Tactic;
}

export interface Action {
    "#text": string;
    name: Name;
    type: string;
    maxrange?: string;
    rate?: RateElement[] | RateElement;
    addresourcestoinventory?: string;
    active?: string;
    persistent?: string;
    civtype?: string;
    anim?: string;
}

export interface Name {
    "@stringid": string;
    "#text": string;
}

export interface RateElement {
    "@type": string;
    "#text": string;
}

export interface Tactic {
    "#text": string;
    action: string[];
}
