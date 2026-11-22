import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`users_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`users_rels_order_idx\` ON \`users_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`users_rels_parent_idx\` ON \`users_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`users_rels_path_idx\` ON \`users_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`users_rels_users_id_idx\` ON \`users_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`media_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`media_rels_order_idx\` ON \`media_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`media_rels_parent_idx\` ON \`media_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`media_rels_path_idx\` ON \`media_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`media_rels_users_id_idx\` ON \`media_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`_media_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`parent_id\` integer,
  	\`version_alt\` text NOT NULL,
  	\`version_prefix\` text DEFAULT '',
  	\`version__objectkey\` text,
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`version_url\` text,
  	\`version_thumbnail_u_r_l\` text,
  	\`version_filename\` text,
  	\`version_mime_type\` text,
  	\`version_filesize\` numeric,
  	\`version_width\` numeric,
  	\`version_height\` numeric,
  	\`version__stored\` integer,
  	\`version__transforms\` text,
  	\`version_original_filename\` text,
  	\`version_original_url\` text,
  	\`version_original_mime_type\` text,
  	\`version_original_filesize\` numeric,
  	\`version_original_width\` numeric,
  	\`version_original_height\` numeric,
  	\`version_original_prefix\` text,
  	\`version_original__objectkey\` text,
  	\`version_original__stored\` integer,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`_media_v_parent_idx\` ON \`_media_v\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_media_v_version_version_updated_at_idx\` ON \`_media_v\` (\`version_updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_media_v_version_version_created_at_idx\` ON \`_media_v\` (\`version_created_at\`);`)
  await db.run(sql`CREATE INDEX \`_media_v_version_version_filename_idx\` ON \`_media_v\` (\`version_filename\`);`)
  await db.run(sql`CREATE INDEX \`_media_v_version_original_version_original_filename_idx\` ON \`_media_v\` (\`version_original_filename\`);`)
  await db.run(sql`CREATE INDEX \`_media_v_created_at_idx\` ON \`_media_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_media_v_updated_at_idx\` ON \`_media_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE TABLE \`_media_v_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`_media_v\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_media_v_rels_order_idx\` ON \`_media_v_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`_media_v_rels_parent_idx\` ON \`_media_v_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_media_v_rels_path_idx\` ON \`_media_v_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`_media_v_rels_users_id_idx\` ON \`_media_v_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`countries\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`slug\` text NOT NULL,
  	\`has_official_office\` integer DEFAULT false,
  	\`cover_id\` integer NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`cover_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`countries_slug_idx\` ON \`countries\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`countries_cover_idx\` ON \`countries\` (\`cover_id\`);`)
  await db.run(sql`CREATE INDEX \`countries_updated_at_idx\` ON \`countries\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`countries_created_at_idx\` ON \`countries\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`countries_locales\` (
  	\`name\` text NOT NULL,
  	\`summary\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`countries\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`countries_locales_parent_id_locale_unique\` ON \`countries_locales\` (\`_parent_id\`,\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`countries_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`countries\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`countries_rels_order_idx\` ON \`countries_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`countries_rels_parent_idx\` ON \`countries_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`countries_rels_path_idx\` ON \`countries_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`countries_rels_users_id_idx\` ON \`countries_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`_countries_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`parent_id\` integer,
  	\`version_slug\` text NOT NULL,
  	\`version_has_official_office\` integer DEFAULT false,
  	\`version_cover_id\` integer NOT NULL,
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`countries\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_cover_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`_countries_v_parent_idx\` ON \`_countries_v\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_countries_v_version_version_slug_idx\` ON \`_countries_v\` (\`version_slug\`);`)
  await db.run(sql`CREATE INDEX \`_countries_v_version_version_cover_idx\` ON \`_countries_v\` (\`version_cover_id\`);`)
  await db.run(sql`CREATE INDEX \`_countries_v_version_version_updated_at_idx\` ON \`_countries_v\` (\`version_updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_countries_v_version_version_created_at_idx\` ON \`_countries_v\` (\`version_created_at\`);`)
  await db.run(sql`CREATE INDEX \`_countries_v_created_at_idx\` ON \`_countries_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_countries_v_updated_at_idx\` ON \`_countries_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE TABLE \`_countries_v_locales\` (
  	\`version_name\` text NOT NULL,
  	\`version_summary\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_countries_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_countries_v_locales_parent_id_locale_unique\` ON \`_countries_v_locales\` (\`_parent_id\`,\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`_countries_v_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`_countries_v\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_countries_v_rels_order_idx\` ON \`_countries_v_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`_countries_v_rels_parent_idx\` ON \`_countries_v_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_countries_v_rels_path_idx\` ON \`_countries_v_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`_countries_v_rels_users_id_idx\` ON \`_countries_v_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`cities\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`slug\` text NOT NULL,
  	\`country_id\` integer NOT NULL,
  	\`has_page\` integer DEFAULT false,
  	\`cover_id\` integer NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`country_id\`) REFERENCES \`countries\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`cover_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`cities_slug_idx\` ON \`cities\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`cities_country_idx\` ON \`cities\` (\`country_id\`);`)
  await db.run(sql`CREATE INDEX \`cities_cover_idx\` ON \`cities\` (\`cover_id\`);`)
  await db.run(sql`CREATE INDEX \`cities_updated_at_idx\` ON \`cities\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`cities_created_at_idx\` ON \`cities\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`cities_locales\` (
  	\`name\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`cities\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`cities_locales_parent_id_locale_unique\` ON \`cities_locales\` (\`_parent_id\`,\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`cities_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`cities\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`cities_rels_order_idx\` ON \`cities_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`cities_rels_parent_idx\` ON \`cities_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`cities_rels_path_idx\` ON \`cities_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`cities_rels_users_id_idx\` ON \`cities_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`_cities_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`parent_id\` integer,
  	\`version_slug\` text NOT NULL,
  	\`version_country_id\` integer NOT NULL,
  	\`version_has_page\` integer DEFAULT false,
  	\`version_cover_id\` integer NOT NULL,
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`cities\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_country_id\`) REFERENCES \`countries\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_cover_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`_cities_v_parent_idx\` ON \`_cities_v\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_cities_v_version_version_slug_idx\` ON \`_cities_v\` (\`version_slug\`);`)
  await db.run(sql`CREATE INDEX \`_cities_v_version_version_country_idx\` ON \`_cities_v\` (\`version_country_id\`);`)
  await db.run(sql`CREATE INDEX \`_cities_v_version_version_cover_idx\` ON \`_cities_v\` (\`version_cover_id\`);`)
  await db.run(sql`CREATE INDEX \`_cities_v_version_version_updated_at_idx\` ON \`_cities_v\` (\`version_updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_cities_v_version_version_created_at_idx\` ON \`_cities_v\` (\`version_created_at\`);`)
  await db.run(sql`CREATE INDEX \`_cities_v_created_at_idx\` ON \`_cities_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_cities_v_updated_at_idx\` ON \`_cities_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE TABLE \`_cities_v_locales\` (
  	\`version_name\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_cities_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_cities_v_locales_parent_id_locale_unique\` ON \`_cities_v_locales\` (\`_parent_id\`,\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`_cities_v_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`_cities_v\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_cities_v_rels_order_idx\` ON \`_cities_v_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`_cities_v_rels_parent_idx\` ON \`_cities_v_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_cities_v_rels_path_idx\` ON \`_cities_v_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`_cities_v_rels_users_id_idx\` ON \`_cities_v_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`hotels_amenities\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`hotels\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`hotels_amenities_order_idx\` ON \`hotels_amenities\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`hotels_amenities_parent_id_idx\` ON \`hotels_amenities\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`hotels_amenities_locales\` (
  	\`label\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`hotels_amenities\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`hotels_amenities_locales_parent_id_locale_unique\` ON \`hotels_amenities_locales\` (\`_parent_id\`,\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`hotels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`city_id\` integer NOT NULL,
  	\`stars\` text NOT NULL,
  	\`type\` text DEFAULT 'hotel' NOT NULL,
  	\`family_friendly\` integer DEFAULT false,
  	\`cover_id\` integer NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`city_id\`) REFERENCES \`cities\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`cover_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`hotels_city_idx\` ON \`hotels\` (\`city_id\`);`)
  await db.run(sql`CREATE INDEX \`hotels_cover_idx\` ON \`hotels\` (\`cover_id\`);`)
  await db.run(sql`CREATE INDEX \`hotels_updated_at_idx\` ON \`hotels\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`hotels_created_at_idx\` ON \`hotels\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`hotels_locales\` (
  	\`name\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`hotels\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`hotels_locales_parent_id_locale_unique\` ON \`hotels_locales\` (\`_parent_id\`,\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`hotels_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`hotels\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`hotels_rels_order_idx\` ON \`hotels_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`hotels_rels_parent_idx\` ON \`hotels_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`hotels_rels_path_idx\` ON \`hotels_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`hotels_rels_users_id_idx\` ON \`hotels_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`_hotels_v_version_amenities\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_hotels_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_hotels_v_version_amenities_order_idx\` ON \`_hotels_v_version_amenities\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_hotels_v_version_amenities_parent_id_idx\` ON \`_hotels_v_version_amenities\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_hotels_v_version_amenities_locales\` (
  	\`label\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_hotels_v_version_amenities\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_hotels_v_version_amenities_locales_parent_id_locale_unique\` ON \`_hotels_v_version_amenities_locales\` (\`_parent_id\`,\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`_hotels_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`parent_id\` integer,
  	\`version_city_id\` integer NOT NULL,
  	\`version_stars\` text NOT NULL,
  	\`version_type\` text DEFAULT 'hotel' NOT NULL,
  	\`version_family_friendly\` integer DEFAULT false,
  	\`version_cover_id\` integer NOT NULL,
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`hotels\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_city_id\`) REFERENCES \`cities\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_cover_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`_hotels_v_parent_idx\` ON \`_hotels_v\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_hotels_v_version_version_city_idx\` ON \`_hotels_v\` (\`version_city_id\`);`)
  await db.run(sql`CREATE INDEX \`_hotels_v_version_version_cover_idx\` ON \`_hotels_v\` (\`version_cover_id\`);`)
  await db.run(sql`CREATE INDEX \`_hotels_v_version_version_updated_at_idx\` ON \`_hotels_v\` (\`version_updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_hotels_v_version_version_created_at_idx\` ON \`_hotels_v\` (\`version_created_at\`);`)
  await db.run(sql`CREATE INDEX \`_hotels_v_created_at_idx\` ON \`_hotels_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_hotels_v_updated_at_idx\` ON \`_hotels_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE TABLE \`_hotels_v_locales\` (
  	\`version_name\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_hotels_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_hotels_v_locales_parent_id_locale_unique\` ON \`_hotels_v_locales\` (\`_parent_id\`,\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`_hotels_v_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`_hotels_v\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_hotels_v_rels_order_idx\` ON \`_hotels_v_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`_hotels_v_rels_parent_idx\` ON \`_hotels_v_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_hotels_v_rels_path_idx\` ON \`_hotels_v_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`_hotels_v_rels_users_id_idx\` ON \`_hotels_v_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`programs_gallery\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer NOT NULL,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`programs\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`programs_gallery_order_idx\` ON \`programs_gallery\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`programs_gallery_parent_id_idx\` ON \`programs_gallery\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`programs_gallery_image_idx\` ON \`programs_gallery\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`programs_days\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`programs\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`programs_days_order_idx\` ON \`programs_days\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`programs_days_parent_id_idx\` ON \`programs_days\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`programs_days_locales\` (
  	\`title\` text NOT NULL,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`programs_days\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`programs_days_locales_parent_id_locale_unique\` ON \`programs_days_locales\` (\`_parent_id\`,\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`programs_included\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`programs\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`programs_included_order_idx\` ON \`programs_included\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`programs_included_parent_id_idx\` ON \`programs_included\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`programs_included_locales\` (
  	\`item\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`programs_included\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`programs_included_locales_parent_id_locale_unique\` ON \`programs_included_locales\` (\`_parent_id\`,\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`programs_excluded\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`programs\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`programs_excluded_order_idx\` ON \`programs_excluded\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`programs_excluded_parent_id_idx\` ON \`programs_excluded\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`programs_excluded_locales\` (
  	\`item\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`programs_excluded\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`programs_excluded_locales_parent_id_locale_unique\` ON \`programs_excluded_locales\` (\`_parent_id\`,\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`programs\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`slug\` text NOT NULL,
  	\`duration_days\` numeric NOT NULL,
  	\`country_id\` integer NOT NULL,
  	\`badge\` text,
  	\`featured\` integer DEFAULT false,
  	\`order\` numeric DEFAULT 100,
  	\`cover_id\` integer NOT NULL,
  	\`price_from\` numeric,
  	\`price_currency\` text DEFAULT 'USD',
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`country_id\`) REFERENCES \`countries\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`cover_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`programs_slug_idx\` ON \`programs\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`programs_country_idx\` ON \`programs\` (\`country_id\`);`)
  await db.run(sql`CREATE INDEX \`programs_cover_idx\` ON \`programs\` (\`cover_id\`);`)
  await db.run(sql`CREATE INDEX \`programs_updated_at_idx\` ON \`programs\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`programs_created_at_idx\` ON \`programs\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`programs_locales\` (
  	\`title\` text NOT NULL,
  	\`summary\` text,
  	\`agency_notes\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`programs\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`programs_locales_parent_id_locale_unique\` ON \`programs_locales\` (\`_parent_id\`,\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`programs_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`cities_id\` integer,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`programs\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`cities_id\`) REFERENCES \`cities\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`programs_rels_order_idx\` ON \`programs_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`programs_rels_parent_idx\` ON \`programs_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`programs_rels_path_idx\` ON \`programs_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`programs_rels_cities_id_idx\` ON \`programs_rels\` (\`cities_id\`);`)
  await db.run(sql`CREATE INDEX \`programs_rels_users_id_idx\` ON \`programs_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`_programs_v_version_gallery\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`image_id\` integer NOT NULL,
  	\`_uuid\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_programs_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_programs_v_version_gallery_order_idx\` ON \`_programs_v_version_gallery\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_programs_v_version_gallery_parent_id_idx\` ON \`_programs_v_version_gallery\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_programs_v_version_gallery_image_idx\` ON \`_programs_v_version_gallery\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_programs_v_version_days\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_programs_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_programs_v_version_days_order_idx\` ON \`_programs_v_version_days\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_programs_v_version_days_parent_id_idx\` ON \`_programs_v_version_days\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_programs_v_version_days_locales\` (
  	\`title\` text NOT NULL,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_programs_v_version_days\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_programs_v_version_days_locales_parent_id_locale_unique\` ON \`_programs_v_version_days_locales\` (\`_parent_id\`,\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`_programs_v_version_included\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_programs_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_programs_v_version_included_order_idx\` ON \`_programs_v_version_included\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_programs_v_version_included_parent_id_idx\` ON \`_programs_v_version_included\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_programs_v_version_included_locales\` (
  	\`item\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_programs_v_version_included\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_programs_v_version_included_locales_parent_id_locale_unique\` ON \`_programs_v_version_included_locales\` (\`_parent_id\`,\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`_programs_v_version_excluded\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_programs_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_programs_v_version_excluded_order_idx\` ON \`_programs_v_version_excluded\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_programs_v_version_excluded_parent_id_idx\` ON \`_programs_v_version_excluded\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_programs_v_version_excluded_locales\` (
  	\`item\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_programs_v_version_excluded\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_programs_v_version_excluded_locales_parent_id_locale_unique\` ON \`_programs_v_version_excluded_locales\` (\`_parent_id\`,\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`_programs_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`parent_id\` integer,
  	\`version_slug\` text NOT NULL,
  	\`version_duration_days\` numeric NOT NULL,
  	\`version_country_id\` integer NOT NULL,
  	\`version_badge\` text,
  	\`version_featured\` integer DEFAULT false,
  	\`version_order\` numeric DEFAULT 100,
  	\`version_cover_id\` integer NOT NULL,
  	\`version_price_from\` numeric,
  	\`version_price_currency\` text DEFAULT 'USD',
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`programs\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_country_id\`) REFERENCES \`countries\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_cover_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`_programs_v_parent_idx\` ON \`_programs_v\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_programs_v_version_version_slug_idx\` ON \`_programs_v\` (\`version_slug\`);`)
  await db.run(sql`CREATE INDEX \`_programs_v_version_version_country_idx\` ON \`_programs_v\` (\`version_country_id\`);`)
  await db.run(sql`CREATE INDEX \`_programs_v_version_version_cover_idx\` ON \`_programs_v\` (\`version_cover_id\`);`)
  await db.run(sql`CREATE INDEX \`_programs_v_version_version_updated_at_idx\` ON \`_programs_v\` (\`version_updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_programs_v_version_version_created_at_idx\` ON \`_programs_v\` (\`version_created_at\`);`)
  await db.run(sql`CREATE INDEX \`_programs_v_created_at_idx\` ON \`_programs_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_programs_v_updated_at_idx\` ON \`_programs_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE TABLE \`_programs_v_locales\` (
  	\`version_title\` text NOT NULL,
  	\`version_summary\` text,
  	\`version_agency_notes\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_programs_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_programs_v_locales_parent_id_locale_unique\` ON \`_programs_v_locales\` (\`_parent_id\`,\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`_programs_v_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`cities_id\` integer,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`_programs_v\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`cities_id\`) REFERENCES \`cities\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_programs_v_rels_order_idx\` ON \`_programs_v_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`_programs_v_rels_parent_idx\` ON \`_programs_v_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_programs_v_rels_path_idx\` ON \`_programs_v_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`_programs_v_rels_cities_id_idx\` ON \`_programs_v_rels\` (\`cities_id\`);`)
  await db.run(sql`CREATE INDEX \`_programs_v_rels_users_id_idx\` ON \`_programs_v_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`articles\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`slug\` text NOT NULL,
  	\`cover_id\` integer NOT NULL,
  	\`published_at\` text NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`cover_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`articles_slug_idx\` ON \`articles\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`articles_cover_idx\` ON \`articles\` (\`cover_id\`);`)
  await db.run(sql`CREATE INDEX \`articles_updated_at_idx\` ON \`articles\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`articles_created_at_idx\` ON \`articles\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`articles_locales\` (
  	\`title\` text NOT NULL,
  	\`excerpt\` text,
  	\`tag\` text,
  	\`content\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`articles\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`articles_locales_parent_id_locale_unique\` ON \`articles_locales\` (\`_parent_id\`,\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`articles_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`articles\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`articles_rels_order_idx\` ON \`articles_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`articles_rels_parent_idx\` ON \`articles_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`articles_rels_path_idx\` ON \`articles_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`articles_rels_users_id_idx\` ON \`articles_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`_articles_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`parent_id\` integer,
  	\`version_slug\` text NOT NULL,
  	\`version_cover_id\` integer NOT NULL,
  	\`version_published_at\` text NOT NULL,
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`articles\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_cover_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`_articles_v_parent_idx\` ON \`_articles_v\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_articles_v_version_version_slug_idx\` ON \`_articles_v\` (\`version_slug\`);`)
  await db.run(sql`CREATE INDEX \`_articles_v_version_version_cover_idx\` ON \`_articles_v\` (\`version_cover_id\`);`)
  await db.run(sql`CREATE INDEX \`_articles_v_version_version_updated_at_idx\` ON \`_articles_v\` (\`version_updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_articles_v_version_version_created_at_idx\` ON \`_articles_v\` (\`version_created_at\`);`)
  await db.run(sql`CREATE INDEX \`_articles_v_created_at_idx\` ON \`_articles_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_articles_v_updated_at_idx\` ON \`_articles_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE TABLE \`_articles_v_locales\` (
  	\`version_title\` text NOT NULL,
  	\`version_excerpt\` text,
  	\`version_tag\` text,
  	\`version_content\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_articles_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_articles_v_locales_parent_id_locale_unique\` ON \`_articles_v_locales\` (\`_parent_id\`,\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`_articles_v_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`_articles_v\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_articles_v_rels_order_idx\` ON \`_articles_v_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`_articles_v_rels_parent_idx\` ON \`_articles_v_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_articles_v_rels_path_idx\` ON \`_articles_v_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`_articles_v_rels_users_id_idx\` ON \`_articles_v_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`albums_images\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer NOT NULL,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`albums\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`albums_images_order_idx\` ON \`albums_images\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`albums_images_parent_id_idx\` ON \`albums_images\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`albums_images_image_idx\` ON \`albums_images\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`albums_images_locales\` (
  	\`caption\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`albums_images\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`albums_images_locales_parent_id_locale_unique\` ON \`albums_images_locales\` (\`_parent_id\`,\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`albums\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`cover_id\` integer NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`cover_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`albums_cover_idx\` ON \`albums\` (\`cover_id\`);`)
  await db.run(sql`CREATE INDEX \`albums_updated_at_idx\` ON \`albums\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`albums_created_at_idx\` ON \`albums\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`albums_locales\` (
  	\`title\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`albums\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`albums_locales_parent_id_locale_unique\` ON \`albums_locales\` (\`_parent_id\`,\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`albums_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`albums\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`albums_rels_order_idx\` ON \`albums_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`albums_rels_parent_idx\` ON \`albums_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`albums_rels_path_idx\` ON \`albums_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`albums_rels_users_id_idx\` ON \`albums_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`_albums_v_version_images\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`image_id\` integer NOT NULL,
  	\`_uuid\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_albums_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_albums_v_version_images_order_idx\` ON \`_albums_v_version_images\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_albums_v_version_images_parent_id_idx\` ON \`_albums_v_version_images\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_albums_v_version_images_image_idx\` ON \`_albums_v_version_images\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_albums_v_version_images_locales\` (
  	\`caption\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_albums_v_version_images\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_albums_v_version_images_locales_parent_id_locale_unique\` ON \`_albums_v_version_images_locales\` (\`_parent_id\`,\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`_albums_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`parent_id\` integer,
  	\`version_cover_id\` integer NOT NULL,
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`albums\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_cover_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`_albums_v_parent_idx\` ON \`_albums_v\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_albums_v_version_version_cover_idx\` ON \`_albums_v\` (\`version_cover_id\`);`)
  await db.run(sql`CREATE INDEX \`_albums_v_version_version_updated_at_idx\` ON \`_albums_v\` (\`version_updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_albums_v_version_version_created_at_idx\` ON \`_albums_v\` (\`version_created_at\`);`)
  await db.run(sql`CREATE INDEX \`_albums_v_created_at_idx\` ON \`_albums_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_albums_v_updated_at_idx\` ON \`_albums_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE TABLE \`_albums_v_locales\` (
  	\`version_title\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_albums_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_albums_v_locales_parent_id_locale_unique\` ON \`_albums_v_locales\` (\`_parent_id\`,\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`_albums_v_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`_albums_v\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_albums_v_rels_order_idx\` ON \`_albums_v_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`_albums_v_rels_parent_idx\` ON \`_albums_v_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_albums_v_rels_path_idx\` ON \`_albums_v_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`_albums_v_rels_users_id_idx\` ON \`_albums_v_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`partners\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`logo_id\` integer NOT NULL,
  	\`url\` text,
  	\`order\` numeric DEFAULT 100,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`partners_logo_idx\` ON \`partners\` (\`logo_id\`);`)
  await db.run(sql`CREATE INDEX \`partners_updated_at_idx\` ON \`partners\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`partners_created_at_idx\` ON \`partners\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`partners_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`partners\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`partners_rels_order_idx\` ON \`partners_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`partners_rels_parent_idx\` ON \`partners_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`partners_rels_path_idx\` ON \`partners_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`partners_rels_users_id_idx\` ON \`partners_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`_partners_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`parent_id\` integer,
  	\`version_name\` text NOT NULL,
  	\`version_logo_id\` integer NOT NULL,
  	\`version_url\` text,
  	\`version_order\` numeric DEFAULT 100,
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`partners\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`_partners_v_parent_idx\` ON \`_partners_v\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_partners_v_version_version_logo_idx\` ON \`_partners_v\` (\`version_logo_id\`);`)
  await db.run(sql`CREATE INDEX \`_partners_v_version_version_updated_at_idx\` ON \`_partners_v\` (\`version_updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_partners_v_version_version_created_at_idx\` ON \`_partners_v\` (\`version_created_at\`);`)
  await db.run(sql`CREATE INDEX \`_partners_v_created_at_idx\` ON \`_partners_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_partners_v_updated_at_idx\` ON \`_partners_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE TABLE \`_partners_v_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`_partners_v\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_partners_v_rels_order_idx\` ON \`_partners_v_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`_partners_v_rels_parent_idx\` ON \`_partners_v_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_partners_v_rels_path_idx\` ON \`_partners_v_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`_partners_v_rels_users_id_idx\` ON \`_partners_v_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`testimonials\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`author\` text NOT NULL,
  	\`platform\` text,
  	\`source_url\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`testimonials_updated_at_idx\` ON \`testimonials\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`testimonials_created_at_idx\` ON \`testimonials\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`testimonials_locales\` (
  	\`text\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`testimonials\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`testimonials_locales_parent_id_locale_unique\` ON \`testimonials_locales\` (\`_parent_id\`,\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`testimonials_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`testimonials\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`testimonials_rels_order_idx\` ON \`testimonials_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`testimonials_rels_parent_idx\` ON \`testimonials_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`testimonials_rels_path_idx\` ON \`testimonials_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`testimonials_rels_users_id_idx\` ON \`testimonials_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`_testimonials_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`parent_id\` integer,
  	\`version_author\` text NOT NULL,
  	\`version_platform\` text,
  	\`version_source_url\` text,
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`testimonials\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`_testimonials_v_parent_idx\` ON \`_testimonials_v\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_testimonials_v_version_version_updated_at_idx\` ON \`_testimonials_v\` (\`version_updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_testimonials_v_version_version_created_at_idx\` ON \`_testimonials_v\` (\`version_created_at\`);`)
  await db.run(sql`CREATE INDEX \`_testimonials_v_created_at_idx\` ON \`_testimonials_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_testimonials_v_updated_at_idx\` ON \`_testimonials_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE TABLE \`_testimonials_v_locales\` (
  	\`version_text\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_testimonials_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_testimonials_v_locales_parent_id_locale_unique\` ON \`_testimonials_v_locales\` (\`_parent_id\`,\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`_testimonials_v_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`_testimonials_v\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_testimonials_v_rels_order_idx\` ON \`_testimonials_v_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`_testimonials_v_rels_parent_idx\` ON \`_testimonials_v_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_testimonials_v_rels_path_idx\` ON \`_testimonials_v_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`_testimonials_v_rels_users_id_idx\` ON \`_testimonials_v_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`redirects\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`from\` text NOT NULL,
  	\`to\` text NOT NULL,
  	\`type\` text DEFAULT '301',
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`redirects_from_idx\` ON \`redirects\` (\`from\`);`)
  await db.run(sql`CREATE INDEX \`redirects_updated_at_idx\` ON \`redirects\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`redirects_created_at_idx\` ON \`redirects\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`redirects_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`redirects\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`redirects_rels_order_idx\` ON \`redirects_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`redirects_rels_parent_idx\` ON \`redirects_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`redirects_rels_path_idx\` ON \`redirects_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`redirects_rels_users_id_idx\` ON \`redirects_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`_redirects_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`parent_id\` integer,
  	\`version_from\` text NOT NULL,
  	\`version_to\` text NOT NULL,
  	\`version_type\` text DEFAULT '301',
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`redirects\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`_redirects_v_parent_idx\` ON \`_redirects_v\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_redirects_v_version_version_from_idx\` ON \`_redirects_v\` (\`version_from\`);`)
  await db.run(sql`CREATE INDEX \`_redirects_v_version_version_updated_at_idx\` ON \`_redirects_v\` (\`version_updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_redirects_v_version_version_created_at_idx\` ON \`_redirects_v\` (\`version_created_at\`);`)
  await db.run(sql`CREATE INDEX \`_redirects_v_created_at_idx\` ON \`_redirects_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_redirects_v_updated_at_idx\` ON \`_redirects_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE TABLE \`_redirects_v_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`_redirects_v\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_redirects_v_rels_order_idx\` ON \`_redirects_v_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`_redirects_v_rels_parent_idx\` ON \`_redirects_v_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_redirects_v_rels_path_idx\` ON \`_redirects_v_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`_redirects_v_rels_users_id_idx\` ON \`_redirects_v_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`payload_kv\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`key\` text NOT NULL,
  	\`data\` text NOT NULL
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`payload_kv_key_idx\` ON \`payload_kv\` (\`key\`);`)
  await db.run(sql`CREATE TABLE \`payload_llm_instructions\` (
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`entity_slug\` text NOT NULL,
  	\`entity_type\` text NOT NULL,
  	\`additional_instructions\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_llm_instructions_entity_slug_idx\` ON \`payload_llm_instructions\` (\`entity_slug\`);`)
  await db.run(sql`CREATE INDEX \`payload_llm_instructions_updated_at_idx\` ON \`payload_llm_instructions\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_llm_instructions_created_at_idx\` ON \`payload_llm_instructions\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_llm_instructions_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` text NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_llm_instructions\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_llm_instructions_rels_order_idx\` ON \`payload_llm_instructions_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_llm_instructions_rels_parent_idx\` ON \`payload_llm_instructions_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_llm_instructions_rels_path_idx\` ON \`payload_llm_instructions_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_llm_instructions_rels_users_id_idx\` ON \`payload_llm_instructions_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`site_settings_social\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`platform\` text NOT NULL,
  	\`url\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`site_settings\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`site_settings_social_order_idx\` ON \`site_settings_social\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_social_parent_id_idx\` ON \`site_settings_social\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`site_settings_offices\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`site_settings\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`site_settings_offices_order_idx\` ON \`site_settings_offices\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_offices_parent_id_idx\` ON \`site_settings_offices\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`site_settings_offices_locales\` (
  	\`country\` text NOT NULL,
  	\`city\` text NOT NULL,
  	\`address\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`site_settings_offices\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`site_settings_offices_locales_parent_id_locale_unique\` ON \`site_settings_offices_locales\` (\`_parent_id\`,\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`site_settings\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`whatsapp_traveller\` text NOT NULL,
  	\`whatsapp_agency\` text NOT NULL,
  	\`whatsapp_second\` text,
  	\`meta_pixel_id\` text,
  	\`ga4_id\` text,
  	\`prices_enabled\` integer DEFAULT false,
  	\`updated_at\` text,
  	\`created_at\` text
  );
  `)
  await db.run(sql`CREATE TABLE \`site_settings_locales\` (
  	\`brand_name\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`site_settings\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`site_settings_locales_parent_id_locale_unique\` ON \`site_settings_locales\` (\`_parent_id\`,\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`site_settings_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`site_settings\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`site_settings_rels_order_idx\` ON \`site_settings_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_rels_parent_idx\` ON \`site_settings_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_rels_path_idx\` ON \`site_settings_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`site_settings_rels_users_id_idx\` ON \`site_settings_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`_site_settings_v_version_social\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`platform\` text NOT NULL,
  	\`url\` text NOT NULL,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_site_settings_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_site_settings_v_version_social_order_idx\` ON \`_site_settings_v_version_social\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_site_settings_v_version_social_parent_id_idx\` ON \`_site_settings_v_version_social\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_site_settings_v_version_offices\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_site_settings_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_site_settings_v_version_offices_order_idx\` ON \`_site_settings_v_version_offices\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_site_settings_v_version_offices_parent_id_idx\` ON \`_site_settings_v_version_offices\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_site_settings_v_version_offices_locales\` (
  	\`country\` text NOT NULL,
  	\`city\` text NOT NULL,
  	\`address\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_site_settings_v_version_offices\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_site_settings_v_version_offices_locales_parent_id_locale_un\` ON \`_site_settings_v_version_offices_locales\` (\`_parent_id\`,\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`_site_settings_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`version_whatsapp_traveller\` text NOT NULL,
  	\`version_whatsapp_agency\` text NOT NULL,
  	\`version_whatsapp_second\` text,
  	\`version_meta_pixel_id\` text,
  	\`version_ga4_id\` text,
  	\`version_prices_enabled\` integer DEFAULT false,
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`_site_settings_v_created_at_idx\` ON \`_site_settings_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_site_settings_v_updated_at_idx\` ON \`_site_settings_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE TABLE \`_site_settings_v_locales\` (
  	\`version_brand_name\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_site_settings_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_site_settings_v_locales_parent_id_locale_unique\` ON \`_site_settings_v_locales\` (\`_parent_id\`,\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`_site_settings_v_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`_site_settings_v\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_site_settings_v_rels_order_idx\` ON \`_site_settings_v_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`_site_settings_v_rels_parent_idx\` ON \`_site_settings_v_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_site_settings_v_rels_path_idx\` ON \`_site_settings_v_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`_site_settings_v_rels_users_id_idx\` ON \`_site_settings_v_rels\` (\`users_id\`);`)
  await db.run(sql`ALTER TABLE \`users_sessions\` ADD \`refresh_count\` numeric;`)
  await db.run(sql`ALTER TABLE \`users_sessions\` ADD \`refreshed_at\` text;`)
  await db.run(sql`ALTER TABLE \`users_sessions\` ADD \`label\` text;`)
  await db.run(sql`ALTER TABLE \`users_sessions\` ADD \`type\` text;`)
  await db.run(sql`ALTER TABLE \`users_sessions\` ADD \`metadata\` text;`)
  await db.run(sql`ALTER TABLE \`users\` ADD \`reset_password_requested_at\` text;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`prefix\` text DEFAULT '';`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`_objectkey\` text;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`_stored\` integer;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`_transforms\` text;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`original_filename\` text;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`original_url\` text;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`original_mime_type\` text;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`original_filesize\` numeric;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`original_width\` numeric;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`original_height\` numeric;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`original_prefix\` text;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`original__objectkey\` text;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`original__stored\` integer;`)
  await db.run(sql`CREATE INDEX \`media_original_original_filename_idx\` ON \`media\` (\`original_filename\`);`)
  await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD \`countries_id\` integer REFERENCES countries(id);`)
  await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD \`cities_id\` integer REFERENCES cities(id);`)
  await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD \`hotels_id\` integer REFERENCES hotels(id);`)
  await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD \`programs_id\` integer REFERENCES programs(id);`)
  await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD \`articles_id\` integer REFERENCES articles(id);`)
  await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD \`albums_id\` integer REFERENCES albums(id);`)
  await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD \`partners_id\` integer REFERENCES partners(id);`)
  await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD \`testimonials_id\` integer REFERENCES testimonials(id);`)
  await db.run(sql`ALTER TABLE \`payload_locked_documents_rels\` ADD \`redirects_id\` integer REFERENCES redirects(id);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_countries_id_idx\` ON \`payload_locked_documents_rels\` (\`countries_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_cities_id_idx\` ON \`payload_locked_documents_rels\` (\`cities_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_hotels_id_idx\` ON \`payload_locked_documents_rels\` (\`hotels_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_programs_id_idx\` ON \`payload_locked_documents_rels\` (\`programs_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_articles_id_idx\` ON \`payload_locked_documents_rels\` (\`articles_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_albums_id_idx\` ON \`payload_locked_documents_rels\` (\`albums_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_partners_id_idx\` ON \`payload_locked_documents_rels\` (\`partners_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_testimonials_id_idx\` ON \`payload_locked_documents_rels\` (\`testimonials_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_redirects_id_idx\` ON \`payload_locked_documents_rels\` (\`redirects_id\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`users_rels\`;`)
  await db.run(sql`DROP TABLE \`media_rels\`;`)
  await db.run(sql`DROP TABLE \`_media_v\`;`)
  await db.run(sql`DROP TABLE \`_media_v_rels\`;`)
  await db.run(sql`DROP TABLE \`countries\`;`)
  await db.run(sql`DROP TABLE \`countries_locales\`;`)
  await db.run(sql`DROP TABLE \`countries_rels\`;`)
  await db.run(sql`DROP TABLE \`_countries_v\`;`)
  await db.run(sql`DROP TABLE \`_countries_v_locales\`;`)
  await db.run(sql`DROP TABLE \`_countries_v_rels\`;`)
  await db.run(sql`DROP TABLE \`cities\`;`)
  await db.run(sql`DROP TABLE \`cities_locales\`;`)
  await db.run(sql`DROP TABLE \`cities_rels\`;`)
  await db.run(sql`DROP TABLE \`_cities_v\`;`)
  await db.run(sql`DROP TABLE \`_cities_v_locales\`;`)
  await db.run(sql`DROP TABLE \`_cities_v_rels\`;`)
  await db.run(sql`DROP TABLE \`hotels_amenities\`;`)
  await db.run(sql`DROP TABLE \`hotels_amenities_locales\`;`)
  await db.run(sql`DROP TABLE \`hotels\`;`)
  await db.run(sql`DROP TABLE \`hotels_locales\`;`)
  await db.run(sql`DROP TABLE \`hotels_rels\`;`)
  await db.run(sql`DROP TABLE \`_hotels_v_version_amenities\`;`)
  await db.run(sql`DROP TABLE \`_hotels_v_version_amenities_locales\`;`)
  await db.run(sql`DROP TABLE \`_hotels_v\`;`)
  await db.run(sql`DROP TABLE \`_hotels_v_locales\`;`)
  await db.run(sql`DROP TABLE \`_hotels_v_rels\`;`)
  await db.run(sql`DROP TABLE \`programs_gallery\`;`)
  await db.run(sql`DROP TABLE \`programs_days\`;`)
  await db.run(sql`DROP TABLE \`programs_days_locales\`;`)
  await db.run(sql`DROP TABLE \`programs_included\`;`)
  await db.run(sql`DROP TABLE \`programs_included_locales\`;`)
  await db.run(sql`DROP TABLE \`programs_excluded\`;`)
  await db.run(sql`DROP TABLE \`programs_excluded_locales\`;`)
  await db.run(sql`DROP TABLE \`programs\`;`)
  await db.run(sql`DROP TABLE \`programs_locales\`;`)
  await db.run(sql`DROP TABLE \`programs_rels\`;`)
  await db.run(sql`DROP TABLE \`_programs_v_version_gallery\`;`)
  await db.run(sql`DROP TABLE \`_programs_v_version_days\`;`)
  await db.run(sql`DROP TABLE \`_programs_v_version_days_locales\`;`)
  await db.run(sql`DROP TABLE \`_programs_v_version_included\`;`)
  await db.run(sql`DROP TABLE \`_programs_v_version_included_locales\`;`)
  await db.run(sql`DROP TABLE \`_programs_v_version_excluded\`;`)
  await db.run(sql`DROP TABLE \`_programs_v_version_excluded_locales\`;`)
  await db.run(sql`DROP TABLE \`_programs_v\`;`)
  await db.run(sql`DROP TABLE \`_programs_v_locales\`;`)
  await db.run(sql`DROP TABLE \`_programs_v_rels\`;`)
  await db.run(sql`DROP TABLE \`articles\`;`)
  await db.run(sql`DROP TABLE \`articles_locales\`;`)
  await db.run(sql`DROP TABLE \`articles_rels\`;`)
  await db.run(sql`DROP TABLE \`_articles_v\`;`)
  await db.run(sql`DROP TABLE \`_articles_v_locales\`;`)
  await db.run(sql`DROP TABLE \`_articles_v_rels\`;`)
  await db.run(sql`DROP TABLE \`albums_images\`;`)
  await db.run(sql`DROP TABLE \`albums_images_locales\`;`)
  await db.run(sql`DROP TABLE \`albums\`;`)
  await db.run(sql`DROP TABLE \`albums_locales\`;`)
  await db.run(sql`DROP TABLE \`albums_rels\`;`)
  await db.run(sql`DROP TABLE \`_albums_v_version_images\`;`)
  await db.run(sql`DROP TABLE \`_albums_v_version_images_locales\`;`)
  await db.run(sql`DROP TABLE \`_albums_v\`;`)
  await db.run(sql`DROP TABLE \`_albums_v_locales\`;`)
  await db.run(sql`DROP TABLE \`_albums_v_rels\`;`)
  await db.run(sql`DROP TABLE \`partners\`;`)
  await db.run(sql`DROP TABLE \`partners_rels\`;`)
  await db.run(sql`DROP TABLE \`_partners_v\`;`)
  await db.run(sql`DROP TABLE \`_partners_v_rels\`;`)
  await db.run(sql`DROP TABLE \`testimonials\`;`)
  await db.run(sql`DROP TABLE \`testimonials_locales\`;`)
  await db.run(sql`DROP TABLE \`testimonials_rels\`;`)
  await db.run(sql`DROP TABLE \`_testimonials_v\`;`)
  await db.run(sql`DROP TABLE \`_testimonials_v_locales\`;`)
  await db.run(sql`DROP TABLE \`_testimonials_v_rels\`;`)
  await db.run(sql`DROP TABLE \`redirects\`;`)
  await db.run(sql`DROP TABLE \`redirects_rels\`;`)
  await db.run(sql`DROP TABLE \`_redirects_v\`;`)
  await db.run(sql`DROP TABLE \`_redirects_v_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_kv\`;`)
  await db.run(sql`DROP TABLE \`payload_llm_instructions\`;`)
  await db.run(sql`DROP TABLE \`payload_llm_instructions_rels\`;`)
  await db.run(sql`DROP TABLE \`site_settings_social\`;`)
  await db.run(sql`DROP TABLE \`site_settings_offices\`;`)
  await db.run(sql`DROP TABLE \`site_settings_offices_locales\`;`)
  await db.run(sql`DROP TABLE \`site_settings\`;`)
  await db.run(sql`DROP TABLE \`site_settings_locales\`;`)
  await db.run(sql`DROP TABLE \`site_settings_rels\`;`)
  await db.run(sql`DROP TABLE \`_site_settings_v_version_social\`;`)
  await db.run(sql`DROP TABLE \`_site_settings_v_version_offices\`;`)
  await db.run(sql`DROP TABLE \`_site_settings_v_version_offices_locales\`;`)
  await db.run(sql`DROP TABLE \`_site_settings_v\`;`)
  await db.run(sql`DROP TABLE \`_site_settings_v_locales\`;`)
  await db.run(sql`DROP TABLE \`_site_settings_v_rels\`;`)
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_payload_locked_documents_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	\`media_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_locked_documents\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`media_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_payload_locked_documents_rels\`("id", "order", "parent_id", "path", "users_id", "media_id") SELECT "id", "order", "parent_id", "path", "users_id", "media_id" FROM \`payload_locked_documents_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents_rels\`;`)
  await db.run(sql`ALTER TABLE \`__new_payload_locked_documents_rels\` RENAME TO \`payload_locked_documents_rels\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_order_idx\` ON \`payload_locked_documents_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_parent_idx\` ON \`payload_locked_documents_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_path_idx\` ON \`payload_locked_documents_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_users_id_idx\` ON \`payload_locked_documents_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_media_id_idx\` ON \`payload_locked_documents_rels\` (\`media_id\`);`)
  await db.run(sql`DROP INDEX \`media_original_original_filename_idx\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`prefix\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`_objectkey\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`_stored\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`_transforms\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`original_filename\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`original_url\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`original_mime_type\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`original_filesize\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`original_width\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`original_height\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`original_prefix\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`original__objectkey\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`original__stored\`;`)
  await db.run(sql`ALTER TABLE \`users_sessions\` DROP COLUMN \`refresh_count\`;`)
  await db.run(sql`ALTER TABLE \`users_sessions\` DROP COLUMN \`refreshed_at\`;`)
  await db.run(sql`ALTER TABLE \`users_sessions\` DROP COLUMN \`label\`;`)
  await db.run(sql`ALTER TABLE \`users_sessions\` DROP COLUMN \`type\`;`)
  await db.run(sql`ALTER TABLE \`users_sessions\` DROP COLUMN \`metadata\`;`)
  await db.run(sql`ALTER TABLE \`users\` DROP COLUMN \`reset_password_requested_at\`;`)
}
