<script>
	import { onMount } from 'svelte';
	export let image;

	onMount(async () => {
		if (image) {
			const preload = new Image();
			preload.src = image;
			preload.onload = () => {};
		}
	});

	let m = { x: 0, y: 0 };
	const offset = 10;
	let isHovering = false;

	function handleMouseMove(event) {
		requestAnimationFrame(() => {
			m.x = event.pageX;
			m.y = event.pageY;
		});
	}

	function updateHover(newStatus) {
		isHovering = newStatus;
	}

</script>

<span class="underline inline-block"
	on:mouseover={() => updateHover(true)}
	on:mouseout={() => updateHover(false)}
	on:mousemove={handleMouseMove}>
	<slot />
</span>
{#if isHovering}
	<img
		src={image}
		style={`left: ${m.x + offset}px; top: ${m.y + offset}px;`}
		alt=""
	/>
{/if}

<style>
	span {
		display: inline-block;
		cursor: grab;
		position: relative;
		text-decoration-style: dotted;
	}

	span:hover {
		color: var(--main-accent-color);
	}

	img {
		position: absolute;
		width: 15rem;
		pointer-events: none;
	}
</style>