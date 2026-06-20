export type DistributionPointDTO = {
  returnPercent: number;
  numberOfTrades: number;
};

export type MonthlyStatDTO = {
  yearMonth: string;
  month: string;
  trades: number;
  wins: number;
  losses: number;
  avgGain: number;
  avgLoss: number;
  winRate: number;
  riskReward: number;
  edge: number;
  distribution: DistributionPointDTO[];
};
