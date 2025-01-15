<script lang="ts">
  let {
    users,
  }: {
    users: User[];
  } = $props();
  import * as Table from "$lib/components/ui/table/index.js";
  import type { User } from "$lib/types/users";
</script>

<div class="rounded-md border mt-4">
  <Table.Root>
    <!-- <Table.Caption>A list of your recent invoices.</Table.Caption> -->
    <Table.Header>
      <Table.Row>
        <Table.Head class="w-[100px]">Id</Table.Head>
        <Table.Head>First Name</Table.Head>
        <Table.Head>Last Name</Table.Head>
        <Table.Head>Email</Table.Head>
        <Table.Head>Company Title</Table.Head>
        <!-- <Table.Head class="text-right">Amount</Table.Head> -->
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {#each users as user, i (i)}
        <Table.Row>
          <Table.Cell class="font-medium">{user.id}</Table.Cell>
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
