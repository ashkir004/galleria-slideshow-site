<script lang="ts">
	import ArtworkDescription from '$lib/components/domain/ArtworkDescription.svelte';
    import Hero from '$lib/components/sections/Hero.svelte';

    
    let { data } = $props();

</script>

<main class="bg-white grid grid-cols-1 
    lg:grid-cols-2
"
>
    <Hero {data} class="" />
    <ArtworkDescription {data} />
</main>