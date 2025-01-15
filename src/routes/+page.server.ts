import type { UsersProfile } from "$lib/types/users";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ url, fetch }) => {
  let filter = url.searchParams.get('filter') || '';
  let filter_value = url.searchParams.get('value') || '';

  let limit = Number(url.searchParams.get('limit')) || 10;
  let skip = Number(url.searchParams.get('skip')) || 0;
  let searchQ = url.searchParams.get('q') || '';
  let sortOrder = url.searchParams.get('order') || 'asc';
  let sortBy = url.searchParams.get('sortBy') || '';

  async function getUsers() {
    let fetch_url = `https://dummyjson.com/users/search?q=${searchQ}&limit=${limit}&skip=${skip}&sortBy=${sortBy}&order=${sortOrder}`;
    if (filter && filter_value) {
      // consider filter value = Sales+Manager
      // convert it to Sales Manager
      filter_value = filter_value.replace(' ', '%20');
      fetch_url = `https://dummyjson.com/users/filter?key=${filter}&value=${filter_value}&limit=${limit}&skip=${skip}`;
    }

    let response = await fetch(fetch_url);
    let data = await response.json();

    return data;
  }

  return {
    users: await getUsers() as UsersProfile
  }
};