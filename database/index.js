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
  const queryStr = `select res_name from restaurants where restaurants.id = ${ID.name}`;
  connection.query(queryStr, (err, results) => {
    if (err) {
      console.log('error in getPictures: ', err);
    } else {
      callback(null, results);
    }
  });
};

const postRestaurante = (restaurant, callback) => {
  const queryStr = `insert into restaurants (res_name) values ("${restaurant.name}")`;
  connection.query(queryStr, (err, results) => {
    if (err) {
      console.log('error in getPictures: ', err);
    } else {
      callback(null, results);
    }
  });
}

const updateCarousel = (restaurant, callback) => {
  const queryStr = `update restaurants SET (res_name) = '${restaurant.name}' where res_name = ${restaurant.name}`;
  connection.query(queryStr, (err, results) => {
    if (err) {
      console.log('error in getPictures: ', err);
    } else {
      callback(null, results);
    }
  });
}

const deleteImage = (restaurant, callback) => {
  console.log('the delete input:', restaurant)
  const queryStr = `delete from restaurants where (res_name) = ("${restaurant.name}")`;
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
