export interface PlayerElo {
    gameMode: number;
    rank: number;
    rankActive: number;
    rating: number;
    ratingMax: number;
    wins: number;
    losses: number;
    disconnections: number;
    streak: number;
    lastMatchDate: Date;
    streakmax: number;
}

export type ProfileData = {
    playerInfos: Player;
    clanInfo: ClanInfo;
}

export type ClanInfo = {
    idClan: number;
    clanAbbreviation: string;
    clanFullName: string;
    clanDescription: string;
    memberCount: number;
}

export interface Player {
    id: number;
    idPlayer: number;
    clan: string;
    name: string;
    idSteam: string;
    v: number;
    twr: number;
    wlr: number;
    ai: number;
    ac: number;
    topCiv1: number;
    topCiv2: number;
    topCiv3: number;
    rateCiv1: number;
    rateCiv2: number;
    rateCiv3: number;
    country: String;
    twitchURL: String;
    youtubeURL: String;
    liquipediaURL: String;
    discordURL: string;
    playerElo: PlayerElo[];
}
export interface PaginatedPlayer {
    content: Player[];
    totalElements: number;
    totalPages: number;
    // include other fields if needed
    // totalElements: number;
    // totalPages: number;
    // etc...
}

export interface PlayerName {
    idPlayer: number;
    name: string;
    rating: number;
}

export interface RatingHistory {
    gameMode: number;
    eloAfter: number;
    startDate: Date;
}