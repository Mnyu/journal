import { date, numeric, pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';

export const trades = pgTable('trades', {
  id: uuid('id').primaryKey().defaultRandom(),
  orderId: varchar('orderId', { length: 100 }).notNull(),
  symbol: varchar('symbol', { length: 20 }).notNull(),
  strategy: varchar('strategy', { length: 255 }),
  entry: numeric('entry').notNull(),
  quantity: numeric('quantity').notNull(),
  risk: numeric('risk').notNull(),
  exit: numeric('exit'),
  entryDate: date('entry_date').notNull(),
  exitDate: date('exit_date'),
  return: numeric('return'),
  returnPercent: numeric('return_percent'),
  rMultiple: numeric('r_multiple'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});
