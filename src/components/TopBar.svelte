<script>
    import throttle from 'just-throttle';

    let expanded = false;
	let lastY;
    let scrollGoingDown = true; 

    const handleScroll = (e) => {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st === 0) {
            scrollGoingDown = true;
        } else {
            scrollGoingDown = st > lastY;
        }
        lastY = st <= 0 ? 0 : st;

    }

    const toggleMenu = () => expanded = !expanded;
</script>

<svelte:window on:scroll={throttle(handleScroll, 200)}/>

<div class={`h-4 z-50 topbar`}></div>
<header class={`z-50 fixed top-0 right-0 left-0 flex show-on-scroll`}>
    <div class={`flex flex-1 px-4 pt-6 pb-4 transition-all duration-500 transform justify-between items-center flex ` + (!scrollGoingDown && !expanded ? 'opacity-full' : '-translate-y-full opacity-0')}>
        <div class="text-2xl fancy font-semibold z-10">
            <a href="#intro">Hej, I'm Joakim.</a>
        </div>
        <button on:click={toggleMenu} class="db md:hidden">
            <svg viewBox='-5 0 10 8' width='40' height='40'>
                <line y2='8' 
                      stroke='currentColor' 
                      stroke-width='10' 
                      stroke-dasharray='1 2'/>
              </svg>
        </button>
    </div>
    <nav class={`fixed md:relative z-50 inset-0  flex transition-transform duration-500  transform ${expanded ? '' : 'translate-x-full md:translate-x-0'}`}>
        <div class="flex-1 flex-col md:flex-row flex justify-center items-center text-2xl md:text-base">
            <div class="flex-col md:flex-row flex">
                <a class="mb-6 md:mb-0 " href="#intro" on:click={toggleMenu}>01. Intro</a>
                <a class="mb-6 md:mb-0 " href="#about-me" on:click={toggleMenu}>02. About me</a>
                <a class="mb-6 md:mb-0 " href="#experience" on:click={toggleMenu}>03. Experience</a>
                <a class="mb-6 md:mb-0 " href="#contact" on:click={toggleMenu}>04. Contact</a>
                <button class="mt-10 block md:hidden" on:click={toggleMenu}>close</button>
            </div>
        </div>
    </nav>
</header>


<style>
    nav {
        background: #AD1400;
        color: #f8efdc;        
    }

    @media screen and (min-width: 768px) {
        nav {
            background: transparent;
            color: currentColor;
        }
    }

    .show-on-scroll {
        background: #f8efdc;
        border-bottom: .2rem solid #AD1400;
    }

    .fancy {
        font-family: "DM Serif Display", serif;
    }
    
    .topbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: .5rem;
        background: #AD1400;
        transition: .5s ease-in-out;
    }
</style>