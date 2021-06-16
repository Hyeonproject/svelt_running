<script>
  import { tick } from "svelte";
  let count = 0;
  let double = 0;

  $: {
    double = count * 2;
    console.log("double!!");
  }

  //   $: double = count * 2;

  async function assigns() {
    count += 1;
    console.time("timer");
    await tick();
    console.timeEnd("timer");
    console.log(double);
  }
</script>

<button on:click={assigns}>Assign</button>
<h2>{count}</h2>
<h2>{double}</h2>
