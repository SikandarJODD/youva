import { pgTable, serial, text, pgEnum } from 'drizzle-orm/pg-core';
import { type InferSelectModel } from 'drizzle-orm'

export let status = pgEnum('status', ['active', 'inactive', 'sage', 'god']);
export const all_users = pgTable('all_users', {
	id: serial('id').primaryKey(),
	firstName: text('first_name'),
	lastName: text('last_name'),
	email: text('email'),
	company: text('company'),
	status: status()
});

export type DrizzUser = InferSelectModel<typeof all_users>;
