import './style.css';
import circleImg from './images/circle.png';
import knightImg from './images/knight.png';
import knightMoves from './algorithm';


let board = document.querySelector(".board");
let cells = board.childNodes;
let knightBtn = document.querySelector('.placeKnightBtn');
let locationBtn = document.querySelector('.locationBtn');
let startBtn = document.querySelector('.start');
let endLocation = document.createElement('img');
endLocation.src = circleImg;
let knight = document.createElement('img');
knight.src = knightImg;

(function createBoard() {
  let color = 'white';
  //create rows
      for (let d = 0; d < 8; d++) {
        (color == 'white') ? color = 'black': color = 'white';

        for(let i = 0; i < 8; i++) {
          let cell = document.createElement('cell')
          cell.dataset.id = `${d},${i}`;
          (color == 'white') ? color = 'black': color = 'white';  
          cell.className = `cell ${color}`;
          board.appendChild(cell);
        }   
      }
return board;
})()

knightBtn.onclick = addKnight;
locationBtn.onclick = addLocation;
startBtn.onclick = knightMoves;


function addKnight() {
  cells.forEach(cell => {
    cell.removeEventListener('click', placeLocation);
    cell.addEventListener('click', placeKnight);
  })
}

function placeKnight() {
  this.appendChild(knight);
}

function placeLocation() {
  this.appendChild(endLocation);
}

function addLocation() {
    cells.forEach(cell => {
      cell.removeEventListener('click', placeKnight);
      cell.addEventListener('click', placeLocation);
    })
}


/*
place knight
location button clicked
cell click targets location, place location

*/