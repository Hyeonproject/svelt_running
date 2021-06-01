<script>
  import { tick } from "svelte";
  let name = "world";

  async function handler() {
    name = "Hyeonproject";
    await tick();
    const h1 = document.querySelector("h1");
    console.log(h1.innerText);
  }
</script>

<h1 on:click={handler}>
  Hello {name}!
</h1>
