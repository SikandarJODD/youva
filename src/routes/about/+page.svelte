<script>
  import Separator from "$lib/components/ui/separator/separator.svelte";
</script>

<div>
  <h1>Hello Everyone</h1>
  <p>
    This project is all about pagination, sorting, filtering, and debounced
    search. build by <a href='https://x.com/Sikandar_Bhide'>Sikandar Bhide</a> aka <a href='https://x.com/Sikandar_Bhide'>{`{Bhide}`}.Svelte</a>
  </p>
  <Separator class="mt-2" />
  <div class="mt-4 border  p-4 rounded-lg">
    <span class="font-semibold font-montserrat">Motive :</span>
    <span>To Learn and teach all above concepts</span>
  </div>
</div>

<style lang="postcss">
  h1 {
    @apply text-2xl font-bold;
  }
  p {
    @apply text-muted-foreground;
    a {
      @apply text-foreground;
    }
  }
</style>
