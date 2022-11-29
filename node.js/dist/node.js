"use strict";
// const http = require("http"); //подключи в наш файл  объект http
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
// import express from "express";
// const app = express(); //создади прил
// const port = 3000; //указали порт
// app.get("/", (req, res) => {
//   let a = 4;
//   if (a > 5) {
//     res.send("ok");
//   } else {
//     res.send("Hello World!!");
//   }
// });
// app.get("/users", (req, res) => {
//   res.send("hello samutai");
// });
// app.post("/users", (req, res) => {
//   res.send("we are created samurais");
// });
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
//урок 9
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3003;
// app.get("/", (req, res) => {
//   res.send({ message: "it-incubatorr" });
// });
//вводим это в консоли по ссылке на порт fetch('http://localhost:3000', {method:'GET'}).then(res => res.json()).then(data => console.log(data))
// и получим ответ {message: 'it-incubator'}
let db = {
    courses: [
        { id: 1, title: "frontend" },
        { id: 2, title: "backend" },
        { id: 3, title: "automation qa" },
        { id: 4, title: "devops" },
    ],
};
app.get("/courses", (req, res) => {
    let foundedCourses = db.courses;
    if (req.query.title) {
        //если подстрока передана то делаем фиольтрацию
        foundedCourses = foundedCourses.filter((c) => c.title.indexOf(req.query.title) > -1);
    }
    res.json(foundedCourses);
});
//при http://localhost:3000/courses?title=end   получаем  [{"id":1,"title":"frontend"},{"id":2,"title":"backend"}]
//ответ
// 4) [{…}, {…}, {…}, {…}]
// 0
// :
// {id: 1, title: 'frontend'}
// 1
// :
// {id: 2, title: 'backend'}
// 2
// :
// {id: 3, title: 'automation qa'}
// 3
// :
// {id: 4, title: 'devops'}
// app.delete("/courses/:id", (req, res) => {
//   db.courses = db.courses.find((c) => c.id === +req.params.id);
//   res.sendStatus(204);
// });
app.get("/courses/:id", (req, res) => {
    const FoundCourse = db.courses.find((c) => c.id === +req.params.id);
    if (!FoundCourse) {
        res.sendStatus(404);
        return;
    }
    res.json(FoundCourse);
});
//http://localhost:3003/courses/3   получим  { id: 3, title: "automation qa" }
app.listen(port, () => {
    console.log(`exaple port listening on ${port}`);
});
