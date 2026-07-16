export class Slideshow {
	slideshowStarted: boolean = $state(false);
	currentSlideshowName: string | null = $state(null);
	currentSlideIndex: number = $state(0);
	totalSlides: number = $state(0);

	items: Slide[] = $state([]);

	setItems(items: Slide[]) {
		this.items = items;
	}

	getNextItem(currentSlide?: Slide) {
		const currentIndex = this.items.findIndex((item) => item.name === currentSlide?.name);
		if (currentIndex < this.items.length - 1) {
			return this.items[currentIndex + 1];
		}

		return null;
	}

	getPreviousItem(currentSlide?: Slide) {
		const currentIndex = this.items.findIndex((item) => item.name === currentSlide?.name);
		if (currentIndex > 0) {
			return this.items[currentIndex - 1];
		}

		return null;
	}

	startSlideshow(name: string) {
		this.slideshowStarted = true;
		this.currentSlideshowName = name;
	}

	stopSlideshow() {
		this.slideshowStarted = false;
		this.currentSlideshowName = null;
	}

	getProgress(currentSlide?: Slide) {
		const currentIndex = this.items.findIndex((item) => item.name === currentSlide?.name);
		if (currentIndex >= 0 && this.items.length > 0) {
			return (currentIndex + 1) / this.items.length;
		}
		return 0;
	}
}

type Slide = {
	name: string;
	year?: number;
	description?: string;
	source?: string;
	artist?: {
		image: string;
		name: string;
	};
	images?: {
		thumbnail: string;
		hero: {
			small: string;
			large: string;
		};
		gallery: string;
	};
};
