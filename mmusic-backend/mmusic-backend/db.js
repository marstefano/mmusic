"use strict"

require("dotenv").config;

module.exports = {
    HOST : process.env.HOST,
    password : process.env.password,
    user : process.env.user,
    DB : process.env.DB,
}