import http from 'k6/http';
import { check, sleep } from 'k6';
export const options = {
  stages: [
    { duration: '1s', target: 100 },
    { duration: '60s', target: 2000 },
    // { duration: '15s', target: 300 },
    // { duration: '15s', target: 400 },
    // { duration: '15s', target: 500 },
    // { duration: '15s', target: 50 },
  ],
};
export default function() {
  const BASE_URL = 'http://localhost:3010';
  const responses = http.batch([
    [
      'GET',
      `${BASE_URL}/api/restaurant/30/restaurant`,
      null,
      { tags: { name: 'carosel image1' } },
    ],
    // [
    //   'GET',
    //   `${BASE_URL}/api/restaurant/5000000/carousel`,
    //   null,
    //   { tags: { name: 'carosel image 5M' } },
    // ],
    // [
    //   'GET',
    //   `${BASE_URL}/restaurants/500001/reviews`,
    //   null,
    //   { tags: { name: 'RestaurantReviews500k' } },
    // ],
    // [
    //   'GET',
    //   `${BASE_URL}/restaurants/1000000/reviews`,
    //   null,
    //   { tags: { name: 'RestaurantReviews1mill' } },
    // ],
  ]);
  responses.forEach((res) => {
    check(res, {
      'status was 200': r => r.status == 200,
      'transaction time OK': r => r.timings.duration < 2000,
    });
  });
  sleep(1);
}