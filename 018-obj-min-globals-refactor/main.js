const FORM = document.getElementById('form-input')
const ERR = document.getElementById('err')
const CALCULATE_AVG = document.getElementById('output-avg')

const trackingObj = {
    myMPG: [],
    myTripCost: [],
    updateDOM: (input, id) => {
        const divEl = document. querySelector(id)
        const p = document.createElement('p')
        p.textContent = input
        divEl.appendChild(p)
    },
    trackMPGandCost: (miles, gallons, price = 3.79) => {
    const MPG = Math.round(miles/gallons)
    const tripCost = Math.round(gallons * price)
    this.updateDOM (`Miles per gallon is ${MPG} and trip cost is ${tripCost}`, '#output')
    this.myMPG.push(MPG)
    this.myTripCost.push(tripCost)
    },
    calculateSUM: (arr) => {
    let SUM = 0
    for (value of arr) {
        SUM += value
    }
    return SUM
    },
    calculateAvg: function () {
    const sumMPG = this.calculateSUM(this.myMPG)
    const sumTripCost = this.calculateSUM(this.myTripCost)
    const avgMPG = Math.round(sumMPG / this.myMPG.length)
    let avgTripCost = Math.round(sumTripCost/this.myTripCost.length)
    this.updateDOM(`Average MPG is ${avgMPG}`, '#output-avg')
    this.updateDOM(`Average Trip is ${avgTripCost}`, '#output-avg')
    },

    ValidateFORM: function (e) {
    const errMsg = []
    const miles = parseInt(e.target.miles.value)
    const gallon = parseInt(e.target.gallons.value)
    const price = parseInt(e.target.price.value)
    if (miles === 0 || gallons === 0 || price === 0) {
        errMsg.push('Make sure you input value greater than zero. Try Again! ')
    }
    if(price > 1000) {
        errMsg.push('Really!!!?? I think this is in error...Try again')
    }
    if(errMsg.length > 0) {
        ERR.textContent = errMsg
    } else {
        ERR.textContent = ''
        AVG_OUTPUT.textContent = ''
        trackMPGandCost(miles, gallons, price)
        calculateAvg()
    }   
    FORM.reset()
    }
}