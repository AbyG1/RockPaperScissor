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
    return computerChoice;
    
}

function playRound(playerChoice, computerChoice){
    computerChoice = computerChoice.toLowerCase();
    playerChoice = playerChoice.toLowerCase().trim();
    if(computerChoice === "rock" && playerChoice === "rock"){
        return "It's a tie";
    } else if ( computerChoice === "rock" && playerChoice === "paper"){
        return "you won, paper beats rock";
    }   else if (computerChoice === "rock" && playerChoice === "scissors"){
        return "you lose, rock beats scissors";
    }   else if (computerChoice === "paper" && playerChoice === "rock"){
        return "you lose, paper beats rock";
    }   else if (computerChoice === "paper" && playerChoice === "paper"){
        return "It's a tie";
    }   else if (computerChoice === "paper" && playerChoice === "scissors"){
        return "you won, scissors beat paper ";
    }   else if (computerChoice === "scissors" && playerChoice === "rock"){
        return "you won, rock beats scissors";
    }   else if (computerChoice === "scissors" && playerChoice === "paper"){
        return  "you lose, scissors beat paper"
    }   else if (computerChoice === "scissors" && playerChoice === "scissors"){
        return "It's a tie";
    }   else {
        return "invalid input"
    }
}

