const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const bandsElement = document.querySelector('#bands');

const strip = bandname => {
    return bandname.replace(/^(a |the |an )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => (strip(a) > strip(b)) ? 1 : -1);

console.log(sortedBands);

bandsElement.innerHTML = sortedBands
    .map(item => `<li>${item}</li>`)
    .join('');