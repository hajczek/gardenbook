const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

const alerts = require("./routes/alerts");
const users = require("./routes/users");
const works = require("./routes/works");
const plants = require("./routes/plants");
const materials = require("./routes/materials");

// app.get("/", (req, res) => res.send("Hello"));
app.use("/alerts", alerts);
app.use("/account", users);
app.use("/works", works);
app.use("/plants", plants);
app.use("/materials", materials);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
