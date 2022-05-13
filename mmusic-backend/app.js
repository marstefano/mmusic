"use strict"

require('dotenv').config;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router/router');
const port = process.env.port || 4000;
const originalCors = {
    host: `http://localhost@${port}`
}

app.use(cors(originalCors));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(router);

app.listen(port, () => console.log('listening on port', port));