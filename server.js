const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");

dotenv.config({ path: "./config/config.env" });

const app = express();

const alerts = require("./routes/getAlerts");
const getUserAccount = require("./routes/getUserAccount");
const getWorks = require("./routes/getWorks");
const getPlants = require("./routes/getPlants");
const getMaterials = require("./routes/getMaterials");

// app.get("/", (req, res) => res.send("Hello"));
app.use("/alerts", alerts);
app.use("/account", getUserAccount);
app.use("/works", getWorks);
app.use("/plants", getPlants);
app.use("/materials", getMaterials);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
