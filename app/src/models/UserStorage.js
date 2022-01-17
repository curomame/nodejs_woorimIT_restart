"use strict";


const db = require('../config/db')


class UserStorage {

  static #getUsers(data, isAll, fields){
    const users = JSON.parse(data);

    if (isAll) return users;

    const newUsers = fields.reduce((newUsers, filed)=>{
      if(users.hasOwnProperty(filed)){
        newUsers[filed] = users[filed];
      }
      return newUsers;
      
    },{});
    return newUsers;
  }

  static getUsers(isAll, ...fields){



  }

  static getUserInfo(id){


    db.query("SELECT * FROM users WHERE id = ?",[id], (err, data) => {
      console.log(data);
    })


  }
  

static #getUserInfo(data, id) {

}

  static async save(userInfo){

  }
}

module.exports = UserStorage;