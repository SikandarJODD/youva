import { drizzle } from 'drizzle-orm/node-postgres';
import { DATABASE_URL } from '$env/static/private';
if (!DATABASE_URL) throw new Error('DATABASE_URL is not set');
export const db = drizzle(DATABASE_URL);



