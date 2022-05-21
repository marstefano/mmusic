'use strict'

require("dotenv").config;

const DB = require("./db");
const mysql = require("mysql");
const connectDB = mysql.createConnection({
    host : DBconfig.env.HOST,
    password : DBconfig.env.password,
    user : DBconfig.env.USER,
    database : DBconfig.env.DB,
});

connectDB.connect(err => {
    if (err) throw err;
    console.log('Database connected....')
})