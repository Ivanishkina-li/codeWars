//молдуль событий
const EventEmitter = require("events");
//создаем экземпляр события в нашем модуле
const emiter = new EventEmitter();
//с помощью метода on вызываем слежением за событием. 1 аргумент - имя события(произвол строка)за которым следим,2ой-колл бек функция. шде мы передаем текст и отобр в консоли
emiter.on("some_event", (args) => {
  const { id, text } = args;
  console.log(id, text);
});
//вызываем событие которое создали. 2ой - данные (в нащем случае текст кот выводим в консоль)
emiter.emit("some_event", { id: 1, text: "event test text" });
//руз-тат    1 event test text
