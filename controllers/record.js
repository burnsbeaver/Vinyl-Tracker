const express = require('express');
const Collection = require('../models/collection');
const Record = require('../models/record')
const User = require('../models/user')
const router = express.Router({mergeParams: true});

router.delete('/:id', (req, res) => {
  console.log('YO')
  res.send('Got a DELETE request at /user')
})

module.exports = router;
