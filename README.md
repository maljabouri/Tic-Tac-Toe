# Tic-Tac-Toe Project

This is a project written as part of the GA software engineering immersive course. 
Developer: Ma-Add Al-Jabouri

# Game Link 

https://maljabouri.github.io/Tic-Tac-Toe/

# Brief

- Build a web application from scratch, without a starter codebase
- Use your programming skills to work out the game logic for a simple game like Tic Tac Toe
- Separate HTML, CSS, and JavaScript files in your application
- Build an application to a specification that someone else gives you
- Build a dynamic game that allows two players to compete from the same computer
- Craft a README.md file that explains your app to the world

# Overview & Concept

This is a simple implementation of the classic Tic Tac Toe game, built with HTML, CSS, and JavaScript. The game allows two players to take turns marking X's and O's on a 3x3 board. The first player to get three in a row (horizontally, vertically, or diagonally) wins the game.

# Technologies Used 

- HTML
- CSS
- JavaScript

# User Stories

- As a user, I should be able to start a new tic tac toe game
- As a user, I should be able to click on a square to add X first and then O, and so on
- As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next
- As a user, I should not be able to click the same square twice
- As a user, I should be shown a message when I win, lose or tie
- As a user, I should not be able to continue playing once I win, lose, or tie
- As a user, I should be able to play the game again without refreshing the page

# Approach Taken

First, I started my Tic Tac Toe project by creating the game board using semantic HTML. I used a table element to make a 3x3 grid of td elements, which represented the squares of the board.

Next, I wanted to make the game visually appealing, so I used CSS to style the board. I used a CSS grid layout to make the 3x3 grid of squares and added properties like border, background-color, and font-size to make everything look great.

After the board was looking good, I moved on to the JavaScript functionality. This was the fun part! I used JavaScript to keep track of the game state, like whose turn it was and what was in each square. I also used it to handle user input, so when a player clicked on a square to make a move, it would check for a winner or a tie and display the result to the user. I even allowed the user to start a new game after a win or a tie.

To make everything work smoothly, I used event listeners to handle user input. Each square on the board had an event listener attached to it, which listened for a click event and called a function to handle the input.

As I was working on the project, I went through several rounds of debugging and refactoring to make sure everything was working as expected. I used the browser's developer tools to inspect and debug the code, and I reviewed the code for best practices and readability.

Overall, I'm really happy with how the Tic Tac Toe project turned out. It was a lot of fun to create a functional and visually appealing game using HTML, CSS, and JavaScript. I learned a lot along the way


# Bugs, Blockers & Wins

The first blocker I encountered was actually just where to start the project, being my first project written in JavaScript I was really stuck as to where to begin. Another blocker I encountered when trying to figure out how to display the results of the game after it had ended. Initially, I was unsure of how to approach this problem.

To solve this issue, I added a message to the user interface that updated with the winner's name. I accomplished this by modifying the onClick function, which is called when a player clicks on a square of the Tic Tac Toe board.

In the modified onClick function, I added logic to check if the current player had won the game by calling the checkForWinner function and passing in the currentTurn constant. If the function returned true, I updated the game state message to show that the current player had won by setting document.getElementById("game-state").innerHTML to currentTurn + ' Wins!'.

If the checkForWinner function returned false, I checked if the game had ended in a draw by calling the checkForDraw function. If the function returned true, I updated the game state message to show that the game had ended in a draw by setting document.getElementById("game-state").innerHTML to "It's a draw!".

Overall, by modifying the onClick function and updating the game state message based on the results of the game, I was able to overcome the blocker I faced and successfully display the results of the game to the user.

![snippet1](https://i.imgur.com/51RNSH1.png)

During the development of the Tic Tac Toe project, I encountered a bug where the game didn't recognize a tie when all the cells were filled without a win. Initially, I was unsure of what was causing the issue and how to fix it.

After some debugging and testing, I realized that the issue was due to the game not properly detecting when all the cells on the board had been filled without a winner. To fix this, I created a new function called checkForDraw.

The checkForDraw function loops through all the div elements on the board and checks if their innerHTML is empty or not. If it finds any div elements that are empty, it returns false to indicate that the game is not a draw. If all div elements have been filled without a winner, the function returns true to indicate that the game is a draw.

By creating the checkForDraw function and calling it when needed, I was able to fix the bug in the Tic Tac Toe game and ensure that it properly recognized when the game ended in a draw.

![snippet2](https://i.imgur.com/6F3azWo.png)

The biggest win I had was getting the game logic to work correctly, so that players could take turns marking cells and the game would correctly identify wins and ties.

# Future Features + Key Learnings

Some possible future features for the game could include:
- Adding a computer player for single-player mode
- Allowing players to choose their own symbols (besides X and O)
- Adding sound effects and animations for a more engaging experience

Some key learnings from this project include:
- Careful attention to detail is important when building game logic, to ensure it works correctly in all edge cases
- User interface design is important for a good user experience, even in a simple game like Tic Tac Toe.





