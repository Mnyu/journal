import { integer, jsonb, numeric, pgTable, uuid, varchar } from 'drizzle-orm/pg-core';
import { DistributionPoint } from '../types';

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
