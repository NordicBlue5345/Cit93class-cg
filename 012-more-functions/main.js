//Update the DOM

const updateDOM = (input) => {
    const divEl = document.getElementById('output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

const BlueTieSales = (quantity, price) => quantity * price
const RedShirtSales = (quantity, price) => quantity * price


updateDOM(BlueTieSales(25, 2.50))
updateDOM(RedShirtSales(50, 13.50))


