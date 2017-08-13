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
  year: 2013,
  image: "http://fillmurray.com/30/30"
});

const homework = new Record({
  name: "Homework",
  artist: "Daft Punk",
  year: 1997,
  image: "http://fillmurray.com/30/30"
});

const discovery = new Record({
  name: "Discovery",
  artist: "Daft Punk",
  year: 1997,
  image: "http://fillmurray.com/30/30"
});

const stadiumArcadium = new Record({
  name: "Stadium Arcadium",
  artist: "Red Hot Chili Peppers",
  year: 2006,
  image: "http://fillmurray.com/30/30"
});

const bloodSugarSexMagic = new Record({
  name: "Blood Sugar Sex Magic",
  artist: "Red Hot Chili Peppers",
  year: 1991,
  image: "http://fillmurray.com/30/30"
});

const myRecords = new Collection({
  name: "My Records",
  description: "Vinyl's that I own",
  records: [ram, homework, discovery]
});

const wishList = new Collection({
  name: "Wish List",
  description: "Vinyl's I want",
  records: [bloodSugarSexMagic, stadiumArcadium]
})

const mj = new User({
  email: "mj@test.com",
  password: "tarheels",
  firstName: "Michael",
  lastName: "Jordan",
  collections: [myRecords, wishList]
})

wishList.save().then(() => console.log('wishList Saved!'));
myRecords.save().then(() => console.log('myRecords Saved!'));
mj.save().then(() => console.log('MJ saved! Go Heels!'))

mongoose.connection.close();
