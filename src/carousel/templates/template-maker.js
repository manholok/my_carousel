import carouselImage from './carousel-image.html';
import navContainer from './nav-container.html';
import exampleOverlay from './example-overlay.html';

const getExampleOverlay = () => {
    let template = document.createElement('div');
    template.innerHTML = exampleOverlay;
    return template.childNodes[0];
};

// Using createElement with div
// Do not forget that you will have trouble with <td>s, <tr>s, <thead>s, <select>
const getImageTemplate = (url) => {
    let template = document.createElement('div');
    template.innerHTML = carouselImage;
    let image = template.childNodes[0];
    image.style = 'background-image: url(' + url +')';
    return image;
};

const getImagesContainerTemplate = () => {
    let template = document.createElement('div');
    template.classList.add('images-container');
    return template;
};

const getNavTemplate = () => {
    let template = document.createElement('div');
    template.innerHTML = navContainer;
    console.log(template.childNodes[0]);

    // TODO: why not use children for all
    template.childNodes[0].children[0].appendChild(getExampleOverlay());
    return template.childNodes[0];
};

const TemplateMaker = {
    getExampleOverlay: getExampleOverlay,
    getImageTemplate: getImageTemplate, // returns images-container
    getImagesContainerTemplate: getImagesContainerTemplate,
    getNavTemplate: getNavTemplate
};

export default TemplateMaker;