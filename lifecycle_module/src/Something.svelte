<script>
  import { delayRender } from "./lifecycle";

  let done = delayRender(1000);
</script>

{#if $done}
  <h1>Something!!!</h1>
{/if}
