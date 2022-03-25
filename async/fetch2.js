// button 1 event listener
document.querySelector('#button1').addEventListener("click", getText);

// button 2 event listener
document.querySelector('#button2').addEventListener("click", getJson);

// button 3 event listener
document.querySelector('#button3').addEventListener("click", getExternal);

// Get text
function getText() {
    // request the text file
    fetch('test.txt')
    // return the result using promises
    .then(res => res.text())
    // get the text and append the result to ui
    .then(data => document.getElementById('output').innerHTML = data)
    // return error if any
    .catch(err => console.log(err));
}

// Get Json
function getJson(){
    // request the json file
    fetch('post.json')
    // return the result using promises
    .then(res => res.json())
    // get the json
    .then(data => {
        // console log to check
        console.log(data);
        // append the result to ui
        let output = '';
        data.forEach(post => 
            output += `
            <li>title: ${post.title}</li>
            <li>body: ${post.body}</li>
            <br>`
        );
        document.getElementById('output').innerHTML = `<ul>${output}</ul>`;
    })
    // return error if any
    .catch(err => console.log(err));
}

// Get Api data
function getExternal(){
    // request the json file
    fetch('https://api.github.com/users')
    // return the result using promises
    .then(res => res.json())
    // get the json
    .then(data => {
        // console log to check data
        console.log(data);
        // append to ui
        output = '';
        data.forEach(user => output += `<li>${user.login}</li>`);
        document.getElementById('output').innerHTML = output;
    })  
    // catch error if any
    .catch((err) => console.log(err));
}
