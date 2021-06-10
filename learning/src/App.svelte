<script>
  let name = "Hyeonrpoject";
  let fruits = ["Apple", "Banana", "Cherry"];
  let user = {
    name: "Hyeonproject",
    depth: {
      a: "b",
    },
    numbers: [1, 2],
  };

  let numbers = user.numbers;

  function assign() {
    let hello = "world";
    name = "Hyeon";
    // fruits.push("Orange");
    // fruits = fruits;
    fruits = [...fruits, "Orange"];
    // user.name = "Hyeon";
    // user.depth.a = "c";
    user.numbers.push(3);
    numbers = numbers;
  }
</script>

<button on:click={assign}>Assign!</button>

<h2>name : {name}</h2>
<h2>fruits : {fruits}</h2>
<h2>user name : {user.name}</h2>
<h2>user depth a: {user.depth.a}</h2>
<h2>user numbers: {user.numbers}</h2>
<h2>numbers : {numbers}</h2>
<h2>{hello}</h2>
