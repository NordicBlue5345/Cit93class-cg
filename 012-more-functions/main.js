//Update the DOM

const updateDOM = (input) => {
    const divEl = document.getElementById('output')
    const p = document.createElement('h1')
    p.textContent = input
    divEl.appendChild(p)
}

updateDOM('This is my change') 


