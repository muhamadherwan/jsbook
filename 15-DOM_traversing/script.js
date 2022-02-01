// DOM Traversing - move up or down in dom

let val;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = list;
val = listItem;

// get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

// Node type code
// 1 - element
// 2 - attribute
// 3 - text node
// 8 - comment
// 9 - document
// 10 - doctype

// Get children element nodes (HTML elements) <-- use this
val = list.children;
val = list.children[1];
val = list.children[1].textContent = 'Maya';

// Get Children of children
val = list.children[3].children[0];
val = list.children[3].children[0].id = 'test-link'; // add new id to the element
val = list.children[3].children[0];

// Get first children
val = list.firstChild;
val = list.firstElementChild;

// Get last children
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get parent node
val = list.parentNode;
val = list.parentElement;
val = list.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;
val = listItem.nextElementSibling.previousElementSibling;

// Get prev sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);