var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecordSchema = new Schema({
  name: String,
  artist: String,
  year: Number,
  image: String
});

var CollectionSchema = new Schema({
  name: String,
  description: String,
  numberOfRecords: Number,
  records: [RecordSchema]
});

var UserSchema = new Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  collections: [CollectionSchema]
});

var Record = mongoose.model("Record", RecordSchema);
var Collection = mongoose.model("Collection", CollectionSchema);
var User = mongoose.model("User", UserSchema);

module.exports = {
  Record, Collection, User,
};
