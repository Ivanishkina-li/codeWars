const http = require("http");
const fs = require("fs");
const path = require("path");
const { runInNewContext } = require("vm");
const PORT = 3006;
const server = http.createServer((req, res) => {
  console.log("server request");

  res.setHeader("Content-type", "text/plain");

  const createpath = (page) => path.resolve(__dirname, "views");
  if ((req.url = "/")) {
    fs.readFile("./files/test2.txt", (err, data) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        res.write(data); //если данные успешнр прочитаны в ответ записываем наш файл
        res.end();
      }
    });
  }
});
server.listen(PORT, "localhost", (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});
