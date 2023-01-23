
// board class to create the board when new game is clicked
// should provide a clear board which is a 3x3 grid 
let circlesTurn


const boardSquares = document.querySelectorAll('[boardSquare]')

const classCircle = "O"
const classX = "X"
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [6, 4, 2],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]

boardSquares.forEach(boardSquare => {
    boardSquare.addEventListener('click', onClick, { once: true })
})



function onClick(e) {
    const square = e.target
    const currentTurn = circlesTurn ? classCircle : classX
    square.innerHTML = currentTurn
    if (checkForWinner (currentTurn)) {
        document.getElementById("game-state").innerHTML = currentTurn + ' Wins!';
    } else if (checkForDraw("board-square")) {
        console.log('draw')
    } else {
        swapTurn()
    } 
    
}

swapTurn = () => {
    circlesTurn = !circlesTurn
}


// Logic to check for a winner, by comparing entries in array to preset combination of wins.
checkForWinner = (currentTurn) => {
    return winningCombos.some(combination => {
        return combination.every(index => {
            return boardSquares[index].innerHTML.includes(currentTurn) 
        })
    })
}

// Logic to check for a draw, by checking that every div element has been filled without a winner.
function checkForDraw() {
    var divs = document.getElementsByClassName("board-square");
    for (var i = 0; i < divs.length; i++) {
      if (divs[i].innerHTML.trim() === "") {
        return false;
      }
    }
    return true;
  }