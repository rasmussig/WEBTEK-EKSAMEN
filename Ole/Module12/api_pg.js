const express = require('express')
const { Client } = require("pg");

const app = express()
const api_port = 3000
const klient = new Client({
  user: "btkxjzpz",
  host: "snuffleupagus.db.elephantsql.com",
  database: "btkxjzpz",
  password: "YaT2OasCm5iqPBxwD7KJbdLch3MtlNUL",
  port: 5432
});
const qryA = `SELECT food_item FROM food`
const qryB = `SELECT category FROM food_category`
const qryC = `SELECT food_item, category, cals_per_unit, unit from food   JOIN food_category USING (category_id)   JOIN units USING (unit_id)`


app.get('/fooditems', async (req, res) => {
    try {
        let queryData = await klient.query(qryA);
        res.json({
          "ok": true,
          "foods": queryData.rows,
        })
      } catch (error) {
        res.json({
          "ok": false,
          "message": error.message,
        })
      }
})

app.get('/foodcategory', async (req, res) => {
  try {
      let queryData = await klient.query(qryB);
      res.json({
        "ok": true,
        "foods": queryData.rows,
      })
    } catch (error) {
      res.json({
        "ok": false,
        "message": error.message,
      })
    }
})


app.get('/foodcatunits', async (req, res) => {
  try {
      let queryData = await klient.query(qryC);
      res.json({
        "ok": true,
        "foods": queryData.rows,
      })
    } catch (error) {
      res.json({
        "ok": false,
        "message": error.message,
      })
    }
})

app.get('/food/:category', async (req, res) => {

  let cqry = `SELECT f.food_item FROM food f  JOIN food_category fc USING (category_id) WHERE fc.category = '${req.params['category']}'`

  try {
      let queryData = await klient.query(cqry);
      res.json({
        "ok": true,
        "foods": queryData.rows,
      })
    } catch (error) {
      res.json({
        "ok": false,
        "message": error.message,
      })
    }
})

// Programmet starter her:
klient.connect();
app.listen(api_port, () => {
    console.log(`App lytter på http://localhost:${api_port}`)
})