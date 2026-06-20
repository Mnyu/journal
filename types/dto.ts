// ***************** GENERIC - START ***********************
export type Pagination = {
  page: number;
  pageSize: number;
  totalRecords: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

export interface PageResponse<T> {
  data: T[];
  pagination: Pagination;
}
// ***************** GENERIC - END *************************

// ***************** SPECIFIC - START **********************
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

export type TradeDTO = {
  id: string;
  userId: string;
  orderId: string;
  symbol: string;
  strategy: string;
  entry: number;
  quantity: number;
  risk: number;
  exit: number | null;
  entryDate: string;
  exitDate: string;
  return: number | null;
  returnPercent: number | null;
  rMultiple: number | null;
  createdAt: string;
  updatedAt: string;
};

export type YearDistributionDTO = {
  returnPercent: number;
  year: number;
  numberOfTrades: number;
};

export type MonthlyEdgeDTO = {
  month: string;
  edge: number;
};

export type MonthlyWinRateDTO = {
  month: string;
  winRate: number;
};

export type AnalyticsTO = {
  currentEdge: number;
  avgEdge: number;
  bestEdge: number;
  bestEdgeMonth: string;
  worstEdge: number;
  worstEdgeMonth: string;
  monthsWithEdgeMoreThan2: number;
  winRates: MonthlyWinRateDTO[];
  edges: MonthlyEdgeDTO[];
  last3YearsDistributions: YearDistributionDTO[];
};

// ***************** SPECIFIC - END ************************
