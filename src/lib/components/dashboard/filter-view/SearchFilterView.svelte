<script>
  import { page } from "$app/state";
  import FilterStatus from "$lib/components/drizz/filter-status/FilterStatus.svelte";
  import FilterCompanyTitle from "./FilterCompanyTitle.svelte";
  import RowsPerPage from "./RowsPerPage.svelte";
  import SearchInput from "./SearchInput.svelte";
  let isMainPage = $derived.by(() => {
    return page.url.pathname.split("/")[1] === "";
  });
</script>

<div
  class="mt-2 flex justify-between flex-col md:flex-row space-y-2 md:space-y-0"
>
  <div class="flex md:space-x-2 flex-col md:flex-row space-y-2 md:space-y-0">
    <SearchInput />
    {#if isMainPage}
      <FilterCompanyTitle />
    {:else}
      <FilterStatus />
    {/if}
  </div>
  <div>
    <RowsPerPage />
  </div>
</div>
