# Usage & Learning

I am using Dummy JSON API to fetch data. You can replace it with your own API. Checkout Dummy JSON API [here](https://dummyjson.com/docs/users#users-all)

- The Most important project lies in [`src/routes/+page.server.ts`](https://github.com/SikandarJODD/youva/blob/master/src/routes/%2Bpage.server.ts) file.
- here you can query the data from the API and pass it to the `+page.svelte`.
- The base of all features lies in `get`, `set` and `goto` functions.

### Pagination

- we will be using `limit` & `skip` to paginate the data.
- default `limit` is 10 and `skip` is 0.
- when user clicks on the next button, we will increment the `skip` by 10 and fetch the next 10 records.
- for specific page, we will calculate the `skip` value and fetch the records.
- Checkout **[Pagination View Component](https://github.com/SikandarJODD/youva/blob/master/src/lib/components/dashboard/pagination-view/PaginationView.svelte)** for detail implementation.

### Debounce Search

- we will be using `throttle-debounce` library to implement the debounce search.
- when users inputs the value after `300ms` we will set the query value as `q=michael` and fetch the data.
- Checkout [Search Input Component](https://github.com/SikandarJODD/youva/blob/master/src/lib/components/dashboard/filter-view/SearchInput.svelte) for detail implementation.

### Sorting

- we will be using `sortBy` & `order` query to sort the data.
- `sortBy` will be the key on which we want to sort the data for example id,firstName.
- `order` will be the order of sorting `asc` or `desc`.
- Checkout [Table View Component](https://github.com/SikandarJODD/youva/blob/master/src/lib/components/dashboard/table-view/TableView.svelte)

### Filtering

- we will be using different [fetch url](https://dummyjson.com/docs/users#users-filter) to filter data based on the query.
- here we are using `key` and `value` to filter the data.
- for example `key`='company.title' and `value`='Sales Manager'
- This will provide all the `users` who works in compnay with title `Sales Manager`.
- Checkout [Filter Component](https://github.com/SikandarJODD/youva/blob/master/src/lib/components/dashboard/filter-view/FilterCompanyTitle.svelte) for detail implementation.