export interface PaginatedMatch {
    content: MatchInfo[];
    totalElements: number;
    totalPages: number;
    // include other fields if needed
    // totalElements: number;
    // totalPages: number;
    // etc...
  }

  export interface MatchInfo {
    idGame: number;
    idMap: number;
    startDate: Date;
    endDate: Date;
    gameLength: number;
    gameMode: number; // 0: unrated, 1: 1v1, 2: team
    isRanked: boolean;
    playerCount: number;
    matchPlayerInfo: MatchPlayerInfo[];
}

export interface MatchPlayerInfo {
    id: number;
    idPlayer: number;
    playerName: string;
    team: number;
    result: number; // -1: disconnected or ongoing, loss = 0, win = 1
    eloBefore: number;
    eloAfter: number;
    idCiv: number;
    isHigestScore: number;
    isLeastResources: number;
    isMostImprovements: number;
    isMostKills: number;
    isMostLosses: number;
    isMostMilitary: number;
    isMostResources: number;
    isMostTreasures: number;
    scoreEconomic: number;
    scoreMilitary: number;
    scoreTotal: number;
    buildingLost: number;
    buildingRazed: number;
    unitsConverted: number;
    unitsKilled: number;
    unitsLost: number;
    matchInfo: MatchInfo;
}