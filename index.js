let options = [
    'rock',
    'paper',
    'scissors'
]

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
            return 'You win!'            
        }   
        return 'You lose!'
    
}

function getPlayerChoice () {
    let choice = prompt('What do you choose? Scissors, paper or rock?');
    choice = choice.toLowerCase();
    return choice;
}