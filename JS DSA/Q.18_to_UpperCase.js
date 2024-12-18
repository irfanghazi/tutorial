/* Code 35: Uppercase of each first letter of a words  */

const string = 'i am Irfan ghazi'

function upperCase(string) {
   const str = string.toLowerCase().split(' ').map((ele) => ele[0].toUpperCase() + ele.slice(1)).join(' ')
   console.log(str)
}
// upperCase(string)

