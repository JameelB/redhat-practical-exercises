var chai = require('chai');

describe('foo', function() {
    it('should only run the function passed to it once', function() {
        var callbackTriggered = false;
        foo(function() {
            if (callbackTriggered === true) {
              assert.fail(error);
            } else {
              setTimeout(function(){ done(); }, 1000);
            }
        });
    });
});
