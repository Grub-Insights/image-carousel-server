/* eslint-disable no-console */
const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

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

module.exports = {
  getPictures,
};
