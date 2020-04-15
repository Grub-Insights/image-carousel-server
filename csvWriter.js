
const fs = require('fs');
const csvWriter = require('csv-write-stream');

let writer = csvWriter();

let userCount = 1;
let restaurantCount = 1;
let pictureCount = 1;


var faker = require('faker');

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const foodImages = [
  'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/anise-aroma-art-bazaar-277253.jpg',
  'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/appetizing-bread-breakfast-close-up-357573.jpg',
  'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/apricot-fruits-on-bowl-1028599.jpg',
  'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/asparagus-barbecue-cuisine-delicious-361184.jpg',
  'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/barbecue-bbq-beef-cooked-410648.jpg',
  'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/black-frying-pan-with-spaghetti-sauce-near-brown-wooden-691114.jpg',
  'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/blur-breakfast-close-up-dairy-product-376464.jpg',
  'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/burger-and-vegetables-placed-on-brown-wood-surface-1565982.jpg',
  'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/burrito-chicken-delicious-dinner-461198.jpg',
  'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/close-up-photo-of-a-cheese-burger-1633578.jpg',
  'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/close-up-photo-of-man-cooking-meat-1482803.jpg',
  'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/club-sandwich-served-on-chopping-board-1600711.jpg',
  'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/cooked-food-704569.jpg',
  'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/cooked-pasta-on-brown-wooden-bowl-803963.jpg',
  'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg',
  'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/food-dinner-lunch-unhealthy-70497.jpg',
  'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/food-restaurant-meal-chicken-106343.jpg',
  'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/lunch-table-5929.jpg',
  'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/pasta-with-vegetable-dish-on-gray-plate-beside-tomato-fruit-769969.jpg',
  'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/pepperoni-pizza-803290.jpg',
  'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/pepperoni-pizza-with-basil-leaves-1260968.jpg',
  'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/plate-of-rice-and-cooked-meat-1624487.jpg',
  'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/round-white-and-blue-ceramic-bowl-with-cooked-ball-soup-and-955137.jpg',
  'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/selective-focus-photography-of-beef-steak-with-sauce-675951.jpg',
  'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/selective-focus-photography-of-pasta-with-tomato-and-basil-1279330.jpg',
  'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/slice-of-loaf-bread-with-dog-face-920220.jpg',
  'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/sliced-tomato-with-green-vegetables-in-brown-saucer-1639556.jpg',
  'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/sliced-vegetable-and-cooked-food-on-white-ceramic-plate-1234535.jpg',
  'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/spinach-chicken-pomegranate-salad-5938.jpg',
  'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/top-view-of-food-1640772.jpg',
  'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/top-view-photo-of-food-dessert-1099680.jpg',
  'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/variety-of-cooked-dishes-374052.jpg',
  'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/vegetable-sandwich-on-plate-1095550.jpg',
  'https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/white-and-brown-cooked-dish-on-white-ceramic-bowls-958545.jpg'];

  const dataGen = () => {
  // writer.pipe(fs.createWriteStream('./csvfiles/restaurantCsv/csv_seed0.csv'));
  // for (let i = 0; i < 1000000; i++) {
  //   writer.write({
  //     id: i,
  //     name: faker.company.companyName(),
  //   })
  //   // if (i % 10 === 0 && i !== 0) {
  //   //   writer.end();
  //   //   writer = csvWriter();
  //   //   writer.pipe(fs.createWriteStream(`./csvfiles/restaurantCsv/csv_seed${restaurantCount}.csv`));
  //   //   restaurantCount++
  //   // }
  // }
  // writer.end();
  // writer = csvWriter();
  // writer.pipe(fs.createWriteStream('./csvfiles/userCsv/csv_userseed0.csv'));
  // for (let j = 0; j < 1000000; j++) {
  //   writer.write({
  //     rest_id: j,
  //     name: faker.name.firstName(),
  //     profile_img: faker.name.lastName(),
  //     friendCount: getRandomIntInclusive(0, 200),
  //     reviewCount: getRandomIntInclusive(0, 255),
  //     helpfulCount: getRandomIntInclusive(0, 50),
  //     eliteFlag: getRandomIntInclusive(0, 1),
  //   })

  // //   if (j % 10 === 0 && j !== 0) {
  // //     writer.end();
  // //     writer = csvWriter();
  // //     writer.pipe(fs.createWriteStream(`./csvfiles/userCsv/csv_userseed${userCount}.csv`));
  // //     userCount++
  // //   }
  // }
  // writer.end();
  writer = csvWriter();
  writer.pipe(fs.createWriteStream('./csvfiles/pictureCsv/csv_pictureseed1.csv'));
  for (let k = 5000000; k < 10000000; k++) {
    writer.write({
      picture_id: k,
      id_user: getRandomIntInclusive(0, 999999),
      img_url: foodImages[getRandomIntInclusive(0, foodImages.length - 1)],
      descript: faker.name.lastName(),
      date_of: Date.now(),
      id_restaurants: getRandomIntInclusive(0, 999999),
    });
  //   if (k % 100 === 0 && k !== 0) {
  //     writer.end();
  //     writer = csvWriter();
  //     writer.pipe(fs.createWriteStream(`./csvfiles/pictureCsv/csv_pictureseed${pictureCount}.csv`));
  //     pictureCount++
  //   }
  }
  writer.end();

  console.log('done');
};
dataGen();

// dataGen();

// \COPY restaurants FROM '/Users/Elioso/Desktop/SDC/image-carousel-server/csv_seed.csv' DELIMITER ',' QUOTE '"' HEADER CSV;
// \COPY users FROM '/Users/Elioso/Desktop/SDC/image-carousel-server/csv_userseed.csv' DELIMITER ',' QUOTE '"' HEADER CSV;
// \COPY pictures FROM '/Users/Elioso/Desktop/SDC/image-carousel-server/csv_pictureseed.csv' DELIMITER ',' QUOTE '"' HEADER CSV;
