// string concat
const first = 'Ezzi';
const last = 'Moralez';

let fullname;
fullname = first + ' ' + last;
console.log(fullname);

// or use this
fullname1 = 'Luke ';
fullname1 += 'Skywalker';
console.log(fullname1);

val = 'Hello my first name is ' + first + ' and my last name is ' + last;
console.log(val);

// Escaping
val2 = 'That\'s awesome, i can\'t wait!';
val3 = "That's awesome, i can't wait!";
console.log(val2);
console.log(val3);

// using concat functions
val4 = first.concat(' ', last, ' hacker');
console.log(val4);

// String Methods

// get length
val5 = first.length
console.log(val5);

// change to upper case
val6 = first.toUpperCase();
console.log(val6);

// covert to low case
val7 = first.toLowerCase();
console.log(val7);

// get string character
val8 = first[2];
console.log(val8);

// get index of string character
val9 = first.indexOf('z');
console.log(val9);

// get index of character count from behind. if character not exist will return -1 
val10 = first.lastIndexOf('z');
console.log(val10);

// get character index
val11 = first.charAt('2');
console.log(val11);

// get last character 
val12 = fullname.charAt(fullname.length - 1);
console.log(val12);

// substrings
val13 = fullname.substring(0, 4);
console.log(val13); // return Ezzi

// slice: get character
val14 = fullname.slice(-3); // get character count from behind
console.log(val14); // return lez

val15 = fullname.slice(5); // get character after 5 character
console.log(val15); // return Moralez











