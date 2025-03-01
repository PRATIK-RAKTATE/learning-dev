/*
methods to write async code
Callbacks: Suitable for simple async tasks but prone to callback hell.
Promises: Better structure for managing async tasks with .then() chaining.
Async/Await: Best for writing clean and readable async code, especially when tasks depend on each other.

Promises are just a syntactically superior way to write instead of callbacks.

Promise class gives us promise that it will return the 
something in future.

A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises are used to handle asynchronous operations more effectively than traditional callback functions, providing a cleaner and more manageable way to deal with code that executes asynchronously, such as API calls, file I/O, or timers.



// callback based approch
    setTimeout(callback, 3000);

// promise based approch
    setTimeoutPromisified(3000).then(callback)
*/

// return object of promise class
function setTimeoutPromisified(ms)  {
    let p = new Promise(resolve => setTimeout(resolve, ms));
    return p;
}    

function callback() {
    console.log("3 seconds have passed"); 
}


setTimeoutPromisified(3000).then(callback);

console.log(setTimeoutPromisified(3000));
// output
// Promise { <pending> }
// 3 seconds have passed