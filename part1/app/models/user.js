const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const urlPattern = new RegExp("(http|ftp|https)://(\.[\w-]*)+([\w.,@?^=%&amp;:/~+#-]*[\w@?^=%&amp;/~+#-])?");

const userNameSchema = {
  title: String,
  first: String,
  last: String
};

const userLocationSchema = {
  street: String,
  city: String,
  state: String,
  zip: Number
};

const userPictureSchema = {
  large: { type:String, validate: validateURL },
  medium: { type:String, validate: validateURL },
  thumbnail: { type:String, validate: validateURL }
};

function validateURL(url){
	console.log(urlPattern.test(url));
	return urlPattern.test(url);
}

module.exports = mongoose.model('User', new Schema({
  gender: String,
  name: userNameSchema,
  location: userLocationSchema,
  email: String,
  username: String,
  password: String,
  salt: String,
  md5: String,
  sha1: String,
  sha256: String,
  registered: Date,
  dob: Date,
  phone: String,
  cell: String,
  PPS: String,
  picture: userPictureSchema
}));