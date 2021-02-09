const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const path = require('path');

const cors = require('cors');

dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

// For body parser
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/alerts', require('./routes/alerts'));
app.use('/users', require('./routes/users'));
app.use('/works', require('./routes/works'));
app.use('/plants', require('./routes/plants'));
app.use('/materials', require('./routes/materials'));
app.use('/posts', require('./routes/posts'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    // res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    res.sendFile(path.resolve(path.dirname(''), './client/build/index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  // @ts-ignore
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
