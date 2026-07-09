<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon-32x32.png';
	import Header from '$lib/components/sections/Header.svelte';
	import { setContext } from 'svelte';
	import { Slideshow } from '$lib/uiState.svelte';

	let { children, data } = $props();
	const slideshow = new Slideshow();

	setContext('slideshowCtx', slideshow);
</script>

<svelte:head>
	<meta name="description" content="Galleria Slideshow" />
	<title>Galleria Slideshow</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="p-7 flex flex-col gap-10">
	<Header {data} />
	{@render children()}
</div>

<!-- <style>
	* {
		outline: 1px solid red;
	}
</style> -->
