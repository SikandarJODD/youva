import { db } from "$lib/server/db";
import { all_users } from "$lib/server/db/schema";
import type { PageServerLoad } from "../$types";

async function getTotalUsers() {
  return db.$count(all_users);
}
async function getUsers(limit: number, skip: number) {
  return db.select().from(all_users).limit(limit).offset(skip);
}

export const load: PageServerLoad = async ({ url, setHeaders }) => {

  // offset = skip
  let limit = Number(url.searchParams.get("limit")) || 10;
  let skip = Number(url.searchParams.get("skip")) || 0;
  let res = await getUsers(limit, skip);
  let total_count = await getTotalUsers();

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