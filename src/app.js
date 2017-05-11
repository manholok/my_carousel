import Elements from './shared/elements/elements';
import Carousel from './carousel/carousel';
import CarouselService from './carousel/carousel-service';
import CarouselStates from './carousel/carousel-state';

import './app.scss';

const startApp = ((carousel) => {
    carousel.initCarousel(
        Elements.getCarouselContainerElement(),
        CarouselService.getImageUrls(),
        CarouselStates[0]
    );
})(Carousel);




