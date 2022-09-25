const http = require("http"); //подключи в наш файл  объект http

const server = http.createServer((request, response) => {
  response.write("it ");
  response.end();
});
server.listen(3003); // даем установку серверу слушать конкр порт
//http://localhost:3003/   пишем в поисковикепше
