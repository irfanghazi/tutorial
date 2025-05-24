function twoSum(num, target) {
    let i = 0
    let j = num.length - 1
    console.log(j);
    while (j > i) {
        const currentSum = num[i] + num[j]
        if (currentSum == target) {
            return [i + 1, j + 1]
        } else if (currentSum > target) {
            j--
        } else {
            i++
        }
    }
}
const numbers = [2, 7, 11, 15]
// const data = twoSum(numbers, 9)
// console.log(data);