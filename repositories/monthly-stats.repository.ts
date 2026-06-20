import { db } from '@/db/client';
import { MonthlyStat, monthlyStatsTable } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { monthlyDistributionorCurrentMonthSql, monthlyStatForCurrentMonthSql } from './native-queries';
import { executeNativeSqlFirstResult } from './utils.repository';
import { DistributionPoint } from '@/types/domain';

export const getMonthlyStat = async (yearMonth: string): Promise<MonthlyStat | null> => {
  const [monthStat] = await db.select().from(monthlyStatsTable).where(eq(monthlyStatsTable.yearMonth, yearMonth));
  return monthStat ?? null;
};

export const getMonthlyStatForCurrentMonth = async (): Promise<MonthlyStat | null> => {
  const dbStat = await executeNativeSqlFirstResult(monthlyStatForCurrentMonthSql);
  if (!dbStat) {
    return null;
  }

  let distribution: DistributionPoint[] = [];
  const dbDistribution = await executeNativeSqlFirstResult(monthlyDistributionorCurrentMonthSql);
  if (dbDistribution) {
    distribution = dbDistribution.distribution as DistributionPoint[];
  }

  const monthlyStat: MonthlyStat = {
    yearMonth: dbStat.year_month as string,
    month: dbStat.year_month as string,
    trades: Number(dbStat.trades),
    wins: Number(dbStat.wins),
    losses: Number(dbStat.losses),
    avgGain: Number(dbStat.avg_gain),
    avgLoss: Number(dbStat.avg_loss),
    winRate: Number(dbStat.win_rate),
    riskReward: Number(dbStat.risk_reward),
    edge: Number(dbStat.edge),
    distribution: distribution,
  };
  return monthlyStat;
};
