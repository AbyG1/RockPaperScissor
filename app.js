
let buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', function(){
    let computerChoice = getComputerChoice();
    playRound(button.textContent,computerChoice);
} ));


function getComputerChoice() {
    let index = Math.floor(Math.random()*3);
    let array = ['rock','paper','scissors']
    return (array[index]);
    
}


function playRound(playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase();
    if(computerChoice === "rock" && playerChoice === "rock"){a
    console.log("It's a tie");
    return "tie";
} else if ( computerChoice === "rock" && playerChoice === "paper"){
    console.log("You won, paper beats rock");
    return "player";
}   else if (computerChoice === "rock" && playerChoice === "scissors"){
    console.log("You lose, rock beats scissors");
    return "computer";
}   else if (computerChoice === "paper" && playerChoice === "rock"){
    console.log("You lose, paper beats rock");
    return "computer";
}   else if (computerChoice === "paper" && playerChoice === "paper"){
    console.log("It's a tie");
    return "tie";
}   else if (computerChoice === "paper" && playerChoice === "scissors"){
    console.log('You won, scissors beat paper');
    return "player";
}   else if (computerChoice === "scissors" && playerChoice === "rock"){
    console.log('You won, rock beats scissors');
    return "player";
}   else if (computerChoice === "scissors" && playerChoice === "paper"){
    console.log('You lost, scissors beat paper');
    return  "computer"
}   else if (computerChoice === "scissors" && playerChoice === "scissors"){
    console.log("It's a tie");
    return "tie";
}   else {
    console.log("Invalid input.");
    return "invalid"
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




