
// Code 13: To find longest word from a string using (for of) 
/*for(var i=0; i>=num; i++) means iterate by indexing*/
/*for (var word of words) means iterate by an elements not by indexing*/
function longestWord() {
    const string = 'I am Irfan suparstasr Ghazi'
    const str = string.split(' ')
    let maxWord = ''
    for (let word of str) {
        if (word.length > maxWord.length) {
            maxWord = word
        }
    }
    return maxWord
}
// console.log(longestWord())  

function longest(){
    const string = 'I am Irfan suparstasr Ghaziiiiiiiiiiiiiiiiiiiiii'
    let maxLenth = ''
    let word = ''
    for(let i = 0; i <= string.length - 1; i++){
        if(string[i] == ' '){
            if(word.length > maxLenth.length){
                maxLenth = word
                word = ''
            }
        }else{
            word += string[i]
        }
    }
    if(word.length > maxLenth.length){
        maxLenth = word
    }
    return maxLenth
}
// console.log(longest())

function longestWord1(){
    const string = 'I am Irfan suparstasrccccccccccccc Ghaziiiiiiii'
    const str = string.split(' ')
    let maxLenth = ''
    for(let i = 0; i <= str.length -1; i++){
        if(str[i].length > maxLenth.length){
            maxLenth = str[i]
        }
    }
    console.log(maxLenth)
}
// longestWord1()