const setListeners = (navElement) => {
    console.log('setting click handlers');
    let arrowLeft = navElement.querySelector('.arrow-left');
    console.log(arrowLeft);
    arrowLeft.addEventListener('click', (el) => {
        console.log(el);


    });

};

const navContainer = {
    setListeners: setListeners
};

export default navContainer;