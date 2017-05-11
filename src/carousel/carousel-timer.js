// just a timer that sets classes
const start = (stateHolder) => {
    // set the first img to active
    let firstImage = document.querySelector('.images-container div:nth-child(1)');
    firstImage.classList.add('active');

    let id = setInterval(() => {
        nextImage(stateHolder);
    }, 4000);
    stateHolder.intervalid = id;
    return id;
};

const nextImage = stateHolder => {
    // get current state count
    let current = stateHolder.current;
    // get next count
    let next = stateHolder.current + 1;

    if (next >= stateHolder.max) {
        next = 0;
    }

    // remove all go-away classes from the list
    let allImgs = document.querySelectorAll('.images-container div');
    allImgs.forEach(img => {
        if (img.classList.contains('go-away')) {
            img.classList.remove('go-away');
        }
    });

    // set next to active class
    let nextEl = document.querySelector('.images-container div:nth-child('+ (next + 1) +')');
    if (nextEl.classList.contains('go-away')) {
        nextEl.classList.remove('go-away');
    }

    nextEl.classList.add('active');

    // set current to go-away class
    let currentEl = document.querySelector('.images-container div:nth-child('+ (current + 1) +')');
    if (currentEl.classList.contains('active')) {
        currentEl.classList.remove('active');
    }
    currentEl.classList.add('go-away');

    // set new current
    stateHolder.current = next;

};

const CarouselTimer = {
    start: start
};

export default CarouselTimer;