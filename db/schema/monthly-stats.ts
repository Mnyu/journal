import { integer, jsonb, numeric, pgTable, uuid, varchar } from 'drizzle-orm/pg-core';
import { DistributionPoint } from '../types';

export const monthlyStats = pgTable(
  'monthly_stats',
  {
    yearMonth: varchar('year_month', { length: 7 }).primaryKey(),
    month: varchar('month', { length: 20 }).notNull().unique(),
    trades: integer('trades').notNull(),
    wins: integer('wins').notNull(),
    losses: integer('wins').notNull(),
    avgGain: numeric('avg_gain').notNull(),
    avgLoss: numeric('avg_loss').notNull(),
    winRate: numeric('win_rate').notNull(),
    riskReward: numeric('risk_reward').notNull(),
    edge: numeric('edge').notNull(),
    distribution: jsonb('distribution').$type<DistributionPoint[]>().notNull(),
  },
  (table) => [],
);
