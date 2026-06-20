import { db } from '@/db/client';
import { trades } from '@/db/schema';
import { TradeListFilters } from '@/schemas/trade.schema';
import { and, asc, desc, eq, lt, sql } from 'drizzle-orm';

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
