// String Methods

// Convert string to array using split()
const tags = 'fullstack, hacker, gamer';
arr = tags.split(','); // convert the string to array split by ','
console.log(arr); // return ["fullstack", "hacker", "gamer"]

// string replace
person = 'nick';
n = person.replace('nick', 'ezzi');
console.log(person);
console.log(n);

// check a value is in the string
n = n.includes('ezzi');
console.log(n); // return true if available,return false if unavailabe

// template literals (es6)
const name = 'Ezzi';
const age = 41;
const job = 'Hacker';
const company = 'Maya';

function hello() {
    return 'hello';
}

let html;
html = `
<ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>Company: ${company}</li>
    <li>${2 + 2}</li><!-- do expression. return 4 -->
    <li>${hello()}</li><!-- call function -->
    <li>${age > 30 ? 'over 30' : 'under 30'} </li><!-- do conditional with ternary -->
</ul>
`;

// embed to the html page using dom
document.body.innerHTML = html;
