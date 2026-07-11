<script lang="ts">
	import { cn } from "$lib/utils";
	let { data, class: className = '' } = $props();
</script>

<div
	class={cn(``, 
				className)}
>
	<img
		src={data.item?.artist?.image}
		alt={data.item?.artist?.name}
		class="w-16 md:w-32 h-auto rounded-lg"
	/>
</div>
