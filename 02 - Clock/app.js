const hands = {
    'secondHand': document.querySelector('.second-hand'),
    'minuteHand': document.querySelector('.minute-hand'),
    'hourHand': document.querySelector('.hour-hand')
}

const showClocks = () => {
    const now = new Date();

    const timeIsNow = {
        'seconds': now.getSeconds(),
        'minutes': now.getMinutes(),
        'hours': now.getHours()
    }

    renderHand(hands, timeIsNow);

}

const renderHand = (handsObject, timeObject) => {

    let secondsToDegrees = (timeObject.seconds * 6) + 90;
    let minutesToDegrees = (timeObject.minutes * 6) + 90;
    let hoursToDegrees = (timeObject.hours * 30) + 90;

    if (secondsToDegrees >= 360) secondsToDegrees -= 360;
    if (minutesToDegrees >= 360) minutesToDegrees -= 360;
    if (hoursToDegrees >= 360) hoursToDegrees -= 360;

    handsObject.secondHand.style.transform = `rotate(${secondsToDegrees}deg)`;
    handsObject.minuteHand.style.transform = `rotate(${minutesToDegrees}deg)`;
    handsObject.hourHand.style.transform = `rotate(${hoursToDegrees}deg)`;
}

setInterval(showClocks, 1000);