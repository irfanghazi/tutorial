
function findFirstNonRepeatingCharacter(str) {
    let charCount = {}

    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++
        } else {
            charCount[char] = 1
        }
    }
    for (let x in charCount) {
        if (charCount[x] == 1) {
            return x
        }
    }
}

const str = "swiss";
// const result = findFirstNonRepeatingCharacter(str);
// console.log(result);