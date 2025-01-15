import type { UsersProfile } from "$lib/types/users";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ url, fetch }) => {
  let limit = Number(url.searchParams.get('limit')) || 10;
  let skip = Number(url.searchParams.get('skip')) || 0;

  async function getUsers() {
    let response = await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`);
    return await response.json();
  }

  return {
    users: await getUsers() as UsersProfile
  }
};