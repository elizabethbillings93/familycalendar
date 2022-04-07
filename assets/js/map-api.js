//Google Maps API 

// API KEY ----------------------------------------------------------------------------------
var mapKey = "AIzaSyDdFTb2jqRnuN_iRaXeMo8jIeThNW5ddxUAIzaSyDdFTb2jqRnuN_iRaXeMo8jIeThNW5ddxU"
// API KEY ----------------------------------------------------------------------------------
var mapContainer = document.getElementById('maps_container'); 
console.log(mapContainer)

function getLatLon() {
  geocoder = new google.maps.Geocoder();
  request: {
    address: "Atlanta"
  };
  
  geocoder.geocode( {address:"address"}, function(results, status) {
    if (status === "OK") {
      // Display response in the console
      console.log(results);
  } else {
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





// Make it so an address can be input
// $('.create-btn').on('click', initMap);

