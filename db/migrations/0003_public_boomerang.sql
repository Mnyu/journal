CREATE TABLE "monthly_stats" (
	"year_month" varchar(7) PRIMARY KEY NOT NULL,
	"month" varchar(20) NOT NULL,
	"trades" integer NOT NULL,
	"wins" integer NOT NULL,
	"avg_gain" numeric NOT NULL,
	"avg_loss" numeric NOT NULL,
	"win_rate" numeric NOT NULL,
	"risk_reward" numeric NOT NULL,
	"edge" numeric NOT NULL,
	"distribution" jsonb NOT NULL,
	CONSTRAINT "monthly_stats_month_unique" UNIQUE("month")
);
--> statement-breakpoint
CREATE TABLE "yearly_stats" (
	"year" integer PRIMARY KEY NOT NULL,
	"trades" integer NOT NULL,
	"wins" integer NOT NULL,
	"avg_gain" numeric NOT NULL,
	"avg_loss" numeric NOT NULL,
	"win_rate" numeric NOT NULL,
	"risk_reward" numeric NOT NULL,
	"distribution" jsonb NOT NULL
);
--> statement-breakpoint
ALTER TABLE "trades" ALTER COLUMN "quantity" SET DATA TYPE integer;