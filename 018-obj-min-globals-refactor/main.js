const FORM = document.getElementById('form-input')
const ERR = document.getElementById('err')
const CALCULATE_AVG = document.getElementById('calculateAvg')

const trackingObj = {
    myMPG: [],
    myTripCost: [],
    updateDOM: (input, id) => {
        const divEl = document. querySelector(id)
        const p = document.createElement('p')
        p.textContent = input
        divEl.appendChild(p)
    }
}

const trackMPGandCost = (miles, gallons, price = 3.79) => {
    const MPG = Math.round(miles/gallons)
    const tripCost = Math.round(gallons * price)
    this.updateDOM (`Miles per gallon is ${MPG} and trip cost is ${tripCost}`, '#output')
    this.myMPG.push(MPG)
    this.myTripCost.push(tripCost)
}

const calculateSUM = (arr) => {
    let SUM = 0
    for (value of arr) {
        SUM += value
    }
    return SUM
}
calculateAvg = {
    const sumMPG = math.round(this.calculateSUM(this.myMPG),
    const sumTripCost = Math.round(this.calculateSUM(this.myTripCost)),
    const avgMPG = Math.round(sumMPG / MY_MPG.length)
    let avgTripCost = Math.round(sumTripCost / MY_TRIP_COST.length)
    this.updateDOM(`Average MPG is ${avgMPG}`, '#output-avg')
    this.updateDOM(`Average Trip is ${avgTripCost}`, '#output-avg')
}

FORM.addEventListener('submit', (e) => {
    e.preventDefault()
    const errMsg = []
    const miles = parseInt(e.target.miles.value)
    const gallon = parseInt(e.target.gallons.value)
    const price = parseInt(e.target.price.value)
    if (miles === 0 || gallons === 0 || price === 0) {
        errMsg.push('Make sure you input value greater than zero. Try Again! ')
        setTimeout(() => {
            console.log("Delayed for 1 second.");
          }, 3000);
    } 

    if(price > 1000) {
        errMsg.push('Really!!!?? I think this is in error...Try again')

        setTimeout(() => {
            console.log("Delayed for 1 second.");
          }, 3000);
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
})