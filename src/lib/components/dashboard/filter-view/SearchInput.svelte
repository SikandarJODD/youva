<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import { Input } from "$lib/components/ui/input";
  import CircleX from "lucide-svelte/icons/circle-x";
  import Search from "lucide-svelte/icons/search";
  import { onMount } from "svelte";
  import { debounce } from "throttle-debounce";

  let inputValue = $state(page.url.searchParams.get("q") || "")!;
  let inputElement = $state<HTMLInputElement | null>(null)!;
  $effect(() => {
    if (!page.url.searchParams.has("q")) {
      inputValue = "";
    }
  });

  function handleClearInput() {
    inputValue = "";
    inputElement.focus();
    let url = new URL(page.url);
    url.searchParams.delete("q");
    goto(url.toString(), { replaceState: true });
  }
  let searchName = () => {
    let url = new URL(page.url);
    url.searchParams.delete("filter");
    url.searchParams.delete("value");
    url.searchParams.set("q", inputValue);
    goto(url.toString(), { replaceState: true, keepFocus: true });
  };
  let debounceSearch = debounce(400, searchName);
</script>

<div class="w-48">
  <div class="relative">
    <Input
      bind:ref={inputElement}
      bind:value={inputValue}
      oninput={debounceSearch}
      class="pe-4 ps-9"
      placeholder="Search First Name"
      type="text"
    />
    <div
      class="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50"
    >
      <Search size={16} stroke-width={2} />
    </div>
    {#if inputValue}
      <button
        class="absolute inset-y-px end-px flex h-full w-9 items-center justify-center rounded-e-lg border border-transparent text-muted-foreground/80 ring-offset-background transition-shadow animate-in fade-in zoom-in-75 hover:text-foreground focus-visible:border-ring focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Clear input"
        onclick={handleClearInput}
      >
        <CircleX size={16} stroke-width={2} aria-hidden="true" />
      </button>
    {/if}
  </div>
</div>
