export class Slideshow {
    slideshowStarted: boolean = $state(false);
    currentSlideshowName: string | null = $state(null);

    startSlideshow(name: string) {
        this.slideshowStarted = true;
        this.currentSlideshowName = name;
    }

    stopSlideshow() {
        this.slideshowStarted = false;
        this.currentSlideshowName = null;
    }
}