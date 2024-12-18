/* Find the minimum index and swap the number */

const arr = [4, 2, 1, 14, 11, 23]
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    console.log(arr);
}

// selectionSort(arr)

// find the minimum number
function findMin(arr) {
    let minNum = arr[0]
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < minNum) {
                minNum = arr[j]
            }
        }
    }
    console.log("Min-------", minNum);
}
// findMin(arr)

function bubbleSort(arr) {

    /* In Every round we put the largest element at the end */
    const n = arr.length - 1
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    console.log("@@@@@@@@", arr);
}
const arr1 = [4, 2, 1, 14, 11, 9]
// bubbleSort(arr1)



//! Flat Array
const arr2 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
n = 2

function flatArray(arr, n) {
    if (n == 0) {
        return arr
    }
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            let flatArr = flatArray(arr[i], n - 1)
            res.push(...flatArr)
        } else {
            res.push(arr[i])
        }
    }
    return res
}

const resp = flatArray(arr2, n)
// console.log(resp);

//! Flat Object
const user = {
    name: "Vishal",
    address: {
        primary: {
            house: "109",
            street: {
                main: "21",
                cross: "32"
            }
        }
    }
};

//outputd
// {
//   user_name: "Vishal",
//   user_address_primary_house: "109",
//   user_address_primary_street_main: "21",
//   user_address_primary_street_cross: "32",
// }

function flatNestedObj(obj, prefix, res = {}) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = prefix + '_' + key
            if (typeof obj[key] == 'object') {
                flatNestedObj(obj[key], newKey, res)
            } else {
                res[newKey] = obj[key]
            }
        }
    }
    return res
}


const respo = flatNestedObj(user, 'user')
console.log(respo);

