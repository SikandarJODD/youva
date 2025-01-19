<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import Button from "$lib/components/ui/button/button.svelte";
  let {
    all_filters = [
      {
        name: "Sales Manager",
        value: "Sales Manager",
      },
      {
        name: "Web Developer",
        value: "Web Developer",
      },
      {
        name: "Business Analyst",
        value: "Business Analyst",
      },
    ],
    key = "company.title",
  } = $props();

  let is_filter_present = $derived.by(() => {
    let url = new URL(page.url);
    return url.searchParams.get("filter") === key;
  });

  let filter_users = (value: string) => {
    let url = new URL(page.url);
    // Deleteing Search and SortBy Params
    url.searchParams.delete("q");
    url.searchParams.delete("sortBy");
    url.searchParams.delete("order");

    url.searchParams.set("filter", key);
    url.searchParams.set("value", value);
    // url.searchParams.set("limit", "10");
    url.searchParams.set("skip", "0");
    goto(url.toString(), { replaceState: true });
  };
</script>

<div class="flex items-center gap-2 flex-wrap">
  {#each all_filters as filter}
    <Button
      variant="outline"
      size="sm"
      class="border-dashed"
      onclick={() => filter_users(filter.value)}
    >
      {filter.name}</Button
    >
  {/each}
  {#if is_filter_present}
    <Button
      variant="secondary"
      size="sm"
      class="border-dashed"
      onclick={() => {
        let url = new URL(page.url);
        url.searchParams.delete("filter");
        url.searchParams.delete("value");
        url.searchParams.set("limit", "10");
        url.searchParams.set("skip", "0");
        goto(url.toString(), { replaceState: true });
      }}
    >
      Clear Filter
    </Button>
  {/if}
</div>
