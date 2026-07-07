<script lang="ts">
    import { formatSlug } from '$lib/utils';
    import { getContext } from 'svelte';
    import { UIState } from '$lib/uiState.svelte';
    const uiCtx: UIState = getContext('uiCtx');

    let { data } = $props();

</script>

<main>
    <div class="columns-1 md:columns-2 lg:columns-4 gap-10">
    {#each data.summaries as item (item.name)}
        <a href={`/` + formatSlug(item.name)} onclick={() => uiCtx.startSlideshow(item.name)}
             class="inline-block mb-10 last:mb-0 hover:cursor-pointer break-inside-avoid">
            <div class="grid grid-cols-1 grid-rows-1 break-inside-avoid hover:cursor-pointer">
                <div class="col-span-full row-span-full">
                    <img src={item.thumbnail} alt={item.name} class="w-full h-auto rounded-lg" />
                </div>
                <div class="flex flex-col gap-3 mt-4 col-span-full row-span-full z-10 self-end p-7 
                            bg-linear-to-t from-black/80 to-transparent rounded-lg">
                    <h3 class="text-xl font-extrabold text-white text-balance">{item.name}</h3>
                    <p class="text-xs text-muted/90 font-semibold">{item.artist.name}</p>
                </div>
                <span class="col-span-full row-span-full bg-transparent hover:bg-white/40 z-20"></span>
            </div>
        </a>
    {/each}
    </div>
</main>
<!-- <style>
    * {
        outline: 1px solid red;
    }
</style> -->