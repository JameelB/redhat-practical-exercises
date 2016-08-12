const mongoose = require('mongoose');
const request = require('request');
const config = require('./app/config');
const User = require('./app/models/user');

mongoose.connect(config.mongo);

request('https://gist.githubusercontent.com/jasonmadigan/009c15b5dc4b4eccd32b/raw/9a7ea345d6d9e924056a5ecdf46a72f082e51f34/users.json', function(err, res, body){
	
	if(!err && res.statusCode === 200) {
		var users = JSON.parse(body).results.map(function(obj) {
			return obj.user;
		});

		User.collection.insertMany(users, function(err, docs) {
			if(err) throw err;
			console.log(docs.insertedCount + 'users imported');
			process.exit(0);
		})
	}
	else {
		if(err) throw err;
		console.error('user json file not available. http error code' + res.statusCode);
		process.exit(1);
	}

});