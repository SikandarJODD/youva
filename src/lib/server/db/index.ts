import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { DATABASE_URL } from '$env/static/private';
if (!DATABASE_URL) throw new Error('DATABASE_URL is not set');
let client = postgres(DATABASE_URL)
export let db = drizzle({ client });



