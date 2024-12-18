//input
var input = "India is my country"
// Output
var output = 'country my is India'
var output = 'aidnI si ym yrtnuoc'
var output = "yrtnuoc ym si aidnI"

//! Reverse the whole sentence
function reversSentence(string) {
    let word = ''
    let reverse = ''
    for (let i = string.length - 1; i >= 0; i--) {
        console.log(word)
        if ((string[i] !== ' ')) {
            word = string[i] + word
            if (i == 0) {
                reverse += word
            }
        } else {
            reverse += word + ' ';
            word = ''
        }
    }
    return reverse;
}
// console.log(reversSentence(input))

//! Reverse the each word
function reverseWord(string) {
    // console.log(string)
    let word = ''
    let reverse = ''
    for (let i = 0; i <= string.length - 1; i++) {
        if (string[i] !== ' ') {
            word = string[i] + word
            if (i == string.length - 1) {
                reverse += word
            }
        } else {
            reverse += word + " "
            word = ''
        }
    }
    return reverse

}
// console.log(reverseWord(input))

//! Reverse sentence and word 

function reversSentenceAndWord(string) {
    let word = ''
    let reverse = ''
    for (let i = string.length - 1; i >= 0; i--) {
        // if((string[i] !== ' ')){
        //     word += string[i]
        //     if( i == 0){
        //         reverse += word
        //     }
        // }else{
        //     reverse += word + ' ';
        //     word = ''
        // }
        reverse += string[i]
    }
    return reverse;
}
// console.log(reversSentenceAndWord(input))
