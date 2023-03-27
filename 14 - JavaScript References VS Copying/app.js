// start with strings, numbers and booleans
/*
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = 'Wes';
let name2 = name;
console.log(name, name2);
name = 'Wesley';
console.log(name, name2);
*/

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.

/*
const team = players;

console.log(players, team);

*/

// You might think we can just do something like this:

/*
team[3] = 'Lux';

console.log(players, team);
*/

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

const team2 = players.slice();

console.log(players, team2);

team2[3] = 'Lux';

console.log(players, team2);

// one way

// or create a new array and concat the old one in

const team3 = [].concat(players);

const team4 = [...players];

const team5 = Array.from(players);

// or use the new ES6 Spread

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

const captain = person;
//captain.number = 99;

// and think we make a copy:

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99, age: 12 });

console.log(captain, cap2);

const cap3 = { ...person };
cap3.number = 180;

console.log(captain, cap3);

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const wes = {
    name: 'Wes',
    age: 100,
    social: {
        twitter: '@wesbos',
        facebook: 'wesbos.developer'
    }
}

console.clear();
console.log(wes);

const dev = Object.assign({}, wes);

console.log(dev);

const dev2 = JSON.parse(JSON.stringify(wes));

console.log(dev2);