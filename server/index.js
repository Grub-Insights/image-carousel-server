/* eslint-disable no-console */
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const path = require('path');
const Db = require('../database/index.js');
const app = express();

app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())

app.use(cors());
// app.get('/', (req, res) => {
//   console.log('Pinged');
// });

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

app.get('/api/carousel/:restaurantID/restaurant_name', (req, res) => {
  const restaurant = req.params.restaurantID;
  console.log('GET REQUEST recieved for restaurant ID of: ', restaurant);
  Db.getRestaurantName(restaurant, (err, results) => {
    if (err) {
      console.log('err in server CB: ', err);
    } else {
      res.end(JSON.stringify(results));
    }
  });
});

//  write db recieveing function for the below CRUD opperations.
app.post('/api/carousel:restaurantID', (req, res) => {
  Db.postRestaurante(req.query, (err) => {
    if (err) {
      console.log('failed to send post data to DB');
      res.send(400);
    } else {
      res.sendStatus(200);
    }
  });
});

app.put('/api/carousel:restaurantID', (req, res) => {
  console.log('query in the put', req.query)
  Db.updateCarousel(req.query, (err) => {
    if (err) {
      console.log('failure in the post CB')
      res.send(400)
    } else {
      res.sendStatus(200)
    }
  })
});


app.delete('/api/carousel:restaurantID', (req, res) => {
  console.log('reqbody for delete', req.body)
  Db.deleteImage(req.query, (err) => {
    if (err) {
      console.log('failure to delete image')
      res.send(400)
    } else {
      res.sendStatus(200);
    }
  })
});

app.listen(3010, () => {
  console.log('Server listening on port 3010');
});
