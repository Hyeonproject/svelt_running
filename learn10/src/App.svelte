<script>
  let h1 = "<h1>Hello Hyeonproject</h1>";
  let xss = '<iframe onload="document.location=``)"></iframe>';

  let name = "Hyeonproject";
  let index = 0;
</script>

{@debug index, name}
<h1
  on:click={() => {
    index += 1;
  }}
>
  Hello {name}!
</h1>
