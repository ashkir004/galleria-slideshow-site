<script lang="ts">
	import ArtworkDescription from "../domain/ArtworkDescription.svelte";

    let { data } = $props();
</script>

<ArtworkDescription {data} />