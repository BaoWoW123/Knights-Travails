let board = document.querySelector(".board");

(function createBoard() {
  let color = 'white';
  //create rows
      for (let d = 0; d < 8; d++) {
        (color == 'white') ? color = 'black': color = 'white';

        for(let i = 0; i < 8; i++) {
          let cell = document.createElement('cell')
          cell.textContent = `${d}-${i}`;
          (color == 'white') ? color = 'black': color = 'white';  
          cell.className = `cell-${color}`;
          if (i === 4) {
            cell.style.backgroundImage = "url(./knight.png)";
            cell.style.backgroundRepeat = "no-repeat";
            cell.style.backgroundPosition = "center";
          }
          board.appendChild(cell)
        }   
      }
return board;
})()
