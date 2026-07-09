<script lang="ts">
	import Logo from '$lib/assets/shared/logo.svg';
	import { formatSlug } from '$lib/utils';
	import { getContext } from 'svelte';
	import { Slideshow } from '$lib/uiState.svelte';

	const slideshow: Slideshow = getContext('slideshowCtx');
	let { data } = $props();

	function toggleSlideshow() {
		if (slideshow.slideshowStarted) {
			slideshow.stopSlideshow();
		} else {
			slideshow.startSlideshow(data.summaries[0].name);
		}
	}
</script>

<header class="flex flex-row justify-between items-stretch">
	<a href="/" class="inline-block w-28 lg:w-32">
		<img src={Logo} alt="Galleria Slideshow" class="" />
	</a>

	<a
		href={slideshow.slideshowStarted ? `/` + formatSlug(data.summaries[0].name) : '/'}
		onclick={() => toggleSlideshow()}
		class="min-h-8 flex flex-row items-center text-xs text-muted-foreground uppercase hover:text-primary active:text-primary cursor-pointer"
	>
		{slideshow.slideshowStarted ? 'Stop Slideshow' : 'Start Slideshow'}
	</a>
</header>
