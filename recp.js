const name = 'sabikun naher saf';
let phone = 'sompony';
phone = 'iphone';
// template string
const myNotes = `safa ${name}. i have  a ${phone}`;
// default parameter

function maxNumber (array =[]){
    const max = Math.max(...array);
    return max;
}

const biggest = maxNumber();
console.log(biggest);

// array function
const square= x => x*x;
console.log(square(9));
