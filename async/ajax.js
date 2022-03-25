// form event listener for load single customer
document.getElementById('button1').addEventListener('click', loadCustomer);

// get the button event listener for load customers
document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomer(e) {
    // inital the xhr object
    const xhr = new XMLHttpRequest();

    // get the jason file data
    xhr.open('GET', 'customer.js', true);

    // load the single customer json data
    xhr.onload = function () {
        // check if the data been load or not.
        if (this.status === 200) {
            // console.log(this.responseText);
            // conver json to string
            const customer = JSON.parse(this.responseText);

            // create the data list
            const output = `
            <ul>
            <li>ID: ${customer.id}</li>
            <li>Name: ${customer.name}</li>
            <li>Company: ${customer.company}</li>
            <li>Phone: ${customer.phone}</li>
            </ul>`;

            // append the json data list to ui
            document.getElementById("customer").innerHTML = output;
        }
    }

    // send the request
    xhr.send();
}

// load customers json data
function loadCustomers(e) {
    // inital xhr object
    const xhr = new XMLHttpRequest();

    // get customers json data file
    xhr.open('GET', 'customers.js', true);

    // load the customers data
    xhr.onload = function() {
        // check data been load or not
        if (this.status === 200) {
            // convert json data to string
            // console.log(this.responseText);
            const customers = JSON.parse(this.responseText);

            // create the list
            let output = '';

            customers.forEach(function (customer) {
                output += `
                    <ul>
                        <li>ID: ${customer.id}</li>
                        <li>Name: ${customer.name}</li>
                        <li>Company: ${customer.company}</li>
                    </ul>`;
            });

            // append the list to ui
            document.getElementById('customers').innerHTML = output;
        }

    }

    // send the request
    xhr.send();

}