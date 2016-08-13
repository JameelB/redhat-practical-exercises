// This is a mock database implementation with just a connect function
/* db.connect will need to be called a total of 10 times before it successfully
connects */
var counter = 0 ;
var delay = 10;

var callback = function (err) {
  if (err) {
    console.error(err);
    delay = delay * 2;
    setTimeout ( function() {db.connect(callback)}, delay);
    return;
  }

  console.log ( 'successfully connected!' );

};

var db = {
  connect : function (cb) {
    console .log ( 'connection attempt' , counter + 1 );
    if (counter < 9 ) {
      counter ++ ;
      return cb( 'db not ready yet' );
    }
    return cb();
  }
};

// Try to connect, log a successful connection & exit
// If we fail to connect, log an error and return
db.connect(callback);
