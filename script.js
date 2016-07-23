/**
 * Created by Anastasia on 7/22/2016.
 */
var map;
function initMap() {
    var markers = [];
    var mapOptions= {
        center: {lat: 37.791350, lng: -122.435883},
        zoom: 10,
        disableDefaultUI:false, // UI is no longer visible if set to true
        scrollwheel:true, // unable to scroll through the map if set to false
        draggable:true,
        maxZoom:11,// set maximum zoom options
        minZoom:9,//set minimum zoom options
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


}