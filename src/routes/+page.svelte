<script>
  import AboutMe from '../articles/AboutMe.svelte';
  import Experience from '../articles/Experience.svelte';
  import Blob from '../components/Blob/Blob.svelte';
</script>

<Blob color="#0000FF" />
<article
  class="px-4 sm:px-6 py-4 text-xl flex flex-col justify-center min-h-screen max-w-screen-lg w-full"
  id="intro"
>
  <h1 class="text-7xl font-semibold z-10">Hej, I'm Joakim.</h1>

  <p class="my-10 text-3xl max-w-l lg:max-w-xl lg:max-w-2xl z-10">
    I’m a fullstack developer based in Stockholm, Sweden. I build things to solve problems.
  </p>

  <div>
    <a class="inline-block group transition-all" href="#about-me">
      Learn more <span class="inline-block transition-all group-hover:translate-x-4">→</span>
    </a>
  </div>
</article>

<article
  class="px-4 sm:px-6 py-4 pt-24 sm:pt-36 text-base flex flex-col justify-center max-w-screen-lg w-full"
  id="about-me"
>
  <AboutMe />
</article>

<article
  class="px-4 sm:px-6 py-4 pt-24 sm:pt-36 text-base flex flex-col justify-center max-w-screen-lg w-full"
  id="experience"
>
  <Experience />
</article>

<article
  class="px-4 sm:px-6 py-24 text-base flex flex-col justify-center text-center max-w-screen-lg w-full"
  id="contact"
>
  <section class="bg-blue-50 rounded-3xl py-12 md:py-24 px-6 md:px-12">
    <h2 class="text-4xl xl:text-5xl font-bold mb-8">Say Hi!</h2>
    <p class="mb-8">
      While I'm not currently looking for new opportunities, I'm always eager to talk or answer
      questions. Send me a mail and I'll try my best to get back to you soon-ish!
    </p>
    <a class="inline-block group transition-all" href="mailto:joakim.wimmerstedt@gmail.com">
      📬 Drop me a message <span class="inline-block transition-all group-hover:translate-x-4"
        >→</span
      >
    </a>
  </section>
</article>
