import { getPosts } from '$lib/posts';

export const prerender = true;

export async function load() {
  let posts = await getPosts();

  return {
    posts: posts.slice(0, 2)
  };
}
