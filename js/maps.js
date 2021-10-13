// Json array for places
var markers = {
    'group-1': [{
        "title": 'Bucharest',
        "lat": '44.439663',
        "lng": '26.096306',
        "description": 'Bucharest.'
    }, ],

};

(function($) {
    "use strict";

    var infoWindow, bounds, map, markerIcon, markerActiveIcon, mapMarkers = [];

    function initializeMap() {
        var mapOptions = {
            scrollwheel: false,
        };
        markerIcon = {
            url: 'https://github.com/a7mg/Map-with-markers/blob/master/marker.png?raw=true',
            size: new google.maps.Size(50, 50),
            scaledSize: new google.maps.Size(50, 50),
            origin: new google.maps.Point(0, 0)
        }
        markerActiveIcon = {
            url: 'https://github.com/a7mg/Map-with-markers/blob/master/marker-active.png?raw=true',
            size: new google.maps.Size(50, 50),
            scaledSize: new google.maps.Size(50, 50),
            origin: new google.maps.Point(0, 0)
        }
        infoWindow = new google.maps.InfoWindow();
        bounds = new google.maps.LatLngBounds();
        map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

        dropMarkers('group-1');
    }

    function dropMarkers(target) {
        for (var i in markers[target]) {
            var data = markers[target][i];

            var myLatlng = new google.maps.LatLng(data.lat, data.lng);
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                icon: markerIcon,
                title: data.title,
                animation: google.maps.Animation.DROP
            });

            mapMarkers.push(marker);

            bounds.extend(marker.getPosition());

            (function(marker, data) {
                google.maps.event.addListener(marker, "click", function(e) {
                    for (var j = 0; j < mapMarkers.length; j++) {
                        mapMarkers[j].setIcon(markerIcon);
                    }
                    this.setIcon(markerActiveIcon)

                    infoWindow.setContent('<div style="width: 300px; text-align: center;"><h3>' + data.title + '</h3>' + '<p>' + data.description + '</p></div>');
                    infoWindow.open(map, marker);
                });
            })(marker, data);
        }
        map.fitBounds(bounds);
    }

    function DeleteMarkers() {
        for (var i = 0; i < mapMarkers.length; i++) {
            mapMarkers[i].setMap(null);
        }
        mapMarkers = [];
    };

    $(document).on('click', function(e) {
        e.preventDefault();
        DeleteMarkers();
        dropMarkers($(this).data('target'));
    })
    $(document).on('click', 'a', function(e) {
        e.preventDefault();
        google.maps.event.trigger(mapMarkers[$(this).parent().index()], 'click');
    })
    google.maps.event.addDomListener(window, 'load', initializeMap);
})(jQuery);