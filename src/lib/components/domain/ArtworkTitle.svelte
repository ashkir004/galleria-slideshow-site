<script lang="ts">
	import { cn } from "$lib/utils";

	let { 	data, 
			class: className = '' 
		} = $props();
</script>

	<div class={cn(
		"p-6 flex flex-col gap-2",
		className
	)}>
	<h1
		class="font-extrabold 
		text-balance text-[1.5rem] leading-tight md:text-[3.5rem] md:leading-[1.15]
		lg:text-[2.5rem]
		"
	>
		{data.item?.name}
	</h1>
	<p class="text-xs text-gray-600">{data.item?.artist?.name}</p>
</div>
