const arr = [1, 2, 3, 4, 5, 6]

/* Map Ployfill */
Array.prototype.mapFun = function (cb) {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        arr.push(cb(this[i]))
    }
    return arr
}

function square(x) {
    return x * x
}

const mappedArr = arr.mapFun(square)
// console.log(mappedArr);


/* Filter Ployfill */
Array.prototype.filterFun = function (cb) {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i])) {
            arr.push(this[i])
        }
    }
    return arr
}

function even(x) {
    if (x % 2 == 0) {
        return true
    }
    return false
}
const filterArr = arr.filterFun(even)
// console.log("object", filterArr);

/* Reduce Polyfill */
Array.prototype.reduceFun = function (cb, initialValue) {
    let acc = arguments.length < 2 ? this[0] : initialValue
    for (let i = 0; i < this.length; i++) {
        acc = acc + this[i]
    }
    return acc
}

function sum(x, y) {
    return x + y
}

const ans = arr.reduceFun(sum, 0)
// console.log(ans);

/* Currying */

function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}
const ans1 = sum(1)(2)(3)

let count = true

const countVal = new Promise((resolve, reject) => {
    if (count) {
        resolve('Success')
    } else {
        reject('Fail')
    }
})

countVal.then((res) => {
    // console.log(res);
})

// console.log("-------------", countVal);


let url = 'https://google.com'
const fetchDataWithTimeOut = (url, delay) => {
    // const fetchData = fetch(url)
    const fetchData = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Fetch successfully')
        }, 100);
    })

    const timeOutData = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Request Time Out')
        }, delay);
    })
    return Promise.allSettled([fetchData, timeOutData])
}

// fetchDataWithTimeOut(url, 500).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

// CALL 

const student = {
    name: 'Irfan',
    location: 'India',
}

const teacher = {
    name: "Tim",
    location: 'UK'
}

const email = function (country, state) {
    console.log(`${this.name}${this.location}@gmail.com. He is an ${country} and lives in ${state}`);
}

// call Polyfills

Function.prototype.myCall = function (obj, ...arg) {
    obj.fn = this
    obj.fn(...arg)
}
email.myCall(student, 'Noida', 'Punjab')


// apply
Function.prototype.myApply = function (obj, arg) {
    obj.fn = this
    obj.fn(...arg)
}
email.myApply(student, ['Indian', "Noida"])

// bind

Function.prototype.myBind = function (obj) {
    obj.fn = this
    return function(...args){
        obj.fn(...args)
    }
}

const user1 = email.myBind(student)
user1('Bihar', 'punjab')


