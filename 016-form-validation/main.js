const FORM = document.getElementById('form-input')
const ERR = document.getElementById('err')
const CALCULATE_AVG = document.getElementById('calculateAvg')

const MY_MPG = []
const MY_TRIP_COST = []

const updateDOM = (input, id) => {
    const divEl = document. querySelector(id)
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

const trackMPGandCost = (miles, gallons, price = 3.79) => {
    const MPG = Math.round(miles/gallons)
    const tripCost = Math.round(gallons * price)
    updateDOM(`Miles per gallon is ${MPG} and trip cost is ${tripCost}`, '#output')
    MY_MPG.push(MPG)
    MY_TRIP_COST.push(tripCost)
}

const calculateSUM = (arr) => {
    let SUM = 0
      //   for (let i =0; i < arr.length; i++) {
    //     sum = sum + arr[i]
    // }
    // arr.forEach(Element => {
    //      sum += Element
    // })
    for (value of arr) {
        SUM += value
    }
    return SUM
}

const calculateAvg = () => {
    let sumMPG = calculateSUM(MY_MPG)
    let sumTripCost = calculateSUM(MY_TRIP_COST)
    let avgMPG = Math.round(sumMPG / MY_MPG.length)
    let avgTripCost = Math.round(sumTripCost / MY_TRIP_COST.length)
    updateDOM(`Average MPG is ${avgMPG}`, '#output-avg')
    updateDOM(`Average Trip is ${avgTripCost}`, '#output-avg')
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

