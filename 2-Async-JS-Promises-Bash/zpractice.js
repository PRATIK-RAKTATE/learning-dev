function newPromisifiedVersion() {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, duration);

    });
}

async function solve() {
    await setTimeoutPromisified(1000);
    
}