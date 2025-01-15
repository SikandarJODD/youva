<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import Button from "$lib/components/ui/button/button.svelte";
  import CirclePlus from "lucide-svelte/icons/circle-plus";
  let all_filters = [
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
  ];
  let filter_users = (value: string) => {
    let url = new URL(page.url);
    url.searchParams.set("filter", "company.title");
    url.searchParams.set("value", value);
    url.searchParams.set("limit", "10");
    url.searchParams.set("skip", "0");
    goto(url.toString(), { replaceState: true });
  };
</script>

<div class="space-x-2">
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
</div>
