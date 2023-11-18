export interface ChartWinrateGlobal {
    rating: number;
    idciv: number;
    totalGames: number;
    totalWins: number;
    winPercentage: number;
    gamePercentageOfTotal: number;
}

export interface ChartWinrateMatchup {
    civPlayer: number;
    civOpponent: number;
    totalGames: number;
    winPercentage: number;
}


export interface WinrateGlobal {
    idciv: number;
    winPercentage0: number;
    winPercentage1: number;
    winPercentage2: number;
    winPercentage3: number;
    winPercentage4: number;
    winPercentage5: number;
    totalGames0: number;
    totalGames1: number;
    totalGames2: number;
    totalGames3: number;
    totalGames4: number;
    totalGames5: number;
}
