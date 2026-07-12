<script lang="ts">
	import ArtistThumbnail from '../domain/ArtistThumbnail.svelte';
	import Artwork from '../domain/Artwork.svelte';
	import ArtworkTitle from '../domain/ArtworkTitle.svelte';
	import { cn } from '$lib/utils';
	import * as Dialog from '$lib/components/ui/dialog/index';
	import ArtworkLightbox from '../domain/ArtworkLightbox.svelte';

	let { data, class: className = '' } = $props();
</script>

<header
	class={cn(
		`
	grid grid-cols-1 
	md:grid-cols-3 
	lg:grid-cols-4
	lg:grid-rows-[auto_4rem]
	`,
		className
	)}
>
	<Artwork
		{data}
		class="col-span-full row-span-full
		md:col-start-1 md:col-end-3
		lg:col-start-1 lg:col-end-4
		lg:row-start-1 lg:row-end-2
	"
	/>

	<div
		class="flex flex-col
		max-w-5/6 -translate-y-1/4
		md:translate-y-0
		z-10 md:w-full
		md:col-start-2 md:col-end-4
		md:row-start-1
		md:justify-self-start
		lg:col-start-3 lg:col-end-5
		lg:justify-self-end
		lg:translate-x-[16%]
		lg:justify-between
		lg:row-span-full
		xl:translate-x-[20%]
		"
	>
		<ArtworkTitle {data} class="flex flex-col bg-white pl-8" />
		<ArtistThumbnail
			{data}
			class="
			md:flex md:flex-row 
			md:justify-end
			xl:justify-center
			"
		/>
	</div>
	<ArtworkLightbox
		{data}
		class="m-2 col-span-full row-span-full md:self-end lg:row-start-1 lg:row-end-2"
	/>
</header>
