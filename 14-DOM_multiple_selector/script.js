// DOM for selecting multiple elements

// 1. document.getElementsByClassName()
// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello Maya';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// 2. document.getElementsByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);

// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello Maya';

// // convert HTML collection into arrays
// lis = Array.from(lis);
// lis.reverse();

// lis.forEach(function (li, index) {
//     console.log(li.className);
//     li.textContent = `${index}:Hello`;
// });
// console.log(lis);


// 3. document.querySelectorAll() <-- use this
const items = document.querySelectorAll('ul.collection li.collection-item');
console.log(items);

items.forEach(function (item, index) {
    item.textContent = `${index}:Maya`;
});

// Styling the odd li with forEach
const liOdd = document.querySelectorAll('li:nth-child(odd)');

liOdd.forEach(function (li) {
    li.style.background = '#ccc';
});

// styling the even li with for loop
const liEven = document.querySelectorAll('li:nth-child(even)');

for (let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = '#f4f4f4';
}






























