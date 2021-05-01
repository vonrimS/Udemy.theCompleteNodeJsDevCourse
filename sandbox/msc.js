
//const url = 'http://api.weatherstack.com/current?access_key=4ae59416c81e2747322d8d9f1ba7aa1b&query=37.8267,-122.4233'



// const url = 'http://api.weatherstack.com/forecast?access_key=4ae59416c81e2747322d8d9f1ba7aa1b&query=&units=m'

// const url = 'http://api.weatherstack.com/forecast?access_key=4ae59416c81e2747322d8d9f1ba7aa1b&query=37.8267,-122.4233&units=m'

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log(chalk.red.bold('unable to connect to server'))

//   } else if (response.body.error) {
//     console.log(chalk.red.inverse('Unable to find location'))

//   }

//   else {
//     console.log(response.body.current.weather_descriptions[0] + ". It's currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees out.")

//   }

//const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoidm9ucmltcyIsImEiOiJja214dzZsMHAwdDJqMnFwcW5va3U2MHVyIn0.PDIo5HIZE5Ys2WAG5fd4cQ&limit=1'


// request({ url: geocodeURL, json: true }, (error, response) => {
//   console.log(response.body.current)
// })

// })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Yo12Yo.json?access_token=pk.eyJ1Ijoidm9ucmltcyIsImEiOiJja214dzZsMHAwdDJqMnFwcW5va3U2MHVyIn0.PDIo5HIZE5Ys2WAG5fd4cQ&limit=1'

// request({ url: geocodeURL, json: true }, (error, response) => {
//   if (error) {
//     console.log(chalk.red.bold('unable to connect to server'))

//   } else if (response.body.features.length === 0) {
//     console.log(chalk.red.inverse('Unable to find location'))
//   } else {
//     const latitude = response.body.features[0].center[1]
//     const longitude = response.body.features[0].center[0]
//     console.log(latitude, longitude)
//   }
// })
//encodeURIComponent(address)
//address.toString()