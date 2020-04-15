/* eslint-disable no-console */
var start = new Date()

const { Client } = require('pg');
const client = new Client({
  host: 'localhost',
  database: 'carousel',
});
client.connect();

const seedPG = () => {
  const restaurantSeed = `\COPY restaurants FROM '/Users/Elioso/Desktop/SDC/image-carousel-server/csvfiles/restaurantCsv/csv_seed0.csv' DELIMITER ',' QUOTE '"' HEADER CSV;` 
  client.query(restaurantSeed, (err) => {
    if (err !== null) {
      console.log('error in users query: ', err)
    }
  });
  const userSeed = `\COPY users FROM '/Users/Elioso/Desktop/SDC/image-carousel-server/csvfiles/userCsv/csv_userseed0.csv' DELIMITER ',' QUOTE '"' HEADER CSV;`
  client.query(userSeed, (err) => {
    if (err !== null) {
      console.log('error in users query: ', err)
    }
  });

  const pictureSeed = `\COPY pictures FROM '/Users/Elioso/Desktop/SDC/image-carousel-server/csvfiles/pictureCsv/csv_pictureseed0.csv' DELIMITER ',' QUOTE '"' HEADER CSV;`
  client.query(pictureSeed, (err) => {
    if (err !== null) {
      console.log('error in users query: ', err);
    }

  });

  // client.end((err) => {
  //   if (err !== null) {
  //     console.log('DB failed to disconnect');
  //   }
  //   console.log('DB disconnected');
  // });
  // hrend = process.hrtime(hrstart)
  // console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)
};
seedPG();

// \COPY restaurants FROM '/Users/Elioso/Desktop/SDC/image-carousel-server/csv_seed.csv' DELIMITER ',' QUOTE '"' HEADER CSV;
// \COPY users FROM '/Users/Elioso/Desktop/SDC/image-carousel-server/csv_userseed.csv' DELIMITER ',' QUOTE '"' HEADER CSV;
// \COPY pictures FROM '/Users/Elioso/Desktop/SDC/image-carousel-server/csv_pictureseed.csv' DELIMITER ',' QUOTE '"' HEADER CSV;