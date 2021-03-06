const mongoose = require('mongoose');
const restify = require('restify');
const request = require('request');
const logger = require('restify-logger');
const config = require('./app/config');
const User = require('./app/models/user');

const server_port = 8081;
const server_ip_address = '127.0.0.1';

mongoose.connect(config.mongo);

//create server
const server = restify.createServer();
server.use(restify.bodyParser());
server.use(restify.queryParser());
server.use(restify.CORS());
server.use(logger('custom', {
    skip: function(req) {
        return process.env.NODE_ENV === "test" || req.method === "OPTIONS" || req.url === "/status";
    }
}));

//routes
server.get('/users', function(req, res, next){
    User.find({}, '-_id username md5 picture location', function(err, doc){
        if(err) return res.send(400, err);
      	res.send(doc.map(function(obj) {
      		return{ username: obj.username, picture: obj.picture, location: obj.location, md5: obj.md5, uri: 'user/' + obj.username };
      	}));
    }).lean();
});

server.get('/user/:username', function(req, res, next) {
    var filter = '-_id '
    if (req.params.filter) filter += req.params.filter.replace(/,/g, ' ');

    User.findOne({
        username: req.params.username
    }, filter, function(err, user) {
        if (err) res.send(400, err);
        if (user) res.send(user);
        else res.send(404, {
            err: 'user not found'
        });
    }).lean();
});

server.del('/user/:username', function(req, res, next) {
	User.findOne({
		username : req.params.username
	}, function(err, user) {
    if(err) res.send(400,err);
    if(user) {
      user.remove(function(err) {
        if(err) return res.send(400, err);
        res.send(204);
      });
    }
    else {
      res.send(404, {
        err: 'User not found'
      })
    }
  });
});

server.post('/user', function(req, res, next) {
	var user = new User({
		gender: req.params.gender,
		name: req.params.name,
		location: req.params.location,
		email: req.params.email,
		username: req.params.username,
		password: req.params.password,
		salt: req.params.salt,
		md5: req.params.md5,
		sha1: req.params.sha1,
		sha256: req.params.sha256,
		registered: req.params.registered,
		dob: req.params.dob,
		phone: req.params.phone,
		cell: req.params.cell,
		PPS: req.params.PPS,
		picture: req.params.picture
	});

	user.save(function(err) {
		if(err) return res.send(400, {
			err:err.message,
			details:err.errors
		});
		res.send(201);
	})
});

server.put('/user/:username', function(req, res, next) {
	console.log(req.params);
	User.findOneAndUpdate({
		username: req.params.username
	}, {
		$set: {
		gender: req.params.gender,
		name: req.params.name,
		location: req.params.location,
		email: req.params.email,
		username: req.params.username,
		password: req.params.password,
		salt: req.params.salt,
		md5: req.params.md5,
		sha1: req.params.sha1,
		sha256: req.params.sha256,
		registered: req.params.registered,
		dob: req.params.dob,
		phone: req.params.phone,
		cell: req.params.cell,
		PPS: req.params.PPS,
		picture: req.params.picture
	}}, function(err) {
		if(err) return res.send(400, err);
		res.send(201);
	});
});

server.get('/users/search', function(req, res, next) {

	Object.keys(req.params).forEach(function(key) {
		req.params[key] = new RegExp(req.params[key], 'i');
	});

	User.find(req.params, '-_id', function(err, doc) {
		if(err) return res.send(400, err);
		res.send(doc);
	}).lean();
});

server.listen(server_port, server_ip_address, function() {
    console.log('%s listening at %s', server.name, server.url);
});
