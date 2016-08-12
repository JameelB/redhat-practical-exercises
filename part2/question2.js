function remoteMathService (cb) {
  var one;
  var two;

  callOneService( function (err, num) {
    one = num;
  });

  callTwoService( function (err, num) {
    two = num;
  });

  return cb( undefined , one + two);
}

function callOneService (cb) {
  setTimeout ( function () {
      return cb( undefined , 1 );
    }, 1000 );
}

function callTwoService (cb) {
  setTimeout ( function () {
    return cb( undefined , 2 );
  }, 1500 );
}

remoteMathService( function (err, answer) {
  if (err) console.log( "error " , err);
  if (answer == 3 ) {
    console.log ( "correct" );
  }
  else {
    console.log ("wrong answer" , answer);
  }
});
