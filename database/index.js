/* eslint-disable no-console */
const mysql = require('mysql');

const connection = mysql.createConnection({
  database: 'carousel',
  host: 'localhost',
  user: 'root',
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

const postRestaurante = (restaurantName, callback) => {
  const queryStr = `insert into restaurants (res_name) values ("${restaurantName}")`;
  connection.query(queryStr, (err, results) => {
    if (err) {
      console.log('error in getPictures: ', err);
    } else {
      callback(null, results);
    }
  });
}

const updateCarousel = (restauranteName, callback) => {
  console.log('rest name:', restauranteName)
  const queryStr = `UPDATE restaurants SET (res_name) = '${restauranteName.name}' WHERE res_name = ${restauranteName.name}`;
  connection.query(queryStr, (err, results) => {
    if (err) {
      console.log('error in getPictures: ', err);
    } else {
      callback(null, results);
    }
  });
}

const deleteImage = (ID, callback) => {
  const queryStr = `insert res_name from restaurants where restaurants.id = ${ID}`;
  connection.query(queryStr, (err, results) => {
    if (err) {
      console.log('error in getPictures: ', err);
    } else {
      callback(null, results);
    }
  });
}

module.exports = {
  getPictures,
  getRestaurantName,
  postRestaurante,
  updateCarousel,
  deleteImage,
};
