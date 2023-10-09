const dotenv = require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;
app.use(express.json());

const connectToMongo = require("./db");

// Connecting to Database
connectToMongo();

const authenticationRoute = require("./routes/auth");

// Available Routes
app.use("/api/auth", authenticationRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
