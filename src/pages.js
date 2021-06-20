const Database = require("./database/db");
const saveOrphanage = require("./database/saveOrphanage")

module.exports = {
    index(req, res) {
        return res.render("index");
    },
    async orphanages(req, res) {
        try {
            const db = await Database;
            const orphanages = await db.all("SELECT id, name, lat, lng FROM orphanages;");
            return res.render("orphanages", { orphanages });
        } catch (error) {
            console.error(error);
            return res.send("Erro no banco de dados");
        }
    },
    async orphanage(req, res) {
        try {
            const id = req.query.id;
            const db = await Database;
            let orphanage = await db.all(`SELECT * FROM orphanages WHERE id = ${id};`);
            orphanage = orphanage[0];
            utils.showOrphanage(orphanage);
            return res.render("orphanage", { orphanage, firstImage: orphanage.firstImage });
        } catch (error) {
            console.error(error);
            return res.send("Erro no banco de dados");
        }
    },
    createOrphanage(req, res) {
        return res.render("create-orphanage");
    },
    async saveOrphanage(req, res) {
        const fields = req.body;
        if (Object.values(fields).includes('')) {
            return res.send("Parece que você deixou algum campo em branco");
        }
        try {
            const db = await Database;
            await saveOrphanage(db, {
                name: fields.name,
                description: fields.description,
                whatsapp: fields.whatsapp,
                lat: fields.lat,
                lng: fields.lng,
                images: fields.images.toString(),
                instructions: fields.instructions,
                opening_hours: fields.opening_hours,
                open_on_weekends: fields.open_on_weekends
            });
            return res.redirect("/orphanages")
        } catch (error) {
            console.error(error);
            return res.send("Erro no banco de dados");
        }
    }
}

const utils = {
    showOrphanage(orphanage) {
        orphanage.images = orphanage.images.split(",");
        orphanage.firstImage = orphanage.images[0];
        orphanage.open_on_weekends = orphanage.open_on_weekends == 1 ? true : false;
    }
}