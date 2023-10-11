// const { MongoClient } = require('mongodb');

// async function testConnection() {
//   const uri = 'mongodb://localhost:27018/mydb';

//   const client = new MongoClient(uri);

//   try {
//     await client.connect();
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error.message);
//   } finally {
//     await client.close();
//   }
// }

// testConnection();

const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017/mydb'";
const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');
    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);