/* Frequency of array */
const array = [1, 5, 3, 2, 4, 2, 5, 6, 7, 8, 6, 5]

const freq = array.reduce((acc, curr) => {
    if(curr in acc){
        acc[curr]++
    }else{
       acc[curr] = 1
    }
    return acc
}, {})

// console.log(freq)

//! Using for loop

function CalCulateFreq(arr){
    let freq = {}
    for(let i = 0; i < arr.length; i++){
        if(freq[arr[i]]){
            freq[arr[i]]++
        }else{
            freq[arr[i]] = 1
        }
    }
    console.log(freq)
    return freq
}
// CalCulateFreq(array)