const pressedArray = [];
const secretCode = 'javascript';

window.addEventListener('keyup', event => {
    pressedArray.push(event.key);
    pressedArray.splice(-secretCode.length - 1, pressedArray.length - secretCode.length);
    if (pressedArray.join('').includes(secretCode)) {
        cornify_add();
    }
})