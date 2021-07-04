<script>
  let fruits = ["Apple", "Banana", "Cherry", "Orange"];

  function deleteFrist() {
    fruits = fruits.slice(1);
  }
</script>

<button on:click={deleteFirst}> Delete frist fruit! </button>

<ul>
  {#each fruits as fruit (fruit)}
    <li>{fruit}</li>
  {/each}
</ul>
