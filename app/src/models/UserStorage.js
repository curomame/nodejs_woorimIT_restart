"use strict";

class UserStorage {

  static #users = {
    id : ["lee"],
    pwd : ['1234'],
    bane:['이형민']
  }

  static getUsers(...fields){
    const users = this.#users
    const newUsers = fields.reduce((newUsers, filed)=>{
      if(users.hasOwnProperty(filed)){
        newUsers[filed] = users[filed];
      }
      return newUsers;
      
    },{});
    return newUsers;
  }

}

module.exports= UserStorage;