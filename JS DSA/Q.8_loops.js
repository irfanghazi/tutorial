
//! for of loop
// Array of numbers
let numArray = [1, 4, 16, 25, 49];
for (let value of numArray) {
    // console.log(value);
}

// String object
let str = "Irfan";
for (let value of str) {
    // console.log(value);
}

// Iterating over argument objects
function Geeks(...arguments) {
    for (let value of arguments) {
        // console.log(value);
    }
}
// Geeks("Geeks", "for", "Geeks");

// Iterating over object key
const person = {
    name: "Alice",
    age: 30,
    occupation: "Engineer"
};

for (const key of Object.keys(person)) {
    // console.log(key);
}

// Iterating over object keys using Object.entries()
const person1 = {
    name: "Alice",
    age: 30,
    occupation: "Engineer"
};

for (const [key] of Object.entries(person1)) {
    // console.log(`${key}`);
}

// Iterating over object  key and values both
const person2 = {
    name: "Alice",
    age: 30,
    occupation: "Engineer"
};

for (const [key, value] of Object.entries(person2)) {
    // console.log(`${key} : ${value}`);
}


//! for in loop
// for in loop is used for traverse of object

const shark = {
    species: "great white",
    color: "white",
    numberOfTeeth: Infinity
}
for (let attributes in shark) {
    // console.log(`${attributes} :: ${shark[attributes]}`)
}

// it will return index of array
let numArray1 = [1, 4, 16, 25, 49];
for (let value in numArray1) {
    // console.log(value);
}

// It will return value of array
let numArray2 = [1, 4, 16, 25, 49];
for (let value in numArray) {
    // console.log(numArray[value]);
}

// it will return both index and value of array.
// for(let [value, index] in numArray) ---->> Not Valid 
let numArray3 = [1, 4, 16, 25, 49];
for (let index in numArray3) {
    const value = numArray[index]
    // console.log(`${index} : ${value}`)
}