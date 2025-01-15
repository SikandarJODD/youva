<script lang="ts">
  import { ModeWatcher } from "mode-watcher";
  import "../app.css";
  import Navbar from "$lib/components/home/Navbar.svelte";
  import Sidebar from "$lib/components/home/Sidebar.svelte";
  let { children } = $props();
</script>

<ModeWatcher defaultMode="dark" />
<Navbar />
<div class="px-2 lg:px-32 py-6">
  {@render children()}
</div>
