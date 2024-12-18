//! Infinite currying sum

function add(a) {
    return function (b) {
        if (b) {
            return add(a + b)
        } else {
            return a
        }
    }
}

// console.log(add(4)(5)(6)(2)())