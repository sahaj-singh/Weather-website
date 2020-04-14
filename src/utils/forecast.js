
const request = require('request')
const forecast= (address, callback) =>{
    const url='http://api.openweathermap.org/data/2.5/weather?q='+address+'&APPID=64283040642ce41f0922fbde25177283&units=metric'
request({ url, json:true},(error,response)=>{
    if(error){
        callback('Unable to connect to the server',undefined)
    }
    else if(response.body.cod==="404")
    {
        callback('Unable to find location',undefined)
    }
    else{
        callback(undefined,'it is '+ response.body.main.temp+' degrees out. Humidity is= '+response.body.main.humidity)
    }
})
}

module.exports =forecast