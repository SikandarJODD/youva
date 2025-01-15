<script>
  import SearchFilterView from "$lib/components/dashboard/filter-view/SearchFilterView.svelte";
  import PaginationView from "$lib/components/dashboard/pagination-view/PaginationView.svelte";
  import TableView from "$lib/components/dashboard/table-view/TableView.svelte";
</script>

<div>
  <div>
    <h1 class="font-montserrat text-lg font-semibold">Youva Dashboard</h1>
    <p class="text-muted-foreground">
      pagination, sorting, filters, debounced search + superforms
    </p>
  </div>
  <SearchFilterView />
  <TableView />
  <PaginationView />
</div>
