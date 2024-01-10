const apiKey = "c9c8b539744f9795f6c9dac4bc609495"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=c9c8b539744f9795f6c9dac4bc609495"

async function checkWeather(){
    var city = document.querySelector('input').value    
    const response = await fetch(apiUrl+`&q=${city}`)
    var data = await response.json()

    var tempShown = document.querySelector('.temperature')
    var cityShown = document.querySelector('.city')
    var humidShown = document.querySelector('#humidPercentage')
    var windShown = document.querySelector('#windKmph')

    tempShown.innerHTML = `${data.main['temp']}°C`
    cityShown.innerHTML = data.name
    humidShown.innerHTML = `${(data.main['humidity']).toFixed(1)}%`
    windShown.innerHTML = `${(data.wind['speed']*(18/5)).toFixed(1)} km/h`
    console.log(data.weather[0]['main'])
    var weatherShown = document.querySelector('#weather_icon')
    switch (data.weather[0]['main']){
        case "Clear": 
            weatherShown.src ="/images/clear.png"
            break;
        case "Clouds": 
            weatherShown.src ="/images/clouds.png"
            break;
        case "Drizzle":
            weatherShown.src ="/images/drizzle.png"
            break;
        case "Mist":
            weatherShown.src ="/images/mist.png"
            break;
        case "Rain":
            weatherShown.src ="/images/rain.png"
            break;
        case "Snow": 
            weatherShown.src ="/images/snow.png"
            break;
    }
}
var buttonElement = document.querySelector('button')
buttonElement.onclick = checkWeather

var cityInput = document.querySelector('input')
cityInput.addEventListener("keydown",function(event){
    if(event.key === "Enter"){
        checkWeather()
    }
})