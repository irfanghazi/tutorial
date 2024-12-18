
function moveZeros(arr) {
    let result = []
    let zeroCount = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            zeroCount++
        } else {
            result.push(arr[i])
        }
    }
    for (let i = 0; i < zeroCount; i++) {
        result.push(0)
    }
    console.log(result);
}

function moveZerosToEnd(arr) {
    let nonZeroIndex = 0;

    // Traverse through the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            // Swap non-zero element with the element at nonZeroIndex
            [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
            nonZeroIndex++;
        }
        console.log(arr);
    }

    return arr;
}
const arr = [1, 0, 1, 0, 3, 5, 0, 6]

// moveZerosToEnd(arr)



function moveZeros(arr) {
    let nonZeroIndex = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]]
            nonZeroIndex++
        }
    }
    return arr
}
// const res = moveZeros(arr)
// console.log(res);