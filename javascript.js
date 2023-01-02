let board = document.querySelector(".board");
let cells = document.querySelectorAll('cell');
let placeKnightBtn = document.querySelector('.placeKnightBtn');
let locationBtn = document.querySelector('.locationBtn');
let startBtn = document.querySelector('.start');
let knight = document.createElement('img');
knight.src = './knight.png';

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
          cell.addEventListener('click', () => {
            (cell.hasChild) ? 
            cell.removeChild:
            cell.appendChild(knight) ;
          })
          board.appendChild(cell)
        }   
      }
return board;
})()

//non-functional
locationBtn.addEventListener('click', () => {
  console.log('btn clicked')
  cells.forEach(cell => {
    console.log('i')
    if (cell.hasChildNodes) return console.log('child');
    else return console.log('no knight found')
  })
})
