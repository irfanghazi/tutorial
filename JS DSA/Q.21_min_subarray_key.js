/* Minimum Sum subarray with given size */
const array = [10, 4, 2, 5, 6, 0, 8, 1]
const key = 3

function getSum(arr, key){
    let minSum = Number.MAX_SAFE_INTEGER
    for(let i = 0; i < arr.length; i++ ){
        let sum = 0;
        for(let j = i; j < key +i; j++){
            sum += arr[j]
        }
        if(sum < minSum){
            minSum = sum
        }
    }
    console.log(minSum)
}  
// getSum(array, key)