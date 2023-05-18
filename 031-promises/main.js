function fun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Bad Data')
        }, 100)
    })
}

function fun2() {
    console.log('Function 2')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolved('Smile')
        }, 100)
    })
}

function onSuccess(data) {
    console.log('Success: data')
}

function onError(errorCode) {
    console.log('ERROR: ${errorCode}')
}

function onFinally() {
    console.log('Finally Done')
}

fun1()
.then(fun2)
.then(onSuccess)
.catch(onError)
.finally(onFinally)