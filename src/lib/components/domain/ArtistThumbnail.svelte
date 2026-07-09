<script lang="ts">
	let { data } = $props();
</script>

<div
	class="w-full bg-transparent lg:bg-white md:grid md:grid-cols-2 md:justify-items-start lg:grid-cols-1
                lg:justify-items-start lg:grid-rows-2 2xl:grid-cols-2 2xl:justify-items-center"
>
	<img
		src={data.item?.artist?.image}
		alt={data.item?.artist?.name}
		class="col-start-2 w-16 md:w-32 h-auto rounded-lg
                        lg:col-start-1 lg:row-start-2 lg:translate-x-1/4 xl:translate-x-[12%] 2xl:translate-x-0"
	/>
</div>
