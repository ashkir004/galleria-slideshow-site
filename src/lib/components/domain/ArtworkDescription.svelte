<script lang="ts">
	import { cn } from '$lib/utils';

	let { data, class: className = '' } = $props();
</script>

<article class={cn('flex flex-col lg:items-end xl:items-center', className)}>
	<span
		class="text-8xl md:text-9xl xl:text-[9rem] text-gray-600/10 z-20 inline-block self-end md:self-start
					-translate-y-2/3
					md:translate-y-3/4
					lg:translate-y-1/4
                    lg:self-end xl:self-center xl:translate-x-1/4">{data.item?.year}</span
	>
	<div
		class="flex flex-col gap-16 md:max-w-md lg:max-w-xs md:self-center lg:self-end xl:self-center
		-translate-y-1/4 md:translate-y-0 lg:-translate-y-1/9"
	>
		<p class="mt-auto text-sm text-gray-500 font-bold leading-7 tracking-tight text-balance">
			{data.item?.description}
		</p>
		<a
			class="uppercase text-sm text-gray-500 hover:text-black"
			href={data.item?.source}
			target="_blank"
			rel="noopener noreferrer">Go to source</a
		>
	</div>
</article>
