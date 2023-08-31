<script>
  import '../app.css';
  import TopBar from '../components/TopBar.svelte';
</script>

<TopBar />

<main class="flex-1 flex flex-col items-center mt-10 sm:mt-4 text-gray-800 mb-8">
  <slot />
</main>

<footer class="flex-1 flex flex-row justify-center mb-8">
  <a
    rel="external"
    href="https://github.com/cupofjoakim"
    target="_blank"
    class="mr-4 hover:opacity-40 focus:opacity-40"
  >
    <img width="24" height="24" src="/icon-github.svg" alt="Github" />
  </a>
  <a
    rel="external"
    href="https://www.linkedin.com/in/joakimwimmerstedt"
    target="_blank"
    class="mr-4 hover:opacity-40 focus:opacity-40"
  >
    <img width="24" height="24" src="/icon-linkedin.svg" alt="Linkedin" />
  </a>
  <a
    rel="external"
    href="https://twitter.com/cupofjoakim"
    target="_blank"
    class="mr-4 hover:opacity-40 focus:opacity-40"
  >
    <img width="24" height="24" src="/icon-twitter.svg" alt="Twitter" />
  </a>
  <a
    rel="me"
    href="https://mas.to/@cupofjoakim"
    target="_blank"
    class="hover:opacity-40 focus:opacity-40"
  >
    <img width="24" height="24" src="/icon-mastodon.svg" alt="Mastodon" />
  </a>
</footer>
