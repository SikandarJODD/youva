// you can generate types for any api using thunder client
import type { UsersProfile } from "$lib/types/users";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ url, fetch }) => {

  // Filter : as api url is different for filter
  let filter = url.searchParams.get('filter') || '';
  let filter_value = url.searchParams.get('value') || '';

  // Limit and Skip
  let limit = Number(url.searchParams.get('limit')) || 10;
  let skip = Number(url.searchParams.get('skip')) || 0;

  // Search & Sort
  let searchQ = url.searchParams.get('q') || '';
  let sortOrder = url.searchParams.get('order') || 'asc';
  let sortBy = url.searchParams.get('sortBy') || '';

  // Fetch URL
  let fetch_url = `https://dummyjson.com/users/search?q=${searchQ}&limit=${limit}&skip=${skip}&sortBy=${sortBy}&order=${sortOrder}&select=id,firstName,lastName,email,company`;


  if (filter && filter_value) {
    // consider filter value = Sales Manager
    // convert it to Sales%20Manager
    filter_value = filter_value.replace(' ', '%20');
    fetch_url = `https://dummyjson.com/users/filter?key=${filter}&value=${filter_value}&limit=${limit}&skip=${skip}&select=id,firstName,lastName,email,company`;
  }


  // Now below response is streamed to the client
  let response = await fetch(fetch_url);

  return {
    users: await response.json()
  }
};