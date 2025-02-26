// Array of objects
let cars = [
    { make: "Toyota", model: "Corolla", year: 2021 },
    { make: "Honda", model: "Civic", year: 2020 },
    { make: "Ford", model: "Focus", year: 2022 }
];

console.log(cars[1].model == "Civic");

// iterating over each element
cars.forEach(car => {
    console.log(`Make: ${car.make}, Model: ${car.model}, Year: ${car.year}`);
});


// Object of Objects
let person = {
    name: "Alice Smith",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Springfield",
        zipCode: "12345"
    }
};

// deleting city
delete person.address.city;
console.log(person.address)


// funtion inside object
const obj = {
    run : function() {
        return "pratik";
    }
}

console.log(obj.run) // [Function: run] // basically this is
                    // not executin function only giving reference 
console.log(obj.run()); // this is executing funtion inside the obj


// COMPARING THE OBJECTS

function objectsAreEqual(obj1, obj2) {
    const key1 = Object.keys(obj1);
    const key2 = Object.keys(obj2)

    if (key1.length !== key2.length) {
        return false;
    }

    for (let key of key1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

// COMPARING NUMBER OF PROPERTIES

const keys1 = Object.keys(obj1);
const keys2 = Object.keys(obj2);

if (keys1.length !== keys2.length) {
    return false;
}

// COMPARING PROPERTY VALUES
for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
        return false;
    }
}