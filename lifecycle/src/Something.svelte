<script>
  import { onMount, onDestroy } from "svelte";

  onMount(() => {
    console.log("onMount");
    return () => {
      //이슈가 많아서 이는 사라진 문법이다. 비동기 시에서는 promise 객체로 반환되기
      //때문에 사용이 힘들다.
      console.log("Destory in mount");
    };
  });

  onDestroy(() => {
    console.log("Before Destory");
  });
</script>

<h1>Something..</h1>
