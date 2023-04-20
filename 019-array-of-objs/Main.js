const updateDOM = (input, id) => {
    const divEl = document.createElement(id)
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

const myArrObjs = [
    {
        name: 'cassandra',
        hairColor: 'red',
    },
    {
        name: 'joe',
        hairColor: 'green',
    },
    {
        name: 'jane',
        hairColor: 'yellow',
    }

]

myArrObjs.forEach(obj => {
    const str = `${obj.name} has ${obj.hairColor} hair color`
    updateDOM(str, 'output')
})