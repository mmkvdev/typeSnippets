const character = 'type script snippets';

console.log(character);

const inputs = document.querySelectorAll('input');

console.log(inputs);

inputs.forEach((input) => {
    console.log(input);
})

let age = 10;
let isBlackBelt = false;

// age = '20';
age = 20;

// isBlackBelt = 'yes';
isBlackBelt = true;


// circumference of the circle based on the diameter
const circ = (diameter: number) => {
    return diameter * Math.PI;
}

// console.log(circ('hello')); //=> returns NaN
console.log(circ(4));