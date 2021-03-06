"use strict";

const UserStorage = require("./UserStorage")

class User {
  constructor(body){
    this.body = body;
  }

  async login() {

    const client = this.body;
    try
    {const {id, pwd } = await UserStorage.getUserInfo(client.id);
    
    if(id){
      if(id === client.id && client.pwd){
          return {
            success : true
          }
      }
      return {success : false, msg : "비밀번호가 틀렸습니다."};
    }
    return {success : false, msg : "해당 아이디가 없습니다."}
  } catch(err){
    return { success : false, msg : err};
  }
    
  }


  async register () {
    const client = this.body;
    try{
      const response = await UserStorage.save(client);
      return response;
    } catch (err) {
      return {success : false, msg : err};
    }
    
  }

}

module.exports = User;