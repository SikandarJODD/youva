<script lang="ts">
  import SearchFilterView from "$lib/components/dashboard/filter-view/SearchFilterView.svelte";
  import PaginationView from "$lib/components/dashboard/pagination-view/PaginationView.svelte";
  import TableView from "$lib/components/dashboard/table-view/TableView.svelte";
  import type { PageData } from "./$types.js";

  type Props = {
    data: PageData;
  };
  let { data }: Props = $props();
</script>

<div>
  <h1 class="text-xl font-semibold">Svelte Pagination Example</h1>
  <p class="text-muted-foreground">
    pagination, sorting, filters, debounced search
  </p>
</div>
<SearchFilterView />
<TableView users={data.users.users} />
<PaginationView count={data.users.total} />
