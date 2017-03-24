function initMap() {
    var uluru = {lat: 39.9501206, lng: -75.1615386};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: uluru
  });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
  });

    var marker2 = new google.maps.Marker({
      position: {lat: 39.9501206, lng: -77.1615386},
      map: map
  });
}