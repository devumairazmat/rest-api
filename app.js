const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(bodyParser.json());

// Middleware

// app.use(`/posts`, () => {
//      console.log("Middleware is available on express and Running");
// })

// Import Routes
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);

// Routes
app.get(`/`, (req, res) => {
  res.send("Welcome to The Node Team Hy Bro! Hurry");
});

// Connect to the Database
// console.log(process.env.DB_Connection);
mongoose.connect(
 process.env.DB_Connection,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connecting to database");
  }
);


// Listen To Server
app.listen(3000);
