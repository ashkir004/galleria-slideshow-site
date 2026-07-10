<script lang="ts">
    import { cn } from "$lib/utils";
	import ArtworkDescription from "../domain/ArtworkDescription.svelte";

    let { data, class: className = '' } = $props();
</script>

<ArtworkDescription {data} class={cn(``, className)} />