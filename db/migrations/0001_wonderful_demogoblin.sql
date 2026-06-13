CREATE TYPE "public"."review_type" AS ENUM('ENTRY', 'EXIT');--> statement-breakpoint
CREATE TABLE "tags" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(100) NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "tags_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "trade_tags" (
	"trade_id" uuid NOT NULL,
	"tag_id" uuid NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "trade_tags_trade_id_tag_id_pk" PRIMARY KEY("trade_id","tag_id")
);
--> statement-breakpoint
CREATE TABLE "trade_reviews" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"trade_id" uuid NOT NULL,
	"review_type" "review_type" NOT NULL,
	"score" integer,
	"reason" text,
	"ai_suggestion" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "trade_review_type_unique" UNIQUE("trade_id","review_type")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"username" varchar(100) NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "users_username_unique" UNIQUE("username")
);
--> statement-breakpoint
ALTER TABLE "trades" ALTER COLUMN "created_at" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "trades" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "trades" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "trades" ALTER COLUMN "updated_at" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "trades" ALTER COLUMN "updated_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "trades" ALTER COLUMN "updated_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "trades" ADD COLUMN "user_id" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "trade_tags" ADD CONSTRAINT "trade_tags_trade_id_trades_id_fk" FOREIGN KEY ("trade_id") REFERENCES "public"."trades"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "trade_tags" ADD CONSTRAINT "trade_tags_tag_id_tags_id_fk" FOREIGN KEY ("tag_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "trade_reviews" ADD CONSTRAINT "trade_reviews_trade_id_trades_id_fk" FOREIGN KEY ("trade_id") REFERENCES "public"."trades"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "ux_tags_name_lower" ON "tags" USING btree (lower("name"));--> statement-breakpoint
CREATE INDEX "ix_tags_name" ON "tags" USING btree ("name");--> statement-breakpoint
CREATE INDEX "ix_trade_tags_tag_id" ON "trade_tags" USING btree ("tag_id");--> statement-breakpoint
CREATE INDEX "ix_users_created_at" ON "users" USING btree ("created_at");--> statement-breakpoint
ALTER TABLE "trades" ADD CONSTRAINT "trades_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "trades_entrydate_idx" ON "trades" USING btree ("entry_date");--> statement-breakpoint
CREATE INDEX "trades_exitdate_idx" ON "trades" USING btree ("exit_date");--> statement-breakpoint
ALTER TABLE "trades" ADD CONSTRAINT "trades_order_id_unique" UNIQUE("orderId");