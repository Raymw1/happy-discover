const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomCOntrol: false
}


const lat = document.querySelector("span[data-lat]").dataset.lat
const lng = document.querySelector("span[data-lng]").dataset.lng
var map = L.map('mapid', options).setView([lat, lng], 15);  // Create Map

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
    iconUrl: "assets/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

L.marker([lat, lng], { icon }).addTo(map)   // Create &  add marker


/* ------------------ IMAGE GALLERY ------------------ */
document.querySelector(".images button").classList.add("active");
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