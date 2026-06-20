import { DistributionPoint, MonthEdgeWinRate, YearDistribution } from '@/types/domain';
import { last12MonthsEdgeAndWinRateSql, last3YearsDistributionSql } from './native-queries';
import { executeNativeSql } from './utils.repository';

export const getLast12MonthsEdgeAndWinRate = async (): Promise<MonthEdgeWinRate[]> => {
  const dbRows = await executeNativeSql(last12MonthsEdgeAndWinRateSql);
  return dbRows.map((dbRow) => ({
    month: dbRow.month as string,
    edge: Number(dbRow.edge),
    winRate: Number(dbRow.win_rate),
  }));
};

export const getLast3YearsDistribution = async (): Promise<YearDistribution[]> => {
  const dbRows = await executeNativeSql(last3YearsDistributionSql);
  return dbRows.map((dbRow) => ({
    returnPercent: Number(dbRow.return_percent),
    year: Number(dbRow.year),
    numberOfTrades: Number(dbRow.number_of_trades),
  }));
};
