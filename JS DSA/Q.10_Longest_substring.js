// Code 16: To find longest common string from array of strings


//! This function will work only for when the common string is in the start.
// Method: 1
function longestCommonString() {
    const array = ["google", "goo", "gosh",]
    const arr = array.sort();
    let i = 0;
    while (arr[0].length > 0 && arr[0].charAt(i) == arr[arr.length - 1].charAt(i)) {
        i++;
    }
    const commonString = arr[0].substring(0, i)
    console.log(commonString)
}
// longestCommonString() 

// Method: 2
function longestCommonString2() {
    const array = ["google", "goo", "gosh",]
    const arr = array.sort();
    console.log(arr);
    let i = 0;
    console.log(arr[0][i])
    while (arr[0].length > 0 && arr[0][i] == arr[arr.length - 1][i]) {
        i++;
    }
    const commonString = arr[0].substring(0, i)
    console.log(commonString)
}
// longestCommonString2() 

// Method: 3
function longestCommonString3() {
    const array = ["google", "goo", "gosh"];
    const arr = array.sort()
    console.log(arr)
    let substring = ''
    for (i = 0; i < arr[0].length; i++) {
        if (arr[0][i] == arr[arr.length - 1][i]) {
            substring += arr[0][i]
        }
    }
    console.log(substring)

}
// longestCommonString3()

//! Find the common substring at any position ***

function longestSubString() {
    // const array = ["gglele", "lgl", "pgleosh"];
    const array = ["google", "goo", "gosh"];
    const shortest = array.reduce((acc, curr) => {
        return acc.length > curr.length ? curr : acc
    })

    console.log("shortest", )
    let longestSubstring = "";
    for (let i = 0; i < shortest.length; i++) {
        let substring = ''
        for (let j = i + 1; j <= shortest.length; j++) {
            substring = shortest.substring(i, j)
            let isCommon = true

            for (let words of array) {
                if (words.includes(substring)) {
                    isCommon = true
                } else {
                    isCommon = false
                }
            }
            if (isCommon && substring.length > longestSubstring.length) {
                longestSubstring = substring;
            }
        }
    }
    return longestSubstring

}
// console.log(longestSubString())