<script>
  import { fly } from "svelte/transition";
  import positions from "../positions.json";
</script>

<section class="mb-14 w-full">
  <h2 class="text-2xl xl:text-5xl font-bold mb-4 xl:mb-8">Where I've Worked</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    {#each positions as pos}
      <div class="position-cell p-8 transform-gpu cursor-text">
        <h3 class="text-2xl text-center">
          {pos.company.name}
        </h3>
        <p class="text-center mb-4">{pos.duration}</p>
        {#each pos.details as paragraph}
          <p>{paragraph}</p>
        {/each}
      </div>
    {/each}
  </div>
</section>
<div class="text-center md:text-left">
  <a
    class="sm:block text-lg md:inline-block border-2 border-current p-2 px-4 w-auto xl:text-2xl"
    href="#contact"
  >
    Get in touch →
  </a>
</div>

<style>
  .position-cell {
    color: #AD1400;
    background-color: #f8efdc;
    transition: all .3s ease;
    border: 3px solid #AD1400;
  }

  .position-cell:hover {
    transform: scale(1.05);
    background-color: #AD1400;
    color: #f8efdc;
    border-color: transparent;
  }
</style>
