function initMap() {
    // Latitude and Longitude
    // var myLatLng = {lat: -6.207690, lng: 106.985270};
    var myLatLng = {lat: 35.17871, lng: 136.87694};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: ' Nakamura Ward, Nagoya, Aichi 453-0012, Japan' // Title Location
    });
}