<script lang="ts">
    import Logo from '$lib/assets/shared/logo.svg';

    import dataFile from '$lib/data.json';

    $effect(() => {
        console.log(dataFile);
    });
</script>

<div class="flex flex-row justify-between items-stretch">
    <a href="#/" class="inline-block w-28 lg:w-32">
        <img src={Logo} alt="Galleria Slideshow" class="" />
    </a>

    <button class="min-h-8 bg-transparent text-xs text-muted-foreground uppercase hover:text-primary active:text-primary cursor-pointer">Start Slideshow</button>
</div>

<main>
    <div class="columns-1 md:columns-2 lg:columns-4 gap-10">
    {#each dataFile as item (item.name)}
        <div class="grid grid-cols-1 grid-rows-1 mb-10 last:mb-0 md:max-h-max break-inside-avoid hover:cursor-pointer">
            <div class="col-span-full row-span-full">
                <img src={item.images.thumbnail} alt={item.name} class="w-full h-auto rounded-lg" />
            </div>
            <div class="flex flex-col gap-3 mt-4 col-span-full row-span-full z-10 self-end p-7 
                        bg-linear-to-t from-black/80 to-transparent rounded-lg">
                <h3 class="text-xl font-extrabold text-white text-balance">{item.name}</h3>
                <p class="text-xs text-muted/90 font-semibold">{item.artist.name}</p>
            </div>
            <span class="col-span-full row-span-full bg-transparent hover:bg-white/40 z-20"></span>
        </div>
    {/each}
    </div>
</main>
<!-- <style>
    * {
        outline: 1px solid red;
    }
</style> -->