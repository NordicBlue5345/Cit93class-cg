function fetchData() {
    return new Promise(function(resolve, reject){
        fetch('https://api.weather,gov,gridpoints/OKX/53,100/forecast')
    .then(response => response.json())
    .then(data => resolve(data.properties.periods[1].shortForecast));  
    })
}  

function displayData(weather) {
    console.log(weather)
}

function oneError(err) {
    console.log('Error: ${err}')
}

fetchData().then(displayData).catch(oneError)

fetchData()
.then(displayData)
.catch(oneError)