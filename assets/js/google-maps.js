function initMap() {
    // Latitude and Longitude
    // var myLatLng = {lat: -6.207690, lng: 106.985270};
    var myLatLng = {lat: 53.3996105, lng: -2.9806968};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: '78 Oak Avenue, Birmingham, B1 3CD, United Kingdom' // Title Location
    });
}