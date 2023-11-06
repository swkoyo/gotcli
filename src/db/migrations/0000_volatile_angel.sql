CREATE TABLE `houses` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text,
	`words` text,
	`seat` text,
	`region` text,
	`color` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `nameIdx` ON `houses` (`name`);