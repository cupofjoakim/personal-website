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

<span
	on:mouseover={() => updateHover(true)}
	on:mouseout={() => updateHover(false)}
	on:mousemove={handleMouseMove}>
	<slot />
</span>
{#if isHovering}
	<img
		src={image}
		style={`left: ${m.x + 10}px; top: ${m.y + 10}px;`}
		alt="An animated gif of lesser importance"
	/>
{/if}

<style>
	span {
		display: inline-block;
		cursor: grab;
		position: relative;
	}

	span:hover {
		color: #AD1400;
	}

	img {
		position: absolute;
		width: 15rem;
		pointer-events: none;
	}
</style>