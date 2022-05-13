"use strict";

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    title: "Halo bung ?",
    message: "Halo bung",
    status: 200,
  })
})

module.exports = router;