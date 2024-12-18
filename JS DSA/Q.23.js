// Reverse an array

const arr = [1, 3, 2, 4, 5, 8]
function reverse(arr) {
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
    console.log(arr)
}

// reverse(arr)

let a = 10
let b = 20

a = a + b
b = a - b
a = a - b
// console.log(a, b)


function rightShiftArray(arr, positions) {

    const n = arr.length;
    positions = positions % n; // Calculate the effective shift amount
  
    const result = [...arr]; // Create a copy of the original array
  
    for (let i = 0; i < n; i++) {
      const newIndex = (i + positions) % n; // Calculate the new index after shifting
      result[newIndex] = arr[i]; // Update the element at the new index
      console.log(result)
    }
  
    return result;
  }
  
  const originalArray = [1, 2, 3, 4, 5];
  // const shiftedArray = rightShiftArray(originalArray, 2);
  // console.log(shiftedArray);
  