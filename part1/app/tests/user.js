/*jshint expr: true*/
const mongoose = require("mongoose");
const User = require('../models/user');

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server');
const should = chai.should();
const serverUrl = 'http://127.0.0.1:8081';

mongoose.Promise = global.Promise;
chai.use(chaiHttp);

const testUser = {
    "gender": "female",
    "name": {
        "title": "miss",
        "first": "alison",
        "last": "reid"
    },
    "location": {
        "street": "1097 the avenue",
        "city": "Newbridge",
        "state": "ohio",
        "zip": 28782
    },
    "email": "alison.reid@example.com",
    "username": "tinywolf709",
    "password": "rockon",
    "salt": "lypI10wj",
    "md5": "bbdd6140e188e3bf68ae7ae67345df65",
    "sha1": "4572d25c99aa65bbf0368168f65d9770b7cacfe6",
    "sha256": "ec0705aec7393e2269d4593f248e649400d4879b2209f11bb2e012628115a4eb",
    "registered": 1237176893,
    "dob": 932871968,
    "phone": "031-541-9181",
    "cell": "081-647-4650",
    "PPS": "3302243T",
    "picture": {
        "large": "https://randomuser.me/api/portraits/women/60.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/60.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/60.jpg"
    }
};

describe('Users', () => {
    beforeEach((done) => {
        User.remove({}, (err) => {
            done();
        });
    });
    describe('/GET users', () => {
        it('it should GET all the user stubs', (done) => {
            chai.request(serverUrl)
                .get('/users')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });
    describe('/POST user', () => {
        it('it should not POST a user that does not match the user model', (done) => {
            var user = Object.assign({}, testUser);
            delete user.name;
            chai.request(serverUrl)
                .post('/user')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('err').eql('User validation failed');
                    res.body.should.have.property('details');
                    res.body.details.should.have.property('name.last');
                    res.body.details.should.have.property('name.first');
                    res.body.details.should.have.property('name.title');
                    res.body.details['name.last'].should.have.property('kind').eql('required');
                    done();
                });
        });
        it('it should POST a user ', (done) => {
            chai.request(serverUrl)
                .post('/user')
                .send(testUser)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.empty;
                    done();
                });
        });
    });
    describe('/GET/:username user', () => {
        it('it should GET a user by their username', (done) => {
            var user = new User(testUser);
            user.save((err) => {
                chai.request(serverUrl)
                    .get('/user/' + testUser.username)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('gender');
                        res.body.should.have.property('username').eql(testUser.username);
                        res.body.should.not.have.property('_id');
                        done();
                    });
            });

        });
    });
    describe('/PUT/:username user', () => {
        it('it should UPDATE a user matching the provided username', (done) => {
            var updatedUser = Object.assign({}, testUser);
            updatedUser.username = 'clara340';
            updatedUser.name.first = 'clara';
            var user = new User(testUser);
            user.save((err) => {
                chai.request(serverUrl)
                    .put('/user/' + testUser.username)
                    .send(updatedUser)
                    .end((err, res) => {
                        res.should.have.status(201);
                        res.body.should.be.empty;
                        done();
                    });
            });
        });
    });
    describe('/GET/users/search user', () => {
        it('it should search for a user given one or many user properties', (done) => {
            var user =  new User(testUser);
            user.save();
            var tempUser =  Object.assign({}, testUser);
            tempUser.gender = "male";
            var otherUser = new User(tempUser);
            otherUser.save((err) => {
                chai.request(serverUrl)
                    .get('/users/search?gender=female')
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('array');
                        res.body.length.should.be.eql(1);
                        res.body[0].should.have.property('gender').eql('female');
                        done();
                    });
            });
        });
    });
});
