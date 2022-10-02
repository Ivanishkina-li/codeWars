"use strict";
// const http = require("http"); //подключи в наш файл  объект http
exports.__esModule = true;
// const server = http.createServer((request, response) => {
//   response.write("it ");
//   response.end();
// });
//server.listen(3003); // даем установку серверу слушать конкр порт
//http://localhost:3003/   пишем в поисковикепше
// const delay = (ms) => {
//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       res();
//     }, ms);
//   });
// };
// const readFile = (path) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, (err, res) => {
//       if (err) {
//         reject(err);
//       } else resolve(res);
//     });
//   });
// };
// const http = require("http");
// const fs = require("fs");
// const server = http.createServer(async (request, response) => {
//   switch (request.url) {
//     case "/home": {
//       //когла я прочитаб эти данные я вызову колл бэк то есть асинхронно
//       try {
//         const data = await readFile("./index.html");
//         response.write(data);
//         response.end();
//       } catch (err) {
//         response.write("error");
//         response.end();
//       }
//       break;
//     }
//     case "/about": {
//       await delay(3000);
//       response.write("about");
//       response.end();
//       break;
//     }
//     default: {
//       response.write("404");
//       response.end();
//     }
//   }
// });
// server.listen(3003);
//скопировали с доки экспресса
//const express = require("express"); // требуем экспресс
var express_1 = require("express");
var app = (0, express_1["default"])(); //создади прил
var port = 3000; //указали порт
app.get("/", function (req, res) {
    var a = 8;
    if (a > 5) {
        res.send("ok");
    }
    else {
        res.send("Hello World!");
    }
});
app.get("/users", function (req, res) {
    res.send("hello samutai");
});
app.post("/users", function (req, res) {
    res.send("we are created samurais");
});
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
