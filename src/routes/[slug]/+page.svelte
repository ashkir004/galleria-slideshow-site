<script lang="ts">
	import ArtworkDescription from '$lib/components/domain/ArtworkDescription.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import backBtn from '$lib/assets/shared/icon-back-button.svg';
	import nextBtn from '$lib/assets/shared/icon-next-button.svg';
	import { getContext } from 'svelte';
	import type { Slideshow } from '$lib/uiState.svelte';
	import { formatSlug } from '$lib/utils.js';

	let slideshow: Slideshow = getContext('slideshowCtx');

	let { data } = $props();

	let currentItem = $derived(data?.item);
	let nextItem = $derived(slideshow.getNextItem(currentItem));
	let previousItem = $derived(slideshow.getPreviousItem(currentItem));
</script>

<main
	class="bg-white grid grid-cols-1
    lg:grid-cols-2
"
>
	<Hero {data} class="" />
	<ArtworkDescription {data} />
</main>

<footer
	class="bg-white flex flex-row justify-between items-center gap-4
    border-t border-gray-300 px-6 py-4 md:px-10 md:py-6"
>
	<div class="flex flex-col gap-2">
		<p class="font-bold text-sm md:text-lg">{data.item?.name}</p>
		<p class="text-gray-600 text-xs md:text-sm">{data.item?.artist?.name}</p>
	</div>
	<div class="flex flex-row gap-6">
		<a
			href={previousItem ? '/' + formatSlug(previousItem?.name) : '/' + formatSlug(currentItem?.name)}
			data-disabled={previousItem ? false : true}
			onclick={previousItem ? null : (e) => e.preventDefault()}
			class="text-xs text-gray-600 hover:text-primary active:text-primary w-4 md:w-6
            data-disabled:cursor-not-allowed data-disabled:opacity-50"
		>
			<img src={backBtn} alt="previous slide" />
		</a>
		<a
			href={nextItem ? '/' + formatSlug(nextItem?.name) : '/' + formatSlug(currentItem?.name)}
			data-disabled={nextItem ? false : true}
			onclick={nextItem ? null : (e) => e.preventDefault()}
			class="text-xs text-gray-600 hover:text-primary active:text-primary w-4 md:w-6
            data-disabled:cursor-not-allowed data-disabled:opacity-50"
		>
			<img src={nextBtn} alt="next slide" />
		</a>
	</div>
</footer>