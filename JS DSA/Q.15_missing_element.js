/*  Code 26: Finding a missing elements in an array and then add with existing elements. 
(-1 means if elements not found then it will return always -1 as per rule)*/

const a = [1, 2, 3, 4, 5, 6, 7, 8, 10]

function missingElement(array) {
  const arr = array.sort((a, b) => a - b)
  console.log("%%%%%%%%%%%%%%%%%%%",arr.pop());
  const lastElement = [...arr].pop()
  // const lastElement = arr.pop() // cant use because it will modify the array
  let missing = []
  for (let i = 1; i < lastElement; i++) {
    if (a.indexOf(i) == -1) {
      missing.push(i)
    }
  }
  const newArr = [...arr, ...missing]
  console.log(newArr.sort((a, b) => a - b))
}
// missingElement(a)

