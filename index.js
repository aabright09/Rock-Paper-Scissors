function getComputerChoice() {
const randomNumber = (Math.floor(Math.random() * 3))
if (randomNumber === 0) {
    return 'Rock';
  }
  else if (randomNumber === 1) {
    return 'Paper';
  }
  else if (randomNumber === 2) {
  return 'Scissor';
  }
}

let playerScore = 0;
let computerScore= 0;
let roundWinner = "";

function selection(playerSelection, computerSelection) {
    
    if(playerSelection == computerSelection) {
        console.log("It's a draw");
    }
}