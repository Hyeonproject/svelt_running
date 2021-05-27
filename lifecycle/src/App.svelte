<script>
  import Something from "./Something.svelte";

  let toggle = false;
</script>

<button
  on:click={() => {
    toggle = !toggle;
  }}
>
  Toggle
</button>

{#if toggle}
  <Something />
{/if}
