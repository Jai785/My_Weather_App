const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2ec266e355mshb63c2206378d9dep1e2db6jsncb4cb1dc9f45',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {

    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunset.innerHTML = response.sunset
            sunrise.innerHTML = response.sunrise

        })
        .catch(err => console.error(err));

}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Rajasthan")









const getWeather1 = (city) => {
    // cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            cloud_pct1.innerHTML = response.cloud_pct
            temp1.innerHTML = response.temp
            feels_like1.innerHTML = response.feels_like
            humidity1.innerHTML = response.humidity
            min_temp1.innerHTML = response.min_temp
            max_temp1.innerHTML = response.max_temp
            wind_speed1.innerHTML = response.wind_speed
            wind_degrees1.innerHTML = response.wind_degrees
            sunset1.innerHTML = response.sunset
            sunrise1.innerHTML = response.sunrise

        })
        .catch(err => console.error(err));
}

// // city1.addEventListener("", (f)=>{
// //     getWeather1(city.value)
// //     f.preventDefault()
// // })

getWeather1("Bikaner")





const getWeather3 = (city) => {
    // cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            cloud_pct3.innerHTML = response.cloud_pct
            temp3.innerHTML = response.temp
            feels_like3.innerHTML = response.feels_like
            humidity3.innerHTML = response.humidity
            min_temp3.innerHTML = response.min_temp
            max_temp3.innerHTML = response.max_temp
            wind_speed3.innerHTML = response.wind_speed
            wind_degrees3.innerHTML = response.wind_degrees
            sunset3.innerHTML = response.sunset
            sunrise3.innerHTML = response.sunrise

        })
        .catch(err => console.error(err));
}

// city1.addEventListener("", (f)=>{
//     getWeather3(city.value)
//     f.preventDefault()
// })

getWeather3("Jaipur")





const getWeather4 = (city) => {
    // cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            cloud_pct4.innerHTML = response.cloud_pct
            temp4.innerHTML = response.temp
            feels_like4.innerHTML = response.feels_like
            humidity4.innerHTML = response.humidity
            min_temp4.innerHTML = response.min_temp
            max_temp4.innerHTML = response.max_temp
            wind_speed4.innerHTML = response.wind_speed
            wind_degrees4.innerHTML = response.wind_degrees
            sunset4.innerHTML = response.sunset
            sunrise4.innerHTML = response.sunrise

        })
        .catch(err => console.error(err));
}

// city1.addEventListener("", (f)=>{
//     getWeather4(city.value)
//     f.preventDefault()
// })

getWeather4("Ganganagar")







const getWeather5 = (city) => {
    // cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            cloud_pct5.innerHTML = response.cloud_pct
            temp5.innerHTML = response.temp
            feels_like5.innerHTML = response.feels_like
            humidity5.innerHTML = response.humidity
            min_temp5.innerHTML = response.min_temp
            max_temp5.innerHTML = response.max_temp
            wind_speed5.innerHTML = response.wind_speed
            wind_degrees5.innerHTML = response.wind_degrees
            sunset5.innerHTML = response.sunset
            sunrise5.innerHTML = response.sunrise

        })
        .catch(err => console.error(err));
}

// city1.addEventListener("", (f)=>{
//     getWeather5(city.value)
//     f.preventDefault()
// })

getWeather5("Hanumangarh")





const getWeather6 = (city) => {
    // cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            cloud_pct6.innerHTML = response.cloud_pct
            temp6.innerHTML = response.temp
            feels_like6.innerHTML = response.feels_like
            humidity6.innerHTML = response.humidity
            min_temp6.innerHTML = response.min_temp
            max_temp6.innerHTML = response.max_temp
            wind_speed6.innerHTML = response.wind_speed
            wind_degrees6.innerHTML = response.wind_degrees
            sunset6.innerHTML = response.sunset
            sunrise6.innerHTML = response.sunrise

        })
        .catch(err => console.error(err));
}

