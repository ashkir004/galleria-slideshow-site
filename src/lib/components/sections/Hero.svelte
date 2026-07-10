<script lang="ts">
	import ArtistThumbnail from "../domain/ArtistThumbnail.svelte";
    import Artwork from "../domain/Artwork.svelte";
    import ArtworkTitle from "../domain/ArtworkTitle.svelte";
	import { cn } from "$lib/utils";

	let { data, class: className = '' } = $props();
</script>

<header
	class={cn(`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] lg:max-h-max
     2xl:grid-cols-4`, className)}
>
	<Artwork {data} />

	<div
		class="col-span-full row-span-full self-end z-10 w-10/12 translate-y-1/2
            md:col-start-2 md:self-start md:w-full md:translate-y-0 flex flex-col
              lg:h-full lg:justify-self-end lg:col-start-5
              2xl:col-start-3"
	>
		<ArtworkTitle {data} />
		<ArtistThumbnail {data} />
	</div>
</header>
