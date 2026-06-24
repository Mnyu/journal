ALTER TABLE "trade_reviews" RENAME COLUMN "review_type" TO "type";--> statement-breakpoint
ALTER TABLE "trade_reviews" DROP CONSTRAINT "trade_review_type_unique";--> statement-breakpoint
ALTER TABLE "trade_reviews" ADD CONSTRAINT "trade_review_type_unique" UNIQUE("trade_id","type");