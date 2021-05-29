<script>
  import { lifecycle, delayRender } from "./lifecycle.js";

  let done = delayRender();
  lifecycle();
</script>

{#if done}
  <h1>Hello Lifecycle</h1>
{/if}
