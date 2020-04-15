

-- need a table for each read query 
  -- querying images by restaurant 
-- cassandra runs on multiple nodes, where a node is a machine running cassandra
-- the rows from each table will be distributed evenly between nodes
-- the partition key helps cassandra determine which node to put each row onto 
-- all the data you want for a query should be on the same node   
-- to ensure all pics for given rest end up on the same node, they need to have the same partition key.
-- my partition key should be the restaurant ID
-- can add additional parameters to the (partition key)
-- cluster keys allow us to order the information on a node
-- second use for cluster keys, PK needs to uniquley identify the row






 CREATE KEYSPACE restaurant_pictures WITH replication = {'class':'SimpleStrategy', 'replication_factor' : 1};  

CREATE TABLE user (
  user_id int,
  user_name text,
  profile_image_url text,
  friend_count int,
  review_count int,
  elite_flag Boolean,
  PRIMARY KEY (user_id)
);


CREATE TABLE restaurants (
  restaurant_id int, 
  restaurant_name text,
  PRIMARY KEY (restaurant_id)
);

CREATE TABLE pictures (
  user_id int, 
  user_name text,
  profile_image_url text,
  friend_count int,
  review_count int,
  elite_flag Boolean,
  picture_id int,
  restaurant_id int,
  description text,
  date DATE,
  PRIMARY KEY ((restaurant_id), picture_id)
);


COPY restaurants FROM '/Users/elioso/desktop/SDC/image-carousel-server/cassandraCsvFiles/restaurantcsv/csv_restSeed0.csv' WITH DELIMITER=',' AND HEADER=TRUE;
COPY user FROM '/Users/elioso/desktop/SDC/image-carousel-server/cassandraCsvFiles/usercsv/csv_userseed0.csv' WITH DELIMITER=',' AND HEADER=TRUE;
COPY pictures FROM '/Users/elioso/desktop/SDC/image-carousel-server/cassandraCsvFiles/picturecsv/csv_pictureseed0.csv' WITH DELIMITER=',' AND HEADER=TRUE;

select restaurant_name from restaurants where restaurants.id = 23453; 

Insert into restaurants(restaurant_id, restaurant_name) values (1000002, 'burger joint');



