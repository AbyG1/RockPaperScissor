let computerScore = 0;
let playerScore = 0;
let computerScoreValue = document.getElementById('cs');
let playerScoreValue = document.getElementById('ps');
let playerSelection = document.getElementById('player-selection');
let computerSelection = document.getElementById('computer-selection');
const displayResult = document.createElement('p');
const resultDiv = document.querySelector('.display-container');


computerScoreValue.textContent += computerScore;
playerScoreValue.textContent += playerScore;



const roundResult = document.createElement('p');
resultDiv.appendChild(roundResult);




    
    
    let buttons = document.querySelectorAll('button');
    buttons.forEach((button) => button.addEventListener('click', function(){
    let computerChoice = getComputerChoice();
    playerSelection.textContent = `Player Selection:${button.textContent}`;
    playRound(button.textContent,computerChoice);
} ));








function getComputerChoice() {
    let index = Math.floor(Math.random()*3);
    let array = ['Rock','Paper','Scissors']
    computerSelection.textContent = `Computer Selection:${array[index]}`;
    return (array[index]);
    
}


function playRound(playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    let result;
    if(computerChoice === "rock" && playerChoice === "rock"){
    roundResult.textContent = "It's a tie!";
    result = 0;
} else if ( computerChoice === "rock" && playerChoice === "paper"){
    roundResult.textContent = "You win, paper beats rock.";
    result = 1;
}   else if (computerChoice === "rock" && playerChoice === "scissors"){
    roundResult.textContent = "You lose, rock beats scissors.";
    result = -1;
}   else if (computerChoice === "paper" && playerChoice === "rock"){
    roundResult.textContent = "You lose, paper beats rock.";
    result = -1;
}   else if (computerChoice === "paper" && playerChoice === "paper"){
    roundResult.textContent = "It's a tie!";
    result = 0;
}   else if (computerChoice === "paper" && playerChoice === "scissors"){
    roundResult.textContent = 'You win, scissors beat paper.';
    result = 1;
}   else if (computerChoice === "scissors" && playerChoice === "rock"){
    roundResult.textContent = 'You win, rock beats scissors.';
    result = 1;
}   else if (computerChoice === "scissors" && playerChoice === "paper"){
    roundResult.textContent = 'You lose, scissors beat paper.';
    result = -1;
}   else if (computerChoice === "scissors" && playerChoice === "scissors"){
    roundResult.textContent = "It's a tie!";
    result = 0;
} 
    
    keepTrackOfScore(result);  
}


function keepTrackOfScore(result) {
    
    if(result === 1) {
        playerScore++;
        playerScoreValue.textContent = `Player Score:${playerScore}`;
        console.log('ps'+playerScore);
    } else if (result === -1) {
        computerScore++;
        computerScoreValue.textContent = `Computer Score:${computerScore}`;
        console.log('cs'+computerScore);
    }
    
    if (playerScore === 5 || computerScore === 5) {
         
    
        if (playerScore === 5) {
            displayResult.textContent = 'You Won!';
        } else {
            displayResult.textContent = 'You lost!';
        }
        resultDiv.appendChild(displayResult);
        
        restartGame();
        buttons.forEach((button) => button.disabled = true);
    }
    
    
}

function restartGame() {
    const replay = document.createElement('button');
    resultDiv.appendChild(replay);
    replay.textContent = "Play Again";
    replay.addEventListener('click',() => {
        computerScore = 0;
        playerScore = 0;
        computerScoreValue.textContent = `Computer Score: ${computerScore}`;
        playerScoreValue.textContent = `Player Score: ${playerScore}`;
        
        // Clear round result and display messages
        roundResult.textContent = '';
        displayResult.textContent = '';
        
        // Enable buttons again
        buttons.forEach((button) => button.disabled = false);
        
        // Remove the replay button
        resultDiv.removeChild(replay);
    });
    
    resultDiv.appendChild(replay);
}



