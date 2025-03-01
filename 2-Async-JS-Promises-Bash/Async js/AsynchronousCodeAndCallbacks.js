// Asynchronous code, callbacks
// Let’s look at the code to read from a file asynchronously. Here, we pass in a function as an argument. This function is called a callback since the function gets called back when the file is read 
// code fs.readFile("a.text", "utf-8", afterFileRead);


 
// const fs = require("fs");

// fs.readFile("a.txt", "utf-8", function (err, contents) {
//   console.log(contents);
// });

// setTimeout
// setTimeout is another asynchronous function that executes a certain code after some time
// function run() {
// 	console.log("I will run after 1s");
// }

// setTimeout(run, 1000);
// console.log("I will run immedietely");


const fs = require('fs');

function read(err, data) {
    console.log(data);
}

const contents = fs.readFile("a.txt", "utf-8", read); // asynchronously
// when this task is done then it will call to read function

const contents2 = fs.readFile("b.txt", "utf-8", read); // asynchronously
