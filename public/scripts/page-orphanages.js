var map = L.map('mapid').setView([-22.494188,-43.2065701], 15);  // Create Map

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
    iconUrl: "/assets/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent(`Lar das meninas <a href="orphanage?id=1" class="choose-orphanage"><img src="assets/images/arrow-white.svg"></a>`)

L.marker([-22.494188,-43.2065701], { icon }).addTo(map)   // Create &  add marker
    .bindPopup(popup)