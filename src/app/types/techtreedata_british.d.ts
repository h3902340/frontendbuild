export interface TechtreedataRoot {
    techtreedata: Techtreedata;
}

export interface Techtreedata {
    "#text": string;
    group: Group[];
}

export interface Group {
    "@name": string;
    "#text": string;
    proto: ProtoElement[] | ProtoElement;
    tech?: ProtoElement[] | ProtoElement;
}

export interface ProtoElement {
    "@name": string;
    "@banner": Banner;
    "@icon": string;
    "@row": string;
    "@col": string;
    "#text": string;
    override?: Override;
}

export enum Banner {
    Building = "building",
    Improvement = "improvement",
    Unit = "unit",
}

export interface Override {
    "#text": string;
    nameoverride?: string;
    additionaldesc?: string;
}
