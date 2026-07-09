<script lang="ts">
	import ArtDescription from '$lib/components/ArtDescription.svelte';

    
    let { data } = $props();

</script>

<main class="flex flex-col md:gap-16 lg:flex-row lg:gap-0 bg-white">

     <header class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] lg:max-h-max
     2xl:grid-cols-4 ">

         <div class="col-span-full row-span-full md:w-2/3
             lg:col-start-1 lg:col-end-5 lg:col-span-2 lg:w-full lg:row-start-1 lg:max-h-max
             2xl:col-end-4 2xl:max-w-max">
            <picture>
                <source srcset={data.item?.images?.hero?.large} media="(min-width: 48rem)" />
                <img src={data.item?.images?.hero?.small} alt={data.item?.name} class="w-full h-full lg:h-140 object-contain object-top-left" />
            </picture>
        </div>

        <div class="col-span-full row-span-full self-end z-10 w-10/12 translate-y-1/2
            md:col-start-2 md:self-start md:w-full md:translate-y-0 flex flex-col
              lg:h-full lg:justify-self-end lg:col-start-5
              2xl:col-start-3">

            <div class="bg-white flex flex-col gap-2 md:gap-6 lg:h-full p-6 md:p-0 md:pb-16 md:pl-16
                lg:translate-x-[-40%]  xl:translate-x-[-50%] 2xl:translate-x-[-25%]">
                <h1 class="text-xl md:text-3xl xl:text-5xl 2xl:text-6xl 2xl:leading-20 font-extrabold text-balance">{data.item?.name}</h1>
                <p class="text-xs text-gray-600">{data.item?.artist?.name}</p>
            </div>
            <div class="w-full bg-transparent lg:bg-white md:grid md:grid-cols-2 md:justify-items-start lg:grid-cols-1
                lg:justify-items-start lg:grid-rows-2 2xl:grid-cols-2 2xl:justify-items-center">
                <img src={data.item?.artist?.image} alt={data.item?.artist?.name} 
                    class="col-start-2 w-16 md:w-32 h-auto rounded-lg 
                        lg:col-start-1 lg:row-start-2 lg:translate-x-1/4 xl:translate-x-[12%] 2xl:translate-x-0" />
            </div>

        </div>
    </header>

    <ArtDescription {data} />
</main>
<!-- <style>
    * {
        outline: 1px solid red;
    }
</style> -->