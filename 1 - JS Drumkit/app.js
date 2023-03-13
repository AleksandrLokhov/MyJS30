//13.03.2023
//Intern - Alexander
//There was a bug in the project - on button holding the 'playing' 
//class was not removed properly
//Bug fixed - added debouce function with 40ms threshhold
//to prevent this behavior

const DEBOUNCE_THRESHOLD = 40;

function playSound(event) {
    const audioElement = document.querySelector(`audio[data-key='${event.keyCode}']`);
    const keyElement = document.querySelector(`.key[data-key='${event.keyCode}']`);

    if (!audioElement) return;

    audioElement.currentTime = 0;
    audioElement.play();

    keyElement.classList.add('playing');
}

function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

function debounce(callbackFunction, timems) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { callbackFunction(...args); }, timems);
    }
}

const allKeys = document.querySelectorAll('.key');
allKeys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', debounce(playSound, DEBOUNCE_THRESHOLD));

