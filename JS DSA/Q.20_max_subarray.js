// kadanes algorithm
/* Minimum Sum Subarray */
const array = [1,-2, 3, -2, 3, -1, -1]

const maxSubarray = (arr) => {
   let maxSum = Number.MIN_SAFE_INTEGER
   let sum = 0
   for(let i = 0; i < arr.length; i++){
       sum += arr[i]
       if(sum < 0){
           sum = 0
       }
       if(maxSum < sum){
           maxSum = sum
       }
   }
   console.log(maxSum)
}
// maxSubarray(array)