"use strict";

const fs = require("fs").promises;

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

    return fs.readFile("./src/databases/users.json")
    .then((data) => {
      return this.#getUsers(data, isAll, fields);
    })
    .catch(console.error);


  }

  static getUserInfo(id){

    return fs.readFile("./src/databases/users.json")
      .then((data) => {

        return this.#getUserInfo(data, id);

      })
      .catch(console.error);

  }
  

static #getUserInfo(data, id) {
  const users = JSON.parse(data);

        const idx = users.id.indexOf(id);

        const usersKeys = Object.keys(users); // => {id, pwd, name}
    
        const userInfo = usersKeys.reduce((newUser, info) => {
          newUser[info] = users[info][idx];
          return newUser;
        }, {} );

        return userInfo;
}

  static async save(userInfo){

    const users = await this.getUsers(true);

    if (users.id.includes(userInfo.id)){
      throw "이미 존재하는 아이디.";
    }

      users.id.push(userInfo.id);
      users.name.push(userInfo.name);
      users.pwd.push(userInfo.pwd);
      
      fs.writeFile("./src/databases/users.json", JSON.stringify(users));
      return {success : true };
    } 
    // 데이터 추가
  }

module.exports = UserStorage;