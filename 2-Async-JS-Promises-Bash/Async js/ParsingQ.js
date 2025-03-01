// Q1.  console.log("3" + 3);
// Q2. what is parsing and why use?
// Q3. what is output of this
// let a = "33";
// parseInt(a);
// console.log(a + 5);
// console.log(a);

// Q guess the output
/*
    const fs = require('fs');
    fuction print(err, data) {
    console.log(data);
    }

    fs.readFile("a.txt", "utf-8", print); // asynchrnously
    fs.readFile("b.txt", "utf-8", print); // asynchrnously

    console.log("done")

*/

/*
Q guess the output
    
function timeout() {
    console.log("Click the button")
}
console.log("hi"); 

setTimeout(timeout, 1000);

console.log("welcome"); 2
let c = 0;
for(let i = 0; i < 1000000000; i++) { // this take more time than 1 second
    c = c+1;
}

console.log("Expensive task is done") 

option 1 
hi 
welcome 
expensive operation is done 
click butn

option 2
hi 
welcome 
click butn
expensive operation is done 
*/

// answer is option1 because cpu work is done before any 
// other work basically thread is busy when any expenssive task is done

// that means js does not takes garuntee that callback function is called
// in given time work of callback funtion is to only push that function
// to function stack and if thread is busy on any expensive task then 
// after execution of that callback is called.