const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const session = require("express-session");
const cors = require("cors");
const controller = require("./controller");

const app = express();

app.use(bodyparser.json());
mongoose.connect("mongodb://root:root@ds155299.mlab.com:55299/loginreg");
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://cryptic-springs-10908.herokuapp.com"
    ],
    methods: ["GET", "HEAD", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"],
    credentials: true //allow setting of cookies
  })
);
app.use(
  session({
    secret: "supersecretstring12345!",
    saveUninitialized: true,
    resave: true,
    cookie: { maxAge: 60000 * 30 }
  })
);
controller(app);

app.listen(process.env.PORT || 8000, () => console.log("Listening..."));
