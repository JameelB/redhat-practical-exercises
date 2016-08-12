// doThing() defined elsewhere
function foo (callback) {
  doThing( function (err, res) {
    if(err) return callback(err);
    callback( null , res);
  });
}

foo( function (err, res){
  console.log( 'Done!. err=', err, ' : res = ', res );
});
