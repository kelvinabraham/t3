console.log(
  "Your JS is linked up. Be the person you needed when you were little."
);
/*----- constants -----*/

/*----- app's state (variables) -----*/
let board;
function init() {
  board = ["", "", "", "", "", "", "", "", ""];
}

let turn = "X";
//be sure to call the init function!
init();

function render() {
  board.forEach(function (mark, index) {
    console.log(mark, index);
  });
}
function init() {
  board = ["", "", "", "", "", "", "", "", ""];
  // new code here
  render();
}
/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll("#board div"));
function render() {
  board.forEach(function (mark, index) {
    //this sets the text content of the square of the same position to the mark on the board.
    squares[index].textContent = mark;
  });
}
/*----- event listeners -----*/
document.getElementById("board").addEventListener("click", handleTurn);
/*----- functions -----*/
function handleTurn(event) {
  let idx = squares.findIndex(function (square) {
    return square === event.target;
  });
}

function handleTurn(event) {
  let idx = squares.findIndex(function (square) {
    return square === event.target;
  });
  // new code below
  board[idx] = turn;
  // check your console logs to make sure it's working!
  console.log(board);
}
function handleTurn() {
  let idx = squares.findIndex(function (square) {
    return square === event.target;
  });
  board[idx] = turn;
  // This is tidy
  turn = turn === "X" ? "O" : "X";
  // In an if statement it would look like:
  // if (turn === 'X') {
  // turn = 'O'
  // } else {
  // turn = 'X'
  // };
  // writing the ternary saved you from all that.
  render();
}
