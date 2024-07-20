let button = document.querySelectorAll(".box");
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

const checkWin = () => {
  for (let arr of winArr) {
    console.log(
      button[arr[0]].innerText,
      button[arr[1]].innerText,
      button[arr[2]].innerText
    );
    if (
      button[arr[0]].innerText == button[arr[1]].innerText &&
      button[arr[1]].innerText == button[arr[2]].innerText &&
      button[arr[0]].innerText != "" &&
      button[arr[1]].innerText != "" &&
      button[arr[2]].innerText != ""
    ) {
      win = true;
    }
  }
};

button.forEach((val) => {
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
