const mongoose = require("mongoose");

const dotenv = require("dotenv"); //require dotenv package
dotenv.config({ path: "./config.env" }); //import config.env file

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    usenewurlparser: true,
    useunifiedtopology: true,
  })
  .then(() => {
    console.log("Database Successfully connected ");
  })
  .catch((error) => {
    console.log(`can not connect to database, ${error}`);
  });

