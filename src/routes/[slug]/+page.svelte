<script lang="ts">
	import ArtworkDescription from '$lib/components/domain/ArtworkDescription.svelte';
    import Hero from '$lib/components/sections/Hero.svelte';
    import backBtn from '$lib/assets/shared/icon-back-button.svg';
    import nextBtn from '$lib/assets/shared/icon-next-button.svg';

    
    let { data } = $props();

</script>

<main class="bg-white grid grid-cols-1 
    lg:grid-cols-2
"
>
    <Hero {data} class="" />
    <ArtworkDescription {data} />
</main>

<footer class="bg-white flex flex-row justify-between items-center gap-4
    border-t border-gray-300 px-6 py-4 md:px-10 md:py-6">
    <div class="flex flex-col gap-2">
        <p class="font-bold text-sm md:text-lg">{data.item?.name}</p>
        <p class="text-gray-600 text-xs md:text-sm">{data.item?.artist?.name}</p>
    </div>
    <div class="flex flex-row gap-6">
        <button aria-label="previous slide" class="cursor-pointer w-4 md:w-6">
            <img src={backBtn} alt="previous slide" />
        </button>
        <button aria-label="next slide" class="cursor-pointer w-4 md:w-6">
            <img src={nextBtn} alt="next slide" />
        </button>
    </div>
</footer>