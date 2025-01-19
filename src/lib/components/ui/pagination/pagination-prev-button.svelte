<script lang="ts">
  import { Pagination as PaginationPrimitive } from "bits-ui";
  import ChevronLeft from "lucide-svelte/icons/chevron-left";
  import { cn } from "$lib/utils.js";
  import { buttonVariants } from "$lib/components/ui/button/index.js";
  import { MediaQuery } from "svelte/reactivity";
  let isDesktop = new MediaQuery("(min-width: 768px)");

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: PaginationPrimitive.PrevButtonProps = $props();
</script>

{#snippet Fallback()}
  <ChevronLeft />
  <span class="hidden md:block">Previous</span>
{/snippet}

<PaginationPrimitive.PrevButton
  bind:ref
  {...restProps}
  class={cn(
    buttonVariants({
      variant: "ghost",
      className: "gap-1 pl-2.5",
      size: isDesktop ? "default" : "icon",
    }),
    className
  )}
  children={children || Fallback}
/>
