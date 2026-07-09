<script lang="ts">
	import ArtworkDescription from '$lib/components/domain/ArtworkDescription.svelte';
    import Hero from '$lib/components/sections/Hero.svelte';

    
    let { data } = $props();

</script>

<main class="flex flex-col md:gap-16 lg:flex-row lg:gap-0 bg-white">
    <Hero {data} />
    <ArtworkDescription {data} />
</main>


<!-- <style>
    * {
        outline: 1px solid red;
    }
</style> -->