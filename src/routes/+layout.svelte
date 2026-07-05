<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon-32x32.png';

	let { children } = $props();
</script>

<svelte:head>
	<meta name="description" content="Galleria Slideshow" />
	<title>Galleria Slideshow</title>
	<link rel="icon" href={favicon} />
</svelte:head>
{@render children()}
