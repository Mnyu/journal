ALTER TABLE "trade_reviews" RENAME COLUMN "reason" TO "comments";--> statement-breakpoint
ALTER TABLE "trade_reviews" RENAME COLUMN "ai_suggestion" TO "ai_insights";--> statement-breakpoint
ALTER TABLE "trade_reviews" ALTER COLUMN "score" SET DEFAULT 0;--> statement-breakpoint
ALTER TABLE "trade_reviews" ALTER COLUMN "score" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "trade_reviews" ADD CONSTRAINT "trade_review_score_range_check" CHECK ("trade_reviews"."score" >= 0 AND "trade_reviews"."score" <= 5);