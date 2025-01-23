# Svelte Pagination Example

![Main_Page](/static/img_icon.png)

<div align="center">
<img src="https://img.shields.io/badge/Svelte-FF3E00.svg?style=for-the-badge&logo=Svelte&logoColor=white" />
<img src="https://img.shields.io/badge/Supabase-3FCF8E.svg?style=for-the-badge&logo=Supabase&logoColor=white" />
<img src="https://img.shields.io/badge/drizzle-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black" />
<img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4.svg?style=for-the-badge&logo=Tailwind-CSS&logoColor=white" />
<img src="https://img.shields.io/badge/shadcn%20svelte-000000?style=for-the-badge&logo=shadcnui&logoColor=red"/>
</div>

## Features

- Pagination
- Debounce Search
- Sorting
- Filtering
- Caching

## Demo

1. Simple : [Demo](https://sv-pagination.vercel.app)

   - Simple include all concepts on Dummy JSON API.

2. Advance : [Demo](https://sv-pagination.vercel.app/drizz)
   - Advance is build on top of Supabase + Drizzle ORM.

## Installation

- Clone the repository

```bash
 git clone https://github.com/SikandarJODD/youva
```

- Update your Database URL in `.env` file

```bash
  # Replace with your DB credentials! Supabase DB URL
  DATABASE_URL="postgres://user:password@host:port/db-name"
```

- Install the dependencies

```bash
 pnpm install
```

- Migrate Schema to DB and add some dummy data

```bash
 npx drizzle-kit migrate
```

- Run the project

```bash
 pnpm dev
```

#### [Checkout Usage & Learning](/usage.md)

### Components Used

- [Shadcn Svelte](https://next.shadcn-svelte.com)
- [Origin UI Svelte](https://originui-svelte.pages.dev)
