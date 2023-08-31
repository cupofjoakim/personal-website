<script>
  import positions from "../positions.json";
</script>

<section class="w-full flex flex-col sm:flex-row">
  <div class="w-full sm:w-2/5">
    <h2 class="text-4xl xl:text-5xl font-bold mb-4 sm:pt-8">Experience</h2>
  </div>
  <div class="w-full sm:w-3/5 flex flex-col gap-4">
    {#each positions as pos}
      <div class="p-8 grid gap-2 rounded-3xl shadow-2xl shadow-grey-500/40 sm:shadow-none sm:hover:shadow-2xl transition-shadow duration-500">

        <div class="flex items-center mb-1">
          <div class="w-1 h-1 rounded-full bg-accent mr-2"></div>
          <p class="font-bold text-xs tracking-widest text-accent">{pos.duration}</p>
        </div>
        <h3 class="text-2xl font-bold">
          {#if pos.company.link}
            <a href={pos.company.link} target="_blank" class="group flex items-center">
              {pos.company.name}
              <span class="ml-1 hidden group-hover:inline-block text-base">🔗</span>
            </a>
          {:else}
            {pos.company.name}
          {/if}
        </h3>
        {#each pos.details as paragraph}
          <p>{paragraph}</p>
        {/each}
        <ul>
          {#each pos.tags as tag}
            <li class="text-xs inline-block leading-sm px-2 py-1 bg-blue-100 text-blue-700 rounded-full mr-2 mb-2">
              {tag}
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</section>

<style lang="postcss">
  .bg-accent {
    background-color: var(--main-accent-color);
  }

  .text-accent {
    color: var(--main-accent-color);
  }
</style>
