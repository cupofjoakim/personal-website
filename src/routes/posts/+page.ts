import { getPosts } from '$lib/posts';

export const prerender = true;

export async function load({ params }) {
  let posts = await getPosts();

  return {
    posts
  };
}
