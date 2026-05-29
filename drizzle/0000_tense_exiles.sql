CREATE TABLE "generations" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"clerk_user_id" text NOT NULL,
	"original_file_name" text,
	"source_image_url" text NOT NULL,
	"result_image_url" text NOT NULL,
	"style_slug" text NOT NULL,
	"style_label" text NOT NULL,
	"model" text NOT NULL,
	"prompt_used" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
