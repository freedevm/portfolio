function initMap() {
    // Latitude and Longitude
    // var myLatLng = {lat: -6.207690, lng: 106.985270};
    var myLatLng = {lat: 59.30946, lng: 24.41422};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: ' Vaikne 3a, Keila, 76607 Harju maakond, Estonia' // Title Location
    });
}