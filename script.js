
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
    swapTurn()
    if (checkForWinner (currentTurn)) {
        console.log('winner')
    } 
    // takeTurn (boardSquare)
}

swapTurn = () => {
    circlesTurn = !circlesTurn
}

checkForWinner = (currentTurn) => {
    return winningCombos.some(combination => {
        return combination.every(index => {
            return boardSquares[index].innerHTML.includes(currentTurn) 
        })
    })
}