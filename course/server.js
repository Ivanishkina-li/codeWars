const http = require("http");
const path = require("path");
const PORT = 3006;
const server = http.createServer((req, res) => {
  console.log(req);
  console.log(req.url, req.method);

  res.setHeader("Content-type", "application/json");
  //fgfgh
  const data = JSON.stringify([
    { name: "Tommy", age: 35 },
    { name: "Arthur", age: 40 },
  ]);
  res.end(data);
});
server.listen(PORT, "localhost", (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});
//как рез-тат по ссылке локалхоста видим [{"name":"Tommy","age":35},{"name":"Arthur","age":40}]
