import home1 from '../shared/assets/home1.jpg';
import home2 from '../shared/assets/home2.jpg';
import home3 from '../shared/assets/home3.jpg';
import home4 from '../shared/assets/home4.jpg';
import home5 from '../shared/assets/home5.jpg';

// Should return an array of urls
const getImageUrls = () => {
    return new Promise((resolve, reject) => {
        resolve([
            home1,
            home2,
            home3,
            home4,
            home5
        ]);
    });
};

export default {
    getImageUrls: getImageUrls
};