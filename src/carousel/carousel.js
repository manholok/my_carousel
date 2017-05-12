import TemplateMaker from './templates/template-maker';
import CarouselTimer from './carousel-timer';
import NavContainer from './components/navigation/nav-container';

const initCarousel = ((templateMaker, carouselTimer, navContainer) => {
    return (containerElement, promiseOfSource, stateHolder) => {
        containerElement.classList.add('carousel-container');

        promiseOfSource.then(result => {
            stateHolder.max = result.length;
            let imageUrls = [];
            for (let url of result) {
                imageUrls.push(url);
            }

            // Make container element for images
            let imagesContainer = templateMaker.getImagesContainerTemplate();

            let imagesContainerImages = '';
            // get template from urls to put in the images container
            imageUrls.forEach(function(imageUrl) {
                let imageTemplate = templateMaker.getImageTemplate(imageUrl);
                imagesContainer.appendChild(imageTemplate);
            });

            // Setup template inside of chosen element
            containerElement.innerHTML = imagesContainer.outerHTML;

            // set images-container template

            // set nav-container template
            containerElement.appendChild(templateMaker.getNavTemplate());

            // set nav-container listeners,
            // TODO: maybe pass the nav element instead of the whole container
            navContainer.setListeners(containerElement);

            // set loading layer template

            // start carousel
            carouselTimer.start(stateHolder);

        });
    }
})(TemplateMaker, CarouselTimer, NavContainer);

const refreshCarousel = () => {
    // Use this method to refresh carousel after every resize
};

const Carousel = {
    initCarousel: initCarousel,
    refreshCarousel: refreshCarousel
};

export default Carousel;