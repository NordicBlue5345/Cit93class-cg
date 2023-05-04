async function start() {
 const data = await fetch( 'https://api.weather.gov/points/{36.7378},{119.7871}')
 const result = await data.json()
 console.log(result.properties.periods[1].shortForecast)
 }

async function start2() {
    fetch( 'https://api.weather.gov/points/{36.7378},{119.7871}')
    .then(data => data.json())
    .then(result => {
        console.log(result.properties.periods[1].shortForcast)
    })
}

 start2()