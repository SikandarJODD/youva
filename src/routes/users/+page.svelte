<script lang="ts">
  import { enhance } from "$app/forms";
  import { goto, invalidateAll } from "$app/navigation";
  import { page } from "$app/state";
  import { og } from "$lib/index.svelte.js";
  import type { PageData } from "./$types.js";

  type Props = {
    data: PageData;
  };
  let { data }: Props = $props();
  $effect(() => {
    og.data = data.users;
  });

  let pageSize = $state(Number(page.url.searchParams.get("limit")) || 10);
  let totalUsers = $derived(data.users.total);
  let totalPages = $derived(Math.ceil(totalUsers / pageSize));
  let currentPage = $derived.by(() => {
    let skip = Number(page.url.searchParams.get("skip")) || 0;
    return skip ? Math.floor(skip / pageSize) : 0;
  });
  let all_users = $derived(data.users.users);
  let searchText = $state(page.url.searchParams.get("q") || "");
  let updateSeachQuery = (e: Event) => {
    let url = new URL(page.url);
    url.searchParams.set("q", searchText);
    url.searchParams.delete("skip");
    url.searchParams.delete("limit");
    url.searchParams.set("skip", "0");
    url.searchParams.set("limit", pageSize.toString());
    goto(url.toString());
  };
</script>

<div class="p-10">
  <h4>All Users</h4>
  <div
    class="flex border px-6 bg-muted py-2 w-fit space-x-3 border-dashed my-2 border-muted-foreground"
  >
    <p>Total Users: {totalUsers}</p>
    <p>Current Page : {currentPage + 1}</p>
  </div>
  <div class="my-2">
    <!-- <form
      method="post"
      use:enhance={() => {
        return async ({ result, update }) => {
          if (result.type === "success") {
            og.data = result.data.users;
          }
        };
      }}
    > -->
    <input
      type="text"
      placeholder="Search by name"
      class="border border-muted-foreground p-2"
      name="search"
      bind:value={searchText}
      oninput={updateSeachQuery}
      autofocus
    />
    <!-- </form> -->
  </div>
  <div>
    {#each og.data.users as user, i}
      <div>
        <p>
          {currentPage === 0 ? i + 1 : pageSize * currentPage + i + 1}. {user.firstName}
          {user.lastName}
        </p>
      </div>
    {/each}
  </div>
  <div class="space-x-3 mt-3">
    {#each { length: totalPages }, index}
      <a
        class="{currentPage === index ? 'text-green-400' : ''} "
        href="/users?q={searchText}&limit={pageSize}&skip={pageSize * index}"
        >{index + 1}</a
      >
    {/each}
  </div>
</div>
