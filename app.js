// // function test(check) {
// //   check();
// // }

// // function test2() {
// //   alert("!!!");
// // }

// // test(test2);

// // function test() {
// //   return function () {
// //     console.log("asdasd");
// //   };
// // }

// // test();

// // var a = "1";

// // switch (a) {
// //   case "2": {
// //     console.log("one");
// //   }
// //   default: {
// //     console.log("..ops");
// //   }
// // }

// // if (1) {
// //   console.log("a");
// // } else if (2) {
// //   console.log("b");
// // }

// // if (1) {
// //   console.log("c");
// // }
// // if (2) {
// //   console.log("d");
// // }

// // for (var i = 0; i <= 30; i += 5) {
// //   console.log(i);
// // }

// function click() {
//   console.log("!");
// }

// // // btn.addEventListener("click", function () {
// // //   click();
// // // });

// // var body = document.body;

// // console.log(body);

// // var btn = document.querySelectorAll("button");

// // console.log(btn);

// // btn[0].addEventListener("click", function () {
// //   click();
// // });

// // var btn = document.getElementsByClassName("btn");
// // console.log(btn);

// // var firstBtn = document.getElementById("firstBtn");

// // console.log(firstBtn);

var message = document.querySelector(".message");
// var score = document.querySelector(".score");
var buttons = document.querySelectorAll("button");
var computer = document.querySelector(".computer");
var player = document.querySelector (".player");
var winner = document.querySelector (".winner")
var playerChoice = document.querySelector (".playerChoice")
var computerChoice = document.querySelector(".computerChoice")
var winnerScore = [0, 0];

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", play);
}

function play(event) {
  var playerSelect = event.target.innerText;

  var computerSelect = Math.floor(Math.random()*18) ;
 


  if (computerSelect < 6) {
    computerSelect = "Камень";
  } else if (computerSelect <= 12) {
    computerSelect = "Бумага";
  } else {
    computerSelect = "Ножницы";
  }

  var result = checkWinner(playerSelect, computerSelect);

  if (result === "Игрок") {
    winnerScore[0]++;
    player.innerHTML = winnerScore[0]
  }else if (result === "Компьютер") {
    winnerScore[1]++;
    computer.innerHTML = winnerScore[1]
  } else if (result === "Ничья" ) {
    winnerScore[0]++;
    winnerScore[1]++;
    player.innerHTML = winnerScore[0]
    computer.innerHTML = winnerScore[1]
  }

  console.log("Игрок:", playerSelect, "Компьютер:", computerSelect);
  console.log(result);
  
  function showChoice(){
    playerChoice.innerHTML = playerSelect
    computerChoice.innerHTML = computerSelect
  }
  showChoice()
  
  function  showwinner(){
    winner.innerHTML = result 
  }
showwinner()

}

function checkWinner(player, computer) {
  if (player === "Камень" && computer === "Бумага") {
    return "Компьютер";}
   else if (player === "Бумага" && computer === "Ножницы") {
    return "Компьютер";}
   else if (player === "Ножницы" && computer === "Камень") {
    return "Компьютер";
  }else if(player === computer){
    return "Ничья"
  }else {
    return "Игрок";
  }
}
 