<script lang="ts">
import { type Snippet, onMount } from "svelte";

let { image, children }: { image: string; children: Snippet } = $props();

onMount(async () => {
	if (image) {
		const preload = new Image();
		preload.src = image;
		preload.onload = () => {};
	}
});

const m = { x: 0, y: 0 };
const offset = 10;
let isHovering = $state(false);

function handleMouseMove(event: MouseEvent) {
	requestAnimationFrame(() => {
		m.x = event.pageX;
		m.y = event.pageY;
	});
}

function updateHover(newStatus: boolean) {
	isHovering = newStatus;
}
</script>

<span
  class="underline decoration-dotted cursor-grab inline-block relative"
  onmouseover={() => updateHover(true)}
  onfocus={() => {}}
  onblur={() => {}}
  onmouseout={() => updateHover(false)}
  onmousemove={handleMouseMove}
  role="emphasis"
>
  {@render children?.()}
</span>
{#if isHovering}
  <img
    class="absolute pointer-events-none w-60"
    src={image}
    style={`left: ${m.x + offset}px; top: ${m.y + offset}px;`}
    alt=""
  />
{/if}

<style lang="postcss">
  span:hover {
    color: var(--main-accent-color);
  }
</style>
