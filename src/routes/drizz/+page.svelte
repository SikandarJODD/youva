<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import PaginationView from "$lib/components/dashboard/pagination-view/PaginationView.svelte";
  import DrizzTableView from "$lib/components/drizz/table-view/DrizzTableView.svelte";
  import type { PageData } from "./$types";

  let {
    data,
  }: {
    data: PageData;
  } = $props();

  let updatePageQuery = (index: number) => {
    let url = new URL(page.url);
    url.searchParams.set("limit", "10");
    let lim = index === 1 ? 0 : 10 * (index - 1);
    url.searchParams.set("skip", lim.toString());
    goto(url.toString());
  };
</script>

<DrizzTableView users={data.users} />
<PaginationView count={data.count} />
