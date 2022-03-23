document.getElementById('button').addEventListener('click, loadData');

function loadData(){
    // create an xhr object
    const xhr = new XMLHttpRequest();

    // open and get data from the file
    xhr.open('GET', 'data.txt', true);

    // get the data
    xhr.onload = function(){

    }

    // send the xhr object
}

// HTTP Statuses
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"