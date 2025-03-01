

// Async await syntax

// only syntactical sugar to write asynchronous code

// The async and await syntax in JavaScript provides a way to write asynchronous code that looks and behaves like synchronous code, making it easier to read and maintain. 
// It builds on top of Promises and allows you to avoid chaining .then() and .catch() methods while still working with asynchronous operations.
// async/await is essentially syntactic sugar on top of Promises.

function setTimeoutPromisified() {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, duration);
    });
}

async function solve() {
    await setTimeoutPromisified(1000);
    console.log("hi");
    await setTimeoutPromisified(3000);
    console.log("hello");
    await setTimeoutPromisified(5000);
    console.log("pratik")
}

solve();
console.log("which print before");

// Synchronous Code:
// console.log("which print before"); will run first.
// Asynchronous Code:
// After a delay of 1 second: hi will be logged.
// After an additional 3 seconds (total of 4 seconds): hello will be logged.
// After an additional 5 seconds (total of 9 seconds): pratik will be logged.