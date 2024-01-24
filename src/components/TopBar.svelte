<script lang="ts">
  import throttle from 'just-throttle';

  export let alwaysExpanded = false;

  let expanded = false;
  let lastY = 0;
  let scrollGoingDown = true;
  let showMenu = alwaysExpanded;

  const handleScroll = (e: UIEvent) => {
    if (alwaysExpanded) return;

    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st === 0) {
      scrollGoingDown = true;
      showMenu = false;
    } else {
      scrollGoingDown = st > lastY;
      showMenu = true;
    }

    lastY = st <= 0 ? 0 : st;
  };

  const toggleMenu = () => (expanded = !expanded);

  const links = Object.entries({
    '/#intro': 'Intro',
    '/#about-me': 'About me',
    '/#experience': 'Experience',
    '/#contact': 'Contact',
    '/posts': 'Posts',
  });
</script>

<svelte:window on:scroll={throttle(handleScroll, 200)} />

<div class={`h-4 z-50 topbar`} />
<header class={`z-50 fixed top-0 right-0 left-0 flex`}>
  <div
    class={`flex-1 px-4 sm:px-6 pt-6 pb-4 transition-all duration-500 show-on-scroll transform justify-between items-center flex ${
      showMenu ? '' : '-translate-y-full'
    }`}
  >
    <div class="text-2xl fancy font-semibold z-10">
      <a href="/#intro">Hej, I'm Joakim.</a>
    </div>
    <button on:click={toggleMenu} aria-label="Open menu" class="db md:hidden">
      <svg viewBox="-5 0 10 8" width="40" height="40">
        <line y2="8" stroke="currentColor" stroke-width="10" stroke-dasharray="1 2" />
      </svg>
    </button>

    <nav class={`relative z-50 inset-0 hidden md:flex`}>
      <div class="flex-1 flex-row flex justify-center items-center text-base">
        <div class="flex-row flex">
          {#each links as [link, text]}
            <a class="md:mr-4" href={link} on:click={toggleMenu}>{text}</a>
          {/each}
          <button class="mt-10 block md:hidden" on:click={toggleMenu}>close</button>
        </div>
      </div>
    </nav>
  </div>
  <nav
    class={`fixed z-50 inset-0 md:hidden flex transition-transform duration-500 transform ${
      expanded ? '' : 'translate-x-full'
    }`}
  >
    <div class="flex-1 flex-col flex justify-center items-center text-2xl">
      <div class="flex-col flex fancy">
        <h1 class="mb-12 text-4xl">Hej, I'm Joakim</h1>
        {#each links as [link, text]}
          <a class="mb-6" href={link} on:click={toggleMenu}>{text}</a>
        {/each}
        <button class="mt-10 block md:hidden" on:click={toggleMenu}>close</button>
      </div>
    </div>
  </nav>
</header>

<style lang="postcss">
  nav {
    background: var(--main-accent-color);
    color: var(--main-bg-color);
  }

  @media screen and (min-width: 768px) {
    nav {
      background: transparent;
      color: currentColor;
    }
  }

  .show-on-scroll {
    background: var(--main-bg-color);
    border-bottom: 0.2rem solid var(--main-accent-color);
  }

  .fancy {
    font-family: Roboto, sans-serif;
  }

  .topbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 0.5rem;
    background: var(--main-accent-color);
    transition: 0.5s ease-in-out;
  }
</style>
