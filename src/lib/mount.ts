import { onMount } from "svelte";

export const mount = () =>
  onMount(() => {
    console.log("mount.ts");
  });
