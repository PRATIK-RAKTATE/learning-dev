// Q
// create a funtion that takes an array of objects
// as input and returns the user whose age > 18 are male

function adults(arr) {
    return arr.filter(user => user.age > 18 && user.gender === "male");
    // The filter() function in JavaScript creates a new array containing elements that pass a specified condition (callback function).
}

const nestedOBJ = [
    {
        name: "pratik",
        age: 19,
        gender: "male"
    },
    {
        name: "rhutik",
        age: 17,
        gender: "male"
    },
    {
        name: "manjiri",
        age: 10,
        gender: "female"
    }
];

console.log(adults(nestedOBJ));

// [ { name: 'pratik', age: 19, gender: 'male' } ]