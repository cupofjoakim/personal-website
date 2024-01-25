<script lang="ts">
  import type { Post } from "$lib/types";

  export let posts: Post[];
</script>

{#each posts as post}
  <div
      class="p-8 grid gap-2 rounded-3xl shadow-2xl shadow-grey-500/40 sm:shadow-none sm:hover:shadow-2xl transition-shadow duration-500"
    >
      <div class="flex items-center mb-1">
        <div class="w-1 h-1 rounded-full bg-accent mr-2" />
        <p class="font-bold text-xs tracking-widest text-accent"><time datetime="{post.date}">{post.date}</time></p>
      </div>
      <h3 class="text-2xl font-bold">
          <a href={`/posts/${post.slug}`} class="group flex items-center">
            {post.title}
          </a>
      </h3>
      <p>{post.excerpt}</p>
      <ul>
        {#each post.categories as category}
          <li
            class="text-xs inline-block leading-sm px-2 py-1 bg-blue-100 text-blue-700 rounded-full mr-2 mb-2"
          >
            {category}
          </li>
        {/each}
      </ul>
    </div>
{/each}

<style lang="postcss">
  .bg-accent {
    background-color: var(--main-accent-color);
  }

  .text-accent {
    color: var(--main-accent-color);
  }
</style>