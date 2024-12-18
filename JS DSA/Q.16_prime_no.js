//Code 30: To check if given number is prime or not

function checkPrime(num) {
    if (num < 2) return false
    for (let i = 2; i*i < num; i++) {
        console.log("first", i)
        if (num % i == 0) {
            return false
        }
    }
    return true
}
// console.log(checkPrime(101))


//! find all the prime number
function sieveOfEratosthenes(limit) {
    // const isPrime = new Array(limit).fill(true)

    let primeBool = []
    for (let i = 0; i < limit; i++) {
        primeBool[i] = true
    }
    primeBool[0] = primeBool[1] = false

    for (let i = 2; i * i <= limit; i++) {
        if (primeBool) {
            for (let j = i * i; j < limit; j = j + i) {
                primeBool[j] = false
            }
        }
    }

    let prime = []
    for(let i = 2; i < primeBool.length; i++){
        if(primeBool[i]){
            prime.push(i)
        }
    }

    return prime
}

// console.log(sieveOfEratosthenes(50));
