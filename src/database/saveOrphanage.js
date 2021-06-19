function saveOrphanage(db, orphanage) {
    return db.run(`INSERT INTO orphanages (name, description, whatsapp, lat, lng, images, instructions, opening_hours, open_on_weekends) 
    VALUES (
        "${orphanage.name}",
        "${orphanage.description}",
        "${orphanage.whatsapp}",
        "${orphanage.lat}",
        "${orphanage.lng}",
        "${orphanage.images}",
        "${orphanage.instructions}",
        "${orphanage.opening_hours}",
        "${orphanage.open_on_weekends}"
    );`);
}




module.exports = saveOrphanage;