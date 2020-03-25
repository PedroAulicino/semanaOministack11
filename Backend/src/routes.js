const express = require("express");
const ongCotroller = require("./controllers/OngsController");
const incidentController = require("./controllers/incidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/sessions", SessionController.create);

routes.get("/ongs", ongCotroller.index);
routes.post("/ongs", ongCotroller.create);

routes.get("/incidents", incidentController.index);
routes.post("/incidents", incidentController.create);
routes.delete("/incidents/:id", incidentController.delete);

routes.get("/profile", ProfileController.index);

module.exports = routes;
