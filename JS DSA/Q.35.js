console.log("****************************");
function Add(x, y) {
    return x + y
}

function Square(x) {
    return x * x
}

function mulTwo(x) {
    return 2 * x
}

// const add = Add(2,5)
// console.log(mulTwo(Square(Add(2,3))));

function compose(f1, f2) {
    return function (a, b) {
        return f2(f1(a, b))
    }
}

const composeOne = (f1, f2, f3) => (a, b) => f3(f2(f1(a, b)))

const res = composeOne(Add, Square, mulTwo)
// console.log(res(2, 3));

//! Composite functions

function Sum(args) {
    const sum = args.reduce((a, c) => {
        return a + c
    }, 0)
    return sum
}

function SquareNum(x) {
    return x * x
}

function MulThree(x) {
    return 3 * x
}

function composeAll(...func) {
    return function (...values) {
        return func.reduce((val, fn) => {
            return fn(val)
        }, values)
    }
}

const data = composeAll(Sum, SquareNum, MulThree)
// console.log(data(1,2,3));

//! Memoize

function sqrt(x) {
    return x * x
}

// console.time();
// console.log(sqrt(5));
// console.timeEnd()


function memoize(fn) {
    let cache = {}
    return function (...args) {
        console.log(cache);
        let n = args[0]
        if (n in cache) {
            return cache[n]
        } else {
            const result = fn(n)
            cache[n] = result
            return result
        }
    }
}

console.time();
const effRes = memoize(sqrt)
console.log(effRes(5, 7));
console.timeEnd()

console.time();
console.log(effRes(5));
console.timeEnd()
console.log("****************************");


function memoizeFun(fn) {
    const cache = {}; // Cache to store results

    return function (...args) {
        const key = JSON.stringify(args); // Use JSON.stringify to handle multiple arguments
        console.log("Cache:", cache); // Log cache state for debugging

        if (key in cache) {
            return cache[key]; // Return cached result if it exists
        } else {
            const result = fn(...args); // Call the original function with all arguments
            cache[key] = result;        // Cache the result
            return result;
        }
    };
}

console.time();
const effRes1 = memoize(sqrt)
console.log(effRes1(5, 7));
console.timeEnd()

console.time();
console.log(effRes1(5));
console.timeEnd()


// Promise Using Promise.all
function fakePromise(input, delay, isRejected) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isRejected) {
                reject(new Error('Something went wrong'))
                return
            }
            resolve(input)
        }, delay)
    })
}
Promise.all([fakePromise(2, 1000, false), fakePromise(3, 2000, false)]).then((res) => {
    console.log("res--", res);
}).catch((err) => {
    console.log("err--", err);
})

// Create Our own Prmoise.all
function myPromiseAll(fun) {
    return new Promise((resolve, reject) => {
        let result = new Array(fun.length)
        let completed = 0
        for (let i = 0; i < fun.length; i++) {
            fun[i].then((res) => {
                result[i] = res
                completed += 1
                if (result.length == completed) {
                    return resolve(result)
                }
            }).catch((err) => {
                return reject(err)
            })
        }
    })
}

myPromiseAll([fakePromise(2, 1000, false), fakePromise(3, 2000, true)]).then((res) => {
    console.log("myPromiseRes--", res);
}).catch((err) => {
    console.log("myPromiseErr--", err);
})




var join = function (arr1, arr2) {
    const result = {}
    for (let i = 0; i < arr1.length; i++) {
        result[arr1[i].id] = arr1[i]
    }
    for (let j = 0; j < arr2.length; j++) {
        if (result[arr2[j].id]) {
            for(let key in arr2[j]){
                result[arr2[j]]
            }
        } else {
            result[arr2[j].id] = arr2[j]
        }
    }
};

arr1 = [
    { "id": 1, "x": 1 },
    { "id": 2, "x": 9 },
    { "id": 3, "x": 7 }

],

arr2 = [
        { "id": 3, "x": 5 }
]

join(arr1, arr2)

//! Say Digits
function sayDigits(number) {
    const digitWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    function helper(num) {
        // Base case: if number is 0, we stop recursion
        if (num === 0) return "";
        // Recursive case: process the current digit and recurse on the rest
        const lastDigit = num % 10; // Get the last digit
        const restOfNumber = Math.floor(num / 10); // Remove the last digit
        console.log("object---------", lastDigit, restOfNumber);
        // Recursive call to handle the rest of the number
        const result = helper(restOfNumber);

        // Add the current digit word at the end of the recursive result
        return result + (result ? " " : "") + digitWords[lastDigit];
    }
    // Special case for 0
    if (number === 0) {
        console.log(digitWords[0]);
        return;
    }
    // Start the recursive function and print the result
    console.log(helper(number));
}

// sayDigits(103)


















