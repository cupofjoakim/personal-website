<script>
  import { page } from '$app/stores';  
  import '../app.css';
  import TopBar from '../components/TopBar.svelte';
  import Footer from '../components/Footer.svelte';

  const headerIsAlwaysExpanded = $page.url.pathname !== '/';
</script>

<TopBar alwaysExpanded={headerIsAlwaysExpanded} />

<main class={`flex-1 flex flex-col items-center ${headerIsAlwaysExpanded ? 'mt-32' : 'mt-10 sm:mt-4'} text-gray-800 mb-8`}>
  <slot />
</main>

<Footer />
