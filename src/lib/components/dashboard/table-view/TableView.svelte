<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import Button from "$lib/components/ui/button/button.svelte";
  let {
    users,
  }: {
    users: User[];
  } = $props();
  import * as Table from "$lib/components/ui/table/index.js";
  import type { User } from "$lib/types/users";
  import ArrowUpAZ from "lucide-svelte/icons/arrow-down-a-z";
  import ArrowUpZA from "lucide-svelte/icons/arrow-down-z-a";

  let sortOrder = $state<"asc" | "desc">("asc");
  let sortFirstNames = () => {
    let url = new URL(page.url);
    let sortBy = page.url.searchParams.get("sortBy");
    let order = page.url.searchParams.get("order");

    if (sortBy === "firstName") {
      if (order === "asc") {
        sortOrder = "desc";
        url.searchParams.set("order", "desc");
      } else {
        sortOrder = "asc";
        url.searchParams.set("order", "asc");
      }
    } else {
      url.searchParams.set("sortBy", "firstName");
      url.searchParams.set("order", "asc");
    }
    goto(url.toString(), { replaceState: true });
  };
</script>

<div class="rounded-md border mt-4 overflow-hidden">
  <Table.Root>
    <!-- <Table.Caption>A list of your recent invoices.</Table.Caption> -->
    <Table.Header class="bg-muted-foreground/10">
      <Table.Row>
        <Table.Head class="w-[60px] ">Id</Table.Head>
        <Table.Head
          onclick={sortFirstNames}
          class="items-center flex gap-1.5 cursor-pointer"
          >First Name
          {#if sortOrder === "asc"}
            <ArrowUpAZ strokeWidth={1.4} size={16} />
          {:else}
            <ArrowUpZA strokeWidth={1.4} size={16} />
          {/if}
        </Table.Head>
        <Table.Head>Last Name</Table.Head>
        <Table.Head>Email</Table.Head>
        <Table.Head>Company Title</Table.Head>
        <!-- <Table.Head class="text-right">Amount</Table.Head> -->
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {#each users as user, i (i)}
        <Table.Row>
          <Table.Cell>{user.id}</Table.Cell>
          <Table.Cell>{user.firstName}</Table.Cell>
          <Table.Cell>{user.lastName}</Table.Cell>
          <Table.Cell>{user.email}</Table.Cell>
          <Table.Cell>{user.company.title}</Table.Cell>
          <!-- <Table.Cell class="text-right">{user.lastName}</Table.Cell> -->
        </Table.Row>
      {/each}
    </Table.Body>
    <!-- <Table.Footer>
      <Table.Row>
        <Table.Cell colspan={3}>Total</Table.Cell>
        <Table.Cell class="text-right">$2,500.00</Table.Cell>
      </Table.Row>
    </Table.Footer> -->
  </Table.Root>
</div>
