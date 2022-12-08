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

router.get("/:id", (req, res) => {
  Goals.findOne({ _id: req.params.id }, (err, foundGoal) => {
    if (err) {
      res.json({ error: err });
    } else {
      res.json(foundGoal);
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

router.delete("/:id", (req, res) => {
  Goals.findByIdAndDelete(req.params.id, (err, deletedGoal) => {
    if (err) {
      res.json({ error: err });
    } else {
      res.json(deletedGoal);
    }
  });
});

router.put("/:id", (req, res) => {
  Goals.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedGoal) => {
      if (err) {
        res.json({ error: err });
      } else {
        res.json(updatedGoal);
      }
    }
  );
});

module.exports = router;
