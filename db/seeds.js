require("dotenv").config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

var User = require('../models/user');
var Collection = require('../models/collection');
var Record = require('../models/record');

mongoose.Promise = global.Promise;

User.remove({}, (err) => console.log(err));
Collection.remove({}, (err) => console.log(err));
Record.remove({}, (err) => console.log(err));

const ram = new Record({
  name: "Random Access Memories",
  artist: "Daft Punk",
  year: 2013
});

const homework = new Record({
  name: "Homework",
  artist: "Daft Punk",
  year: 1997
});

const discovery = new Record({
  name: "Discovery",
  artist: "Daft Punk",
  year: 1997
});

const myRecords = new Collection({
  name: "My Records",
  description: "Vinyl's that I own",
  numberOfRecords: 3,
  records: [ram, homework, discovery]
});

const mj = new User({
  email: "mj@test.com",
  password: "tarheels",
  firstName: "Michael",
  lastName: "Jordan",
  collections: [myRecords]
})

myRecords.save().then(() => console.log('myRecords Saved!'));
mj.save().then(() => console.log('MJ saved! Go Heels!'))

mongoose.connection.close();
