const async = require('async');

function remoteMathService (cb) {
  var one = null;
  var two = null;

  async.parallel([
    function (callback) {
      callOneService( function (err, num) {
      one = num;
      callback();
    });
    },
    function (callback) {
      callTwoService( function (err, num) {
        two = num;
        callback();
      });
    },
  ], function(err) {
    if(err) return err;
    return cb( undefined , one + two);
  });
}

function callOneService (cb) {
  setTimeout ( function () {
      return cb( undefined , 1 );
    }, 1000 );
}

function callTwoService (cb) {
  setTimeout ( function () {
    return cb( undefined , 2 );
  }, 1500 );
}

remoteMathService( function (err, answer) {
  if (err) console.log( "error " , err);
  if (answer !== 3 ) {
    console .log ( "wrong answer" , answer);
  }
  else {
    console .log ( "correct" );
  }
});
