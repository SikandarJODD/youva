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
        <Table.Head class="hover:text-primary">Company Title</Table.Head>
        <Table.Head class="hover:text-primary">Staus</Table.Head>
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
              <Badge
                variant="outline"
                class="gap-1.5 rounded-full dark:bg-emerald-800/20 "
              >
                <span
                  class="size-1.5 rounded-full bg-emerald-500"
                  aria-hidden="true"
                ></span>

                {user.status}
              </Badge>
            {:else if user.status === "inactive"}
              <Badge
                variant="outline"
                class="gap-1.5 rounded-full dark:bg-red-800/20"
              >
                <span
                  class="size-1.5 rounded-full bg-red-500"
                  aria-hidden="true"
                ></span>

                {user.status}
              </Badge>
            {:else}
              <Badge
                variant="outline"
                class="gap-1.5 rounded-full dark:bg-amber-900/20"
              >
                <span
                  class="size-1.5 rounded-full bg-amber-500"
                  aria-hidden="true"
                ></span>
                {user.status}
              </Badge>
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
