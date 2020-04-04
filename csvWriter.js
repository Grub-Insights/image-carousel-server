
const fs = require('fs');
const csvWriter = require('csv-write-stream');

var writer1 = csvWriter();
var writer2 = csvWriter();
var writer3 = csvWriter();


var faker = require('faker');

let counter = 0;
let userCounter = 0;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const milliDate = (min, max) => {
  return (Math.random() * (max - min) + min).toFixed(0)
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
  writer1.pipe(fs.createWriteStream('csv_seed.csv'));
  for (let i = 0; i < 10; i++) {
    writer1.write({
      id: i,
      name: faker.company.companyName(),
    })
  }
  writer1.end();
  writer2.pipe(fs.createWriteStream('csv_userseed.csv'));
  for (let j = 0; j < 10; j++) {
    writer2.write({
      rest_id: j,
      name: faker.name.firstName(),
      profile_img: faker.name.lastName(),
      friendCount: getRandomIntInclusive(0, 200),
      reviewCount: getRandomIntInclusive(0, 255),
      helpfulCount: getRandomIntInclusive(0, 50),
      eliteFlag: 1,
    })
  }
  writer2.end();
  writer3.pipe(fs.createWriteStream('csv_pictureseed.csv'));
  for (let k = 0; k < 100; k++) {
    writer3.write({
      picture_id: k,
      id_user: getRandomIntInclusive(0, 9),
      img_url: foodImages[getRandomIntInclusive(0, 32)],
      descript: faker.random.words(4),
      date_of: milliDate(1269148117612, Date.now()),
      id_restaurants: getRandomIntInclusive(0, 9),
    })
  }
  writer3.end();

  console.log('done');
};
dataGen();

// \COPY restaurants FROM '/Users/Elioso/Desktop/SDC/image-carousel-server/csv_seed.csv' DELIMITER ',' QUOTE '"' HEADER CSV;
// \COPY users FROM '/Users/Elioso/Desktop/SDC/image-carousel-server/csv_userseed.csv' DELIMITER ',' QUOTE '"' HEADER CSV;
// \COPY pictures FROM '/Users/Elioso/Desktop/SDC/image-carousel-server/csv_pictureseed.csv' DELIMITER ',' QUOTE '"' HEADER CSV;
