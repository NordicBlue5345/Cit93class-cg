//Update the DOM

const myMPG = []
const myTripCost = []

const updateDOM = (input) => {
    const divEl = document.getElementById('output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

const trackMPGCost= (miles, gallons, price = 3.79) => {
    const MPG = Math.round(miles/gallons)
    const tripCost = Math.round(gallons * price)
    updateDOM(`Mileage is ${MPG} and trip cost is ${tripCost}`) 
    myMPG.push(MPG)
    myTripCost.push(tripCost)
}

const calculateAvg = () => {
    //const avgMPG =(myArr [0] + myArr [2]) / 2 
    //updateDOM(` Average Miles per gallon is ${avgMPG}`)
     for (let i = 0; i < 10; i++) 
        console.log(i)
}



trackMPGCost(360, 15, 5.40)
trackMPGCost(320, 12, 5)
trackMPGCost(500, 11, 3.50)
trackMPGCost(320, 12, 5)
trackMPGCost(50, 5, 2.40)
trackMPGCost(320, 12, 5)
//updateDOM(myArr)

calculateAvg()