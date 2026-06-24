import { db } from '@/db/client';
import { NewTradeReview, TradeReview, tradeReviews } from '@/db/schema';

export const upsertTradeReview = async (review: NewTradeReview): Promise<TradeReview> => {
  const [savedTradeReview] = await db
    .insert(tradeReviews)
    .values(review)
    .onConflictDoUpdate({
      target: [tradeReviews.tradeId, tradeReviews.type],
      set: {
        score: review.score,
        comments: review.comments,
        updatedAt: new Date(),
      },
    })
    .returning();
  return savedTradeReview;
};
