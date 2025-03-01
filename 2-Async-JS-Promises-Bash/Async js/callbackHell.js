// callback hell
// below code look ugly and hard to maintain hence
setTimeout( function callback() {
    console.log("hi");
    setTimeout( function callback() {
        console.log("hello");
        setTimeout( function callback() {
            console.log("no");
        },3000)
        
    },5000)
    
}, 1000);

// but using callback and chaining we can simplify it

function step3done() {
    console.log("hello");
}

function setp2done() {
    console.log("hi");
    setTimeout(step3done, 5000);
    
}

function step1done() {
    console.log("praitk");
    setTimeout(setp2done, 3000);
}

setTimeout(step1done, 1000);