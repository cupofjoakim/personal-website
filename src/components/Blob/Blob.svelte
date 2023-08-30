<script>
  import throttle from 'just-throttle';
  import { onMount } from "svelte";
  import Blob from "./Blob";

  export let color;

  let canvas;
  let blob;
  let width = 320;
  let height = 320;
  let oldMousePoint = { x: 0, y: 0 };
  let hover = false;

  const init = () => {
    blob = new Blob();
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

    blob.canvas = canvas;
    blob.color = color;
    blob.init();
    blob.render();
  };

  const getOffset = (elem) => {
    const rect = elem.getBoundingClientRect();
    return {
      x: rect.left + window.scrollX,
      y: rect.top + window.scrollY
    };
  }

  const mouseMove = function (e) {
    let canvasCenter = blob.center;
    let canvasPos = getOffset(canvas);
    let pos = { x: canvasCenter.x + canvasPos.x, y: canvasCenter.y + canvasPos.y };

    let diff = { x: e.clientX - pos.x, y: e.clientY - pos.y };
    let dist = Math.sqrt(diff.x * diff.x + diff.y * diff.y);
    let angle = null;

    blob.mousePos = { x: pos.x - e.clientX, y: pos.y - e.clientY };

    if (dist < blob.radius && hover === false) {
      let vector = { x: e.clientX - pos.x, y: e.clientY - pos.y };
      angle = Math.atan2(vector.y, vector.x);
      hover = true;
    } else if (dist > blob.radius && hover === true) {
      let vector = { x: e.clientX - pos.x, y: e.clientY - pos.y };
      angle = Math.atan2(vector.y, vector.x);
      hover = false;
    }

    if (typeof angle == "number") {
      let nearestPoint = null;
      let distanceFromPoint = 100;

      blob.points.forEach((point) => {
        if (Math.abs(angle - point.azimuth) < distanceFromPoint) {
          nearestPoint = point;
          distanceFromPoint = Math.abs(angle - point.azimuth);
        }
      });

      if (nearestPoint) {
        let strength = {
          x: oldMousePoint.x - e.clientX,
          y: oldMousePoint.y - e.clientY,
        };
        strength =
          Math.sqrt(strength.x * strength.x + strength.y * strength.y) * 10;
        if (strength > 100) strength = 100;
        nearestPoint.acceleration = (strength / 100) * (hover ? -1 : 1);
      }
    }

    oldMousePoint.x = e.clientX;
    oldMousePoint.y = e.clientY;
  };

  onMount(() => {
    init();
  });
</script>

<style>
  /* Please don't judge my placements */
  div {
    position: absolute;
    z-index: 0;
    right: 0rem;
    top: 8rem;
  }

  @media only screen and (min-width: 600px) {
    div {
      right: 0rem;
      top: 7rem;
    }
  }

  @media only screen and (min-width: 960px) {
    div {
      right: 0rem;
      top: 7rem;
    }
  }
</style>

<div class="dynamic-background">
  <canvas bind:this={canvas} on:pointermove={throttle(mouseMove, 16)} width={width} height={height} />
</div>
