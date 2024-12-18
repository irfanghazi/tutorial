// Code 24: Fibonacci Series (0,1,1,2,3,5,8,13....)

function fibonacci(num) {
    let arr = []
    arr.push(0)
    arr.push(1)
    for (let i = 2; i < num; i++) {
        const num = arr[i - 1] + arr[i - 2]
        arr.push(num)
    }
    console.log(arr)
}
// fibonacci(5)

