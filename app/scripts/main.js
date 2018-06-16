// function myMap(){
//   var mapOptions = {
//     center: new google.maps.LatLng(51.5, -0.12),
//     zoom:10,
//     mapTypeId:google.maps.MapTypeId.HYBRID
//   }
//   var map = new google.maps.Map(document.getElementById('map'),mapOptions);
// }

function myMap(){
  var uluru = {lat:28.6486639786372, lng:-81.3540162583253};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom:16,
    center:uluru
  });
  var marker = new google.maps.Marker({
    position:uluru,
    map:map
  });
}
