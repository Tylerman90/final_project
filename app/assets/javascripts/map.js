function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {lat: 39.9501206, lng: -75.1615386}
  });

  var infoWindow = new google.maps.InfoWindow({map: map});
  var markers = [];




  var Imran = {
    pos: {lat: 39.953197, lng: -75.171689},
    contentString: '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Imran Food Cart</h1>'+
    '<div id="bodyContent">'+
    ' <p><a href="/images/IMG_1336.jpg">Food Truck</a></p></div></div>'
  };


  var Halal1 = {
    pos: {lat: 39.953210, lng: -75.171557},
    contentString: '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Eagles Halal Food</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Halal Food</b></p><p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>'
  };


  var Halal2 = {
    pos: {lat: 39.953547, lng: -75.171605},
    contentString: '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Eagles Halal Food</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Halal Food</b></p><p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>'
  };


  var need1 = {
    pos: {lat: 39.953346, lng: -75.169898},
    contentString: '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Need1</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Halal Food</b></p><p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>'
  };


  var need2 = {
    pos: {lat: 39.953605, lng: -75.169987},
    contentString: '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Need2</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Halal Food</b></p><p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>'
  };


  var Halal_Gyro_Express = {
    pos: {lat: 39.953766, lng: -75.169955},
    contentString: '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Halal Gyro Express</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Halal Food</b></p><p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>'
  };


  var Mexican_Food_Stand = {
    pos: {lat: 39.954023, lng: -75.169764},
    contentString: '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Mexican Food Stand</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Amazing Tacos</b></p><p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>'
  };

  var need5 = {
    pos: {lat: 39.954261, lng: -75.171220},
    contentString: '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Eagles Halal Food</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Halal Food</b></p><p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>'
  };

  var need6 = {
    pos: {lat: 39.954120, lng: -75.169972},
    contentString: '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Eagles Halal Food</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Halal Food</b></p><p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>'
  };

  var need7 = {
    pos: {lat: 39.952761, lng: -75.178067},
    contentString: '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Eagles Halal Food</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Halal Food</b></p><p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>'
  };

  var need8 = {
    pos: {lat: 39.953077, lng: -75.165246},
    contentString: '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Eagles Halal Food</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Halal Food</b></p><p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>'
  };

  var need9 = {
    pos: {lat: 39.952923, lng: -75.165295},
    contentString: '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Eagles Halal Food</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Halal Food</b></p><p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>'
  };

  var need10 = {
    pos: {lat: 39.953290, lng: -75.165206},
    contentString: '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Eagles Halal Food</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Halal Food</b></p><p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>'
  };

  var need11 = {
    pos: {lat: 39.951330, lng: -75.153609},
    contentString: '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Eagles Halal Food</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Halal Food</b></p><p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>'
  };

  var need12 = {
    pos: {lat: 39.951938, lng: -75.153473},
    contentString: '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Eagles Halal Food</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Halal Food</b></p><p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>'
  };

  var need13 = {
    pos: {lat: 39.950891, lng: -75.153571},
    contentString: '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Eagles Halal Food</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Halal Food</b></p><p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>'
  };

  var need14 = {
    pos: {lat: 39.953547, lng: -75.171605},
    contentString: '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Eagles Halal Food</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Halal Food</b></p><p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>'
  };

  var need15 = {
    pos: {lat: 39.953547, lng: -75.171605},
    contentString: '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Eagles Halal Food</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Halal Food</b></p><p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>'
  };

  // var need16 = {
  //   pos: {lat: 39.953547, lng: -75.171605},
  //   contentString: '<div id="content">'+
  //   '<div id="siteNotice">'+
  //   '</div>'+
  //   '<h1 id="firstHeading" class="firstHeading">Eagles Halal Food</h1>'+
  //   '<div id="bodyContent">'+
  //   '<p><b>Halal Food</b></p><p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>'
  // };

  //  var need17 = {
  //   pos: {lat: 39.953547, lng: -75.171605},
  //   contentString: '<div id="content">'+
  //   '<div id="siteNotice">'+
  //   '</div>'+
  //   '<h1 id="firstHeading" class="firstHeading">Eagles Halal Food</h1>'+
  //   '<div id="bodyContent">'+
  //   '<p><b>Halal Food</b></p><p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>'
  // };

  // var need18 = {
  //   pos: {lat: 39.953547, lng: -75.171605},
  //   contentString: '<div id="content">'+
  //   '<div id="siteNotice">'+
  //   '</div>'+
  //   '<h1 id="firstHeading" class="firstHeading">Eagles Halal Food</h1>'+
  //   '<div id="bodyContent">'+
  //   '<p><b>Halal Food</b></p><p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>'
  // };

  // var need19 = {
  //   pos: {lat: 39.953547, lng: -75.171605},
  //   contentString: '<div id="content">'+
  //   '<div id="siteNotice">'+
  //   '</div>'+
  //   '<h1 id="firstHeading" class="firstHeading">Eagles Halal Food</h1>'+
  //   '<div id="bodyContent">'+
  //   '<p><b>Halal Food</b></p><p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>'
  // };

  // var need20 = {
  //   pos: {lat: 39.953547, lng: -75.171605},
  //   contentString: '<div id="content">'+
  //   '<div id="siteNotice">'+
  //   '</div>'+
  //   '<h1 id="firstHeading" class="firstHeading">Eagles Halal Food</h1>'+
  //   '<div id="bodyContent">'+
  //   '<p><b>Halal Food</b></p><p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>'
  // };

  // var need21 = {
  //   pos: {lat: 39.953547, lng: -75.171605},
  //   contentString: '<div id="content">'+
  //   '<div id="siteNotice">'+
  //   '</div>'+
  //   '<h1 id="firstHeading" class="firstHeading">Eagles Halal Food</h1>'+
  //   '<div id="bodyContent">'+
  //   '<p><b>Halal Food</b></p><p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>'
  // };

  // var need22 = {
  //   pos: {lat: 39.953547, lng: -75.171605},
  //   contentString: '<div id="content">'+
  //   '<div id="siteNotice">'+
  //   '</div>'+
  //   '<h1 id="firstHeading" class="firstHeading">Eagles Halal Food</h1>'+
  //   '<div id="bodyContent">'+
  //   '<p><b>Halal Food</b></p><p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>'
  // };

  // var need23 = {
  //   pos: {lat: 39.953547, lng: -75.171605},
  //   contentString: '<div id="content">'+
  //   '<div id="siteNotice">'+
  //   '</div>'+
  //   '<h1 id="firstHeading" class="firstHeading">Eagles Halal Food</h1>'+
  //   '<div id="bodyContent">'+
  //   '<p><b>Halal Food</b></p><p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>'
  // };

  // var need24 = {
  //   pos: {lat: 39.953547, lng: -75.171605},
  //   contentString: '<div id="content">'+
  //   '<div id="siteNotice">'+
  //   '</div>'+
  //   '<h1 id="firstHeading" class="firstHeading">Eagles Halal Food</h1>'+
  //   '<div id="bodyContent">'+
  //   '<p><b>Halal Food</b></p><p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>'
  // };



  createMarker(Imran); createMarker(Halal1); createMarker(Halal2);
  createMarker(need1); createMarker(need2); createMarker(Halal_Gyro_Express); 
  createMarker(Mexican_Food_Stand); createMarker(need5); createMarker(need6); 
  createMarker(need7); createMarker(need8); createMarker(need9);
  createMarker(need10); createMarker(need11); createMarker(need12);
  createMarker(need13); createMarker(need14); createMarker(need15); 
  // createMarker(need16); createMarker(need17); createMarker(need18); 
  // createMarker(need19); createMarker(need20); createMarker(need21);
  // createMarker(need22); createMarker(need23); createMarker(need24);  
  
  


  function createMarker(cart) {
    var marker = new google.maps.Marker({
      position: cart.pos,
      map: map,
      contentString: cart.contentString
    })
    marker.addListener('click', function() {
      showInfoWindow(marker);
    })
    markers.push(marker);
  };


  function showInfoWindow(marker) {
    if (infoWindow) {
      infoWindow.close();
    }

    infoWindow = new google.maps.InfoWindow({
      content: marker.contentString
    });

    infoWindow.open(map, marker)
  };



// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(function(position) {
//     var pos = {
//       lat: position.coords.latitude,
//       lng: position.coords.longitude
//     };

//     infoWindow.setPosition(pos);
//     infoWindow.setContent('Location found.');
//     map.setCenter(pos);
//   }, function() {
//     handleLocationError(true, infoWindow, map.getCenter());
//   });
// } else {
//           handleLocationError(false, infoWindow, map.getCenter());
//         }
//       }

//       function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//         infoWindow.setPosition(pos);
//         infoWindow.setContent(browserHasGeolocation ?
//           'Error: The Geolocation service failed.' :
//           'Error: Your browser doesn\'t support geolocation.');
};