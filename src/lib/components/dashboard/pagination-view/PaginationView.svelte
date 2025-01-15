<script lang="ts">
  import { MediaQuery } from "svelte/reactivity";
  import * as Pagination from "$lib/components/ui/pagination/index.js";
  import { page } from "$app/state";
  import { goto } from "$app/navigation";

  const isDesktop = new MediaQuery("(min-width: 768px)");
  let { count = 100 } = $props();

  let siblingCount = $derived(isDesktop.current ? 1 : 0);

  let perPage = $derived.by(() => {
    let lim = Number(page.url.searchParams.get("limit")) || 10;
    return isDesktop.current ? lim : 4;
  });

  // Limit and Skip
  let limit = $derived(Number(page.url.searchParams.get("limit")) || 10);
  let skip = $derived(Number(page.url.searchParams.get("skip")) || 0);

  let nextPage = () => {
    let url = new URL(page.url);
    url.searchParams.set("skip", String(skip + limit));
    url.searchParams.set("limit", String(limit));
    goto(url);
  };

  let prevPage = () => {
    let url = new URL(page.url);
    url.searchParams.set("skip", String(skip - limit));
    url.searchParams.set("limit", String(limit));
    goto(url);
  };

  let goToIndexPage = (index: number) => {
    let url = new URL(page.url);
    url.searchParams.set(
      "skip",
      String(index - 1 === 0 ? 0 : (index - 1) * limit)
    );
    url.searchParams.set("limit", String(limit));
    goto(url);
  };

  // This is useful to calulate the current page
  let currPage = $derived.by(() => {
    return Math.ceil(skip / limit) + 1;
  });
</script>

<Pagination.Root {count} {perPage} {siblingCount} page={currPage} class="mt-4">
  {#snippet children({ pages, currentPage })}
    <!-- {console.log(pages, currentPage, "updated", perPage, count)} -->
    <Pagination.Content>
      <Pagination.Item>
        <Pagination.PrevButton onclick={prevPage} />
      </Pagination.Item>
      {#each pages as page (page.key)}
        {#if page.type === "ellipsis"}
          <Pagination.Item>
            <Pagination.Ellipsis />
          </Pagination.Item>
        {:else}
          <Pagination.Item>
            <Pagination.Link
              onclick={() => goToIndexPage(page.value)}
              {page}
              isActive={currentPage === page.value}
            >
              {page.value}
            </Pagination.Link>
          </Pagination.Item>
        {/if}
      {/each}
      <Pagination.Item>
        <Pagination.NextButton onclick={nextPage} />
      </Pagination.Item>
    </Pagination.Content>
  {/snippet}
</Pagination.Root>
