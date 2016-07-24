/**
 * Created by Anastasia on 7/22/2016.
 */
var map;

function initMap() {
    var markers = [];
    var clustermarker = [];
    var mapOptions= {
        center: {lat: 37.791350, lng: -122.435883},
        zoom: 10,
        disableDefaultUI:false, // UI is no longer visible if set to true
        scrollwheel:true, // unable to scroll through the map if set to false
        draggable:true,
        maxZoom:11,// set maximum zoom options
        minZoom:5,//set minimum zoom options
        zoomControlOptions:{
            position:google.maps.ControlPosition.LEFT_BOTTOM,
            style: google.maps.ZoomControlStyle.DEFAULT

        },
        panControlOptions:{
            postion:google.maps.ControlPosition.LEFT_BOTTOM

        },
        mapTypeId:google.maps.MapTypeId.ROADMAP, // other options SATELLITE and hybrid

    };
    map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);

    var mcOptions = {gridSize: 50, maxZoom: 15, imagePath: 'm1.png'}

   var mc = new MarkerClusterer(map, [], mcOptions);
    map.addListener('click',function(e){
        placeMarkerAndPanTo(e.latLng, map);

    });


    function placeMarkerAndPanTo(latLng, map) {
        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            draggable:true,
        });
       markers.push(marker);

        map.panTo(latLng);
        marker.addListener('click', function(event) {
            removeMarker(marker);
        });
    }

    function removeMarker(marker){
        var index = markers.indexOf(marker);
        if (index != -1){
           markers.splice(index,1);
            marker.setMap(null);
        }
    }
    for (var i = 0; i < 40; i++) {
        var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
        var latValue = 37.791350 + Math.random();
        var lngValue = -122.435883 + Math.random();
        var latLng = {lat: latValue, lng: lngValue}
        var marker1 = new google.maps.Marker({
            position: latLng,
            icon: image

        });
        clustermarker.push(marker1);

        var latValue = 37.791350 + Math.random();
        var lngValue = -122.435883 + Math.random();
        var latLng = {lat: latValue, lng: lngValue}
        var marker2 = new google.maps.Marker({
            position: latLng,
            icon: 'restaurant.png'

        });
        clustermarker.push(marker2);


    }
    
   console.log(clustermarker.length);
    mc.addMarkers(clustermarker,true);



}