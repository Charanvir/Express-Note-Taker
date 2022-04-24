// this page is being used as a central hub for all routing functions
const router = require("express").Router();
const noteRoutes = require("../apiRoutes/noteRoutes");


router.use(noteRoutes);

module.exports = router;