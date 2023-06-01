var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native

var conString = "postgres://btkxjzpz:YaT2OasCm5iqPBxwD7KJbdLch3MtlNUL@snuffleupagus.db.elephantsql.com/btkxjzpz" //Can be found in the Details page
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT * from food_category', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    for (const row of result.rows) {
        console.log("" + row.category_id + ": " + row.category);
    }
    client.end();
  });
});