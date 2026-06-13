CREATE TABLE "trades" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"orderId" varchar(100) NOT NULL,
	"symbol" varchar(20) NOT NULL,
	"strategy" varchar(255),
	"entry" numeric NOT NULL,
	"quantity" numeric NOT NULL,
	"risk" numeric NOT NULL,
	"exit" numeric,
	"entry_date" date NOT NULL,
	"exit_date" date,
	"return" numeric,
	"return_percent" numeric,
	"r_multiple" numeric,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
