const userName = "liza";

let YourName = (userName) => {
  console.log(`hello,${userName}`);
};

//console.log(__dirname); //получим в консоли путь до файла

//чтобы не писать вс. логику в одном файле и существубт модули
module.exports = {
  userName,
  YourName,
};
