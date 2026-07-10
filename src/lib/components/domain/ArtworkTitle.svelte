<script lang="ts">
	import { cn } from "$lib/utils";

	let { 	data, 
			class: className = '' 
		} = $props();
</script>

	<div class={cn(
		"bg-white flex flex-col gap-2 md:gap-6 lg:h-full p-6 md:p-0 md:pb-16 md:pl-16",
		"lg:translate-x-[-40%] xl:translate-x-[-50%] 2xl:translate-x-[-25%]",
		className
	)}>
	<h1
		class="text-xl md:text-3xl xl:text-5xl 2xl:text-6xl 2xl:leading-20 font-extrabold text-balance"
	>
		{data.item?.name}
	</h1>
	<p class="text-xs text-gray-600">{data.item?.artist?.name}</p>
</div>
