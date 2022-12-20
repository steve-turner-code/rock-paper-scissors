let options = [
    'rock',
    'paper',
    'scissors'
]

let playerScore = 0;
let computerScore = 0;
const outputBox = document.querySelector('#output');
console.log(outputBox);

const buttonOptions = document.querySelectorAll('button');
buttonOptions.forEach(button => button.addEventListener('click', playRound))



function playRound (e) {
    let playerSelection = this.innerHTML;
    playerSelection = playerSelection.toLowerCase();
    

    let computerSelection = Math.floor(Math.random() * options.length);
    computerSelection = options[computerSelection];

    if (playerSelection == computerSelection)
    {
        outputBox.innerHTML = `It's a draw. The score is ${playerScore} to ${computerScore}.`
    }
else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper'))
    { 
        playerScore++
        outputBox.innerHTML = `You win! The score is ${playerScore} to ${computerScore}.`
            
    }   
    else {
        computerScore++;
    outputBox.innerHTML = `You lost. Aww. The score is ${playerScore} to ${computerScore}.`
    }


}



