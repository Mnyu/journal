ALTER TABLE "trades" RENAME COLUMN "orderId" TO "order_id";--> statement-breakpoint
ALTER TABLE "trades" DROP CONSTRAINT "trades_order_id_unique";--> statement-breakpoint
ALTER TABLE "monthly_stats" ALTER COLUMN "avg_gain" SET DATA TYPE numeric(10, 2);--> statement-breakpoint
ALTER TABLE "monthly_stats" ALTER COLUMN "avg_loss" SET DATA TYPE numeric(10, 2);--> statement-breakpoint
ALTER TABLE "monthly_stats" ALTER COLUMN "win_rate" SET DATA TYPE numeric(10, 2);--> statement-breakpoint
ALTER TABLE "monthly_stats" ALTER COLUMN "risk_reward" SET DATA TYPE numeric(10, 2);--> statement-breakpoint
ALTER TABLE "monthly_stats" ALTER COLUMN "edge" SET DATA TYPE numeric(10, 2);--> statement-breakpoint
ALTER TABLE "trades" ALTER COLUMN "entry" SET DATA TYPE numeric(10, 2);--> statement-breakpoint
ALTER TABLE "trades" ALTER COLUMN "risk" SET DATA TYPE numeric(10, 2);--> statement-breakpoint
ALTER TABLE "trades" ALTER COLUMN "exit" SET DATA TYPE numeric(10, 2);--> statement-breakpoint
ALTER TABLE "trades" ALTER COLUMN "return" SET DATA TYPE numeric(10, 2);--> statement-breakpoint
ALTER TABLE "trades" ALTER COLUMN "return_percent" SET DATA TYPE numeric(10, 2);--> statement-breakpoint
ALTER TABLE "trades" ALTER COLUMN "r_multiple" SET DATA TYPE numeric(10, 2);--> statement-breakpoint
ALTER TABLE "monthly_stats" ADD COLUMN "losses" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "trades" ADD CONSTRAINT "trades_order_id_unique" UNIQUE("order_id");