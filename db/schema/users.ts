import { relations } from 'drizzle-orm';
import { index, pgTable, timestamp, uniqueIndex, uuid, varchar } from 'drizzle-orm/pg-core';
import { trades } from './trades';

export const users = pgTable(
  'users',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    username: varchar('username', { length: 20 }).unique().notNull(),
    name: varchar('name', { length: 100 }).notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [index('ix_users_created_at').on(table.createdAt)],
);

export const usersRelations = relations(users, ({ many }) => ({
  trades: many(trades),
}));

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
