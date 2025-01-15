<script lang="ts">
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import CircleX from "lucide-svelte/icons/circle-x";
  import Search from 'lucide-svelte/icons/search';


  let inputValue = $state("");
  let inputElement = $state<HTMLInputElement | null>(null)!;

  function handleClearInput() {
    inputValue = "";
    inputElement.focus();
  }
</script>

<div class="w-56">
  <div class="relative">
    <Input
      id="input-24"
      bind:ref={inputElement}
      bind:value={inputValue}
      class="peer pe-9 ps-9"
      placeholder="Search"
      type='text'
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
