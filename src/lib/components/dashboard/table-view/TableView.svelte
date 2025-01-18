<script lang="ts">
  import * as Table from "$lib/components/ui/table/index.js";
  import ListFilter from "lucide-svelte/icons/list-filter";
  import type { User } from "$lib/types/users";
  import Button from "$lib/components/ui/button/button.svelte";
  import SortItem from "./SortItem.svelte";
  let {
    users,
  }: {
    users: User[];
  } = $props();

</script>

<div class="rounded-md border mt-4 overflow-hidden">
  <Table.Root>
    <Table.Header class="bg-secondary/30">
      <Table.Row>
        <Table.Head class="flex justify-center items-center  text-center"
          ><SortItem name="ID" key="id"></SortItem>
        </Table.Head>
        <Table.Head
          ><SortItem name="First Name" key="firstName"></SortItem></Table.Head
        >
        <Table.Head
          ><SortItem name="Last Name" key="lastName"></SortItem></Table.Head
        >
        <Table.Head><SortItem name="Email" key="email"></SortItem></Table.Head>
        <Table.Head class='hover:text-primary'>Company Title</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {#each users as user, i (i)}
        <Table.Row>
          <Table.Cell class=" min-w-8 text-center">{user.id}</Table.Cell>
          <Table.Cell>{user.firstName}</Table.Cell>
          <Table.Cell>{user.lastName}</Table.Cell>
          <Table.Cell>{user.email}</Table.Cell>
          <Table.Cell>{user.company.title}</Table.Cell>
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
