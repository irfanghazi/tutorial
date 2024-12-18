//! Code 2: Remove Duplicate characters from array of element and find the count of an elements using set object
var arr = [55, 44, 55, 67, 67, 67, 67, 8, 8, 8, 8, 8, 65, 1, 2, 3, 3, 34, 5];
// console.log(arr.reverse())
const uniqueNUmber = arr.filter((ele, index, array) => {
    return array.indexOf(ele) == index
})
// console.log(uniqueNUmber)
// 
//! using set 

const unique = [... new Set(arr)]
// console.log("Unique NUmber",unique)