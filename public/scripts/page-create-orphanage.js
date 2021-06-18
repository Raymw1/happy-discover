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
function addPhotoField() {
    const imagesContainer = document.querySelector(".images-upload");
    const uploadField = document.querySelectorAll(".new-upload");
    if (chechPhotoField(uploadField)) {
        const newUpload = uploadField[uploadField.length-1].cloneNode(true);
        newUpload.children[0].value = '';
        imagesContainer.appendChild(newUpload);
    }   else {
        alert("Por favor, preencha o último campo antes de adicionar o próximo!");
    }
}

function deleteField(event) {
    const spanField = event.currentTarget;
    const uploadField = document.querySelectorAll(".new-upload");
    if (uploadField.length <= 1) {
        spanField.previousElementSibling.value = "";
        return
    }   else {
        spanField.parentNode.remove()
    }
}

function chechPhotoField(newUpload) {
    for (let upl of newUpload) {
        if ((upl.querySelector("input").value).trim() === "") {
            return false;
        }
    }
    return true;
}


// ------------------ YES/NO WEEKEND ------------------
function toggleSelect(event) {
    const btnClicked = event.currentTarget;
    const input = document.querySelector(`[name="open-on-weekends"]`)
    document.querySelectorAll(".button-select button").forEach(btn => btn.classList.remove("active"));
    btnClicked.classList.add("active");
    input.value = btnClicked.dataset.value;
}