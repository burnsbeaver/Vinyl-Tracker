const express = require('express');
const User = require('../models/user');

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
  const newUser = new User();
  newUser.email = req.body.email;
  newUser.password = req.body.password;
  newUser.firstName = req.body.firstName;
  newUser.lastName = req.body.lastName;
  newUser.collections = [];
  console.log(newUser)

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
    res.json(userToSearch)
  })
});

module.exports = router;
