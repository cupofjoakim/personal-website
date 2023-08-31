<script>
  import AboutMe from "../articles/AboutMe.svelte";
  import Experience from "../articles/Experience.svelte";

  import TopBar from "../components/TopBar.svelte";
  import Blob from "../components/Blob/Blob.svelte";
</script>

<TopBar />
<main class="flex-1 flex flex-col items-center mt-10 sm:mt-4 text-gray-800 mb-8">
  <Blob color="#0000FF" />
  <article class="px-4 sm:px-6 py-4 text-xl flex flex-col justify-center min-h-screen" id="intro">
    <h1 class="text-7xl	font-semibold z-10">
      Hej, I'm Joakim.
    </h1>

    <p class="my-10 text-3xl max-w-l lg:max-w-xl lg:max-w-2xl z-10">
      I’m a fullstack developer based in Stockholm, Sweden. I build things to
      solve problems.
    </p>

    <div>
      <a
        class="inline-block"
        href="#about-me"
      >
        Learn more →
      </a>
    </div>
  </article>

  <article class="px-4 sm:px-6 py-4 pt-24 sm:pt-36 text-base flex flex-col justify-center" id="about-me">
    <AboutMe />
  </article>

  <article class="px-4 sm:px-6 py-4 pt-24 sm:pt-36 text-base flex flex-col justify-center w-full" id="experience">
    <Experience />
  </article>

  <article class="px-4 sm:px-6 py-24 text-base flex flex-col justify-center text-center" id="contact">
    <section class="bg-blue-50 rounded-3xl py-12 md:py-24 px-6 md:px-12">
      <h2 class="text-4xl	xl:text-5xl font-bold mb-8">Say Hi!</h2>
      <p class="mb-8">While I'm not currently looking for new opportunities, I'm always eager to talk or answer questions. Send me a mail and I'll try my best to get back to you soon-ish!</p>
      <a class="inline-block" href="mailto:joakim.wimmerstedt@gmail.com">📬 Drop me a message →</a>
    </section>
  </article>
</main>

<footer class="flex-1 flex flex-row justify-center mb-8">
  <a rel="external" href="https://github.com/cupofjoakim" target="_blank" class="mr-4"><img src="/icon-github.svg" alt="Github"></a>
  <a rel="external" href="https://www.linkedin.com/in/joakimwimmerstedt" target="_blank" class="mr-4"><img src="/icon-linkedin.svg" alt="Linkedin"/></a>
  <a rel="external" href="https://twitter.com/cupofjoakim" target="_blank" class="mr-4"><img src="/icon-twitter.svg" alt="Twitter"></a>
  <a rel="me" href="https://mas.to/@cupofjoakim" target="_blank"><img src="/icon-mastodon.svg" alt="Mastodon"></a>
</footer>

<style lang="postcss">
  * {
    box-sizing: border-box;
  }

  :root {
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  @media only screen and (min-width: 960px) {
    :root {
      font-size: 18px;
    }
  }

  article {
    width: 100%;
    max-width: 1024px;
  }

  footer a:hover, footer a:focus {
    opacity: .4;
  }
</style>
