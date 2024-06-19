<script>
    import { onMount, onDestroy } from 'svelte';
    import { tick } from 'svelte';

    let showFooter = false;
    let lastScrollY = 0;

    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            const currentScrollY = window.scrollY;
            const screenHeight = window.innerHeight;

            if (currentScrollY > screenHeight / 2) {
                // Show footer if scrolling down
                showFooter = currentScrollY > lastScrollY;
            } else {
                // Hide footer if above half the screen height
                showFooter = false;
            }

            lastScrollY = currentScrollY;
            tick(); // Ensure Svelte updates the DOM
        }
    };

    onMount(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
        }
    });

    onDestroy(() => {
        if (typeof window !== 'undefined') {
            window.removeEventListener('scroll', handleScroll);
        }
    });
</script>

<style>
    .show {
        transform: translateY(0);
    }
    .hide {
        transform: translateY(100%);
    }
</style>

<footer class="fixed bottom-0 left-0 transition-all duration-300 w-full py-2 bg-ncnl50 flex flex-col items-center" class:show={showFooter} class:hide={!showFooter}>
    <div class="flex items-center justify-around gap-10 mx-3">
        <a href="https://www.instagram.com/ncnl__mx/" target="_blank"><i class="text-4xl fa-brands fa-square fa-instagram bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text"></i></a>
        <a href="tel:+526675856411"><i class="text-3xl fa fa-phone"></i></a>
        <a href="https://maps.app.goo.gl/GWfJdu8a4JgiF2Gx7" class="flex px-2 items-center" target="_blank"><i class="fa fa-location-dot text-3xl text-red-600"></i><p class="text-center">&thinsp;Boulevard Conquistadores, Blvrd Elbert, 80059</p></a>
    </div>
    <div class="">
    </div>
</footer>