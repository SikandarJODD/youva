<script lang="ts">
  import { Pagination as PaginationPrimitive } from "bits-ui";
  import ChevronRight from "lucide-svelte/icons/chevron-right";
  import { cn } from "$lib/utils.js";
  import { buttonVariants } from "$lib/components/ui/button/index.js";
  import { MediaQuery } from "svelte/reactivity";
  let isDesktop = new MediaQuery("(min-width: 768px)");

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: PaginationPrimitive.NextButtonProps = $props();
</script>

{#snippet Fallback()}
  <span class="hidden md:block">Next</span>
  <ChevronRight />
{/snippet}

<PaginationPrimitive.NextButton
  bind:ref
  {...restProps}
  class={cn(
    buttonVariants({
      variant: "ghost",
      className: "gap-1 pr-2.5",
      size: isDesktop ? "default" : "icon",
    }),
    className
  )}
  children={children || Fallback}
/>
