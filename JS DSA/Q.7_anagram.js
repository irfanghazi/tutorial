//! To check Anagram
function checkStringsAnagram() {
    var a = "Army";
    var b = "Mary"
    const str1 = a.toLowerCase().split('').sort().join('')
    const str2 = b.toLowerCase().split('').sort().join('')
    if (str1 == str2) {
        console.log('True')
    } else {
        console.log('False')
    }
}
// checkStringsAnagram()

//! To check Plaindrome

function palindrome(){
    const string = 'Radar'
    const str = string.split('').reverse().join('')
    if(string.toLocaleLowerCase() == str.toLocaleLowerCase()){
        console.log("Palindrome")
    }else{
        console.log("Not Palindrome")
    }
}
// palindrome()

//! Without in-built function 
function checkPalindrome(){
    const string = 'raddar'
    const len = string.length
    for(let i = 0; i < len / 2; i++){
        if(string[i] !== string[len - 1 - i]){
            return false
        }
    }
    return true
 }
//  console.log(checkPalindrome())