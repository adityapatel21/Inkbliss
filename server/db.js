const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/";
const databaseName = "inkBliss";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI + databaseName);
    console.log("Connection to MongoDB Successfull");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToMongo;
