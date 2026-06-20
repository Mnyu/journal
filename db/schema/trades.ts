import { relations } from 'drizzle-orm';
import { date, index, integer, numeric, pgTable, timestamp, unique, uuid, varchar } from 'drizzle-orm/pg-core';
import { tradeReviews } from './trade-reviews';
import { tradeTags } from './trade-tags';
import { users } from './users';

export const trades = pgTable(
  'trades',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: uuid('user_id')
      .references(() => users.id, {
        onDelete: 'cascade',
      })
      .notNull(),
    orderId: varchar('orderId', { length: 100 }).notNull(),
    symbol: varchar('symbol', { length: 20 }).notNull(),
    strategy: varchar('strategy', { length: 255 }),
    entry: numeric('entry', {
      precision: 10,
      scale: 2,
      mode: 'number',
    }).notNull(),
    quantity: integer('quantity').notNull(),
    risk: numeric('risk', {
      precision: 10,
      scale: 2,
      mode: 'number',
    }).notNull(),
    exit: numeric('exit', {
      precision: 10,
      scale: 2,
      mode: 'number',
    }),
    entryDate: date('entry_date').notNull(),
    exitDate: date('exit_date'),
    return: numeric('return', {
      precision: 10,
      scale: 2,
      mode: 'number',
    }),
    returnPercent: numeric('return_percent', {
      precision: 10,
      scale: 2,
      mode: 'number',
    }),
    rMultiple: numeric('r_multiple', {
      precision: 10,
      scale: 2,
      mode: 'number',
    }),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    unique('trades_order_id_unique').on(table.orderId),
    index('trades_entrydate_idx').on(table.entryDate),
    index('trades_exitdate_idx').on(table.exitDate),
  ],
);

export const tradesRelations = relations(trades, ({ one, many }) => ({
  user: one(users, {
    fields: [trades.userId],
    references: [users.id],
  }),
  reviews: many(tradeReviews),
  tradeTags: many(tradeTags),
}));

export type Trade = typeof trades.$inferSelect;
export type NewTrade = typeof trades.$inferInsert;
