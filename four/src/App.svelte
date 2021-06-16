<script>
  import { assign } from "svelte/internal";

  let count = 0;
  let double = 0;

  $: {
    double = count * 2;
  }

  function assigns() {
    count += 1;
  }
</script>

<button on:click={assigns}>Assign</button>
<h2>{count}</h2>
<h2>{double}</h2>
