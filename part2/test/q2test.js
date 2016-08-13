var chai = require('chai');
var remoteMathService = require('../question2');

describe('remoteMathService', function() {
    it('answer should be correct', function() {
      remoteMathService(function(answer) {
          answer.should.be.eql(3);
          done();
      });
    });
});
