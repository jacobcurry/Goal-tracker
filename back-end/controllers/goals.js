const express = require("express");
const router = express.Router();
const Goals = require("../models/goals.js");

router.get("/", (req, res) => {
  Goals.find({}, (err, foundGoals) => {
    if (err) {
      res.json({ error: err });
    } else {
      res.json(foundGoals);
    }
  });
});

router.post("/", (req, res) => {
  Goals.create(req.body, (err, createdGoal) => {
    if (err) {
      res.json({ error: err });
    } else {
      res.json(createdGoal);
    }
  });
});

module.exports = router;
