const express = require("express");
const fakeTags = require("../data/tags");

const router = express.Router();

router.get("/", (req, res) => res.json(fakeTags));

module.exports = router;
