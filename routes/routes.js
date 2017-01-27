var express = require('express');
var router = express.Router();

var defaultpage = require("../routes/default.js");

router.get("/", defaultpage.index);

module.exports = router;
