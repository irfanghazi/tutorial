// Code 19: To find a first pair whose sum is zero  

const array = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 1]

//! Using for loop
function getSumPairZero(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] == 0) {
                result.push([array[i], array[j]])
            }
        }
    }
    return result
}
//! using while Loop
function getSumPairZero1(arr) {
    let i = 0;
    let j = arr.length - 1
    while (i < j) {
        const currentSum = arr[i] + arr[j]
        if (currentSum == 0) {
            return [arr[i], arr[j]]
        } else if (currentSum > 0) {
            j--
        } else {
            i++
        }
    }
}
// console.log(getSumPairZero1(array))
