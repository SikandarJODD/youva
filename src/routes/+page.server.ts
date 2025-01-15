import type { UsersProfile } from "$lib/types/users";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ url, fetch }) => {
  let limit = Number(url.searchParams.get('limit')) || 10;
  let skip = Number(url.searchParams.get('skip')) || 0;
  let searchQ = url.searchParams.get('q') || '';
  let sortOrder = url.searchParams.get('order') || 'asc';
  let sortBy = url.searchParams.get('sortBy') || '';

  async function getUsers() {
    let response = await fetch(`https://dummyjson.com/users/search?q=${searchQ}&limit=${limit}&skip=${skip}&sortBy=${sortBy}&order=${sortOrder}`);
    let data = await response.json();
    return data;
  }

  return {
    users: await getUsers() as UsersProfile
  }
};