let computerScore = 0;
let playerScore = 0;
let computerScoreValue = document.getElementById('cs');
let playerScoreValue = document.getElementById('ps');
let playerSelection = document.getElementById('player-selection');
let computerSelection = document.getElementById('computer-selection');

computerScoreValue.textContent += computerScore;
playerScoreValue.textContent += playerScore;


let buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', function(){
    let computerChoice = getComputerChoice();
    playerSelection.textContent = `Player Selection:${button.textContent}`;
    playRound(button.textContent,computerChoice);
} ));



const resultDiv = document.querySelector('.display-container');
const roundResult = document.createElement('p');
resultDiv.appendChild(roundResult);


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


function keepTrackOfScore(result){
    
    if(result === 1) {
        playerScore++;
        playerScoreValue.textContent = `Player Score:${playerScore}`;
        
    } else if (result === -1) {
        computerScore++;
        computerScoreValue.textContent = `Computer Score:${computerScore}`;
    }
    
    
}

//  function game(){
//     let result;
//     let computerScore = 0;
//     let playerScore = 0;
//     for(let i = 0; i < 5; i++){
//         result = playRound(getPlayerChoice(),getComputerChoice());
//         if (result == "computer"){
//             computerScore++;
//         } else if(result == "player"){
//             playerScore++;
//         } else {
//             continue;
//         }
//     }
//     if (playerScore > computerScore){
//         return console.log(`You won, score=${playerScore}:${computerScore}`);
//     } else if (playerScore < computerScore){
//         return console.log(`You lose, score=${computerScore}:${playerScore}`);
//     } else {
//         return console.log(`It's a tie, score=${computerScore}:${playerScore}`)
//     }
// }




