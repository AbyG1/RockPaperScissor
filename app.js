function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random()*3);
    let computerChoice;
    if (choiceNumber === 0){
        computerChoice = "Rock";
    }   else if (choiceNumber === 1){
        computerChoice = "Paper";
    }   else {
        computerChoice = "Scissors";
    }
    return (computerChoice);
    
}

function getPlayerChoice() {
    let playerChoice = prompt("Rock Paper Scissors, Enter your choice:")
    return playerChoice;
}

function playRound(playerChoice, computerChoice){
    computerChoice = computerChoice.toLowerCase()
    playerChoice = playerChoice.toLowerCase().trim();
    if(computerChoice === "rock" && playerChoice === "rock"){
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



function game(){
    let result;
    let computerScore = 0;
    let playerScore = 0;
    for(let i = 0; i < 5; i++){
        result = playRound(getPlayerChoice(),getComputerChoice());
        if (result == "computer"){
            computerScore++;
        } else if(result == "player"){
            playerScore++;
        } else {
            continue;
        }
    }
    if (playerScore > computerScore){
        return console.log(`You won, score=${playerScore}:${computerScore}`);
    } else if (playerScore < computerScore){
        return console.log(`You lose, score=${computerScore}:${playerScore}`);
    } else {
        return console.log(`It's a tie, score=${computerScore}:${playerScore}`)
    }
}

game();

