export interface AnimfileRoot {
    animfile: Animfile;
}

export interface Animfile {
    "#text": string;
    definebone: string[];
    attachment: Attachment[];
    component: AnimfileComponent;
    anim: AnimElement[];
}

export interface AnimElement {
    "#text": string;
    assetreference: AssetreferenceElement[] | PurpleAssetreference;
    component: Text;
    attach?: Attach;
}

export interface AssetreferenceElement {
    "@type": AssetreferenceType;
    "#text": string;
    file: string;
    tag?: TagElement[] | TagElement;
    materialvariant?: Materialvariant;
}

export enum AssetreferenceType {
    GrannyAnim = "GrannyAnim",
    GrannyModel = "GrannyModel",
}

export interface Materialvariant {
    "@index": string;
    "#text": string;
}

export interface TagElement {
    "@type": TagType;
    "#text": string;
    "@checkvisible"?: string;
    "@set"?: Set;
    "@footprinttype"?: Footprinttype;
}

export enum Footprinttype {
    HumanLeft = "HumanLeft",
    HumanRight = "HumanRight",
}

export enum Set {
    RagdollImpact = "RagdollImpact",
    Swoosh = "Swoosh",
    TorchSwing = "TorchSwing",
}

export enum TagType {
    Attack = "Attack",
    FootstepLeft = "FootstepLeft",
    FootstepRight = "FootstepRight",
    SpecificSoundSet = "SpecificSoundSet",
}

export interface PurpleAssetreference {
    "@type": AssetreferenceType;
    "#text": string;
    file: string;
    tag?: TagElement[];
}

export interface Attach {
    "@a": string;
    "@frombone": string;
    "@tobone": string;
    "@syncanims": string;
    "#text": string;
}

export enum Text {
    ModelComp = "ModelComp",
}

export interface Attachment {
    "#text": string;
    component?: ComponentComponent | string;
    include?: string;
    anim?: AttachmentAnim;
}

export interface AttachmentAnim {
    "#text": string;
    component: string;
}

export interface ComponentComponent {
    "#text": string;
    assetreference: AssetreferenceElement;
}

export interface AnimfileComponent {
    "#text": Text;
    logic: AnimLogic;
    attach: Attach;
    decal: Decal;
}

export interface Decal {
    "#text": string;
    effecttype: string;
    texture: Texture;
    selectedtexture: string;
    width: string;
    height: string;
}

export interface Texture {
    "@isfakeshadow": string;
    "#text": string;
}

export interface AnimLogic {
    "@type": string;
    "#text": string;
    [k: string]: AnimeReference;
}

export interface AnimeReference {
    "#text": string;
    assetreference: Assetreference;
    attach: Attach;
}

export interface Assetreference {
    "@type": AssetreferenceType;
    "#text": string;
    file: string;
}