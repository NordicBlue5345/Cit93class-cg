//Update the DOM

const myArr = ['cassandra', 30]

const updateDOM = (input) => {
    const divEl = document.getElementById('output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

const trackVacation= (time, distance, cost) => {
    const Vacation = (time * distance)
    const VacationCost = (cost * distance) 
    myArr.push(time, distance)
}


updateDOM(trackVacation(100, 1200, 11.12))
updateDOM(trackVacation(30, 450, 17.40))


