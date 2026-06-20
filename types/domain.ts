export type DistributionPoint = {
  returnPercent: number;
  numberOfTrades: number;
};

export type MonthEdgeWinRate = {
  month: string;
  edge: number;
  winRate: number;
};

export type YearDistribution = {
  returnPercent: number;
  year: number;
  numberOfTrades: number;
};
