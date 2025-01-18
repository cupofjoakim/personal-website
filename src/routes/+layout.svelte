<script>
import "../app.css";
import Footer from "../components/Footer.svelte";
import TopBar from "../components/TopBar.svelte";
</script>

<TopBar />

<main class={`flex-1 flex flex-col items-center mt-32 text-gray-800 mb-8`}>
  <slot />
</main>

<Footer />
