const { MongoClient } = require("mongodb");

const url =
"mongodb+srv://NamesteDev:Maruti@namestenode.h4dab.mongodb.net/"

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");
  const data={
    "firstName":"Neeru",
"lastName":"didi",
"age":"36",

"city":"pilkawaa",
"phoneNmber":"9891956356"
  };
  const insertResult = await collection.insertOne(data);
console.log('Inserted documents =>', insertResult);
  //Read 
  // const findResult=await collection.find({}).toArray();
  // console.log("Found the Document",findResult);
 
  // const countResult=await collection.countDocuments({})
  // console.log("count of doucument in the user collection=>",countResult);
  const result=await collection.find({firstName:"devesh"}).count();
  console.log("result=>",result);
  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

// NOTES

// Go to mongodb website
// Create a free M0 cluster
// Create a user
// Get the connection string
// Install Mongo DB compass
// Create a database
// INstall mongodb package
// Create a connection from code
// Documents CRUD - CReate, REad, Update, Delete