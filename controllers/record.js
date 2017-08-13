const express = require('express');
const Collection = require('../models/collection');
const Record = require('../models/record')
const User = require('../models/user')
const router = express.Router({mergeParams: true});

router.delete('/:id', (req, res) => {
  
})

module.exports = router;
