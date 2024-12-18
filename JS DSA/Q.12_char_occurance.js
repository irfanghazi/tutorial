// Code 18:To find character occurance from the string

const string = 'philippinnes'
function characterOccurance(string, key) {
    let count = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] == key) {
            count++
        }
    }
    console.log(`${key} occurs ${count} times.`)

}
// characterOccurance(string, 'p')

//!  *** How would you append an empty object with key and value 
/* 
const emptyObject = {};
const character = 'a';
const value = 1;

emptyObject[character] = value;

console.log(emptyObject);
*/

//! Find the occurance of all characters in a string
function allCharacterOccurrence(string) {
    let str = {}
    for (let i = 0; i < string.length; i++) {
        // console.log(str, string[i], str[string[i]])
        if (str[string[i]]) {
            str[string[i]]++
        } else {
            str[string[i]] = 1
        }
    }
    console.log(str)
}
// allCharacterOccurrence([1,2,2,3,1]);



