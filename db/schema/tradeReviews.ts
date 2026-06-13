import { relations } from 'drizzle-orm';
import { integer, pgEnum, pgTable, text, timestamp, unique, uuid } from 'drizzle-orm/pg-core';
import { trades } from './trades';

export const reviewTypeEnum = pgEnum('review_type', ['ENTRY', 'EXIT']);

export const tradeReviews = pgTable(
  'trade_reviews',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    tradeId: uuid('trade_id')
      .references(() => trades.id, {
        onDelete: 'cascade',
      })
      .notNull(),
    reviewType: reviewTypeEnum('review_type').notNull(),
    score: integer('score'),
    reason: text('reason'),
    aiSuggestion: text('ai_suggestion'),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [unique('trade_review_type_unique').on(table.tradeId, table.reviewType)],
);

export const tradeReviewsRelations = relations(tradeReviews, ({ one }) => ({
  trade: one(trades, {
    fields: [tradeReviews.tradeId],
    references: [trades.id],
  }),
}));

export type TradeReview = typeof tradeReviews.$inferSelect;
export type NewTradeReview = typeof tradeReviews.$inferInsert;
