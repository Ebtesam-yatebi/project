const mongoose = require('mongoose');

const DB =
  process.env.NODE_ENV === 'development'
    ? process.env.LOCAL_DATABASE
    : process.env.PROD_DATABASE;
const dbConnection = () => {
  mongoose.connect(DB).then(() => {
    console.log(`DB Connected on ${process.env.NODE_ENV} Mode Successful!`);
  });
};

module.exports = dbConnection;
