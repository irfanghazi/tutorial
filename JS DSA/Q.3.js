//! Code 3: Remove Duplicate characters from array of element using filter
var myArray = ['a', 1, 'a', 2, '1'];

const data = myArray.filter((ele, index, arr) => arr.indexOf(ele) == index)
// console.log(data)