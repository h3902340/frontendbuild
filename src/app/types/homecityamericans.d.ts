export interface HomecityRoot {
    homecity: Homecity;
}

export interface Homecity {
    "#text":                 string;
    civ:                     string;
    name:                    string;
    heroname:                string;
    gatherpointunit:         string;
    visual:                  string;
    watervisual:             string;
    backgroundvisual:        string;
    pathdata:                string;
    camera:                  string;
    widescreencamera:        string;
    transportroundtriptime:  string;
    transportactivationtime: string;
    level:                   string;
    maxcardsperdeck:         string;
    skillpoints:             string;
    lightset:                string;
    watertype:               string;
    numpropunlocksearned:    string;
    ambientsounds:           string;
    xsai:                    string;
    heroprotounits:          Heroprotounits;
    coffers:                 Coffers;
    cards:                   HomecityCards;
    decks:                   Decks;
    building:                Building[];
    waypoints:               Waypoints;
    obtainableprops:         Obtainableprops;
}

export interface Building {
    "#text":                string;
    name:                   string;
    visual?:                Visual;
    uix?:                   string;
    uiy?:                   string;
    camera:                 string;
    widescreencamera:       string;
    unlocklevel:            string;
    portrait:               string;
    displaynamestringid:    string;
    rolloverstringid:       string;
    obtainabletechs?:       ActivetechsClass | string;
    activetechs?:           ActivetechsClass | string;
    validunits?:            string;
    units?:                 string;
    mercbuilding?:          string;
    trainbuilding?:         string;
    customizationbuilding?: string;
}

export interface ActivetechsClass {
    "#text": string;
    tech:    Tech[];
}

export interface Tech {
    "@x":    string;
    "@y":    string;
    "#text": string;
}

export interface Visual {
    "#text": string;
    file:    string;
    bone:    string;
}

export interface HomecityCards {
    "#text": string;
    card:    PurpleCard[];
}

export interface PurpleCard {
    "#text":            string;
    name:               string;
    maxcount:           string;
    level:              string;
    prereqtech?:        string[] | string;
    age:                string;
    displayunitcount?:  string;
    infiniteinlastage?: string;
    revoltcard?:        string;
}

export interface Coffers {
    "#text": string;
    current: Current;
    maximum: Current;
}

export interface Current {
    "#text":     string;
    food:        string;
    wood:        string;
    gold:        string;
    fame:        string;
    ships:       string;
    skillpoints: string;
    xp:          string;
}

export interface Decks {
    "#text":    string;
    deck:       Deck[];
    revoltdeck: Revoltdeck;
}

export interface Deck {
    "#text":     string;
    name:        string;
    default?:    string;
    cards:       DeckCards;
    "@version"?: string;
}

export interface DeckCards {
    "#text": string;
    card:    FluffyCard[];
}

export interface FluffyCard {
    "@dbid": string;
    "#text": string;
}

export interface Revoltdeck {
    "#text": string;
    name:    string;
    cards:   RevoltdeckCards;
}

export interface RevoltdeckCards {
    "#text": string;
    card:    string[];
}

export interface Heroprotounits {
    "#text":   string;
    protounit: string;
}

export interface Obtainableprops {
    "#text": string;
    prop:    Array<PropClass | string>;
}

export interface PropClass {
    "@active": string;
    "#text":   string;
}

export interface Waypoints {
    "#text":  string;
    waypoint: Waypoint[];
}

export interface Waypoint {
    "#text":          string;
    bone:             string;
    exit?:            string;
    vendorentry?:     string;
    performancearea?: string;
    dock?:            string;
    guardarea?:       string;
    fishingarea?:     string;
    shipmentstart?:   string;
    shipmentend?:     string;
    illreputearea?:   string;
    vendorarea?:      string;
    fireworks?:       string;
}
