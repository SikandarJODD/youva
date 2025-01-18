import { db } from "$lib/server/db";
import { all_users } from "$lib/server/db/schema";
import { asc, desc, eq, ilike, or } from "drizzle-orm";
import type { PageServerLoad } from "./$types";

type Status = 'active' | 'inactive' | 'sage' | 'god';
type SortBy = 'id' | 'firstName' | 'lastName' | 'email' | 'status';

async function getTotalUsers() {
  return db.$count(all_users);
}

async function getTotalStatusUsers(status: Status) {
  return db.$count(all_users, eq(all_users.status, status));
}

async function getTotalSearchUsers(search: string) {
  return db.$count(all_users, eq(all_users.firstName, search));
}

async function getStatusUsers(limit: number, skip: number, status: Status) {
  return db.select().from(all_users).where(eq(all_users.status, status)).limit(limit).offset(skip);
}

async function getUsers(limit: number, skip: number, sortBy: SortBy, sortOrder: string) {
  if (sortOrder === 'asc') {
    return db.select().from(all_users).orderBy(asc(all_users[sortBy])).limit(limit).offset(skip);
  }
  else {
    return db.select().from(all_users).orderBy(desc(all_users[sortBy])).limit(limit).offset(skip);
  }
}

async function searchUsers(limit: number, skip: number, search: string) {
  return db.select().from(all_users).where(or(ilike(all_users.firstName, `%${search}%`), ilike(all_users.lastName, `%${search}%`))).limit(limit).offset(skip);
}




export const load: PageServerLoad = async ({ url, setHeaders }) => {

  // offset = skip
  let limit = Number(url.searchParams.get("limit")) || 10;
  let skip = Number(url.searchParams.get("skip")) || 0;
  let status = url.searchParams.get("status") || '';
  let search = url.searchParams.get("q") || '';
  let sortBy = url.searchParams.get("sortBy") || 'id';
  let sortOrder = url.searchParams.get("order") || 'asc';

  let res;
  let total_count = 0;
  if (status === 'active' || status === 'inactive' || status === 'sage' || status === 'god') {
    res = await getStatusUsers(limit, skip, status);
    total_count = await getTotalStatusUsers(status);
  }
  else if (search) {
    res = await searchUsers(limit, skip, search);
    total_count = await getTotalSearchUsers(search);
  }
  else {
    res = await getUsers(limit, skip, sortBy as SortBy, sortOrder);
    total_count = await getTotalUsers();
  }

  // Cache Data for 60 seconds checkout network tab in console
  // you can see new req may take 400-600ms but after that it will be 0-5ms
  setHeaders({
    'cache-control': 'public, max-age=60',
  })
  return {
    users: res,
    count: total_count
  }
};