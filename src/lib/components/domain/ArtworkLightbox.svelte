<script lang="ts">
	import { cn } from '$lib/utils';
	import * as Dialog from '$lib/components/ui/dialog/index';
	import viewIcon from '$lib/assets/shared/icon-view-image.svg';
	import { buttonVariants } from '../ui/button';

	type Props = {
		data: {
			item: {
				name: string;
				images: {
					gallery: string;
				};
			};
		};
		class?: string;
	};

	let { data, class: className = '' } = $props() as Props;

	$effect(() => {
		console.log('ArtworkLightbox data:', data);
	});
</script>

<div class={cn(``, className)}>
	<Dialog.Root>
		<Dialog.Trigger
			class="bg-black text-sm text-white p-2 md:p-4 flex flex-row items-center gap-4 
            shadow-sm cursor-pointer hover:bg-black/40"
		>
			<img src={viewIcon} alt="View Artwork" class="inline-block" />
			View Artwork
		</Dialog.Trigger>
		<Dialog.Overlay class="bg-black/60">
			<Dialog.Content
				class="p-0 flex flex-col gap-6 ring-0 md:min-w-lg lg:min-w-xl xl:min-w-2xl bg-transparent 
                overflow-y-auto max-h-[90vh]"
				showCloseButton={false}
			>
				<Dialog.Header class="flex flex-row justify-end">
					<Dialog.Close
						class={cn(
							buttonVariants({ variant: 'ghost' }),
							'text-white tracking-widest hover:text-primary active:text-primary text-lg uppercase cursor-pointer'
						)}
					>
						Close
					</Dialog.Close>
				</Dialog.Header>
				<div>
					<img
						src={data.item?.images?.gallery}
						alt={data.item?.name}
						class="object-contain w-full h-full"
					/>
				</div>
			</Dialog.Content>
		</Dialog.Overlay>
	</Dialog.Root>
</div>
