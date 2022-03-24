// form event listener
document.querySelector('.get-jokes').addEventListener('click', loadJokes);

// function ajax fetch json jokes from api
function loadJokes(e) {

    e.preventDefault();
    
    // get number of jokes from form input
    const number = document.querySelector('input[type="number"]').value;
    
    // instantiate xhr object
    const xhr = new XMLHttpRequest();
    
    // get jokes json from api
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`,true);

    // load the joke json data
    xhr.onload = function() {
        // check json been loaded or not (http status)
        if (this.status === 200) {
            // parse the json to object
            const response = JSON.parse(this.responseText);
            // console.log(jokes);

            // create the list using foreach
            let lists = '';

            if (response.type === 'success') {
                response.value.forEach(function (joke) {
                    lists += `
                <li>${joke.joke}</li>
                `
                });
            } else {
                lists = '<li>Something went wrong!</li>'
            }
            

            // append the list to ui
            document.querySelector('.jokes-list').innerHTML = lists;
        }           
    }
        
    
    // send the request
    xhr.send();

}

