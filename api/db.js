const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(`${process.env.DB_URI}/test`, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

module.exports.mongoose = mongoose;
module.exports.db = db;