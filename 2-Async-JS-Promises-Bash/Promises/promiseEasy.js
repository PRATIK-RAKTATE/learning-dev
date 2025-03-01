// By chatgpt


// Create a promise
const myPromise = new Promise((resolve, reject) => {
    console.log("Starting async task...");

    // Simulate an asynchronous task
    setTimeout(() => {
        const success = true; // Change this to false to test rejection

        if (success) {
            resolve("Task completed successfully!");
        } else {
            reject("Task failed!");
        }
    }, 2000);
});

// Use .then() to handle resolve
myPromise
    .then(result => {
        console.log("Resolved:", result); // This will log the resolve message
    })
    .catch(error => {
        console.error("Rejected:", error); // This will log the reject message
    })
    .finally(() => {
        console.log("Async task completed!"); // Runs regardless of success or failure
    });

    //Starting async task...
    // Resolved: Task completed successfully!
    // Async task completed!