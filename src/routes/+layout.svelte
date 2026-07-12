<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon-32x32.png';
	import Header from '$lib/components/sections/Header.svelte';
	import { setContext } from 'svelte';
	import { Slideshow } from '$lib/uiState.svelte';

	let { children, data } = $props();
	const slideshow = new Slideshow();

	setContext('slideshowCtx', slideshow);

	$effect(() => {
		slideshow.setItems(data.summaries);
	});
</script>

<svelte:head>
	<meta name="description" content="Galleria Slideshow" />
	<title>Galleria Slideshow</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="px-7 pt-7 flex flex-col gap-10 lg:gap-24 min-w-screen min-h-screen">
	<Header {data} class="pb-6 lg:pb-10 border-b border-gray-200" />
	{@render children()}
</div>
