import { getPosts } from '$lib/posts';

export async function load({ params }) {
  let posts = await getPosts();

  return {
    posts
  };
}
