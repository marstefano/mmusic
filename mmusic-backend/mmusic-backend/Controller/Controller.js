"use strict"

const { ModelUsers } = require("../model/user");

class Home{
    static homePage(req, res){
        ModelUsers.showAllUsers(err, data =>{
            if(err){
                console.log("gak ada data", err)
            } else{
                res.json({
                    tittle: "data...",
                    message: "hasil user...",
                    status: 200,
                    data,
                })
            }
        })
    }
}

module.exports = { Home };