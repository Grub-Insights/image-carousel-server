/* eslint-disable no-console */
// const mysql = require('mysql');
const { Client } = require('pg');
const client = new Client({
  host: 'localhost',
  database: 'carousel',
});
client.connect();

const seedPG = () => {
  const restaurantSeed = `\COPY restaurants FROM '/Users/Elioso/Desktop/SDC/image-carousel-server/csv_seed.csv' DELIMITER ',' QUOTE '"' HEADER CSV;` 
  client.query(restaurantSeed, (err) => {
    if (err !== null) {
      console.log('error in users query: ', err)
    }
  });
  const userSeed = `\COPY users FROM '/Users/Elioso/Desktop/SDC/image-carousel-server/csv_userseed.csv' DELIMITER ',' QUOTE '"' HEADER CSV;`
  client.query(userSeed, (err) => {
    if (err !== null) {
      console.log('error in users query: ', err)
    }
  });

  const pictureSeed = `\COPY pictures FROM '/Users/Elioso/Desktop/SDC/image-carousel-server/csv_pictureseed.csv' DELIMITER ',' QUOTE '"' HEADER CSV;`
  client.query(pictureSeed, (err) => {
    if (err !== null) {
      console.log('error in users query: ', err)
    }
  });

  // client.end((err) => {
  //   if (err !== null) {
  //     console.log('DB failed to disconnect');
  //   }
  //   console.log('DB disconnected');
  // });
};
console.log('seed is about to trigger')
seedPG();

// \COPY restaurants FROM '/Users/Elioso/Desktop/SDC/image-carousel-server/csv_seed.csv' DELIMITER ',' QUOTE '"' HEADER CSV;
// \COPY users FROM '/Users/Elioso/Desktop/SDC/image-carousel-server/csv_userseed.csv' DELIMITER ',' QUOTE '"' HEADER CSV;
// \COPY pictures FROM '/Users/Elioso/Desktop/SDC/image-carousel-server/csv_pictureseed.csv' DELIMITER ',' QUOTE '"' HEADER CSV;