// Open Meteo Weather API 

function fetchCurrentWeather(lat, lng, city) {
    // API KEY -----------------------------------------
    var weatherKey = "d46126e5fbc01d3792d9294cde11141b";
    // API KEY -----------------------------------------
    // location h2
  var location = document.getElementById("location_name");
    // searchLocation input
  var searchLocation = document.getElementById("event_location")
  location.innerHTML = searchLocation.value;
  console.log(location)
  console.log(searchLocation);
  var oneCallURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lng + "&exclude={part}&appid=" + weatherKey;
  fetch(oneCallURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log("Weather Object")
        console.log("--------------")
        console.log(data);

        // ^^ WORKS ONLY IF YOU TYPE IN A CITY ^^

        var cityName = city;
        //  Icon
        var icon = data.current.weather[0].icon;
        document.querySelector('#icon').src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        // Temperature
        var temperature = Math.trunc(((data.current.temp)-273.15)*1.8 + 32);
        // Wind
        var wind = data.current.wind_speed;
        // Humidity
        var humidity = data.current.humidity;

        var tempEl = document.getElementById("temp");
        var windEl = document.getElementById("wind");
        var humidityEl = document.getElementById("humidity");
        var current = moment().format("L");
        console.log(current)

        tempEl.textContent = "Temp: " + temperature + " \u2109";
        windEl.textContent = "Wind: " + wind + " MPH";
        humidityEl.textContent = "Humidity: " + humidity + " %";
        location.textContent = cityName + " (" + current + ")";
    })
}