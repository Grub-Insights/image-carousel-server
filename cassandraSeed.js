// var assert = require('assert');
// var cassandra = require('cassandra-driver'); 
// var contactPoints = ['127.0.0.1:9042'];
// var client = new cassandra.Client({contactPoints: contactPoints, localDataCenter: 'datacenter1', keyspace:'grocery'});

// //Ensure all queries are executed before exit
// function execute(query, params, callback) {
//   return new Promise((resolve, reject) => {
//     client.execute(query, params, (err, result) => {
//       if(err) {
//         console.log('ERRRR',err)
//         reject()
//       } else {
//         callback(err, result);
//         resolve()
//       }
//     });
//   });
// }
// // SELECT restaurant_name FROM restaurants WHERE restaurant_name='Burger King' ALLOW FILTERING;

// //Execute the queries 
// // var query = 'SELECT name, price_p_item FROM grocery.fruit_stock WHERE name=? ALLOW FILTERING';
// var query = 'SELECT name, price_p_item FROM grocery.fruit_stock WHERE name=? ALLOW FILTERING';
// var q1 = execute(query, ['oranges'], (err, result) => { assert.ifError(err); console.log('The cost per orange is $' + result.rows[0].price_p_item)});
// var q2 = execute(query, ['pineapples'], (err,result) => { assert.ifError(err); console.log('The cost per pineapple is $' + result.rows[0].price_p_item)});
// var q3 = execute(query, ['apples'], (err,result) => { assert.ifError(err); console.log('The cost per apple is $' + result.rows[0].price_p_item)});
// Promise.all([q1,q2,q3]).then(() => {
//   console.log('exit');
//   process.exit();
// });

const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'restaurant_pictures',
});

// // const cassandra = require('cassandra-driver');

// // const client = new cassandra.Client({
// //   contactPoints: ['127.0.0.1:9042'],
// //   localDataCenter: 'datacenter1',
// //   keyspace: 'grocery'
// // });

// const query = `SELECT name from fruit_stock where item_id = 'd4'` ;

// client.execute(query, [ 'someone' ])
//   .then(result => console.log('hello'));


// const cassandra = require('cassandra-driver');

// const client = new cassandra.Client({
//   contactPoints: ['127.0.0.1:9042'],
//   localDataCenter: 'datacenter1',
//   keyspace: 'grocery',
// });

// console.log('the client:  ', Object.keys(client));
const cassSeed = () => {
  const query = `COPY restaurants FROM Users/Elioso/Desktop/SDC/image-carousel-server/csvfiles/cassandraCsvFiles/restaurantCSV/csv_restSeed0.csv WITH DELIMITER='|' AND HEADER=TRUE`;
    const test = `INSERT into restaurant_pictures."restaurants" (restaurant_id, restaurant_name) VALUES (uuid(), 'Chipotle');`
  // const selectRecords = 'SELECT name, price_p_item FROM grocery.fruit_stock WHERE name=? ALLOW FILTERING';
 const query = `SELECT restaurant_name FROM restaurants WHERE restaurant_id = 'c55f6da4-ffce-4cbd-ae6e-469cfa4898d7';`
    // const test1 = `SELECT value FROM application_params WHERE name = 'greeting_message'`
  client.execute(query, ['restaurant'])
    .then(result => console.log('check the restaurants db:'))
    .catch((err) => console.log(err));
};

cassSeed();


// COPY restaurants FROM '/Users/tjcasner/cassRestaurants.csv' WITH DELIMITER =',' AND HEADER=TRUE;
// `COPY restaurants FROM 'Users/Elioso/Desktop/SDC/image-carousel-server/csvfiles/cassandraCsvFiles/restaurantCSV/csv_restSeed0.csv' WITH DELIMITER=',' AND HEADER=TRUE`;

// SELECT * FROM restaurants;
