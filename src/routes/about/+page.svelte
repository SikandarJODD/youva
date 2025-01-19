<script>
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import SupabaseDark from "$lib/images/supabase-logo-wordmark--dark.svg";
  import SupabaseLight from "$lib/images/supabase-logo-wordmark--light.svg";
  import Svelte from "$lib/images/svelte.svg";
  import DrizzleORMDark from "$lib/images/logo-github-sq-dark.svg";
  import DrizzleORMLight from "$lib/images/logo-github-sq-light.svg";
  import { mode } from "mode-watcher";
  let all_imgs = [
    {
      dark: Svelte,
      light: Svelte,
    },
    {
      dark: SupabaseDark,
      light: SupabaseLight,
    },
    {
      dark: DrizzleORMDark,
      light: DrizzleORMLight,
    },
  ];
</script>

<div>
  <h1>Hello Everyone</h1>
  <p>
    This project is all about pagination, sorting, filtering, debounced search,
    caching, and more.
  </p>
  <Separator class="mt-2" />
  <div class=" border p-4 rounded-lg mt-4 mb-2">
    <span class="font-semibold font-montserrat">Motive :</span>
    <span>To Learn and teach all above concepts</span>
  </div>
  <div class="flex space-x-2 items-center">
    {#each all_imgs as item}
      <div class="border px-4 py-2 flex justify-center items-center rounded-xl">
        {#if $mode === "dark"}
          <img src={item.dark} alt="logo" class="h-8" />
        {:else}
          <img src={item.light} alt="logo" class="h-8" />
        {/if}
      </div>
    {/each}
  </div>
</div>

<style lang="postcss">
  h1 {
    @apply text-2xl font-bold;
  }

  h1 {
    @apply text-2xl font-bold;
  }
  p {
    @apply text-muted-foreground;
  }
</style>
