
import { error, type Actions } from "@sveltejs/kit";
import { PUBLIC_API_URL } from "$env/static/public";
import type { PageServerLoad } from "./$types";
import { goto } from "$app/navigation";

async function getUsers(limit: number = 10, skip: number = 0, search: string = "") {
  if (limit > 100) {
    throw error(400, "Limit should be less than 100");
  }
  let res = await fetch(`${PUBLIC_API_URL}/search?q=${search}&limit=${limit}&skip=${skip}`);
  return await res.json();
}

export const load: PageServerLoad = async ({ url, fetch }) => {

  let limit = Number(url.searchParams.get("limit")) || 10;
  let skip = Number(url.searchParams.get("skip")) || 0;
  let search = url.searchParams.get("q") || "";
  let res = await getUsers(limit, skip, search);
  return {
    users: await res,
  }
};

export const actions: Actions = {
  default: async ({ fetch, url, request }) => {
    let formData = await request.formData();
    let searchQ = String(formData.get("search")) || "";
    let res = await getUsers(10, 0, searchQ);
    return {
      users: await res,
    }
  }
};