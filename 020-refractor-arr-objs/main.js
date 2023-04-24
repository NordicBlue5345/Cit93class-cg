const FORM = document.getElementById('form-input')
const ERR = document.getElementById('err')
const AVG_OUTPUT = document.getElementById('output-avg')

const MY_DATA = []

const updateDOM = (input, id) => {
    const divEl = document. querySelector(id)
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

const trackMPGandCost = (miles, gallons, price) => {
    const MPG = Math.round(miles/gallon)
    const tripCost = Math.round(gallons * price)
    updateDOM(`Miles per gallon is ${MPG} and trip cost is ${tripCost}`, '#output')
    return  {
        MPG: MPG,
        tripCost: tripCost,
        miles: miles,
        gallons:gallons
    }
}

const calculateAvg = () => {
    let sumMPG = 0
    let sumTripCost = 0
    MY_DATA.forEach(obj => {
        sumMPG += obj.MPG
        sumTripCost += obj.tripCost
    })
    const avgMPG = Math.round(sumMPG/MY_DATA.length)
    const avgTripCost = Math.round(sumTripCost/MY_DATA.length)
    updateDOM(`Average MPG is ${avgMPG}`, '#output-avg')
    updateDOM(`Average Trip is ${avgTripCost}`, '#output-avg')
}

const isFormValid = (miles, gallons, price) => {
    const errMsg = []
    if (miles === 0 || gallons === 0 || price === 0) {
        errMsg.push('Make sure you input value greater than zero. Try Again! ')
    }
    if (price > 1000) {
        errMsg.push('Really!!!?? I think this is in error...Try again')
    }
    if (errMsg.length > 0) {
        ERR.textContent = errMsg
        return false
    } else {
        return true
    }
}

    FORM.addEventListener('submit', (e) => {
    e.preventDefault()
    // const errMsg = []
    const miles = parseInt(e.target.miles.value)
    const gallon = parseInt(e.target.gallons.value)
    const price = parseInt(e.target.price.value)
    const isValid = isFormValid(miles, gallon, price)
    if (isValid) {
            // const newDataObj = {
            //     miles: miles,
            //     gallons: gallons,
            //     prices: price
            // }
        ERR.textContent = ''
        AVG_OUTPUT.textContent = ''
        const updatedDataObj = trackMPGandCost(miles, gallons, price)
        MY_DATA.push(updatedDataObj)
        calculateAvg()
    }
    FORM.reset()  
})