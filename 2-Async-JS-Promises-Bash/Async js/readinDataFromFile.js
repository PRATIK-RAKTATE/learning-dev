const fs = require("fs");

const contents = fs.readFile("a.txt", "utf-8");
console.log(contents);
const contents2 = fs.readFile("b.txt", "utf-8"); // utf-8 is human readable encoding (english)
console.log(contents2);


// I/O bound tasks vs CPU bound tasks
// CPU bound tasks
// CPU-bound tasks are operations that are limited by the speed and power of the CPU. These tasks require significant computation and processing power, meaning that the performance bottleneck is the CPU itself.
// let ans = 0;
// for (let i = 1; i <= 1000000; i++) {
// 	ans = ans + i
// }
// console.log(ans);	

// 💡
// A real world example of a CPU intensive task is running for 3 miles. Your legs/brain have to constantly be engaged for 3 miles while you run.


// I/O bound tasks
// I/O-bound tasks are operations that are limited by the system’s input/output capabilities, such as disk I/O, network I/O, or any other form of data transfer. These tasks spend most of their time waiting for I/O operations to complete.
// const fs = require("fs");

// const contents = fs.readFileSync("a.txt", "utf-8");
// console.log(contents);

// 💡
// A real world example of an I/O bound task would be Boiling water. I don’t have to do much, I just have to put the water on the kettle, and my brain can be occupied elsewhere.

// What if you were tasked with doing 3 things
// Boil some water.
// Do some laundry
// Send a package via mail

// Would you do these 
// One by one (synchronously)
// Context switch between them (Concurrently)
// Start all 3 tasks together, and wait for them to finish. The first one that finishes gets catered to first.