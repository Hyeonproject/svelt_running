import { onMount, onDestroy, beforeUpdate, afterUpdate } from "svelte";
import { writable } from "svelte/store";

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
  let render = writable(false);
  onMount(() => {
    setTimeout(() => {
      //$render = true; 사용할 수 없음 ㅠㅠ svelte 컴포넌트가 아니여서 ㅠ
      console.log(render); //set, updae, subscribe
      render.set(true)
    }, delay);
  });
  return render;
}
