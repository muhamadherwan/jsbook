// Date and Time

// get today date
const today = new Date();

let val;
val = today;

// convert date object to string
val = today.toString();
console.log(val);

const birthday = new Date('1981-12-27 11:25:00');
bday = birthday;

console.log(birthday);

const date1 = new Date('December 17, 1995 03:24:00');
console.log(date1);

const date2 = new Date('9/10/1981');
console.log(date2);

// get today date and time values
val2 = today.getMonth();
val2 = today.getDate();
val2 = today.getDay();
val2 = today.getFullYear();
val2 = today.getHours();
val2 = today.getMinutes();
val2 = today.getSeconds();
val2 = today.getMilliseconds();
val2 = today.getTime(); // return today timestamp
console.log(val2);

// set date and time values
today2 = new Date('August 19, 1975 23:15:30');
today2.setMonth(2);
today2.setDate(12);
today2.setFullYear(1981);
today2.setHours(3);
today2.setMinutes(30);
today2.setSeconds(25);
console.log(today2);
