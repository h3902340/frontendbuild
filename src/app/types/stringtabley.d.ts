export interface StringtableRoot {
    stringtable: Stringtable;
}

export interface Stringtable {
    "@version": string;
    "#text":    string;
    language:   Language;
}

export interface Language {
    "@name": string;
    "#text": string;
    string:  String[];
}

export interface String {
    "@_locid":              string;
    "#text":                string;
    "@symbol"?:             string;
    "@comment"?:            string;
    "@portraitfilename"?:   string;
    "@gamecharacter"?:      string;
    "@soundfilename"?:      string;
    "@movie"?:              Movie;
    "@timestamp"?:          string;
    "@symcol"?:             string;
    "@referencedplayerid"?: string;
}

export enum Movie {
    Act1FinalCine = "Act1FinalCine",
    Act2FinalCine = "Act2FinalCine",
    Act3FinalCine = "Act3FinalCine",
    XAct1FinalCine = "xAct1FinalCine",
    XAct2FinalCine = "xAct2FinalCine",
}
