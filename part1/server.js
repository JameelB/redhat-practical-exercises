const mongoose = require('mongoose');
const restify = require('restify');
const request = require('request');
const logger = require('restify-logger');
const config = require('./app/config');
const User = require('./app/models/user');

const server_port = process.env.OPENSHIFT_NODEJS_PORT || 8081;
const server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

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

server.listen(server_port, server_ip_address, function() {
    console.log('%s listening at %s', server.name, server.url);
});

//routes
server.get('/users', function(req, res, next){
    User.find({}, '-_id username md5', function(err, doc){
        if(err) res.send(400, err);
        else {
        	res.send(doc.map(function(obj) {
        		return{ md5: obj.md5, uri: 'user/' + obj.username };
        	})); 
    	}
    }).lean();
});

server.get('/user/:username', function(req, res, next) {
	User.findOne({
		username : req.params.username
	}, filter, function(err, user) {
		if(err) res.send(400, err);
		if(user) res.send(user);
		else res.send(404, {
			err: 'User not found.'
		});
	}).lean();
});

server.del('/user/:username', function(req, res, next) {
	User.findOne({
		username : req.params.username
	}).remove(function(err) {
		if(err) res.send(400, err);
		else res.send(204);		
	});

	return next();
});