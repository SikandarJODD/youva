<script lang="ts">
  import { ModeWatcher } from "mode-watcher";
  import "../app.css";
  import Navbar from "$lib/components/home/Navbar.svelte";
  let { children } = $props();
</script>

<ModeWatcher defaultMode="dark" />
<Navbar />
<div class="px-2 lg:px-32 py-3">
  {@render children()}
</div>
