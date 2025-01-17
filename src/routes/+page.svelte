<script lang="ts">
  import SearchFilterView from "$lib/components/dashboard/filter-view/SearchFilterView.svelte";
  import PaginationView from "$lib/components/dashboard/pagination-view/PaginationView.svelte";
  import TableView from "$lib/components/dashboard/table-view/TableView.svelte";
  import { fade, scale } from "svelte/transition";
  import type { PageData } from "./$types.js";

  type Props = {
    data: PageData;
  };
  let { data }: Props = $props();
</script>

<div>
  <div>
    <h1 class="text-xl font-semibold font-mono">Dashboard</h1>
    <p class="text-muted-foreground">
      pagination, sorting, filters, debounced search
    </p>
  </div>
  <SearchFilterView />
  {#await data.users}
    <div class="w-full mt-4" in:fade>
      <div class="grid grid-cols-5">
        {#each { length: 5 }}
          <div
            class="border h-9 dark:border-zinc-700 border-gray-300 first:rounded-tl-lg last:rounded-tr-lg"
          ></div>
        {/each}
      </div>
      <div class="grid grid-cols-5">
        {#each { length: 5 }, i}
          {#each { length: 8 }, j}
            <div
              class={[
                "border border-gray-300 dark:border-zinc-700 p-3 ",
                i === 4 && j === 3 && "rounded-bl-lg",
                i === 4 && j === 7 && "rounded-br-lg",
              ]}
            >
              <div
                class="h-5 bg-gray-300 dark:bg-zinc-800 rounded animate-pulse"
              ></div>
            </div>
          {/each}
        {/each}
      </div>
    </div>
  {:then users}
    <TableView users={users.users} />
    <PaginationView count={users.total} />
  {/await}
</div>
