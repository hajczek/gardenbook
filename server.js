const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const path = require("path");

dotenv.config({ path: "./config/config.env" });

connectDB();

const alerts = require("./routes/alerts");
const users = require("./routes/users");
const works = require("./routes/works");
const plants = require("./routes/plants");
const materials = require("./routes/materials");

const app = express();

// For body parser
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/alerts", alerts);
app.use("/users", users);
app.use("/works", works);
app.use("/plants", plants);
app.use("/materials", materials);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    // res.sendFile(path.resolve(path.dirname(""), "./client/build/index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
