<script>
  import { fly } from "svelte/transition";
  import positions from "../positions.json";

  let index = 0;

  const handlePositionSelect = (i) => {
    index = i;
  }
</script>

<h2 class="font-bold mb-2 text-xl">Where I've Worked</h2>
<section class="mb-10 text-sm flex flex-col md:flex-row w-full">
  <div>
    <ul class="w-full md:w-40 mr-16 mb-8 md:mb-0">
      {#each positions as pos, i}
        <li
          class="border-b-2 border-gray-800 cursor-pointer p-2 text-gray-500 hover:text-current"
          on:click={() => handlePositionSelect(i)}
        >
          {pos.company.name}
        </li>
      {/each}
    </ul>
  </div>

  <div class="flex-1 flex relative">
    {#each [positions[index]] as selectedPosition (index)}
      <div class="flex-1 absolute inset-0"
        in:fly="{{ y: 100, duration: 500, delay:300 }}"
        out:fly="{{ y: -100, duration: 500 }}"
      >
        <div class="text-xl mb-2">
          {selectedPosition.title} @
          {#if selectedPosition.company.link}
            <a href={selectedPosition.company.link} target="_blank">
              {selectedPosition.company.name}
            </a>
          {:else}
            {selectedPosition.company.name}
          {/if}
        </div>
        <div class="mb-4">{selectedPosition.duration}</div>

        <ul class="list-disc ml-4">
          {#each selectedPosition.details || [] as detail}
            <li class="mb-2 max-w-md	">{detail}</li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</section>

<style>
  .selection-list {
    width: 160px;
  }
</style>
