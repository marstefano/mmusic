"use strict"

const sql = require("../db.config");

class ModelUsers {
    constructor(id_user, username, password, email, no_telepon) {
        this.id_user = id_user;
        this.username = username;
        this.password = password;
        this.email = email;
        this.no_telepon = no_telepon;
    }
    static showAllUsers(result) {
        let sqlQuery = `SELECT * FROM user`;
        sql.Query(sqlQuery, (err, res) => {
            if (err) throw err;
            let rawData = JSON.parse(JSON.stringify(res));
            let users = [];
            let user;
            rawData.forEach((eachData) => {
                user = new ModelUsers(eachData.id_user, eachData.username, eachData.password, eachData.email, eachData.no_telepon);
                users.push(user);
            });

            console.log("Hasil user =>", rawData);
            result(null, rawData);
        })
    }
}

module.exports = {ModelUsers};