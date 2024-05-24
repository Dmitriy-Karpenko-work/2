let userAnswer = prompt("зимой и летом одним цветом");
// if (userAnswer === "") {
//   console.log("Пусто");
// } else {
//   if ((userAnswer === "елка", "ЁЛКА")) {
//     alert("правильно");
//   } else {
//     alert("неправильно");
//     console.log();
//   }
// }

if (userAnswer === "") {
  alert("Пусто");
} else if (userAnswer.toLowerCase() === "елка") {
  alert("yes");
} else {
  alert("no");
}

// userAnswer === "елка" ? alert("верно") : alert("нет");
