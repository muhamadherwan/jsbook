// DOM - Document Object Model
// - Tree nodes / element created by the browser.
// - JS cam manipulate / read / write the DOM.
// - Object Oriented Represation.

// Single element selector - grab the first element only.

// 1. document.getElementById()
console.log(document.getElementById('task-title'));

// get things from element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const titleTask = document.getElementById('task-title');
console.log(titleTask);

// change styling
titleTask.style.background = '#333';
titleTask.style.color = '#fff';
titleTask.style.padding = '15px';
//titleTask.style.display = 'none'; // hide the element
// change content
titleTask.textContent = 'Tasken Riders';
titleTask.innerText = 'My task';
titleTask.innerHTML = '<span style="color:red">Task list</span>'; // append html to element.



// 2. document.querySelector() <-- always use this
console.log(document.querySelector('#task-title')); // get element by id
console.log(document.querySelector('.card-title')); // get element by class
console.log(document.querySelector('h5')); // get element by tags

document.querySelector('li').style.color = 'red'; // turn the first li text into red
document.querySelector('ul li').style.color = 'blue'; // turn the first li text into blue
document.querySelector('li:last-child').style.color = 'red'; // turn the last li text into red
document.querySelector('li:nth-child(3)').style.color = 'yellow'; // turn the third li text into yellow using css pseudo class
document.querySelector('li:nth-child(4)').textContent = 'Hello Mayaliti';
// change the first odd li background color to #ccc
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// change the first even li background color to #f4f4f4
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';





















