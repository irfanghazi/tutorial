//! Remove Duplicate characters from String

const string = 'banana'

const removeDuplicate = (string) => {
  const data = string.split('').filter((ele, index, arr) => {
   return arr.indexOf(ele) == index
  }).join('')
  console.log(data)
}

// removeDuplicate(string)