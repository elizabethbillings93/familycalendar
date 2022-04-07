// Open Meteo Weather API 

function fetchCurrentWeather() {
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
  var currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchLocation.value + "&units=imperial&appid=" + weatherKey;

  fetch(currentWeatherURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log("Weather Object")
        console.log("--------------")
        console.log(data);

        // ^^ WORKS ONLY IF YOU TYPE IN A CITY ^^

        var cityName = data.name;
        //  Icon
        var icon = data.weather[0].icon;
        document.querySelector('#icon').src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        // Temperature
        var temperature = data.main.temp;
        // Wind
        var wind = data.wind.speed;
        // Humidity
        var humidity = data.main.humidity;
        // var uvIndex = data
        console.log("City name: " + cityName);
        console.log("Icon: " + icon);
        console.log("Temperature: " + temperature);
        console.log("Wind: " + wind);
        console.log("Humudity: " + humidity);
        // console.log("UX: " + UV);          

        // ^^ WORKS ^^

        // Latitude
        var lat = data.coord.lat;
        // Longitude
        var lon = data.coord.lon;
        console.log("Latitude: " + lat);
        console.log("Longitude: " + lon);
        var tempEl = document.getElementById("temp");
        var windEl = document.getElementById("wind");
        var humidityEl = document.getElementById("humidity");
        var uvEl = document.getElementById("uv_index");
        var current = moment().format("L");
        console.log(current)

        var oneCallURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude={part}&appid=" + weatherKey;
            // Fetching the variable above, containing the URL we need
            fetch(oneCallURL)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);

            // ^^ WORKS ^^

                tempEl.textContent = "Temp: " + temperature + " \u2109";
                windEl.textContent = "Wind: " + wind + " MPH";
                humidityEl.textContent = "Humidity: " + humidity + " %";
                location.textContent = cityName + " (" + current + ")";

        })
    })
}

$('#create').on('click', fetchCurrentWeather);