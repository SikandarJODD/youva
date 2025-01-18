<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import Badge from "$lib/components/ui/badge/badge.svelte";
  import { buttonVariants } from "$lib/components/ui/button";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index";

  let selected = $state("");
  let updatePageQuery = () => {
    let url = new URL(page.url);
    if (selected) {
      url.searchParams.set("status", selected);
    } else {
      url.searchParams.delete("status");
    }
    goto(url.toString(), { replaceState: true });
  };
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger
    class={[
      buttonVariants({ variant: "outline", size: "sm" }),
      "border-dashed",
    ]}
    >Status
    {#if selected}
      <Badge variant="secondary">{selected}</Badge>
    {/if}
  </DropdownMenu.Trigger>
  <DropdownMenu.Content align="start">
    <DropdownMenu.RadioGroup
      bind:value={selected}
      onValueChange={updatePageQuery}
    >
      <DropdownMenu.RadioItem value="active">Active</DropdownMenu.RadioItem>
      <DropdownMenu.RadioItem value="inactive">Inactive</DropdownMenu.RadioItem>
      <DropdownMenu.RadioItem value="sage">Sage</DropdownMenu.RadioItem>
      <DropdownMenu.RadioItem value="god">God</DropdownMenu.RadioItem>
      <DropdownMenu.RadioItem value="">None</DropdownMenu.RadioItem>
    </DropdownMenu.RadioGroup>
  </DropdownMenu.Content>
</DropdownMenu.Root>
