// DOM - Replace and Remove Element

// Replace
// create new element
// const newHeading = document.createElement('h2');
// // Add id to new element
// newHeading.id = 'task-title';
// // add new text node
// newHeading.appendChild(document.createTextNode('Mayaliti'));
// // Get the old heading
// const oldHeading = document.getElementById('task-title');
// // Get parent element
// const cardAction = document.querySelector('.card-action');
// // replace
// cardAction.replaceChild(newHeading, oldHeading);

// console.log(newHeading);


// // Remove Element
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// // remove list item
// lis[0].remove();

// // remove using child element
// list.removeChild(lis[3]);

// console.log(lis);
// console.log(list);

// Classes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

// let val;
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('mayaliti'); // add new class
// link.classList.remove('mayaliti'); // remove class
// val = link;
// console.log(val);

// Attributes
const link2 = firstLi.children[0];
let val2;

// get attributes
val2 = link2.getAttribute('href');
// set attributes
val2 = link2.setAttribute('href', 'http://google.com');
val2 = link2.setAttribute('title', 'Google');

// remove attribute
link2.removeAttribute('title');

val2 = link2;
console.log(val2);
























