const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=4ae59416c81e2747322d8d9f1ba7aa1b&query=45,-75&units=f'

const request = http.request(url, (response) => {
  let data = ''

  response.on('data', (chunk) => {
    data = data + chunk.toString()

  })

  response.on('end', () => {
    const body = JSON.parse(data)
    console.log(body)
  })

})

request.on('error', (error) =>
  console.log('An error', error))




request.end()