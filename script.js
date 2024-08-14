let box = document.querySelectorAll(".box");
let startBtn = document.querySelector("#startButton");
let resetBtn = document.querySelector("#resetButton");
let menuBtn = document.querySelector("#menuButton");

let winArr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let turn = "X";

let win = false;

const start = () => {
  document.querySelector("#mainGame").style.display = "flex";
  document.querySelector("#mainPage").style.display = "none";
  box.forEach((val) => {
    turn = "X";
    val.disabled = false;
    val.innerText = "";
  });
};

const reset = () => {
  turn = "X";
  box.forEach((val) => {
    val.innerText = "";
    val.disabled = false;
  });
};

const menu = () => {
  document.querySelector("#mainGame").style.display = "none";
  document.querySelector("#mainPage").style.display = "flex";
};

const checkWin = () => {
  for (let arr of winArr) {
    console.log(
      box[arr[0]].innerText,
      box[arr[1]].innerText,
      box[arr[2]].innerText
    );
    if (
      box[arr[0]].innerText == box[arr[1]].innerText &&
      box[arr[1]].innerText == box[arr[2]].innerText &&
      box[arr[0]].innerText != "" &&
      box[arr[1]].innerText != "" &&
      box[arr[2]].innerText != ""
    ) {
      document.querySelector("#endPage").style.display = "flex";
      document.querySelector("#mainPage").style.display = "none";
      document.querySelector("#mainGame").style.display = "none";
      box.forEach((val) => {
        val.disabled = true;
      });
    }
  }
};

box.forEach((val) => {
  val.addEventListener("click", () => {
    if (turn === "X") {
      val.innerText = "X";
      turn = "O";
      val.disabled = true;
    } else {
      val.innerText = "O";
      turn = "X";
      val.disabled = true;
    }
  });
  val.addEventListener("click", checkWin);
});

startBtn.addEventListener("click", start);
resetBtn.addEventListener("click", reset);
menuBtn.addEventListener("click", menu);
