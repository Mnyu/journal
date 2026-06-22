import { db } from '@/db/client';
import { trades } from '@/db/schema';
import { TradeListFilters } from '@/schemas/trade.schema';
import { and, asc, desc, eq, isNull, lt, sql } from 'drizzle-orm';
import { executeNativeSql } from './utils.repository';
import { trajectorySql } from './native-queries';
import { Trajectory } from '@/types/domain';

export const findTrades = async (filters: TradeListFilters) => {
  const conditions = [];
  if (filters.symbol) {
    conditions.push(eq(trades.symbol, filters.symbol));
  }
  const whereClause = conditions.length > 0 ? and(...conditions) : undefined;
  const offset = (filters.page - 1) * filters.pageSize;

  const [rows, countResult] = await Promise.all([
    db
      .select()
      .from(trades)
      .where(whereClause)
      .orderBy(desc(trades.createdAt), asc(trades.symbol), asc(trades.id))
      .limit(filters.pageSize)
      .offset(offset),

    db
      .select({
        total: sql<number>`count(*)`,
      })
      .from(trades)
      .where(whereClause),
  ]);

  return {
    rows,
    total: Number(countResult[0]?.total ?? 0),
  };
};

export const findOpenTrades = async (filters: TradeListFilters) => {
  const offset = (filters.page - 1) * filters.pageSize;
  const [rows, countResult] = await Promise.all([
    db
      .select()
      .from(trades)
      .where(isNull(trades.exitDate))
      .orderBy(desc(trades.createdAt), asc(trades.symbol), asc(trades.id))
      .limit(filters.pageSize)
      .offset(offset),

    db
      .select({
        total: sql<number>`count(*)`,
      })
      .from(trades)
      .where(isNull(trades.exitDate)),
  ]);

  return {
    rows,
    total: Number(countResult[0]?.total ?? 0),
  };
};

export const findTrajectory = async (): Promise<Trajectory[]> => {
  const dbRows = await executeNativeSql(trajectorySql);
  return dbRows.map((dbRow) => ({
    period: dbRow.period as string,
    noOfTrades: Number(dbRow.trades),
    wins: Number(dbRow.wins),
    losses: Number(dbRow.losses),
    avgGain: Number(dbRow.avg_gain),
    avgLoss: Number(dbRow.avg_loss),
    winRate: Number(dbRow.win_rate),
    riskReward: Number(dbRow.risk_reward),
    edge: Number(dbRow.edge),
  }));
};
