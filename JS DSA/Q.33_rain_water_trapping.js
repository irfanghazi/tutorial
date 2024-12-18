const data = [3, 1, 2, 4, 0, 1, 3, 2]

function rainWaterTrapping(arr) {
    let left = []
    let right = []

    let n = arr.length
    left[0] = arr[0]
    right[n - 1] = arr[n - 1]

    for (let i = 1; i < n; i++) {
        left[i] = Math.max(left[i - 1], arr[i])
    }

    for (let j = n - 2; j >= 0; j--) {
        right[j] = Math.max(right[j + 1], arr[j])
    }

    let trappedWater = 0

    for (let i = 0; i < n; i++) {
        trappedWater += Math.min(left[i], right[i]) - arr[i]
    }
    return trappedWater

}


// const ans = rainWaterTrapping(data)
// console.log(ans);