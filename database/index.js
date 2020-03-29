/* eslint-disable no-console */
const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  database: process.env.DATABASE,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
});

const getPictures = (ID, callback) => {
  const queryStr = `select * from pictures INNER JOIN users ON pictures.id_user = users.id where pictures.restaurant_id = ${ID}`;
  connection.query(queryStr, (err, results) => {
    if (err) {
      console.log('error in getPictures: ', err);
    } else {
      callback(null, results);
    }
  });
};

const getRestaurantName = (ID, callback) => {
  const queryStr = `select res_name from restaurants where restaurants.id = ${ID}`;
  connection.query(queryStr, (err, results) => {
    if (err) {
      console.log('error in getPictures: ', err);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  getPictures,
  getRestaurantName,
};
