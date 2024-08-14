// Declare a variable in global scope called customerName using the var keyword and assign it the value 'bob'.
var customerName = 'bob';

// Write a function that accesses the global customerName variable and uppercases it.
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Write a function that declares a variable called bestCustomer in global scope 
// and assigns it to be 'not bob'.
function setBestCustomer() {
    bestCustomer = 'not bob';
}

// Write a function that changes the bestCustomer variable to 'maybe bob'.
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// Declare a constant in global scope called leastFavoriteCustomer and assign it some initial value.
const leastFavoriteCustomer = 'somebody';

// Write a function that attempts to change the leastFavoriteCustomer constant.
function changeLeastFavoriteCustomer() {
    try {
        leastFavoriteCustomer = 'anybody';
    } catch (error) {
        console.log('Error:', error.message);
    }
}

// Calling the functions

// Call upperCaseCustomerName() to uppercase the customerName variable
upperCaseCustomerName();
console.log(customerName); // Outputs: 'BOB'

// Call setBestCustomer() to declare bestCustomer and assign it 'not bob'
setBestCustomer();
console.log(bestCustomer); // Outputs: 'not bob'

// Call overwriteBestCustomer() to change bestCustomer to 'maybe bob'
overwriteBestCustomer();
console.log(bestCustomer); // Outputs: 'maybe bob'

// Call changeLeastFavoriteCustomer() to try to change the constant leastFavoriteCustomer
changeLeastFavoriteCustomer(); // Outputs error: 'Assignment to constant variable.'
// Write your solution in this file!
