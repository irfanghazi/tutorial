// USing Promise instead of call back hell

const registration = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Registation SuccessFull')
        }, 2000)
    })
}

const email = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Email send")
        }, 2000)
    })
}

const login = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Login Success")
        }, 2000)
    })
}

const userData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Get User Data")
            // reject('Error in user Data')
        }, 2000)
    })
}

const showData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Show Data')
            // reject("Error in Show Data")
        }, 2000)
    })
}

// registration().then((res) => {
//     console.log(res)
//     return email()
// }).then((res) => {
//     console.log(res)
//     return login()
// }).then((res) => {
//     console.log(res)
//     return userData()
// }).then((res) => {
//     console.log(res)
//     return showData()
// }).then((res) => {
//     console.log(res)
// }).catch((err) =>{
//     console.log(err)
// })
