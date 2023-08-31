<script lang="ts">
  import throttle from 'just-throttle';
  import { onMount } from "svelte";
  import Blob from "./Blob";
	import type Point from './Point';

  export let color: string;

  let canvas: HTMLCanvasElement;
  let blob: Blob;
  let width = 320;
  let height = 320;
  let oldMousePoint = { x: 0, y: 0 };
  let hover = false;

  const init = () => {
    blob = new Blob(canvas, color);
    canvas.setAttribute("touch-action", "none");

    let resize = function () {
      width = window.innerWidth / 2;
      height = window.innerHeight / 2;
      if(width < 320) {
        width = 320;
        height = 320;
      }
      blob.radius = Math.floor((width > height ? height : width) / 3);
    };
    window.addEventListener("resize", throttle(resize, 16));
    resize();

    blob.init();
    blob.render();
  };

  const getOffset = (elem: HTMLElement) => {
    const rect = elem.getBoundingClientRect();
    return {
      x: rect.left + window.scrollX,
      y: rect.top + window.scrollY
    };
  }

  const mouseMove = function (e: MouseEvent) {
    let canvasCenter = blob.center;
    let canvasPos = getOffset(canvas);
    let pos = { x: canvasCenter.x + canvasPos.x, y: canvasCenter.y + canvasPos.y };

    let diff = { x: e.clientX - pos.x, y: e.clientY - pos.y };
    let dist = Math.sqrt(diff.x * diff.x + diff.y * diff.y);
    let angle: number | null = null;

    if (dist < blob.radius && hover === false) {
      let vector = { x: e.clientX - pos.x, y: e.clientY - pos.y };
      angle = Math.atan2(vector.y, vector.x);
      hover = true;
    } else if (dist > blob.radius && hover === true) {
      let vector = { x: e.clientX - pos.x, y: e.clientY - pos.y };
      angle = Math.atan2(vector.y, vector.x);
      hover = false;
    }

    if (typeof angle == "number" && angle != null) {
      let nearestPoint: Point | null = null;
      let distanceFromPoint = 100;

      blob.points.forEach((point: Point) => {
        if (Math.abs(angle! - point.azimuth) < distanceFromPoint) {
          nearestPoint = point;
          distanceFromPoint = Math.abs(angle! - point.azimuth);
        }
      });

      if (nearestPoint != null) {
        const strength = {
          x: oldMousePoint.x - e.clientX,
          y: oldMousePoint.y - e.clientY,
        };
        let newStrength =
          Math.sqrt(strength.x * strength.x + strength.y * strength.y) * 10;
        if (newStrength > 100) newStrength = 100;

        (nearestPoint as Point).acceleration = (newStrength / 100) * (hover ? -1 : 1);
      }
    }

    oldMousePoint.x = e.clientX;
    oldMousePoint.y = e.clientY;
  };

  onMount(() => {
    init();
  });
</script>

<div class="dynamic-background absolute z-0 right-0 top-32 sm:top-28">
  <canvas bind:this={canvas} on:pointermove={throttle(mouseMove, 16)} width={width} height={height} />
</div>
