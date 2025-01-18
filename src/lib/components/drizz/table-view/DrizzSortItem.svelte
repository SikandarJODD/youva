<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import ArrowDown from "lucide-svelte/icons/arrow-down";
  import ChevronsUpDown from "lucide-svelte/icons/chevrons-up-down";
  import ArrowUp from "lucide-svelte/icons/arrow-up";
  import ListFilter from "lucide-svelte/icons/list-filter";
  import { page } from "$app/state";
  import { goto } from "$app/navigation";
  type Props = {
    name: string;
    key: string;
  };
  let { name, key }: Props = $props();
  let sortAsc = () => {
    let url = new URL(page.url);
    url.searchParams.set("sortBy", key);
    url.searchParams.set("order", "asc");
    goto(url.toString(), { replaceState: true });
  };
  let sortDesc = () => {
    let url = new URL(page.url);
    url.searchParams.set("sortBy", key);
    url.searchParams.set("order", "desc");
    goto(url.toString(), { replaceState: true });
  };
  let category = $derived.by(() => {
    let url = new URL(page.url);
    return url.searchParams.get("sortBy");
  });
  let orderBy = $derived.by(() => {
    let url = new URL(page.url);
    return url.searchParams.get("order");
  });
</script>

<div class="flex items-center">
  <DropdownMenu.Root>
    <DropdownMenu.Trigger>
      <Button
        variant="ghost"
        class="data-[state=open]:bg-accent  h-8 text-sm [&_svg]:size-[16px]"
        size="sm"
      >
        {name}

        {#if category === key}
          {#if orderBy === "asc"}
            <ArrowUp strokeWidth={1.4} />
          {:else if orderBy === "desc"}
            <ArrowDown strokeWidth={1.4} />
          {/if}
        {:else}
          <ChevronsUpDown strokeWidth={1.4} />
        {/if}
      </Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content align="start">
      <DropdownMenu.Item onclick={sortAsc}>
        <ArrowUp class="text-muted-foreground/70 mr-2 h-3.5 w-3.5" />
        Asc
      </DropdownMenu.Item>
      <DropdownMenu.Item onclick={sortDesc}>
        <ArrowDown class="text-muted-foreground/70 mr-2 h-3.5 w-3.5" />
        Desc
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
</div>
