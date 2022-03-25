document.getElementById('button').addEventListener('click', loadData);

function loadData(){
    // create an xhr object
    const xhr = new XMLHttpRequest();

    // open and get data from the file
    xhr.open('GET', 'data.txt', true);

    // get the data
    xhr.onload = function() {
        // check the data http statuses
        if (this.status === 200) {
            // console.log(this.responseText);
            // put the data in the ui
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
            
        }
    }

    // display error if any
    xhr.onerror = function() {
        console.log('Request error...');
    }

    // send the xhr object
    xhr.send();
}

// HTTP Statuses
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"