<script>
  let herf = "https://medium.com/@hyeonproject";
  let name = "Hyeonproject";
  let value = "New input value";
  let inUpperCase = false;
</script>

<!-- <a href= "주소">Hyeonproject</a>-->
<a {href}>{name}</a>

<!-- <input type="text" value="default value"-->
<input {value} on:click="{{e} => {value = e.target.value}}" />
<input {value} on:click={e => value = e.target.value} />
<input bind:value={value} />
<input bind:value />

<div>{isUpperCase ? 'DIV' : 'div'}</div>