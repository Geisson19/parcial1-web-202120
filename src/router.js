const { response } = require("express");
const express = require("express");
const { getPairsOfPlayers } = require("./controller");
const router = express.Router();

router.get("/", async (req, resp = response, next) => {
  try {
    await getPairsOfPlayers(req, resp, next);
  } catch (error) {
    resp.status(500).json({ error });
  }
});

module.exports = router;
