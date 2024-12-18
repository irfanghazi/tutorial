
//! Using O(N^2)
const arr = [44,4, 5, 2, 25, 10];

function nextGreaterElement11(arr) {
    console.log("object");
    const res = new Array(arr.length).fill(-1);
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                res[i] = arr[j]
                break
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        console.log(`${arr[i]} --> ${res[i]}`);
    }
}
// nextGreaterElement11(arr);


//! O(N)

function nextGreaterElement(arr) {
    let stack = []; // Stack to store elements
    let result = new Array(arr.length).fill(-1); // Result array initialized to -1 for each element

    // Traverse the array from right to left
    for (let i = arr.length - 1; i >= 0; i--) {
        let current = arr[i];

        // Pop elements from the stack that are smaller than the current element
        while (stack.length > 0 && stack[stack.length - 1] <= current) {
            stack.pop(); // Remove smaller elements from stack
        }
        // If the stack is not empty, the top element is the next greater element
        if (stack.length > 0) {
            result[i] = stack[stack.length - 1];
        }
        // Push the current element onto the stack for future comparisons
        stack.push(current);
    }
    // Print the result in the desired format
    for (let i = 0; i < arr.length; i++) {
        console.log(`${arr[i]} --> ${result[i]}`);
    }
}
// nextGreaterElement1(arr);

function nextGreaterElement1(arr) {
    let stack = []
    let result = Array(arr.length).fill(-1)

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]

        while (stack.length > 0 && stack[stack.length - 1] < current) {
            stack.pop()
        }
        if (stack.length > 0) {
            result[i] = stack[stack.length -1]
        }
    }
}