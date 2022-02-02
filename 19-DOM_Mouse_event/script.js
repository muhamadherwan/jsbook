// DOM - Mouse Events

// Get elements
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Mouse Events
clearBtn.addEventListener('click', runEvent);
clearBtn.addEventListener('dblclick', runEvent);
clearBtn.addEventListener('mousedown', runEvent);
clearBtn.addEventListener('mouseup', runEvent);
clearBtn.addEventListener('mousemove', runEvent);



// Event Handler
function runEvent(e) {
    console.log(`Event Type: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    //document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;

    card.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
    e.preventDefault();
}