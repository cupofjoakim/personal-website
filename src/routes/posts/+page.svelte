<script>
  import PostList from "../../components/PostList.svelte";

  export let data;

  const posts = data?.posts || [];

</script>

<svelte:head>
  <title>Posts | Joakim Wimmerstedt</title>
  <meta name="description" content="Thoughts and stuff by Joakim Wimmerstedt">
</svelte:head>

<div class="px-4 sm:px-6 py-4 text-base flex flex-col justify-center max-w-screen-md w-full">
  <h1 class="text-4xl xl:text-5xl font-bold mb-4 xl:mb-8">Posts</h1>
  <div class="text-base flex flex-col gap-4 justify-center max-w-screen-md w-full">
    <PostList posts={posts} />
  </div>
</div>
