const express = require('express');
const User = require('../models/user');
const Collection = require('../models/collection')

const router = express.Router();

router.get('/', (req, res) => {
  User.find()
    .then((users) => {
      res.json(users);
    });
});

router.get("/:id", (req,res) => {
  User.findById(req.params.id).then((user) => {
    res.json(user);
  });
});

router.post('/create', (req, res) => {
  User.find()
  .then((users) => {
    const emailToSearch = users.find((user) => {
      return user.email === req.body.email
      })
    if(emailToSearch) {
      res.send('This email already has an account')
    } else{
        const newUser = new User();
        newUser.email = req.body.email;
        newUser.password = req.body.password;
        newUser.firstName = req.body.firstName;
        newUser.lastName = req.body.lastName;
        newUser.collections = [];
        const newCollection = new Collection
        newCollection.name = "My Records";
        newCollection.description = "Vinyl's that I own"
        newCollection.records = []
        newCollection.save()
        newUser.collections.push(newCollection);
        newUser.save()
        console.log(newUser)
        res.json(newUser)
      }
  })
})

router.post("/login", (req, res) => {
  const userEmail = req.body.email;
  const userPassword = req.body.password;
  console.log('Login route was hit' + userEmail + userPassword)
  User.find()
    .then((users) => {
      const userToSearch = users.find((user ) => {
      return user.email === userEmail
    })
      if (userToSearch.password === userPassword) {
      res.json(userToSearch)
    } else {
      res.send('Invalid Password')
    }
  })
  .catch((err) => {res.send('Email is not linked to account')})
});

module.exports = router;
