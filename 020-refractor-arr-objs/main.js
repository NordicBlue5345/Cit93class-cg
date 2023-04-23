const FORM = document.getElementById('form-input')
const ERR = document.getElementById('err')
const CALCULATE_AVG = document.getElementById('output-avg')

//const MY_MPG = []
//const MY_TRIP_COST = []

const MY_AVG = []

const updateDOM = (input, id) => {
    const divEl = document. querySelector(id)
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

const trackMPGandCost = (obj) => {
    const MPG = Math.round(obj.miles/obj.gallon)
    const tripCost = Math.round(obj.gallons * obj.price)
    updateDOM(`Miles per gallon is ${MPG} and trip cost is ${tripCost}`, '#output')
    obj.MPG = MPG
    obj.tripCost = tripCost
    //MY_MPG.push(MPG)
    //MY_TRIP_COST.push(tripCost)
    return obj
}

//const calculateSUM = (arr) => {
    //let SUM = 0
      //   for (let i =0; i < arr.length; i++) {
    //     sum = sum + arr[i]
    // }
    // arr.forEach(Element => {
    //      sum += Element
    // })
    //for (value of arr) {
        //SUM += value
    //}
   // return SUM
//}

const calculateAvg = () => {
    let sumMPG = 0
    let sumTripCost = 0
    MY_AVG.forEach(obj => {
        sumMPG += obj.MPG
        sumTripCost += obj.tripCost
    })
    //let sumMPG = calculateSUM(myMPG)
    //let avgTripCost = Math.round(calculateSUM(myTripCost)
    let avgMPG = Math.round(sumMPG/MY_AVG.length)
    let avgTripCost = Math.round(sumTripCost/MY_AVG.length)
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
    } 
    if(price > 1000) {
        errMsg.push('Really!!!?? I think this is in error...Try again')
    }    
    if(errMsg.length > 0) {
        ERR.textContent = errMsg
    } else {
        const newMyAvg = {
            miles: miles,
            gallons: gallons,
            prices: price
        }
        ERR.textContent = ''
        AVG_OUTPUT.textContent = ''
        const updatedMyAvg = trackMPGandCost(newMyAvg)
        MY_AVG.push(updatedMyAvg)
        calculateAvg()
    }   
    FORM.reset()
    
    

})

