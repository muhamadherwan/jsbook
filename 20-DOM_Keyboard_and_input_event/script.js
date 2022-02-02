// DOM - Keyboard and Input Events

// Get Element
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const select = document.querySelector('select');

form.addEventListener('submit', runEvent1);

function runEvent1(e) {
    console.log(`Event Type: ${e.type}`);
    // get form input value
    console.log(taskInput.value);
    // clear field input
    taskInput.value = '';

    e.preventDefault();
}

const heading = document.querySelector('h5');

taskInput.addEventListener('keydown', runEvent2);
taskInput.addEventListener('keypress', runEvent2);
taskInput.addEventListener('keyup', runEvent2);
taskInput.addEventListener('focus', runEvent2);
taskInput.addEventListener('blur', runEvent2);
taskInput.addEventListener('cut', runEvent2);
taskInput.addEventListener('paste', runEvent2);
taskInput.addEventListener('input', runEvent2);

// for select form
//select.addEventListener('change', runEvent1)

function runEvent2(e) {
    console.log(`Event Type: ${e.type}`);
    console.log(e.target.value);

    heading.innerText = e.target.value;

    // clear field input
    //taskInput.value = '';

    e.preventDefaut();

}
