// DOM Creating new elements

// create element
const li = document.createElement('li');

// add class
li.className = 'collection-item';

// add id
li.id = 'new-item';

// add attribute
li.setAttribute('title', 'New Item');

// create text node and append
li.appendChild(document.createTextNode('Hello Maya'));


{/* <a href="#" class="delete-item secondary-content">
<i class="fa fa-remove"></i>
</a> */}

// create new link element
const link = document.createElement('a');

// add class to the link
link.className = 'delete-item secondary-content';

// add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// append new li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(link)
console.log(li);