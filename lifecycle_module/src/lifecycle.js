import { onMount, onDestroy, beforeUpdate, afterUpdate } from "svelte";

export function lifecycle() {
  onMount(() => {
    console.log("Mounted?");
  });
  onDestroy(() => {
    console.log("Before destory?");
  });
  beforeUpdate(() => {
    console.log("Before update?");
  });
  afterUpdate(() => {
    console.log("After update?");
  });
}

export function delayRender(delay = 3000) {
  //ms
  let render = false;
  onMount(() => {
    setTimeout(() => {
      render = true;
    }, delay);
  });
  return render;
}
