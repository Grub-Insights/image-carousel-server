/* eslint-disable no-console */
const { Client } = require('pg');
const client = new Client({
  host: '54.183.250.146',
  database: 'carousel',
  port: 5432,
  user: 'postgres',
});
client.connect((err) => {
  if (err) {
    console.log('postgres connection error', err);
  } else {
    console.log('connected to postgres');
  }
});

const getPictures = (ID, callback) => {
  const queryStr = `select * from pictures INNER JOIN users ON pictures.id_user = users.user_id where pictures.id_restaurants = ${ID};`;
  console.log('the pic query hit', queryStr);
  client.query(queryStr, (err, results) => {
    if (err) {
      console.log('error in getPictures: ', err);
    } else {
      console.log('get pics success');
      callback(null, results);
    }
  });
};

const getRestaurantName = (ID, callback) => {
  
  const queryStr = `select res_name from restaurants where restaurants.rest_id = ${ID};`;
  console.log('the rest query hit', queryStr)
  client.query(queryStr, (err, results) => {
    if (err) {
      console.log('error in getPictures: ', err);
    } else {
      callback(null, results);
    }
  });
};

const postRestaurante = (restaurant, callback) => {
  const queryStr = `insert into restaurants (rest_id, res_name) values ("${restaurant}")`;
  client.query(queryStr, (err, results) => {
    if (err) {
      console.log('error in getPictures: ', err);
    } else {
      callback(null, results);
    }
  });
}

const updateCarousel = (restaurant, callback) => {
  const queryStr = `update restaurants SET (res_name) = '${restaurant}' where res_name = ${restaurant}`;
  client.query(queryStr, (err, results) => {
    if (err) {
      console.log('error in getPictures: ', err);
    } else {
      callback(null, results);
    }
  });
}

const deleteImage = (restaurant, callback) => {
  console.log('the delete input:', restaurant)
  const queryStr = `delete from restaurants where (res_name) = ("${restaurant}")`;
  client.query(queryStr, (err, results) => {
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
