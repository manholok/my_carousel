import TemplateMaker from './templates/template-maker';
import CarouselTimer from './carousel-timer';

const setHeightOfContainer = (containerElement) => {
    let imageElement = document.querySelectorAll('.carousel-image')[0];
    containerElement.height = imageElement.clientHeight;
    console.log(imageElement.clientHeight);
    console.log(containerElement.clientHeight);
};

const initCarousel = ((templateMaker, carouselTimer) => {
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

            // set loading layer template

            // start carousel
            carouselTimer.start(stateHolder);

            // clearInterval(id);

            // Set height of parent container
            setHeightOfContainer(containerElement);

            // Set height for parent container
            // TODO: should have a nice solution
            // let timerId;
            // window.addEventListener('resize', (event) => {
            //     clearTimeout(timerId);
            //     timerId = setTimeout(() => {
            //         console.log('resized');
            //         setHeightOfContainer();
            //     }, 400);
            //
            //     // do stuff here
            // });

        });
    }
})(TemplateMaker, CarouselTimer);

const refreshCarousel = () => {
    // Use this method to refresh carousel after every resize
};

const Carousel = {
    initCarousel: initCarousel,
    refreshCarousel: refreshCarousel
};

export default Carousel;