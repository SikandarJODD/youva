<script>
  import FilterCompanyTitle from "./FilterCompanyTitle.svelte";
  import RowsPerPage from "./RowsPerPage.svelte";
  import SearchInput from "./SearchInput.svelte";
</script>

<div class="mt-4 flex justify-between flex-col md:flex-row space-y-2 md:space-y-0">
  <div class="flex md:space-x-2 flex-col md:flex-row space-y-2 md:space-y-0">
    <SearchInput />
    <FilterCompanyTitle />
  </div>
  <div>
    <RowsPerPage />
  </div>
</div>
