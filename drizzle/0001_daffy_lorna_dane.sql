CREATE TYPE "public"."status" AS ENUM('active', 'inactive', 'sage', 'god');--> statement-breakpoint
CREATE TABLE "all_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" text,
	"last_name" text,
	"email" text,
	"company" text,
	"status" "status"
);
