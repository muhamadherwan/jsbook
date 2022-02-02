// DOM Event Listener and Event Object



// Event listener
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
    console.log('click');
    e.preventDefault()

    let val;
    val = e;

    // event target elements
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;
    // add text(change the button title after submit button)
    e.target.innerText = 'Maya';

    // event type
    val = e.type;

    // coords event relative to the window
    val = e.clientY;
    val = e.clientX;

    // coords event relative to the elements
    val = e.offsetY;
    val = e.offsetX;

    console.log(val);

};




