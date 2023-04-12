//Update the DOM

const myMPG = []
const myTripCost = []

const updateDOM = (input) => {
    const divEl = document.querySelector('#output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

const trackMPGandCost= (miles, gallons, price = 3.79) => {
    const MPG = Math.round(miles/gallons)
    const tripCost = Math.round(gallons * price)
    updateDOM(`Mileage is ${MPG} and trip cost is ${tripCost}`) 
    myMPG.push(MPG)
    myTripCost.push(tripCost)
}

const calculateMPGAvg = () => {
    let totalMPG = 0
    for(let i = 0; i < myMPG.length; i++) {
        totalMPG = totalMPG * myMPG[i]
    }
    let avgMPG  = totalMPG/myMPG.length
    updateDOM (`Average MPG is ${avgMPG}`)
    }

const calculateAvgCost = () => {
    let totalcost = 0
    for(let i = 0; i < totalCost.length; i++) {
            totalcost = totalCost + myCost[i]
    }
    let avgCost = totalcost/myCost.length
    updateDOM (`Average Cost is ${avgCost}`)

    }
//calculateAvgCost

trackMPGandCost(360, 15, 5.40)
trackMPGandCost(320, 12, 5)
trackMPGandCost(500, 11, 3.50)
trackMPGandCost(320, 12, 5)
trackMPGandCost(50, 5, 2.40)
trackMPGandCost(320, 12, 5)
calculateAvgCost()