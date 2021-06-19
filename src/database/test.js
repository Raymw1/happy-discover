const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async db => {
    await saveOrphanage(db, {
        id: 3,
        name: "Lar dos Meninos",
        description: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "22888888888",
        images: [
            "https://images.unsplash.com/photo-1598454444425-4067fd1ac9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0MDQ3NzMy&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit", 
            "https://images.unsplash.com/photo-1599577180513-7dd76ffd9761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0MDQ3Njk2&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit", 
            "assets/images/home.jpg", 
            "https://images.unsplash.com/photo-1579196900052-a6034632c042?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0MDQ3Njc0&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit", 
            "https://images.unsplash.com/photo-1572248364230-7f412885f2da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0MDQ3NzE4&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit", 
            "https://images.unsplash.com/photo-1601564267567-f060651e5b2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0MDQ3NzU2&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
        ].toString(),
        lat: "-22.494188",
        lng: "-43.2165701",
        instructions: "Blahblahblahblahblah.",
        opening_hours: "Horário de visitas Das 10h até 20h",
        open_on_weekends: "0"
    });
    await db.run(`INSERT INTO orphanages (name, description, whatsapp, lat, lng, images, instructions, opening_hours, open_on_weekends) VALUES (
        "Lar das Meninas", "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        "22999999999", "-22.494188", "-43.2065701", 
        "https://images.unsplash.com/photo-1598454444425-4067fd1ac9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjI0MDQ3NzMy&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
        "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        "Horário de visitas Das 8h até 18h",
        "1"
    );`);
    // await db.run(`DELETE FROM orphanages;`)
    const selectedOrphanages = await db.all("SELECT * FROM orphanages;");
    console.log(selectedOrphanages);
});
