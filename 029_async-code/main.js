function orderPizza(callback) {
    setTimeout(() => {
        const pizza = `Pizza`
        callback()
    } , 2000)
}

function pizzaReady(pizza) {
    console.log(` eat time ${pizza}`)
}

orderPizza(pizzaReady)
console.log(`call Qoli`)


function thing1(callback) {
    callback()
    //call pizza sap
}

function things2(callback) {
    callback()
    // Order the Pizza
}

function thing3 (callback) {
    callback()
    //eat they
}

thing1(() => {
    things2(() => {
        thing3()
    })
})