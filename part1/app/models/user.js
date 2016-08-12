const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const urlPattern = new RegExp("(http|ftp|https)://(\.[\w-]*)+([\w.,@?^=%&amp;:/~+#-]*[\w@?^=%&amp;/~+#-])?");

const userNameSchema = {
  title: { type:String, required: true},
  first: { type:String, required: true},
  last: { type:String, required: true}
};

const userLocationSchema = {
  street: { type:String, required: true},
  city: { type:String, required: true},
  state: { type:String, required: true},
  zip: { type:Number, required: true}
};

const userPictureSchema = {
  large: { type:String, required: true, validate: validateURL },
  medium: { type:String, required: true, validate: validateURL },
  thumbnail: { type:String,required: true, validate: validateURL }
};

function validateURL(url){
	console.log(urlPattern.test(url));
	return urlPattern.test(url);
}

module.exports = mongoose.model('User', new Schema({
  gender: { type:String, required: true},
  name: userNameSchema,
  location: userLocationSchema,
  email: { type:String, required: true},
  username: { type:String, required: true},
  password: { type:String, required: true},
  salt: { type:String, required: true},
  md5: { type:String, required: true},
  sha1: { type:String, required: true},
  sha256: { type:String, required: true},
  registered: { type:Date, required: true},
  dob: { type:Date, required: true},
  phone: { type:String, required: true},
  cell: { type:String, required: true},
  PPS: { type:String, required: true},
  picture: userPictureSchema
}));
