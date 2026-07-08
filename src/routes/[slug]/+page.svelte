<script lang="ts">
    
    let { data } = $props();

</script>

<main class="flex flex-col md:gap-16 lg:flex-row lg:gap-0 bg-white">

     <header class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr]">

         <div class="col-span-full row-span-full md:w-2/3
             lg:col-start-1 lg:col-end-6 lg:col-span-2 lg:w-full lg:row-start-1">
            <picture>
                <source srcset={data.item?.images?.hero?.large} media="(min-width: 48rem)" />
                <img src={data.item?.images?.hero?.small} alt={data.item?.name} class="w-full h-full lg:h-140 object-cover" />
            </picture>
        </div>

        <div class="col-span-full row-span-full self-end z-10 w-10/12 translate-y-1/2
            md:col-start-2 md:self-start md:w-full md:translate-y-0
              lg:h-full lg:justify-self-end lg:col-start-5">

            <div class="bg-white flex flex-col gap-2 md:gap-6 p-6 md:p-0 md:pb-16 md:pl-16
                lg:translate-x-[-25%]">
                <h1 class="text-xl md:text-7xl font-extrabold">{data.item?.name}</h1>
                <p class="text-xs text-gray-600">{data.item?.artist?.name}</p>
            </div>
            <div class="w-full bg-transparent lg:bg-white md:grid md:grid-cols-2 md:justify-items-start lg:grid-cols-1
                lg:justify-items-start lg:grid-rows-3">
                <img src={data.item?.artist?.image} alt={data.item?.artist?.name} 
                    class="col-start-2 w-16 md:w-32 h-auto rounded-lg 
                        lg:col-start-1 lg:row-start-3 lg:translate-x-1/4" />
            </div>

        </div>
    </header>
    <article class="flex flex-col gap-4 lg:min-w-5/12 lg:items-end xl:items-center">
        <span class="text-8xl md:text-9xl xl:text-[9rem] text-gray-600/10 z-20 inline-block self-end md:self-start translate-y-1/2 md:translate-y-3/4
                    lg:self-end xl:self-center xl:translate-x-1/4"
            >{data.item?.year}</span>
        <div class="flex flex-col gap-16 md:max-w-md lg:max-w-sm md:self-center lg:self-end xl:self-center">
            <p class="mt-auto text-sm text-gray-500 font-bold leading-7 tracking-tight text-balance"
                >{data.item?.description}</p>
            <a  class="uppercase text-sm text-gray-500"
                href={data.item?.source} target="_blank" rel="noopener noreferrer">Go to source</a>
        </div>
    </article>
</main>
