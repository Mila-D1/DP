let queen = document.createElement('span');
queen.innerHTML = "&#9819;";
queen.classList.add("queen");
let cells = [];
function createTable() {
   rn = window.prompt("Input number of rows", 1);
   cn = window.prompt("Input number of columns",1);
   const table = document.getElementById('board');
   for(let r=0;r<parseInt(rn);r++){
      let x = table.insertRow(r);
      let row = [];
      for(let c=0;c<parseInt(cn);c++){
         let cell = x.insertCell(c);         
         if (r == 0 && c == 0 ) {
            cell.appendChild(queen);
         }
         if ((r % 2 == 0 && c % 2 != 0) || (r % 2 != 0 && c % 2 == 0)) {
            cell.classList.add("magenta");
         } else {
            cell.classList.add("white");
         }         
         row.push(cell);
      }
      cells.push(row)
   }
}

let x = 0; 
let y = 0;

document.addEventListener("keyup", function (e) {
   switch (e.key) {
      case "ArrowUp":
         if (y > 0) { --y;}
         else {
            y = rn - 1 
         }
         break;
      case "ArrowDown":
         if (y < rn-1) { ++y;}
         else {
            y = 0
         }
         break;
      case "ArrowLeft":
         if (x > 0) { --x;}
         else {
            x = cn - 1
         }
         break;
      case "ArrowRight":
         if (x < cn-1) { ++x;}
         else {
            x = 0
         }
         break;
   }

   if (cells.length > 0) {   
      moveQueen(y,x)
   }
   
});

function moveQueen(r, c) {
   queen.parentNode.removeChild(queen);
   cells[r][c].appendChild(queen);
}

