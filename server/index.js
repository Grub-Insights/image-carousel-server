/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Db = require('../database/index.js');

const app = express();

app.get('/', (req, res) => {
  console.log('Pinged');
});

app.use(express.static(path.join(__dirname, '/../public')));


app.get('/api/carousel/:restaurantID', (req, res) => {
  const restaurant = req.params.restaurantID;
  console.log('GET REQUEST recieved for restaurant ID of: ', restaurant);
  Db.getPictures(restaurant, (err, results) => {
    if (err) {
      console.log('err in server CB: ', err);
    } else {
      res.end(JSON.stringify(results));
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
