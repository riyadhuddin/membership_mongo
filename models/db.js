
/**const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://clustername:password@clustername.m3luf.gcp.mongodb.net/membership?retryWrites=true&w=majority";//cluster updated due to security
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
 // const collection = client.db("member").collection("devices");
  // perform actions on the collection object
  if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
  client.close();
}); */



const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});
require ('./employee.model')
