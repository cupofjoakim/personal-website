import { error } from "@sveltejs/kit";
import type { Post } from "$lib/types";

export const prerender = true;

export async function load({ params }) {
	try {
		const post = await import(`../../../posts/${params.slug}.md`);

		return {
			content: post.default,
			meta: post.metadata as Post,
		};
	} catch {
		error(404, `Could not find ${params.slug}`);
	}
}
