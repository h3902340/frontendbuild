export interface AttachmentRoot {
    animfile: Animfile;
}

export interface Animfile {
    "#text": string;
    component: Component;
    anim: Anim[];
}

export interface Anim {
    "#text": string;
    assetreference: AssetreferenceElement[] | AssetreferenceElement;
    component: Text;
}

export interface AssetreferenceElement {
    "@type": Type;
    "#text": string;
    file: string;
}

export enum Type {
    GrannyAnim = "GrannyAnim",
    GrannyModel = "GrannyModel",
}

export enum Text {
    Sling = "sling",
}

export interface Component {
    "#text": Text;
    assetreference: AssetreferenceElement;
}
