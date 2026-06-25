import { MonthEdgeWinRate, YearDistribution } from '@/types/domain';
import { last12MonthsEdgeAndWinRateSql, last3YearsDistributionSql } from './native-queries';
import { executeNativeSql } from './utils.repository';

export const getLast12MonthsEdgeAndWinRate = async (userId: string): Promise<MonthEdgeWinRate[]> => {
  const dbRows = await executeNativeSql(last12MonthsEdgeAndWinRateSql, userId);
  return dbRows.map((dbRow) => ({
    month: dbRow.month as string,
    edge: Number(dbRow.edge),
    winRate: Number(dbRow.win_rate),
  }));
};

export const getLast3YearsDistribution = async (userId: string): Promise<YearDistribution[]> => {
  const dbRows = await executeNativeSql(last3YearsDistributionSql, userId);
  return dbRows.map((dbRow) => ({
    returnPercent: Number(dbRow.return_percent),
    year: Number(dbRow.year),
    numberOfTrades: Number(dbRow.number_of_trades),
  }));
};
