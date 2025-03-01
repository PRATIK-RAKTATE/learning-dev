function setTimeoutPromisified(duration) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve,duration)
    });
}


// we can chain these promises
setTimeoutPromisified(1000).then( () => {
    console.log("hi");
    setTimeoutPromisified(1000).then( () => {
        console.log("hello");
        setTimeoutPromisified(3000).then( () => {
            console.log("praitk")
        });
    });
});

// Promise chaining
setTimeoutPromisified(1000).then( () => {
    console.log("hi");
    setTimeoutPromisified(1000);
}).then( () => {
    console.log("hello");
    setTimeoutPromisified(1000);
}).then( ()=> {
    console.log("pratik")
})