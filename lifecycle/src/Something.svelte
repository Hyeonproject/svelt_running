<script>
  import { onMount, onDestroy } from "svelte";

  onMount(() => {
    console.log("onMount");
    const h1 = document.querySelector("h1");
    console.log(h1.innerText);
  });

  onDestroy(() => {
    console.log("Destory");
  });
</script>

<h1>Something..</h1>
