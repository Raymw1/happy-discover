const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomCOntrol: false
}

var map = L.map('mapid', options).setView([-22.494188,-43.2065701], 15);  // Create Map

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
    iconUrl: "/public/assets/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

L.marker([-22.494188,-43.2065701], { icon }).addTo(map)   // Create &  add marker


/* ------------------ IMAGE GALLERY ------------------ */
function selectImage(event) {
    const button = event.currentTarget;
    const buttons = document.querySelectorAll(".images button");
    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");
    buttons.forEach(btn => {
        btn.classList.remove("active");
    });
    button.classList.add("active");
    // imageContainer.setAttribute("src", image.getAttribute("src"));
    imageContainer.src = image.src;
}