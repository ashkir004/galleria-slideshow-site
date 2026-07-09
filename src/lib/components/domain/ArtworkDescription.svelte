<script lang="ts">
	let { data } = $props();
</script>

<article class="flex flex-col gap-4 lg:min-w-5/12 lg:items-end xl:items-center">
	<span
		class="text-8xl md:text-9xl xl:text-[9rem] text-gray-600/10 z-20 inline-block self-end md:self-start translate-y-1/2 md:translate-y-3/4
                    lg:self-end xl:self-center xl:translate-x-1/4">{data.item?.year}</span
	>
	<div
		class="flex flex-col gap-16 md:max-w-md lg:max-w-md md:self-center lg:self-end xl:self-center"
	>
		<p class="mt-auto text-sm text-gray-500 font-bold leading-7 tracking-tight text-balance">
			{data.item?.description}
		</p>
		<a
			class="uppercase text-sm text-gray-500"
			href={data.item?.source}
			target="_blank"
			rel="noopener noreferrer">Go to source</a
		>
	</div>
</article>
