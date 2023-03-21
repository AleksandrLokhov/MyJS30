const p = document.querySelector('p');

const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

p.addEventListener('onclick', makeGreen);

// Regular

console.log('Hello');

// Interpolated

let variable = 'Pete';

console.log(`Hello, I am ${variable}`);

// Styled

console.log('%c I am some great text', `
    font-size: 24px;
    background:red;
    text-shadow: 4px 4px 0 blue`);

// warning!

console.warn('OH NOOOO');

// Error :|

console.error('SHIT');

// Info

console.info('Crocodiles eat 3-4 people per year');

// Testing

console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clearing
console.clear();

// Viewing DOM Elements

console.log(p);
console.dir(p);
console.clear();

// Grouping together

dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

// counting

console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Wes');

// timing

console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

console.table(dogs);