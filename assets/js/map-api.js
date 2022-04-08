//Google Maps API 

// API KEY ----------------------------------------------------------------------------------
var mapKey = "AIzaSyDdFTb2jqRnuN_iRaXeMo8jIeThNW5ddxU"
// API KEY ----------------------------------------------------------------------------------
var mapContainer = document.getElementById('maps_container'); 
console.log(mapContainer)

function getLatLon(eventAddress) {
  geocoder = new google.maps.Geocoder();
  geocoder.geocode( {address:eventAddress}, function(results, status) {
    if (status === "OK") {
      //get city out of response
      var city = '';
      for(var i = 0; i < results[0].address_components.length; i++){
        if(results[0].address_components[i].types[0] == 'locality')
          city = results[0].address_components[i].long_name;
      }
      // Display response in the console
      //gotta fire weather and map from here because async
      updateMap(results[0].geometry.location.lat(), results[0].geometry.location.lng());
      fetchCurrentWeather(results[0].geometry.location.lat(), results[0].geometry.location.lng(), city);
    }
    else {
      alert("Geocode error: " + status);
    }
});
}

// MUST be called initMap
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
      // "center:" takes the latitude and longitude
      center: { lat: -34.397, lng: 150.644 },
      zoom: 10,
    });
  console.log("Map Object")
  console.log("----------") 
  console.log(map)
}

function updateMap(lat, lon) {
  var latlon = {
    lat: lat,
    lng: lon
  };
  if (typeof map != 'undefined'){
    map.setCenter(latlon);
    map.setZoom(15);
    new google.maps.Marker({
      position: latlon,
      map,
      title: 'Location'
    })
  }
  else
    map = new google.maps.Map
}





// Make it so an address can be input
// $('.create-btn').on('click', initMap);

