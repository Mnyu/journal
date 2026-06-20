import { DistributionPoint } from '@/types/domain';
import { integer, jsonb, numeric, pgTable } from 'drizzle-orm/pg-core';

export const yearlyStats = pgTable(
  'yearly_stats',
  {
    year: integer('year').primaryKey(),
    trades: integer('trades').notNull(),
    wins: integer('wins').notNull(),
    losses: integer('wins').notNull(),
    avgGain: numeric('avg_gain').notNull(),
    avgLoss: numeric('avg_loss').notNull(),
    winRate: numeric('win_rate').notNull(),
    riskReward: numeric('risk_reward').notNull(),
    edge: numeric('risk_reward').notNull(),
    distribution: jsonb('distribution').$type<DistributionPoint[]>().notNull(),
  },
  (table) => [],
);

export type YearlyStat = typeof yearlyStats.$inferSelect;
export type NewYearlyStat = typeof yearlyStats.$inferInsert;
