ALTER TABLE "users" ALTER COLUMN "username" SET DATA TYPE varchar(20);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "name" varchar(100) NOT NULL;