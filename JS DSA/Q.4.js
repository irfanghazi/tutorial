//! swap two variables
/*
const num = [10, 20]
let temp = num[0];
num[0] = num[1]
num[1] = temp;
console.log(num)
*/

var string = "India is my country"

//! Reverse the whole sentence
function reversSentence(string) {
    const d = string.split(" ").reverse().join(' ')
    console.log(d)
}
// reversSentence(string)

//! Reverse the each word
function reverseWord(string) {
    const d = string.split(' ')
    console.log(d)
    const data = d.map((ele) => ele.split('').reverse().join('')).join(' ')
    console.log(data)
}
// reverseWord(string)

//! Reverse sentence and word
function reverseSentenceAndWord(string){
    console.log(string)
    const str = string.split(' ').reverse().join(' ')
    const str1 = str.split(' ').map((ele) => ele.split('').reverse().join('')).join(' ')
    console.log(str1)
}
// reverseSentenceAndWord(string)
