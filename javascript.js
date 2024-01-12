const para = document.querySelector('p');

//map winning items with the losing ones, rock beats scissors
const whatBeatsWhat = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
}

// Derive computerChoices from whatBeatsWhat keys
const computerChoices = Object.keys(whatBeatsWhat);

/* Function: getComputerChoice
* Parameters: none
* Return: computer random choice (rock, paper or scissors)
*/
function getComputerChoice() {
    const computerRandChoice = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[computerRandChoice];
}

/* Function: playRound
* Parameters: playerSelection, computerSelection
* Return: string indicate the winner of the round
*/
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    //when user and console chose the same item
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    //check if user choice matches a key of whatBeatsWhat and map to computerSelection, if so, user wins
    else if (whatBeatsWhat[playerSelection] === computerSelection) {
        return "You win!";
    }

    //otherwise, the computer wins
    else {
        return "The computer wins!";
    }
}

// const playerSelection = prompt("enter your pick");
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

/* Function: game
* Parameters: none
* Return: report winner or loser at the end through a best-of-five game.
*/
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection = prompt('Enter your pick');
    let computerSelection = getComputerChoice();

    while ((playerScore < 5) && (computerScore < 5)) {
        if (playRound(playerSelection, computerSelection) === "The computer wins!") {
            computerScore++;
        }
        else if (playRound(playerSelection, computerSelection) === "You win!") {
            playerScore++;
        }
       
            playerSelection = prompt('Enter your pick:');
            computerSelection = getComputerChoice();
        
    }

    console.log(`Computer score: ${computerScore}`);
    console.log(`Your score: ${playerScore}`);
    if (computerScore === 5) {
        console.log('You lost the game!');
    }
    else if (playerScore === 5) {
        console.log('Congratulations! You win the game!');
    }
}

game();