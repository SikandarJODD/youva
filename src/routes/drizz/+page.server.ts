import { db } from "$lib/server/db";
import { all_users } from "$lib/server/db/schema";
import { eq } from "drizzle-orm";
import type { PageServerLoad } from "../$types";

type Status = 'active' | 'inactive' | 'sage' | 'god';
async function getTotalUsers() {
  return db.$count(all_users);
}
async function getTotalStatusUsers(status: Status) {
  return db.$count(all_users, eq(all_users.status, status));
}
async function getStatusUsers(limit: number, skip: number, status: Status) {
  return db.select().from(all_users).where(eq(all_users.status, status)).limit(limit).offset(skip);
}
async function getUsers(limit: number, skip: number) {
  return db.select().from(all_users).limit(limit).offset(skip);
}

export const load: PageServerLoad = async ({ url, setHeaders }) => {

  // offset = skip
  let limit = Number(url.searchParams.get("limit")) || 10;
  let skip = Number(url.searchParams.get("skip")) || 0;
  let status = url.searchParams.get("status") || '';
  let res;
  let total_count = 0;
  if (status === 'active' || status === 'inactive' || status === 'sage' || status === 'god') {
    res = await getStatusUsers(limit, skip, status);
    total_count = await getTotalStatusUsers(status);
  }
  else {
    res = await getUsers(limit, skip);
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