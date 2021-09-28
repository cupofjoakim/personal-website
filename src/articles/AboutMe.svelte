<script>
  import HoverableWord from "../components/HoverableWord.svelte";
</script>

<section class="flex flex-col-reverse items-center md:flex-row sm:items-start sm:items-center justify-around">
  <div>
    <h2 class="text-2xl xl:text-5xl	font-semibold mb-6">About me</h2>
    <div>
      <p class="mb-6 xl:text-2xl">
        Hej! I'm Joakim, a fullstack developer based in Stockholm, Sweden.
      </p>

      <p class="mb-6 xl:text-2xl">
        I enjoy solving problems. Be it through designing a new system,
        automating a manual task or implementing some cool interface changes,
        I'm always happy to do it.
      </p>

      <p class="mb-6 xl:text-2xl">
        In 2018 I joined SBAB where I've worked on a multitude of projects, like
        building a new internet bank with React and GraphQL or levaraging Kafka
        to tell everyone about the wonders of GDPR (<a
          href="https://twitter.com/rianjohnson/status/999730569641525248?s=20"
          target="_blank">you remember, right?</a
        >). I'm also a Hyper Island graduate with a history in advertising,
        where I've worked with large clients such as Nike, Samsung, WWF and
        Swish.
      </p>

      <p class="mb-10 xl:text-2xl">
        Currently fascinated by
        <HoverableWord
          image="https://media.giphy.com/media/90CquRgNWDgUcUMlPc/giphy.gif"
          >Elixir,</HoverableWord
        >
        <HoverableWord
          image="https://media.giphy.com/media/BCIoXfA95d1ba/giphy.gif"
          >Svelte</HoverableWord
        > and
        <HoverableWord
          image="https://media.giphy.com/media/sTUWqCKtxd01W/giphy.gif"
          >Pizza</HoverableWord
        >🍕
      </p>
    </div>

    <div>
      <a
        class="inline-block border-2 border-current p-2 px-4 w-auto xl:text-2xl xl:p-4 xl:px-8"
        href="#experience"
      >
        Where I've worked →
      </a>
    </div>
  </div>

  <div class="md:ml-8 mb-8 md:mb-0 profile-pic">
    <img src="/me_bw.jpg" alt="Me in sunglasses on vacation in budapest" />
  </div>
</section>

<style>
  .profile-pic {
    box-shadow: 1rem -1rem 0 #ad1400;
    transition: 0.3s ease;
    position: relative;
    max-width: 66%;
  }

  .profile-pic::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ad1400;
    opacity: 0;
    transition: 0.3s ease;
    mix-blend-mode: multiply;
  }

  .profile-pic:hover {
    box-shadow: 0rem 0rem 0 #ad1400;
  }

  .profile-pic:hover::after {
    opacity: 1;
  }

  p {
    max-width: 40em;
  }
</style>
