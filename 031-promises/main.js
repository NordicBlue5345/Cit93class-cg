function getWeather() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
        resolve('Cloudy')
        }, 100)
    })
}

function getWeatherIcon(weather) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            switch (weather){
                case 'Sunny':
                    resolve('Sunny')
                case 'Cloudy':
                    resolve('Cloudy')
                case 'Rainy':
                    resolve('Rainy')
                    break
                default:
                    reject('No weather found') 
            }
        }, 100)
    })
}

function onSuccess(data) {
    console.log('Success ${data}')
}

function onError(error) {
    console.log('Error: ${error}')
}


getWeather().then(onSuccess, onError)
.then(getWeatherIcon, onSuccess)
.then(onSuccess, onError)

