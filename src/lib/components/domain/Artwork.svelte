<script lang="ts">
    import { cn } from "$lib/utils";

    let { data, class: className = '' } = $props();
</script>

<div
    class={cn(`col-span-full row-span-full md:w-2/3
            lg:col-start-1 lg:col-end-5 lg:col-span-2 lg:w-full lg:row-start-1 lg:max-h-max
            2xl:col-end-4 2xl:max-w-max`, className)}
>
    <picture>
        <source srcset={data.item?.images?.hero?.large} media="(min-width: 48rem)" />
        <img
            src={data.item?.images?.hero?.small}
            alt={data.item?.name}
            class="w-full h-full lg:h-140 object-contain object-top-left"
        />
    </picture>
</div>