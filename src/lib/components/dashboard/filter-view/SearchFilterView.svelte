<script>
  import FilterCompanyTitle from "./FilterCompanyTitle.svelte";
  import RowsPerPage from "./RowsPerPage.svelte";
  import SearchInput from "./SearchInput.svelte";
</script>

<div class="mt-4 flex justify-between">
  <div class="flex space-x-2 ">
    <SearchInput />
    <FilterCompanyTitle />
  </div>
  <div>
    <RowsPerPage />
  </div>
</div>
