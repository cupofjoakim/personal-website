<script>
  import HoverableWord from "../components/HoverableWord.svelte";
</script>

<section class="w-full flex flex-col sm:flex-row">
  <div class="w-full sm:w-2/5">
    <h2 class="text-4xl xl:text-5xl font-bold mb-4 xl:mb-8">About <HoverableWord
      image="/me_bw.jpg"
      >me</HoverableWord
    ></h2>
  </div>
  <div class="w-full sm:w-3/5 flex flex-col max-w-prose gap-4 sm:pl-8">
      <p class="mb-2">
        Hej! I'm Joakim, a senior software engineer based in Stockholm, Sweden.
      </p>

      <p class="mb-2">
        I enjoy solving problems. Be it through designing a new system,
        automating a manual task or implementing some cool interface changes,
        I'm always up to the task.
      </p>

      <p>
        My current fascinations and learning focuses are
        <HoverableWord
          image="https://media.giphy.com/media/S984YkgY62vvSUAwhv/giphy.gif"
          >Micronaut,</HoverableWord
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
</section>
