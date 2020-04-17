/* eslint-disable no-console */

var cluster = require('cluster');

// Code to run if we're in the master process
if (cluster.isMaster) {

  var cpuCount = require('os').cpus().length;

  // Create a worker for each CPU
  for (var i = 0; i < cpuCount; i += 1) {
      cluster.fork();
  }


  // Code to run if we're in a worker process
  } else {
  // require('newrelic');
  const express = require('express');
  const cors = require('cors')
  const bodyParser = require('body-parser');
  const path = require('path');
  const Db = require('../database/postgresIndex.js');
  const app = express();


  app.use(bodyParser.urlencoded({ extended: false })) 
  app.use(bodyParser.json())

  app.use(cors());
  // app.get('/', (req, res) => {
  //   console.log('Pinged');
  // });

  app.use(express.static(path.join(__dirname, '/../public')));


  app.get('/api/restaurant/:restaurantID/carousel', (req, res) => {
    const restaurant = req.params.restaurantID;
    // console.log('GET REQUEST recieved for restaurant ID of: ', restaurant);
    Db.getPictures(restaurant, (err, results) => {
      if (err) {
        console.log('err in server CB: ', err);
      } else {
        res.end(JSON.stringify(results));
      }
    });
  });

  app.get('/api/restaurant/:restaurantID/restaurant_name', (req, res) => {
    const restaurant = req.params.restaurantID;

    // console.log('GET REQUEST recieved for restaurant ID of: ', restaurant);
    Db.getRestaurantName(restaurant, (err, results) => {
      if (err) {
        console.log('err in server CB: ', err);
      } else {
        res.end(JSON.stringify(results));
      }
    });
  });

  //  write db recieveing function for the below CRUD opperations.
  app.post('/api/restaurant/:restaurantID/carousel', (req, res) => {
    Db.postRestaurante(req.query, (err) => {
      if (err) {
        console.log('failed to send post data to DB');
        res.send(400);
      } else {
        res.sendStatus(200);
      }
    });
  });

  app.put('/api/restaurant/:restaurantID/carousel', (req, res) => {
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


  app.delete('/api/restaurant/:restaurantID/carousel', (req, res) => {
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
    console.log(`${cluster.worker.id} listening on port 3010`);
  });
};




// scp -i PGec2Key.pem loaderio-91e199c5262b14381ce27c0c5521e63b.txt ec2-user@ec2-54-183-250-146.us-west-1.compute.amazonaws.com:/home/ec2-user/image-carousel-server

