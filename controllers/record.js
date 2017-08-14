const express = require('express');
const Collection = require('../models/collection');
const Record = require('../models/record')
const User = require('../models/user')
const router = express.Router({mergeParams: true});

router.delete('/:id', (req, res) => {
  const userId = req.params.userId
  const collectionId = req.params.collectionId
  const recordId = req.params.id

  User.findById(userId)
    .then((user) => {
      const foundCollection = user.collections.find((collection) => {
        return collection.id === collectionId
      })
      const recordToSplice = foundCollection.records.findIndex((record) => {
        return record.id === recordId
      })
      const oldCollection = foundCollection;
      foundCollection.records.splice(recordToSplice, 1);
      const updatedCollection = foundCollection;
      Collection.findByIdAndUpdate(oldCollection, updatedCollection, {new: true})
        .then((collection) => {console.log('removed record from ' + collection)
        res.json(collection)
      })
      return user.save()
    })
})

module.exports = router;
