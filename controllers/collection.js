const express = require('express');
const Collection = require('../models/collection');

const router = express.Router();

router.get("/:id", (req,res) => {
  Collection.findById(req.params.id).then((collection) => {
    res.json(collection);
  });
});

module.exports = router;
