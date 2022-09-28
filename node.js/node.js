// const http = require("http"); //подключи в наш файл  объект http

// const server = http.createServer((request, response) => {
//   response.write("it ");
//   response.end();
// });
//server.listen(3003); // даем установку серверу слушать конкр порт
//http://localhost:3003/   пишем в поисковикепше

const http = require("http");
const fs = require("fs");
const server = http.createServer((request, response) => {
  switch (request.url) {
    case "/home": {
      //когла я прочитаб эти данные я вызову колл бэк
      fs.readFile("./index.html", (err, data) => {
        if (err) {
          response.write(err);
        } else {
          response.write(data);
        }
      });

      response.end();
      break;
    }
    case "/about": {
      setTimeout(() => {
        response.write("about");
        response.end();
      }, 3000);
      break;
    }
    default: {
      response.write("404");
      response.end();
    }
  }
});

server.listen(3003);

//скопировали с доки экспресса
const express = require("express"); // требуем экспресс
const app = express(); //создади прил
const port = 3000; //указали порт

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  res.send("hello samutai");
});

app.post("/users", (req, res) => {
  res.send("we are created samurais");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
