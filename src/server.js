const express = require("express");
const path = require("path")
const server = express();

server.use(express.static("public"));
server.use(express.urlencoded({ extended: true}))

// Using Handlebars, not Nunjucks. It needs to rename the html files to hbs
server.set('views', path.join(__dirname, "/views")).set('view engine', "hbs");

const pages = require("./pages");

server.get("/", pages.index);

server.get("/orphanages", pages.orphanages);

server.get("/orphanage", pages.orphanage);

server.get("/create-orphanage", pages.createOrphanage);

server.post("/create-orphanage", pages.saveOrphanage);


const PORT = process.env.PORT||"3000";
server.listen(PORT, function() {
    console.log(`Go to: http://127.0.0.1:${PORT}/`);
})
