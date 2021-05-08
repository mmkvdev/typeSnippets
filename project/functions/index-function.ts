// functions

let indexFunction = () => {
    console.log('index function');
}

// indexFunction = 'hello'; // invalid


let explicitFunction: Function;

explicitFunction = () => {
    console.log('explicit function');
}

// returns void if we don't specifically return anything
const add = (a: number, b:number, c: number|string = 10): void => {
    console.log('sum: ', a+b, c);
}

add(1,2,20 || '20');

const minus: Function = (a: number, b: number): number => {
    return a > b ? a-b : b-a;
}

let res = minus(5,10);
// res = 'type script'; => invalid