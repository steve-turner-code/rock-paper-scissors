let options = [
    'rock',
    'paper',
    'scissors'
]

let playerScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let result = Math.floor(Math.random() * options.length);
    return options[result];
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection)
        {
            return 'Draw'
        }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper'))
        { 
            playerScore++
            return 'You win!'            
        }   
        computerScore++;
        return 'You lose!'
    
}

function getPlayerChoice () {
    let choice = prompt('What do you choose? Scissors, paper or rock?');
    choice = choice.toLowerCase();
    return choice;
}

function game () {
    for (let i = 0; i < 5; i++) {
        alert(playRound (getPlayerChoice(), getComputerChoice()) + ' your score is ' + playerScore); 
    }
}

game();