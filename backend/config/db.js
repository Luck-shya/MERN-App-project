const mongoose = require("mongoose");
const dotenv = require("dotenv");

const uri =
  "mongodb+srv://stutikhandelwal:Stuti6232@cluster0.8wjdvgo.mongodb.net/MentalHealth";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri, {
      useFindAndModify: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
