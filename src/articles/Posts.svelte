<script lang="ts">
import type { Post } from "$lib/types";
import PostList from "../components/PostList.svelte";

export let posts: Post[];
</script>

<section class="w-full flex flex-col sm:flex-row">
  <div class="w-full sm:w-2/5">
    <h2 class="text-4xl xl:text-5xl font-bold mb-4 sm:pt-8"><a href="/posts">Posts</a></h2>
  </div>
  <div class="w-full sm:w-3/5 flex flex-col gap-4">
    <PostList posts={posts} />
  </div>
</section>