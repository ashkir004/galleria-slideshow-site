<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon-32x32.png';
    import Logo from '$lib/assets/shared/logo.svg';
	import { formatSlug } from '$lib/utils';
	import { setContext } from 'svelte';
	import { Slideshow } from '$lib/uiState.svelte';

	let { children, data } = $props();
	const slideshow = new Slideshow();

	setContext('slideshowCtx', slideshow);

	function toggleSlideshow() {
		if (slideshow.slideshowStarted) {
			slideshow.stopSlideshow();
		} else {
			slideshow.startSlideshow(data.summaries[0].name);
		}
	}

</script>

<svelte:head>
	<meta name="description" content="Galleria Slideshow" />
	<title>Galleria Slideshow</title>
	<link rel="icon" href={favicon} />
</svelte:head>


<div class="p-7 flex flex-col gap-10">
	<header class="flex flex-row justify-between items-stretch">
		<a href="/" class="inline-block w-28 lg:w-32">
			<img src={Logo} alt="Galleria Slideshow" class="" />
		</a>
	
		<a href={slideshow.slideshowStarted ? `/` + formatSlug(data.summaries[0].name) : '/'}
			onclick={() => toggleSlideshow()}
			class="min-h-8 flex flex-row items-center text-xs text-muted-foreground uppercase hover:text-primary active:text-primary cursor-pointer">
			{slideshow.slideshowStarted ? 'Stop Slideshow' : 'Start Slideshow'}
		</a>
	</header>
	{@render children()}
</div>
<!-- <style>
	* {
		outline: 1px solid red;
	}
</style> -->