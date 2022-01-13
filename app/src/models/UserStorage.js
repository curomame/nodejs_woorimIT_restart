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

  static getUserInfo(id){
    const users = this.#users;
    const idx = users.id.indexOf(id);

    const usersKeys = Object.keys(users); // => {id, pwd, name}

    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {} );
  
    return userInfo;
  }
  

}

module.exports= UserStorage;