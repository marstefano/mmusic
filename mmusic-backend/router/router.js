"use strict";

const express = require("express");
const router = express.Router();
const { Home } = require("../Controller/Controller");

router.get("/", Home.homePage);

module.exports = router;