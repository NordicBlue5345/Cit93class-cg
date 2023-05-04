const url =
'http://api.spotify.com/v1/artist/0k17h0d3j5vfsdmq1izte9' 

const request = new Request(url, {
    headers: { 
        'Authorization': 'Bearer 123'
    }
})
async function getData() {    
    try {
        const response = await fetch(request)
        const data = await response.json()
        if(response.status !== 200) {
        console.log('Success', data)
        }else {
            console.log('Server error', data.error.message)
        }
    } catch (error) {
        console.log('Error', error)
    }
}

getData