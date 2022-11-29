const fs = require("fs");
//как только чтение произошло происходит создание папки files и тужа записывается новый файл text2
fs.readFile("./test.txt", (error, data) => {
  console.log(data.toString());
  fs.mkdir("./files", () => {
    fs.writeFile("./files/test2.txt", `${data} new text`, (error) => {
      error ? console.log(error) : null;
    }); //создается новый файл с таки же текстом как в первом
  });
});
