import "./style.css";
import circleImg from "./images/circle.png";
import knightImg from "./images/knight.png";
import knightMoves from "./algorithm";

let board = document.querySelector(".board");
let cells = board.childNodes;
let knightBtn = document.querySelector(".placeKnightBtn");
let locationBtn = document.querySelector(".locationBtn");
let startBtn = document.querySelector(".start");
let endLocation = document.createElement("img");
endLocation.src = circleImg;
let knight = document.createElement("img");
knight.src = knightImg;
let currentKnight;
let currentEnd;
let knightCoords = "";
let endCoords = "";

function createBoard() {
  board.innerHTML = "";
  let color = "white";
  //create rows
  for (let d = 0; d < 8; d++) {
    color == "white" ? (color = "black") : (color = "white");
    //create cells in row
    for (let i = 0; i < 8; i++) {
      let cell = document.createElement("cell");
      cell.dataset.id = `${d}${i}`;
      color == "white" ? (color = "black") : (color = "white");
      cell.className = `cell ${color}`;
      board.appendChild(cell);
    }
  }
  return board;
}
createBoard();

knightBtn.onclick = addKnight;
locationBtn.onclick = addLocation;
startBtn.onclick = () => {
  //inital knightMoves checks if knight & end are on board
  knightMoves(knightCoords, endCoords);
  resetBoard();
  showPath(knightMoves(knightCoords, endCoords));
  function showPath(path) {
    for (let i = 0; i < path.length; i++) {
      let pathCoords = +`${path[i].x}${path[i].y}`;
      cells.forEach((cell) => {
        if (cell.dataset.id == pathCoords) {
          if (i === 0) return;
          cell.style.transition = "0.75s";
          cell.style.backgroundColor = "red";
          cell.style.opacity = 0.2 + +`.${i}`;
        }
      });
    }
  }
};

function addKnight() {
  cells.forEach((cell) => {
    cell.removeEventListener("click", placeLocation);
    cell.addEventListener("click", placeKnight);
  });
}

function addLocation() {
  cells.forEach((cell) => {
    cell.removeEventListener("click", placeKnight);
    cell.addEventListener("click", placeLocation);
  });
}

//add and place Knight/Location are separate functions to target every event listener
function placeKnight() {
  knightCoords = this.dataset.id;
  currentKnight = this;
  this.appendChild(knight);
  return this;
}

function placeLocation() {
  currentEnd = this;
  endCoords = this.dataset.id;
  this.appendChild(endLocation);
}

function resetBoard() {
  board.innerHTML = "";
  createBoard();
  currentKnight.innerHTML = "";
  let prevKnight = document.querySelector(`[data-id="${knightCoords}"]`);
  prevKnight.append(knight);
  let prevEnd = document.querySelector(`[data-id="${endCoords}"]`);
  prevEnd.append(endLocation);
}
