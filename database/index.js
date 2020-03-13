const mysql = require('mysql');
const mysqlConfig = require('./config.js');
var connection = mysql.createConnection(mysqlConfig);

// select * from pictures INNER JOIN users ON pictures.id_user = users.id where pictures.restaurant_id = 20;
var getPictures = (ID, callback) => {
    var queryStr = `select * from pictures INNER JOIN users ON pictures.id_user = users.id where pictures.restaurant_id = 20`
    connection.query(queryStr, (err, results) => {
        if (err) {
            console.log('error in getPictures: ',err)
        } else {
            callback(null, results)
        }
    })
}

module.exports = {
    getPictures
}

/* 
given a restaurant ID of 20

+-----+---------+------------------------------------------------------------------------------------------------------------+-----------+-----------------------------------------+---------------+
| id  | id_user | img_url                                                                                                    | descript  | date_of                                 | restaurant_id |
+-----+---------+------------------------------------------------------------------------------------------------------------+-----------+-----------------------------------------+---------------+
|  36 |      16 | https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/anise-aroma-art-bazaar-277253.jpg               | Steak     | Fri Mar 13 2020 02:50:04 GMT-0700 (PDT) |            20 |
|  43 |      39 | https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/asparagus-barbecue-cuisine-delicious-361184.jpg | Steak     | Fri Mar 13 2020 00:09:19 GMT-0700 (PDT) |            20 |
|  85 |      34 | https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/slice-of-loaf-bread-with-dog-face-920220.jpg    | Porkchops | Fri Mar 13 2020 10:51:01 GMT-0700 (PDT) |            20 |
| 117 |      21 | https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/food-dinner-lunch-unhealthy-70497.jpg           | Ahi       | Fri Mar 13 2020 06:28:55 GMT-0700 (PDT) |            20 |
| 196 |       9 | https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/pepperoni-pizza-with-basil-leaves-1260968.jpg   | Pho       | Fri Mar 13 2020 02:37:08 GMT-0700 (PDT) |            20 |
+-----+---------+------------------------------------------------------------------------------------------------------------+-----------+-----------------------------------------+---------------+

+----+------------+---------------------------------------------------------------------------------------------+--------------+--------------+---------------+------------+
| id | name_user  | profile_img                                                                                 | friend_count | review_count | helpful_count | elite_flag |
+----+------------+---------------------------------------------------------------------------------------------+--------------+--------------+---------------+------------+
| 16 | Chesley C. | https://elclectictacoportraits.s3-us-west-1.amazonaws.com/adult-beard-boy-casual-220453.jpg |          149 |           96 |            26 |          1 |
+----+------------+---------------------------------------------------------------------------------------------+--------------+--------------+---------------+------------+

+----+-----------+----------------------------------------------------------------------------------------------------------------+--------------+--------------+---------------+------------+
| id | name_user | profile_img                                                                                                    | friend_count | review_count | helpful_count | elite_flag |
+----+-----------+----------------------------------------------------------------------------------------------------------------+--------------+--------------+---------------+------------+
| 39 | Franz I.  | https://elclectictacoportraits.s3-us-west-1.amazonaws.com/adult-african-american-afro-black-female-1181519.jpg |          161 |           22 |             4 |          0 |
+----+-----------+----------------------------------------------------------------------------------------------------------------+--------------+--------------+---------------+------------+

+----+-------------+--------------------------------------------------------------------------------------------------------+--------------+--------------+---------------+------------+
| id | name_user   | profile_img                                                                                            | friend_count | review_count | helpful_count | elite_flag |
+----+-------------+--------------------------------------------------------------------------------------------------------+--------------+--------------+---------------+------------+
| 34 | Rhiannon V. | https://elclectictacoportraits.s3-us-west-1.amazonaws.com/adult-attractive-beautiful-beauty-415829.jpg |           98 |          168 |             7 |          0 |
+----+-------------+--------------------------------------------------------------------------------------------------------+--------------+--------------+---------------+------------+

+----+------------+-----------------------------------------------------------------------------------------+--------------+--------------+---------------+------------+
| id | name_user  | profile_img                                                                             | friend_count | review_count | helpful_count | elite_flag |
+----+------------+-----------------------------------------------------------------------------------------+--------------+--------------+---------------+------------+
| 21 | Florine G. | https://elclectictacoportraits.s3-us-west-1.amazonaws.com/woman-wearing-coat-762020.jpg |          146 |          173 |            35 |          0 |
+----+------------+-----------------------------------------------------------------------------------------+--------------+--------------+---------------+------------+

+----+-----------+-----------------------------------------------------------------------------------------+--------------+--------------+---------------+------------+
| id | name_user | profile_img                                                                             | friend_count | review_count | helpful_count | elite_flag |
+----+-----------+-----------------------------------------------------------------------------------------+--------------+--------------+---------------+------------+
|  9 | Carter L. | https://elclectictacoportraits.s3-us-west-1.amazonaws.com/woman-wearing-coat-762020.jpg |          113 |           87 |             6 |          1 |
+----+-----------+-----------------------------------------------------------------------------------------+--------------+--------------+---------------+------------+

+-----+---------+------------------------------------------------------------------------------------------------------------+-----------+-----------------------------------------+---------------+----+-------------+----------------------------------------------------------------------------------------------------------------+--------------+--------------+---------------+------------+
| id  | id_user | img_url                                                                                                    | descript  | date_of                                 | restaurant_id | id | name_user   | profile_img                                                                                                    | friend_count | review_count | helpful_count | elite_flag |
+-----+---------+------------------------------------------------------------------------------------------------------------+-----------+-----------------------------------------+---------------+----+-------------+----------------------------------------------------------------------------------------------------------------+--------------+--------------+---------------+------------+
|  36 |      16 | https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/anise-aroma-art-bazaar-277253.jpg               | Steak     | Fri Mar 13 2020 02:50:04 GMT-0700 (PDT) |            20 | 16 | Chesley C.  | https://elclectictacoportraits.s3-us-west-1.amazonaws.com/adult-beard-boy-casual-220453.jpg                    |          149 |           96 |            26 |          1 |
|  43 |      39 | https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/asparagus-barbecue-cuisine-delicious-361184.jpg | Steak     | Fri Mar 13 2020 00:09:19 GMT-0700 (PDT) |            20 | 39 | Franz I.    | https://elclectictacoportraits.s3-us-west-1.amazonaws.com/adult-african-american-afro-black-female-1181519.jpg |          161 |           22 |             4 |          0 |
|  85 |      34 | https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/slice-of-loaf-bread-with-dog-face-920220.jpg    | Porkchops | Fri Mar 13 2020 10:51:01 GMT-0700 (PDT) |            20 | 34 | Rhiannon V. | https://elclectictacoportraits.s3-us-west-1.amazonaws.com/adult-attractive-beautiful-beauty-415829.jpg         |           98 |          168 |             7 |          0 |
| 117 |      21 | https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/food-dinner-lunch-unhealthy-70497.jpg           | Ahi       | Fri Mar 13 2020 06:28:55 GMT-0700 (PDT) |            20 | 21 | Florine G.  | https://elclectictacoportraits.s3-us-west-1.amazonaws.com/woman-wearing-coat-762020.jpg                        |          146 |          173 |            35 |          0 |
| 196 |       9 | https://eclectictacoimagebucket.s3-us-west-1.amazonaws.com/pepperoni-pizza-with-basil-leaves-1260968.jpg   | Pho       | Fri Mar 13 2020 02:37:08 GMT-0700 (PDT) |            20 |  9 | Carter L.   | https://elclectictacoportraits.s3-us-west-1.amazonaws.com/woman-wearing-coat-762020.jpg                        |          113 |           87 |             6 |          1 |
+-----+---------+------------------------------------------------------------------------------------------------------------+-----------+-----------------------------------------+---------------+----+-------------+----------------------------------------------------------------------------------------------------------------+--------------+--------------+---------------+------------+


*/
