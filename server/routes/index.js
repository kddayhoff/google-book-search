const path = require("path");

//router is a middleware that comes with express and helps reduce code in our server
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
//when doing routes in api folder, no need to put /api as part of the path/route
router.use("/api", apiRoutes);

// don'tneed this route unless it is deployed
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
