const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log(
      // @ts-ignore
      `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (err) {
    // @ts-ignore
    console.log(`Error ${err.message}`.red);
    process.exit(1);
  }
};

module.exports = connectDB;
