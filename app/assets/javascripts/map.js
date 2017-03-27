function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {lat: 39.9501206, lng: -75.1615386}
  });

  var infoWindow;
  var markers = [];
  console.log(map)


  var Imran = {
    pos: {lat: 39.9501206, lng: -75.1615386},
    contentString: '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large sandstone rock formation in the southern part of the Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) south west of the nearest large town, Alice Springs; 450&#160;km (280&#160;mi) by road. Kata Tjuta and Uluru are the two major features of the Uluru - Kata Tjuta National Park. Uluru is sacred to the Pitjantjatjara and Yankunytjatjara, the Aboriginal people of the area. It has many springs, waterholes, rock caves and ancient paintings. Uluru is listed as a World Heritage Site.</p> <p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>'
  };

  var Hallal = {
    pos: {lat: 40.9501206, lng: -75.1615386},
    contentString: '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
    '<div id="bodyContent">'+
    ' <p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>'
  };

  createMarker(Imran);
  createMarker(Hallal);


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
    console.log(marker)
    if (infoWindow) {
      infoWindow.close();
    }

    infoWindow = new google.maps.InfoWindow({
      content: marker.contentString
    });

    infoWindow.open(map, marker)
  };




  // var contentString = '<div id="content">'+
  // '<div id="siteNotice">'+
  // '</div>'+
  // '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
  // '<div id="bodyContent">'+
  // '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large sandstone rock formation in the southern part of the Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) south west of the nearest large town, Alice Springs; 450&#160;km (280&#160;mi) by road. Kata Tjuta and Uluru are the two major features of the Uluru - Kata Tjuta National Park. Uluru is sacred to the Pitjantjatjara and Yankunytjatjara, the Aboriginal people of the area. It has many springs, waterholes, rock caves and ancient paintings. Uluru is listed as a World Heritage Site.</p> <p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>';

  // var infowindow2 = new google.maps.InfoWindow({
  //   content: contentString
  // });

  // var marker2 = new google.maps.Marker({
  //   position: {lat: 39.953209, lng: -75.171555},
  //   map: map
  // });

  // marker2.addListener('click', function() {
  //   infowindow2.open(map, marker2);
  // });



  // var contentString = '<div id="content">'+
  // '<div id="siteNotice">'+
  // '</div>'+
  // '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
  // '<div id="bodyContent">'+
  // '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large sandstone rock formation in the southern part of the Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) south west of the nearest large town, Alice Springs; 450&#160;km (280&#160;mi) by road. Kata Tjuta and Uluru are the two major features of the Uluru - Kata Tjuta National Park. Uluru is sacred to the Pitjantjatjara and Yankunytjatjara, the Aboriginal people of the area. It has many springs, waterholes, rock caves and ancient paintings. Uluru is listed as a World Heritage Site.</p> <p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>';

  // var infowindow3 = new google.maps.InfoWindow({
  //   content: contentString
  // });

  // var marker3 = new google.maps.Marker({
  //   position: {lat: 39.9501206, lng: -77.1615386},
  //   map: map
  // });

  // marker3.addListener('click', function() {
  //   infowindow3.open(map, marker3);
  // });





  // var contentString = '<div id="content">'+
  // '<div id="siteNotice">'+
  // '</div>'+
  // '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
  // '<div id="bodyContent">'+
  // '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large sandstone rock formation in the southern part of the Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) south west of the nearest large town, Alice Springs; 450&#160;km (280&#160;mi) by road. Kata Tjuta and Uluru are the two major features of the Uluru - Kata Tjuta National Park. Uluru is sacred to the Pitjantjatjara and Yankunytjatjara, the Aboriginal people of the area. It has many springs, waterholes, rock caves and ancient paintings. Uluru is listed as a World Heritage Site.</p> <p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>';

  // var infowindow = new google.maps.InfoWindow({
  //   content: contentString
  // });

  // var marker# = new google.maps.Marker({
  //   position: {lat: 39.9501206, lng: -77.1615386},
  //   map: map
  // });

  // marker#.addListener('click', function() {
  //   infowindow.open(map, marker#);
  // });





  // var contentString = '<div id="content">'+
  // '<div id="siteNotice">'+
  // '</div>'+
  // '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
  // '<div id="bodyContent">'+
  // '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large sandstone rock formation in the southern part of the Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) south west of the nearest large town, Alice Springs; 450&#160;km (280&#160;mi) by road. Kata Tjuta and Uluru are the two major features of the Uluru - Kata Tjuta National Park. Uluru is sacred to the Pitjantjatjara and Yankunytjatjara, the Aboriginal people of the area. It has many springs, waterholes, rock caves and ancient paintings. Uluru is listed as a World Heritage Site.</p> <p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>';

  // var infowindow = new google.maps.InfoWindow({
  //   content: contentString
  // });

  // var marker# = new google.maps.Marker({
  //   position: {lat: 39.9501206, lng: -77.1615386},
  //   map: map
  // });

  // marker#.addListener('click', function() {
  //   infowindow.open(map, marker#);
  // });





  // var contentString = '<div id="content">'+
  // '<div id="siteNotice">'+
  // '</div>'+
  // '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
  // '<div id="bodyContent">'+
  // '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large sandstone rock formation in the southern part of the Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) south west of the nearest large town, Alice Springs; 450&#160;km (280&#160;mi) by road. Kata Tjuta and Uluru are the two major features of the Uluru - Kata Tjuta National Park. Uluru is sacred to the Pitjantjatjara and Yankunytjatjara, the Aboriginal people of the area. It has many springs, waterholes, rock caves and ancient paintings. Uluru is listed as a World Heritage Site.</p> <p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>';

  // var infowindow = new google.maps.InfoWindow({
  //   content: contentString
  // });

  // var marker# = new google.maps.Marker({
  //   position: {lat: 39.9501206, lng: -77.1615386},
  //   map: map
  // });

  // marker#.addListener('click', function() {
  //   infowindow.open(map, marker#);
  // });

  // var contentString = '<div id="content">'+
  // '<div id="siteNotice">'+
  // '</div>'+
  // '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
  // '<div id="bodyContent">'+
  // '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large sandstone rock formation in the southern part of the Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) south west of the nearest large town, Alice Springs; 450&#160;km (280&#160;mi) by road. Kata Tjuta and Uluru are the two major features of the Uluru - Kata Tjuta National Park. Uluru is sacred to the Pitjantjatjara and Yankunytjatjara, the Aboriginal people of the area. It has many springs, waterholes, rock caves and ancient paintings. Uluru is listed as a World Heritage Site.</p> <p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>';

  // var infowindow = new google.maps.InfoWindow({
  //   content: contentString
  // });

  // var marker# = new google.maps.Marker({
  //   position: {lat: 39.9501206, lng: -77.1615386},
  //   map: map
  // });

  // marker#.addListener('click', function() {
  //   infowindow.open(map, marker#);
  // });





  // var contentString = '<div id="content">'+
  // '<div id="siteNotice">'+
  // '</div>'+
  // '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
  // '<div id="bodyContent">'+
  // '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large sandstone rock formation in the southern part of the Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) south west of the nearest large town, Alice Springs; 450&#160;km (280&#160;mi) by road. Kata Tjuta and Uluru are the two major features of the Uluru - Kata Tjuta National Park. Uluru is sacred to the Pitjantjatjara and Yankunytjatjara, the Aboriginal people of the area. It has many springs, waterholes, rock caves and ancient paintings. Uluru is listed as a World Heritage Site.</p> <p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>';

  // var infowindow = new google.maps.InfoWindow({
  //   content: contentString
  // });

  // var marker# = new google.maps.Marker({
  //   position: {lat: 39.9501206, lng: -77.1615386},
  //   map: map
  // });

  // marker#.addListener('click', function() {
  //   infowindow.open(map, marker#);
  // });





  // var contentString = '<div id="content">'+
  // '<div id="siteNotice">'+
  // '</div>'+
  // '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
  // '<div id="bodyContent">'+
  // '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large sandstone rock formation in the southern part of the Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) south west of the nearest large town, Alice Springs; 450&#160;km (280&#160;mi) by road. Kata Tjuta and Uluru are the two major features of the Uluru - Kata Tjuta National Park. Uluru is sacred to the Pitjantjatjara and Yankunytjatjara, the Aboriginal people of the area. It has many springs, waterholes, rock caves and ancient paintings. Uluru is listed as a World Heritage Site.</p> <p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>';

  // var infowindow = new google.maps.InfoWindow({
  //   content: contentString
  // });

  // var marker# = new google.maps.Marker({
  //   position: {lat: 39.9501206, lng: -77.1615386},
  //   map: map
  // });

  // marker#.addListener('click', function() {
  //   infowindow.open(map, marker#);
  // });





  // var contentString = '<div id="content">'+
  // '<div id="siteNotice">'+
  // '</div>'+
  // '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
  // '<div id="bodyContent">'+
  // '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large sandstone rock formation in the southern part of the Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) south west of the nearest large town, Alice Springs; 450&#160;km (280&#160;mi) by road. Kata Tjuta and Uluru are the two major features of the Uluru - Kata Tjuta National Park. Uluru is sacred to the Pitjantjatjara and Yankunytjatjara, the Aboriginal people of the area. It has many springs, waterholes, rock caves and ancient paintings. Uluru is listed as a World Heritage Site.</p> <p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>';

  // var infowindow = new google.maps.InfoWindow({
  //   content: contentString
  // });

  // var marker# = new google.maps.Marker({
  //   position: {lat: 39.9501206, lng: -77.1615386},
  //   map: map
  // });

  // marker#.addListener('click', function() {
  //   infowindow.open(map, marker#);
  // });




  // var contentString = '<div id="content">'+
  // '<div id="siteNotice">'+
  // '</div>'+
  // '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
  // '<div id="bodyContent">'+
  // '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large sandstone rock formation in the southern part of the Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) south west of the nearest large town, Alice Springs; 450&#160;km (280&#160;mi) by road. Kata Tjuta and Uluru are the two major features of the Uluru - Kata Tjuta National Park. Uluru is sacred to the Pitjantjatjara and Yankunytjatjara, the Aboriginal people of the area. It has many springs, waterholes, rock caves and ancient paintings. Uluru is listed as a World Heritage Site.</p> <p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>';

  // var infowindow = new google.maps.InfoWindow({
  //   content: contentString
  // });

  // var marker# = new google.maps.Marker({
  //   position: {lat: 39.9501206, lng: -77.1615386},
  //   map: map
  // });

  // marker#.addListener('click', function() {
  //   infowindow.open(map, marker#);
  // });





  // var contentString = '<div id="content">'+
  // '<div id="siteNotice">'+
  // '</div>'+
  // '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
  // '<div id="bodyContent">'+
  // '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large sandstone rock formation in the southern part of the Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) south west of the nearest large town, Alice Springs; 450&#160;km (280&#160;mi) by road. Kata Tjuta and Uluru are the two major features of the Uluru - Kata Tjuta National Park. Uluru is sacred to the Pitjantjatjara and Yankunytjatjara, the Aboriginal people of the area. It has many springs, waterholes, rock caves and ancient paintings. Uluru is listed as a World Heritage Site.</p> <p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>';

  // var infowindow = new google.maps.InfoWindow({
  //   content: contentString
  // });

  // var marker# = new google.maps.Marker({
  //   position: {lat: 39.9501206, lng: -77.1615386},
  //   map: map
  // });

  // marker#.addListener('click', function() {
  //   infowindow.open(map, marker#);
  // });





  // var contentString = '<div id="content">'+
  // '<div id="siteNotice">'+
  // '</div>'+
  // '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
  // '<div id="bodyContent">'+
  // '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large sandstone rock formation in the southern part of the Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) south west of the nearest large town, Alice Springs; 450&#160;km (280&#160;mi) by road. Kata Tjuta and Uluru are the two major features of the Uluru - Kata Tjuta National Park. Uluru is sacred to the Pitjantjatjara and Yankunytjatjara, the Aboriginal people of the area. It has many springs, waterholes, rock caves and ancient paintings. Uluru is listed as a World Heritage Site.</p> <p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>';

  // var infowindow = new google.maps.InfoWindow({
  //   content: contentString
  // });

  // var marker# = new google.maps.Marker({
  //   position: {lat: 39.9501206, lng: -77.1615386},
  //   map: map
  // });

  // marker#.addListener('click', function() {
  //   infowindow.open(map, marker#);
  // });





  // var contentString = '<div id="content">'+
  // '<div id="siteNotice">'+
  // '</div>'+
  // '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
  // '<div id="bodyContent">'+
  // '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large sandstone rock formation in the southern part of the Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) south west of the nearest large town, Alice Springs; 450&#160;km (280&#160;mi) by road. Kata Tjuta and Uluru are the two major features of the Uluru - Kata Tjuta National Park. Uluru is sacred to the Pitjantjatjara and Yankunytjatjara, the Aboriginal people of the area. It has many springs, waterholes, rock caves and ancient paintings. Uluru is listed as a World Heritage Site.</p> <p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>';

  // var infowindow = new google.maps.InfoWindow({
  //   content: contentString
  // });

  // var marker# = new google.maps.Marker({
  //   position: {lat: 39.9501206, lng: -77.1615386},
  //   map: map
  // });

  // marker#.addListener('click', function() {
  //   infowindow.open(map, marker#);
  // });

  // var contentString = '<div id="content">'+
  // '<div id="siteNotice">'+
  // '</div>'+
  // '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
  // '<div id="bodyContent">'+
  // '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large sandstone rock formation in the southern part of the Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) south west of the nearest large town, Alice Springs; 450&#160;km (280&#160;mi) by road. Kata Tjuta and Uluru are the two major features of the Uluru - Kata Tjuta National Park. Uluru is sacred to the Pitjantjatjara and Yankunytjatjara, the Aboriginal people of the area. It has many springs, waterholes, rock caves and ancient paintings. Uluru is listed as a World Heritage Site.</p> <p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>';

  // var infowindow = new google.maps.InfoWindow({
  //   content: contentString
  // });

  // var marker# = new google.maps.Marker({
  //   position: {lat: 39.9501206, lng: -77.1615386},
  //   map: map
  // });

  // marker#.addListener('click', function() {
  //   infowindow.open(map, marker#);
  // });





  // var contentString = '<div id="content">'+
  // '<div id="siteNotice">'+
  // '</div>'+
  // '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
  // '<div id="bodyContent">'+
  // '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large sandstone rock formation in the southern part of the Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) south west of the nearest large town, Alice Springs; 450&#160;km (280&#160;mi) by road. Kata Tjuta and Uluru are the two major features of the Uluru - Kata Tjuta National Park. Uluru is sacred to the Pitjantjatjara and Yankunytjatjara, the Aboriginal people of the area. It has many springs, waterholes, rock caves and ancient paintings. Uluru is listed as a World Heritage Site.</p> <p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>';

  // var infowindow = new google.maps.InfoWindow({
  //   content: contentString
  // });

  // var marker# = new google.maps.Marker({
  //   position: {lat: 39.9501206, lng: -77.1615386},
  //   map: map
  // });

  // marker#.addListener('click', function() {
  //   infowindow.open(map, marker#);
  // });





  // var contentString = '<div id="content">'+
  // '<div id="siteNotice">'+
  // '</div>'+
  // '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
  // '<div id="bodyContent">'+
  // '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large sandstone rock formation in the southern part of the Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) south west of the nearest large town, Alice Springs; 450&#160;km (280&#160;mi) by road. Kata Tjuta and Uluru are the two major features of the Uluru - Kata Tjuta National Park. Uluru is sacred to the Pitjantjatjara and Yankunytjatjara, the Aboriginal people of the area. It has many springs, waterholes, rock caves and ancient paintings. Uluru is listed as a World Heritage Site.</p> <p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>';

  // var infowindow = new google.maps.InfoWindow({
  //   content: contentString
  // });

  // var marker# = new google.maps.Marker({
  //   position: {lat: 39.9501206, lng: -77.1615386},
  //   map: map
  // });

  // marker#.addListener('click', function() {
  //   infowindow.open(map, marker#);
  // });





  // var contentString = '<div id="content">'+
  // '<div id="siteNotice">'+
  // '</div>'+
  // '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
  // '<div id="bodyContent">'+
  // '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large sandstone rock formation in the southern part of the Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) south west of the nearest large town, Alice Springs; 450&#160;km (280&#160;mi) by road. Kata Tjuta and Uluru are the two major features of the Uluru - Kata Tjuta National Park. Uluru is sacred to the Pitjantjatjara and Yankunytjatjara, the Aboriginal people of the area. It has many springs, waterholes, rock caves and ancient paintings. Uluru is listed as a World Heritage Site.</p> <p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> https://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div>';

  // var infowindow = new google.maps.InfoWindow({
  //   content: contentString
  // });

  // var marker# = new google.maps.Marker({
  //   position: {lat: 39.9501206, lng: -77.1615386},
  //   map: map
  // });

  // marker#.addListener('click', function() {
  //   infowindow.open(map, marker#);
  // });
};