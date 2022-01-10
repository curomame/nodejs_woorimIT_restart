"use strict";

// 모듈
const express = require('express');
const app = express();

// 라우팅
const home = require("./src/routes/home")


//바디파서
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//앱 세팅
app.set("views","./src/views");
app.set("view engine","ejs");

app.use(express.static(`${__dirname}/src/public`));

app.use("/",home); // use => 미들 웨어를 등록하는 메서드

module.exports = app;

