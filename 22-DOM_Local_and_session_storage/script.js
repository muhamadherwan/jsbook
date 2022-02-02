// DOM Local & Session Storage

// Set seession storage item
// sessionStorage.setItem('name', 'MT15');

// // set local storage
// localStorage.setItem('name', 'MT15');
// localStorage.setItem('type', 'naked bike');

// // get from storage
// const name = localStorage.getItem('name');
// const type = localStorage.getItem('type');

// // remove from storage
// localStorage.removeItem('name');

// // clear all from local storage
// //localStorage.clear();

// console.log(name);
// console.log(type);


// save form input in local storage
document.querySelector('form').addEventListener('submit',
    function (e) {
        const task = document.getElementById('task').value;

        let tasks;

        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        alert('task saved');

        e.preventDefault();

    });



