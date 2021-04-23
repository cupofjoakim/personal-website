<script>
  import AboutMe from "../articles/AboutMe.svelte";
  import Experience from "../articles/Experience.svelte";

  import TopBar from "../components/TopBar.svelte";
  import Blob from "../components/Blob/Blob.svelte";
</script>

<TopBar />
<main class="flex-1 flex flex-col items-center mt-10 sm:mt-4 text-gray-800">
  <Blob color="#AD1400" />
  <article class="px-6 py-4 text-xl flex flex-col justify-center" id="intro">
    <h1 class="text-7xl	font-semibold z-10">
      Hej, I'm Joakim.
    </h1>

    <p class="my-10 text-3xl max-w-l lg:max-w-xl lg:max-w-2xl z-10">
      I’m a fullstack developer based in Stockholm, Sweden. I build things to
      solve problems.
    </p>

    <div>
      <a
        class="inline-block border-2 border-current p-2 px-4 w-auto"
        href="#about-me"
      >
        Learn more →
      </a>
    </div>
  </article>

  <article class="px-6 py-4 text-base flex flex-col justify-center" id="about-me">
    <AboutMe />
  </article>

  <article class="px-6 py-4 text-base flex flex-col justify-center w-full" id="experience">
    <Experience />
  </article>

  <article class="px-6 py-4 text-base flex flex-col justify-center text-center text-xl md:text-2xl" id="contact">
    <section>
      <h2 class="text-7xl	font-semibold mb-8 red-underline">Say Hi!</h2>
      <p class="mb-8">While I'm not currently looking for new opportunities, I'm always eager to talk or answer questions. Send me a mail and I'll try my best to get back to you soon-ish!</p>
      <a class="inline-block border-2 border-current p-2 px-4 w-auto" href="mailto:joakim.wimmerstedt@gmail.com">Drop me a message →</a>
    </section>
  </article>
</main>

<footer class="flex-1 flex flex-row justify-center pb-8 -mt-12">
  <a rel="external" href="https://github.com/cupofjoakim" target="_blank"><img src="/icon-github.svg" alt="Github"></a>
  <a rel="external" href="https://www.linkedin.com/in/joakimwimmerstedt" target="_blank" class="mx-4"><img src="/icon-linkedin.svg" alt="Linkedin"/></a>
  <a rel="external" href="https://twitter.com/cupofjoakim" target="_blank"><img src="/icon-twitter.svg" alt="Twitter"></a>
</footer>

<style>
  * {
    box-sizing: border-box;
  }

  :root {
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  @media only screen and (min-width: 600px) {
    :root {
      font-size: 18px;
    }
  }

  @media only screen and (min-width: 960px) {
    :root {
      font-size: 20px;
    }
  }

  article {
    min-height: 100vh;
    max-width: 100%;
  }

  @media only screen and (min-width: 1024px) {
    article {
      max-width: 1024px;
    }
  }

  footer a:hover, footer a:focus {
    opacity: .4;
  }

  .red-underline {
    text-decoration: underline;
    text-decoration-color: #ad1400;
  }
</style>
