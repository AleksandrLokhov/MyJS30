const timeNodes = document.querySelectorAll('[data-time]');

const timeArray = Array.from(timeNodes).map(item => {
    return item.dataset.time;
})

const timeSumm = timeArray.reduce((accumulator, item) => {
    const [mins, secs] = item.split(':').map(parseFloat);
    return accumulator + mins * 60 + secs;
}, 0);

console.log(timeSumm);


function integer_divide(value, divider) {
    return (value - value % divider) / divider;
}

const result = (timeInSeconds) => {
    const hours = integer_divide(timeInSeconds, 3600);
    const minutes = integer_divide((timeInSeconds - hours * 3600), 60);
    const seconds = timeInSeconds - hours * 3600 - minutes * 60;
    return `${hours}:${minutes}:${seconds}`;
}

console.log(result(timeSumm));

//оригинальное (альтернативное) решение

const seconds = [...timeNodes]
    .map(node => node.dataset.time)
    .map(timeCode => {
        const [mins, secs] = timeCode.split(':').map(parseFloat);
        return (mins * 60) + secs;
    })
    .reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft - minutes * 60;

console.log(`${hours}:${minutes}:${secondsLeft}`);
