import carouselImage from './carousel-image.html';
import navContainer from './nav-container.html';

// Using createElement with div
// Do not forget that you will have trouble with <td>s, <tr>s, <thead>s, <select>
const getImageTemplate = (url) => {
    let template = document.createElement('div');
    template.innerHTML = carouselImage;
    let image = template.childNodes[0];
    image.src = url;
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
    return template.childNodes[0];
};

const TemplateMaker = {
    getImageTemplate: getImageTemplate, // returns images-container
    getImagesContainerTemplate: getImagesContainerTemplate,
    getNavTemplate: getNavTemplate
};

export default TemplateMaker;