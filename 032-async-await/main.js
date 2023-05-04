function getData() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve('Kere is your DATA')
            // reject('Something went wrong')
         }, 1)
    })
}

async function start() {
    try {
        const result = await getData()
        // SUCCESS
    }   catch (err) {
        // FAILURE
    } 
}

// async function start2() {
//     const result = await getData()
//     console.log(result)
//      .catch(error => {
//       console.log('Error: ${error}')
//     })
//     console.log(result)
// }

start2()