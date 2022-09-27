// const http = require("http"); //подключи в наш файл  объект http

// const server = http.createServer((request, response) => {
//   response.write("it ");
//   response.end();
// });
//server.listen(3003); // даем установку серверу слушать конкр порт
//http://localhost:3003/   пишем в поисковикепше

const fs = require("fs");
const http = require("http");
const server = http.createServer((request, response) => {
  switch (request.url) {
    case "/home": {
      response.write("best free online courses");
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
