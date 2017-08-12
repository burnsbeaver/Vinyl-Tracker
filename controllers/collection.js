const express = require('express');
const Collection = require('../models/collection');
const Record = require('../models/record')
const User = require('../models/user')
const router = express.Router({mergeParams: true});

router.get("/:id", (req, res) => {
  Collection.findById(req.params.id).then((collection) => {
    res.json(collection);
  });
});

router.post("/:id", (req, res) => {
  console.log('do i have user: ' + req.params.userId)
  const newRecord = new Record()
  newRecord.name = req.body.name;
  newRecord.artist = req.body.artist;
  newRecord.year = req.body.year;

  User.findById(req.params.userId)
    .then((user) => {
      const foundCollection = user.collections.find((collection) => {
        return collection.id === req.params.id
      })
      console.log(foundCollection)
      foundCollection.records.push(newRecord);
      return user.save();
    })

//   Collection.findById(req.params.id)
//     .then((collection) => {
//       collection.records.push(newRecord)
//       return collection.save()
//     })
//
})

module.exports = router;
