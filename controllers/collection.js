

const express = require('express');
const Collection = require('../models/collection');
const Record = require('../models/record')
const User = require('../models/user')
const router = express.Router({mergeParams: true});

router.get("/:id", (req, res) => {
  console.log(req.params.id)
  Collection.findById(req.params.id).then((collection) => {
    console.log(collection)
    res.json(collection);
  });
});
router.post("/new", (req, res) => {
  const newCollection = new Collection()
  newCollection.name = req.body.name;
  newCollection.description = req.body.description
  newCollection.save()
  User.findById(req.params.userId)
    .then((user) => {
      user.collections.push(newCollection)
      res.json(user)
      return user.save()
    })
})

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
      const oldCollection = foundCollection;
      foundCollection.records.push(newRecord);
      const updatedCollection = foundCollection;
      Collection.findByIdAndUpdate(oldCollection, updatedCollection, {new: true})
        .then((collection) => {console.log('UPDATED' + collection)})
        .then(() => {console.log(user)
        res.json(user)
      })

      return user.save()
    })

})

module.exports = router;
