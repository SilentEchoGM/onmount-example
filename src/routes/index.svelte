<script lang="ts">
  import { mount } from "$lib/mount";
  import { onMount } from "svelte";

  mount();

  onMount(() => {
    console.log("indedx.svelte");
  });
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
