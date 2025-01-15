<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import * as Select from "$lib/components/ui/select/index";
  let value = $state(page.url.searchParams.get("limit") || "10");
  let updateLimit = () => {
    let url = new URL(page.url);
    url.searchParams.set("limit", value);
    goto(url.toString(), { replaceState: true });
  };
</script>

<div class="flex items-center space-x-2">
  <p class="text-sm font-medium">Rows per page</p>
  <Select.Root type="single" bind:value onValueChange={updateLimit}>
    <Select.Trigger class="w-[70px] h-8">{value}</Select.Trigger>
    <Select.Content>
      <Select.Item value="10">10</Select.Item>
      <Select.Item value="20">20</Select.Item>
      <Select.Item value="30">30</Select.Item>
      <Select.Item value="40">40</Select.Item>
      <Select.Item value="50">50</Select.Item>
    </Select.Content>
  </Select.Root>
</div>
