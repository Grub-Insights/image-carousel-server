

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

PRIMARY KEY ( restaurantID, pictureId )

-- images table
  --  pictureId: Number, 
  --  imageUrl: String, 
  --  description: String,
  --  date: String,
  --  restaurantId: Number,
  --  userId: Number,
  --  name: String,
  --  profileImg: String,
  --  friendCount: Number,
  --  reviewCount: Number,
  --  helpfulCount: Number,
  --  eliteFlag: boolean

