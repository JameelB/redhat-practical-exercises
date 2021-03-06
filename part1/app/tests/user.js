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

const testUser = require('./test-data/testUser');

describe('Users', () => {
    beforeEach((done) => {
        User.remove({}, (err) => {
            done();
        });
    });

    describe('/GET users', () => {
        it('it should GET all user stubs', (done) => {
          var user = new User(testUser);
          user.save((err) => {
            chai.request(serverUrl)
              .get('/users')
              .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(1);
                  res.body[0].should.have.property('md5');
                  res.body[0].should.have.property('uri');
                  res.body[0].should.not.have.property('_id');
                  done();
              });
          });
        });

        it('it should return an empty array if no users are available', (done) => {
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
                    .get('/user/' + user.username)
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

        it('it should GET a user and filter by their username, location and email', (done)=> {
          var user = new User(testUser);
          user.save((err) => {
            chai.request(serverUrl)
              .get('/user/' + user.username + '?filter=username,location,email')
              .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('username').eql(testUser.username);
                res.body.should.have.property('location');
                res.body.should.have.property('email');
                res.body.should.not.have.property('_id');
                res.body.should.not.have.property('gender');
                done();
              });
          });
        });

        it('it should return an error upon an attempt to GET a user that does not exist', (done)=> {
          var user = new User(testUser);
          chai.request(serverUrl)
            .get('/user/sample')
            .end((err, res) => {
              res.should.have.status(404);
              res.should.have.be.a('object');
              res.body.should.have.property('err').eql('user not found');
              done();
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
                    .put('/user/' + user.username)
                    .send(updatedUser)
                    .end((err, res) => {
                        res.should.have.status(201);
                        res.body.should.be.empty;
                        done();
                    });
            });
        });
    });

    describe('/DEL/:username user', () => {
      it('it should DELETE a user matching the provided username', (done) => {
        var user = new User(testUser);
        user.save((err) => {
          chai.request(serverUrl)
            .del('/user/' + user.username)
            .end((err, res) => {
              res.should.have.status(204);
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
