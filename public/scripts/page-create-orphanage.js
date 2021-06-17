var map = L.map('mapid').setView([-22.494188,-43.2065701], 15);  // Create Map

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
    iconUrl: "/public/assets/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

let marker;

// ------------------ Create and add marker ------------------
map.on("click", function(event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    marker && map.removeLayer(marker);  // IF TRUE && DO THIS
    marker = L.marker([lat, lng], { icon }).addTo(map);
    document.getElementsByName("lat")[0].value = lat;
    // const latInput = document.querySelector("[name=lat]");
    document.getElementsByName("lng")[0].value = lng;
})

// ------------------ PHOTOS FIELD UPLOAD ------------------

