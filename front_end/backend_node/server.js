import MongoClient = from 'mongodb';
const password = "!J647gbBS5dEqbD"
const user2 = "appren_Test@admin"
const password2 ="L15cBavzNIL8S4Ml"

const dburi = `mongodb+srv://${user2}:${password2}@cluster0-mcaby.mongodb.net/test?retryWrites=true&w=majority`

const sendString = encodeURI(dburi)

const client = new MongoClient(sendString, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
