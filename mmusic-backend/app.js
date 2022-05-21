"use strict"

require('dotenv').config;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router/router');
const port = process.env.port || 4000;
const originalCors = {
    host: `http://localhost@${port}`
}

const app = express();
app.use('/', router);

app.listen(port, () => console.log('listening on port', port));