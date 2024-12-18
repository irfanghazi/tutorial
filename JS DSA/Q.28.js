
//Using Async/Await
const registration = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Registation SuccessFull')
        }, 4000)
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

const executeTask = async () => {
    try {
        const registrationRes = await registration()
        console.log(registrationRes)

        const emailRes = await email()
        console.log(emailRes)

        const loginRes = await login()
        console.log(loginRes)

        const userDataRes = await userData()
        console.log(userDataRes)

        const showDataRes = await showData()
        console.log(showDataRes)

        const name = 'irfan'
        return name

    } catch (error) {
        console.log(error)
    }
}
//  executeTask()
// .then((res) => {
//     console.log('All Set', res)
// })


  
