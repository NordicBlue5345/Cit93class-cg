//Update the DOM

const myArr = []

const updateDOM = (input) => {
    const divEl = document.getElementById('output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

const trackMPGCost= (miles, gallons, price = 3.79) => {
    const MPG = miles/gallons
    const tripCost = gallons * price
    updateDOM(`Mileage is ${MPG} and trip cost is ${tripCost}`) 
    myArr.push(MPG, tripCost)
}


trackMPGCost(360, 15, 5.40)
trackMPGCost(320, 12, 5)
updateDOM(myArr)


