<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import * as Select from "$lib/components/ui/select/index";
  let value = $state("10");
  $effect(() => {
    let url = new URL(page.url);
    let limit = url.searchParams.get("limit");
    if (limit) {
      value = limit;
    }
  });

  let open = $state(false);
  let updateLimit = (updated: string) => {
    if (updated !== "") {
      value = updated;
      let url = new URL(page.url);
      url.searchParams.set("limit", value);
      goto(url.toString(), { replaceState: true });
    } else {
      value = "10";
      let url = new URL(page.url);
      url.searchParams.set("limit", value);
      goto(url.toString(), { replaceState: true });
    }
    open = false;
  };
</script>

<div class="flex items-center space-x-2">
  <p class="text-sm font-medium">Rows per page</p>
  <Select.Root
    type="single"
    {value}
    bind:open
    onValueChange={(updated) => updateLimit(updated)}
  >
    <Select.Trigger class="w-[70px] h-8">
      <span class="text-sm font-medium">{value}</span>
    </Select.Trigger>
    <Select.Content>
      <Select.Item value="10" label="10"></Select.Item>
      <Select.Item value="20">20</Select.Item>
      <Select.Item value="30">30</Select.Item>
      <Select.Item value="40">40</Select.Item>
      <Select.Item value="50">50</Select.Item>
    </Select.Content>
  </Select.Root>
</div>
