
let counter = 0
const getData = () => {
    // Do some api call
    console.log("Fetching...", counter++);
}

const debounce = (cb, delay) => {
    let timer;
    const func = function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            cb()
        }, delay);
    }
    return func

}
const betterFunction = debounce(getData, 500)
console.log("@@@@@@@@@@@", betterFunction);
