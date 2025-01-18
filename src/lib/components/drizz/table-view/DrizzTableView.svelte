<script lang="ts">
  import * as Table from "$lib/components/ui/table/index.js";
  import DrizzSortItem from "./DrizzSortItem.svelte";
  import type { DrizzUser } from "$lib/server/db/schema";
  import Badge from "$lib/components/ui/badge/badge.svelte";
  import Zap from "lucide-svelte/icons/zap";
  let {
    users,
  }: {
    users: DrizzUser[];
  } = $props();
</script>

<div class="rounded-md border mt-4 overflow-hidden">
  <Table.Root>
    <Table.Header class="bg-secondary/30">
      <Table.Row>
        <Table.Head class="flex justify-center items-center  text-center"
          ><DrizzSortItem name="ID" key="id"></DrizzSortItem>
        </Table.Head>
        <Table.Head
          ><DrizzSortItem name="First Name" key="firstName"
          ></DrizzSortItem></Table.Head
        >
        <Table.Head
          ><DrizzSortItem name="Last Name" key="lastName"
          ></DrizzSortItem></Table.Head
        >
        <Table.Head
          ><DrizzSortItem name="Email" key="email"></DrizzSortItem></Table.Head
        >
        <Table.Head
          ><DrizzSortItem name="Company" key="company"></DrizzSortItem></Table.Head
        >
        <Table.Head
          ><DrizzSortItem name="Status" key="status"></DrizzSortItem></Table.Head
        >

      </Table.Row>
    </Table.Header>
    <Table.Body>
      {#each users as user, i (i)}
        <Table.Row>
          <Table.Cell class=" min-w-8 text-center">{user.id}</Table.Cell>
          <Table.Cell>{user.firstName}</Table.Cell>
          <Table.Cell>{user.lastName}</Table.Cell>
          <Table.Cell>{user.email}</Table.Cell>
          <Table.Cell>{user.company}</Table.Cell>
          <Table.Cell>
            {#if user.status === "active"}
              <span
                class="rounded-full inline-flex items-center bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20"
                >{user.status}</span
              >
            {:else if user.status === "inactive"}
              <span
                class="rounded-full inline-flex items-center bg-yellow-400/10 px-2 py-0.5 text-xs font-medium text-yellow-500 ring-1 ring-inset ring-yellow-400/20"
                >{user.status}</span
              >
            {:else if user.status === "sage"}
              <span
                class="inline-flex items-center rounded-full bg-gray-400/10 px-2 py-0.5 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20"
                >{user.status}</span
              >
            {:else}
              <span
                class="inline-flex items-center rounded-full bg-pink-400/10 px-2 py-0.5 text-xs font-medium text-pink-400 ring-1 ring-inset ring-pink-400/20"
                >{user.status}</span
              >
            {/if}
          </Table.Cell>
        </Table.Row>
      {:else}
        <Table.Row>
          <Table.Cell colspan={5} class="text-center">
            No users found
          </Table.Cell>
        </Table.Row>
      {/each}
    </Table.Body>
  </Table.Root>
</div>
