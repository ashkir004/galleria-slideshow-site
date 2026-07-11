<script lang="ts">
    import { cn } from "$lib/utils";

    let { data, class: className = '' } = $props();
</script>

<div
    class={cn(``, className)}
>
    <picture>
        <source srcset={data.item?.images?.hero?.large} media="(min-width: 48rem)" />
        <img
            src={data.item?.images?.hero?.small}
            alt={data.item?.name}
            class="w-full h-full object-contain object-top-left"
        />
    </picture>
</div>