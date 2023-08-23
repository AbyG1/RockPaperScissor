
let buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', function(){
    let computerChoice = getComputerChoice();
    playRound(button.textContent,computerChoice);
} ));



const resultDiv = document.querySelector('.display-container');
const roundResult = document.createElement('p');
resultDiv.appendChild(roundResult);


function getComputerChoice() {
    let index = Math.floor(Math.random()*3);
    let array = ['rock','paper','scissors']
    console.log(array[index]);
    return (array[index]);
    
}


function playRound(playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase();
    if(computerChoice === "rock" && playerChoice === "rock"){
    roundResult.textContent = "It's a tie";
} else if ( computerChoice === "rock" && playerChoice === "paper"){
    roundResult.textContent = "You won, paper beats rock";
}   else if (computerChoice === "rock" && playerChoice === "scissors"){
    roundResult.textContent = "You lose, rock beats scissors";
}   else if (computerChoice === "paper" && playerChoice === "rock"){
    roundResult.textContent = "You lose, paper beats rock";
}   else if (computerChoice === "paper" && playerChoice === "paper"){
    roundResult.textContent = "It's a tie";
}   else if (computerChoice === "paper" && playerChoice === "scissors"){
    roundResult.textContent = 'You won, scissors beat paper';
}   else if (computerChoice === "scissors" && playerChoice === "rock"){
    roundResult.textContent = 'You won, rock beats scissors';
}   else if (computerChoice === "scissors" && playerChoice === "paper"){
    roundResult.textContent = 'You lost, scissors beat paper';
}   else if (computerChoice === "scissors" && playerChoice === "scissors"){
    roundResult.textContent = "It's a tie";
}   else {
    console.log("Invalid input.");
}
}


    
   



// function game(){
//     let result;
//     let computerScore = 0;
//     let playerScore = 0;
    
//     if (result == "computer"){
//          computerScore++;
//     } else if(result == "player"){
//           playerScore++;
//     } 
//     if (playerScore > computerScore){
//         return console.log(`You won, score=${playerScore}:${computerScore}`);
//     } else if (playerScore < computerScore){
//         return console.log(`You lose, score=${computerScore}:${playerScore}`);
//     } else {
//         return console.log(`It's a tie, score=${computerScore}:${playerScore}`)
//     }
// }

// // game();




