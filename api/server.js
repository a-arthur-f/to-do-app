const express = require('express');
const app = express();
const router = require('./routes');
const { db } = require('./db');
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(router);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    app.listen(process.env.SERVER_PORT, console.log('rodando'));
})


