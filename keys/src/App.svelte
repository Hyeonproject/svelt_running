<script>
  // let fruits = ["Apple", "Banana", "Cherry", "Orange"];
  let fruits = [
    { id: "1", name: "Apple" },
    { id: "2", name: "Cherry" },
    { id: "3", name: "Banana" },
    { id: "4", name: "Apple" },
  ];

  function deleteFrist() {
    fruits = fruits.slice(1);
  }
</script>

<button on:click={deleteFirst}> Delete frist fruit! </button>

<ul>
  {#each fruits as fruit (fruit.id)}
    <li>{fruit}</li>
  {/each}
</ul>
