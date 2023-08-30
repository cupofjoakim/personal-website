<script>
  import positions from "../positions.json";
</script>

<section class="w-full flex flex-col sm:flex-row">
  <div class="w-full sm:w-2/5">
    <h2 class="text-4xl xl:text-5xl font-bold mb-4 sm:pt-8">Experience</h2>
  </div>
  <div class="w-full sm:w-3/5 flex flex-col gap-4">
    {#each positions as pos}
      <div class="p-8 rounded-3xl shadow-2xl shadow-grey-500/40 sm:shadow-none sm:hover:shadow-2xl transition-shadow duration-500">

        <div class="flex items-center mb-1">
          <div class="w-1 h-1 rounded-full bg-accent mr-2"></div>
          <p class="font-bold text-xs tracking-widest text-accent">{pos.duration}</p>
        </div>
        <h3 class="text-2xl font-bold">
          {pos.company.name}
        </h3>
        {#each pos.details as paragraph}
          <p>{paragraph}</p>
        {/each}
      </div>
    {/each}
  </div>
</section>

<style>
  .bg-accent {
    background-color: var(--main-accent-color);
  }

  .text-accent {
    color: var(--main-accent-color);
  }
</style>
