const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

const alerts = require("./routes/alerts");
const users = require("./routes/users");
const works = require("./routes/works");
const plants = require("./routes/plants");
const materials = require("./routes/materials");

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// app.get("/", (req, res) => res.send("Hello"));
app.use("/api/v1/alerts", alerts);
app.use("/api/v1/users", users);
app.use("/api/v1/works", works);
app.use("/api/v1/plants", plants);
app.use("/api/v1/materials", materials);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
