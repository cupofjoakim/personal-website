<script lang="ts">
import "./posts.css";

// biome-ignore lint/suspicious/noImplicitAnyLet: <explanation>
export let data;
</script>

<svelte:head>
  <title>{data.meta.title} | Joakim Wimmerstedt</title>
  <meta name="description" content={data.meta.excerpt}>
</svelte:head>

<div class="px-4 sm:px-6 py-4 text-base flex flex-col justify-center max-w-screen-md w-full">
  <a class="inline-block group transition-all" href="/posts">
    <span class="inline-block transition-all group-hover:-translate-x-4">←</span>
    Posts</a>
</div>

<article class="px-4 sm:px-6 py-4 text-base flex flex-col justify-center max-w-screen-md w-full overflow-hidden">
  <time datetime={data.meta.date} class="mb-4">{data.meta.date}</time>
  <h1 class="text-4xl xl:text-5xl font-bold mb-4 xl:mb-8">{data.meta.title}</h1>
  <div class="post-wrapper">
    <svelte:component this={data.content} />
  </div>
  <address class="mv-4 not-italic"><a href={data.meta.author_url}>{data.meta.author}</a></address>
</article>