const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000

var pg = require('pg');

//Can be found in the Details page
var conString = "postgres://btkxjzpz:YaT2OasCm5iqPBxwD7KJbdLch3MtlNUL@snuffleupagus.db.elephantsql.com/btkxjzpz" 


app.use(cors({
  origin: '*'
}));
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/time', (req, res) => {
  
  res.send('Hello World - the time is: ' + Date.now());
})

app.get('/data', (req, res) => {
  let data = [{name: "klaus", age: 56}, 
              {name: "ole", age: 64}, 
              {name: "Henrik", age: 38},
              {name: "Hanne", age: 48}];
  res.send(data);
})

app.get('/categories', (req, res) => {
  getFoodGategories(function(d) {
    res.send(d);
  });
})

app.get('/food/:category', (req, res) => {
  getFoodInCategory(req.params['category'], function(d) {
    res.send(d);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function getFoodGategories(handle){
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }

  client.query('select category, count(category_id) as antal from food_category join food using(category_id) group by category_id', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    let data = [];
    let idx = 1;
    for (const row of result.rows) {
        data.push({category: row.category, count: row.antal});
        idx++;
    }
    handle(data);
    client.end();
  });
});
}

function getFoodInCategory(category, handle) {
  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
  
    let query = `SELECT f.food_item FROM food f  JOIN food_category fc USING (category_id) WHERE fc.category = '${category}'`

    client.query(query, function(err, res) {
      if(err) {
        return console.error('error running query', err);
      }
      
      handle(res.rows);
      client.end();
    });
  });

}