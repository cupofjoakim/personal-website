import vercel from '@sveltejs/adapter-vercel';

const config = {
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: vercel()
	}
};

export default config;
