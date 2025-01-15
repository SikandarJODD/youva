<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  let {
    users,
  }: {
    users: User[];
  } = $props();
  import * as Table from "$lib/components/ui/table/index.js";
  import type { User } from "$lib/types/users";
  import ArrowUpAZ from "lucide-svelte/icons/arrow-down-a-z";
  import ArrowUpZA from "lucide-svelte/icons/arrow-down-z-a";
  import ArrowAsc from "lucide-svelte/icons/arrow-down-0-1";
  import ArrowDesc from "lucide-svelte/icons/arrow-down-1-0";

  let sortOrder = $state<"asc" | "desc">("asc");
  let sortId = $state<"asc" | "desc">("asc");

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

  let sortIDs = () => {
    let url = new URL(page.url);
    let sortBy = page.url.searchParams.get("sortBy");
    let order = page.url.searchParams.get("order");

    if (sortBy === "id") {
      if (order === "asc") {
        sortId = "desc";
        url.searchParams.set("order", "desc");
      } else {
        sortId = "asc";
        url.searchParams.set("order", "asc");
      }
    } else {
      url.searchParams.set("sortBy", "id");
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
        <Table.Head>
          <button
            class="flex gap-1.5 items-center cursor-pointer"
            onclick={sortIDs}
          >
            Id
            {#if sortId === "asc"}
              <ArrowAsc strokeWidth={1.4} size={16} />
            {:else}
              <ArrowDesc strokeWidth={1.4} size={16} />
            {/if}
          </button>
        </Table.Head>
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
