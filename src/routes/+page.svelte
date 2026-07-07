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
        <div class="flex flex-col mb-10 last:mb-0 md:max-h-max break-inside-avoid">
            <img src={item.images.thumbnail} alt={item.name} class="w-full h-auto rounded-lg aspect-square md:aspect-auto" />
        </div>
    {/each}
    </div>
</main>
<!-- <style>
    * {
        outline: 1px solid red;
    }
</style> -->