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