
// Rotate the array
/* arr = [2, 4, 6, 8, 10]
k  = 2
[8, 10, 2, 4, 6] */

const arr = [2, 4, 6, 8, 10]
let k = 2
k = k % arr.length

// Brute Force Approach
function rotatedArray(arr, k) {
    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop())
    }
    console.log(arr)
}
// rotatedArray(arr, k)
