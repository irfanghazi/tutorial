
const registration = (cb) => {
    setTimeout(() => {
        console.log('Registation')
        cb()
    }, 2000)
}

const email = (cb) => {
    setTimeout(() => {
        console.log('email')
        cb()
    }, 2000)
}

const login = (cb) => {
    setTimeout(() => {
        console.log('login')
        cb()
    }, 2000)
}

const userData = (cb) => {
    setTimeout(() => {
        console.log('userData')
        cb()
    }, 2000)
}

const showData = () => {
    setTimeout(() => {
        console.log('Show Data')
    }, 1000)
}

// This is call back hell. We are passing one function into another function
// registration(() => {
//     email(() => {
//         login(() => {
//             userData((() => {
//                 showData()
//             }))
//         })
//     })
// })