// city1.addEventListener("", (f)=>{
//     getWeather6(city.value)
//     f.preventDefault()
// })

getWeather6("Suratgarh")








const getDelhi = (city) => {
    delhi.addEventListener("click", (f) => {

        cityName.innerHTML = "Delhi"
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
            .then(response => response.json())
            .then((response) => {
                console.log(response)
                cloud_pct.innerHTML = response.cloud_pct
                temp.innerHTML = response.temp
                temp2.innerHTML = response.temp
                feels_like.innerHTML = response.feels_like
                humidity.innerHTML = response.humidity
                humidity2.innerHTML = response.humidity
                min_temp.innerHTML = response.min_temp
                max_temp.innerHTML = response.max_temp
                wind_speed.innerHTML = response.wind_speed
                wind_speed2.innerHTML = response.wind_speed
                wind_degrees.innerHTML = response.wind_degrees
                sunset.innerHTML = response.sunset
                sunrise.innerHTML = response.sunrise

            })
            .catch(err => console.error(err));

    })


}

    getDelhi("Delhi")




    

const getBihar = (city) => {
    bihar.addEventListener("click", (g) => {

        cityName.innerHTML = "Bihar"
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bihar', options)
            .then(response => response.json())
            .then((response) => {
                console.log(response)
                cloud_pct.innerHTML = response.cloud_pct
                temp.innerHTML = response.temp
                temp2.innerHTML = response.temp
                feels_like.innerHTML = response.feels_like
                humidity.innerHTML = response.humidity
                humidity2.innerHTML = response.humidity
                min_temp.innerHTML = response.min_temp
                max_temp.innerHTML = response.max_temp
                wind_speed.innerHTML = response.wind_speed
                wind_speed2.innerHTML = response.wind_speed
                wind_degrees.innerHTML = response.wind_degrees
                sunset.innerHTML = response.sunset
                sunrise.innerHTML = response.sunrise

            })
            .catch(err => console.error(err));

    })


}

    getBihar("Bihar")







    
const getSeattle = (city) => {
    seattle.addEventListener("click", (g) => {

        cityName.innerHTML = "Seattle"
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
            .then(response => response.json())
            .then((response) => {
                console.log(response)
                cloud_pct.innerHTML = response.cloud_pct
                temp.innerHTML = response.temp
                temp2.innerHTML = response.temp
                feels_like.innerHTML = response.feels_like
                humidity.innerHTML = response.humidity
                humidity2.innerHTML = response.humidity
                min_temp.innerHTML = response.min_temp
                max_temp.innerHTML = response.max_temp
                wind_speed.innerHTML = response.wind_speed
                wind_speed2.innerHTML = response.wind_speed
                wind_degrees.innerHTML = response.wind_degrees
                sunset.innerHTML = response.sunset
                sunrise.innerHTML = response.sunrise

            })
            .catch(err => console.error(err));

    })


}

    getSeattle("Seattle")





    
const getNewYork = (city) => {
    newYork.addEventListener("click", (g) => {

        cityName.innerHTML = "New York"
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York', options)
            .then(response => response.json())
            .then((response) => {
                console.log(response)
                cloud_pct.innerHTML = response.cloud_pct
                temp.innerHTML = response.temp
                temp2.innerHTML = response.temp
                feels_like.innerHTML = response.feels_like
                humidity.innerHTML = response.humidity
                humidity2.innerHTML = response.humidity
                min_temp.innerHTML = response.min_temp
                max_temp.innerHTML = response.max_temp
                wind_speed.innerHTML = response.wind_speed
                wind_speed2.innerHTML = response.wind_speed
                wind_degrees.innerHTML = response.wind_degrees
                sunset.innerHTML = response.sunset
                sunrise.innerHTML = response.sunrise

            })
            .catch(err => console.error(err));

    })


}

    getNewYork("New York")