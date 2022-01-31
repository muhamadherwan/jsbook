// comparisson operator = return true or false

// ==== equal
// !== not equal
// > greater then
// >= greater then or equal
// < less then
// <= less then or equal

// Logical operator
// AND && = all operand are true, return true
console.log(true && true); // return true
console.log(true && false); // return false
console.log(true && false && true); // return false
console.log(false && false); // return false

// OR || = atleast one operand are true, return true
console.log(true || false); // return true;
console.log(true || true); // return true;
console.log(false || false); // return false;


// NOT !
console.log(!true); // return false
console.log(!false); // return true

// AND && EXP:
const person = 'Ezzi';
const age = 25;

if (age > 0 && age < 12) {
    console.log(`${person} is a child.`);
} else if (age >= 13 && age <= 19) {
    console.log(`${person} is a teen.`);
} else {
    console.log(`${person} is an adult.`);
}

// OR || EXP:
const people = 'Nick';
const age2 = 42;

if (age2 < 16 || age2 > 65) {
    console.log(`${people} cannot run in the marathon.`);
} else {
    console.log(`${people} have been register in the marathon.`)
}

// IF STATEMENT
// if (something) {
//     do something...
// } else if (something else ) {
//     do something else... 
// } else {
//     do else...
// }

// in js can do if statement without curly bracket {}

// Ternary operator
// boolean ? 'true' : 'false';
let id = 100;
console.log(id === 100 ? 'correct' : 'incorrect');

// Switch statement
const color = 'green';
switch (color) {
    case 'red':
        console.log('color is red.');
        break;
    case 'blue':
        console.log('color is blue.');
        break;
    default:
        console.log('color is not red or blue+.');
        break;
}































