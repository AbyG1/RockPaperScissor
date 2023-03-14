function getComputerChoice() {
    let randomNumber = Math.ceil(Math.random() * 3);
    let computerChoice;
    console.log(randomNumber);
    switch (randomNumber){
        case 1:
            computerChoice = "Rock";
            break;
        case 2:
             computerChoice = "Paper";
             break;
        case 3:
             computerChoice = "Scissors";
             break;   
        
    }
    return computerChoice;

}

function playRound(playerSelection,computerSelection){
   playerSelection = playerSelection.toLowerCase();
   computerSelection = computerSelection.toLowerCase();
   console.log(computerSelection);

   if(playerSelection === computerSelection){
       return "Its a tie!";
    }
   else{
        if(playerSelection == "rock" && computerSelection == "paper"){
            return "You Lose! Paper beats Rock";
        }else if(playerSelection == "rock" && computerSelection == "scissors"){
            return "You Won! Rock beats Scissors";
        }else if(playerSelection == "paper" && computerSelection == "scissors"){
            return "You Lose! Scissors beat Paper";
        }else if(playerSelection == "paper" && computerSelection == "rock"){
            return "You won! Paper beats Rock";
        }else if(playerSelection == "scissors" && computerSelection == "rock"){
            return "You Lose! Rock beats Scissors";
        }else if(playerSelection == "scissors" && computerSelection == "paper"){
            return "You won! Scissors beat Paper";
        }else {
            return "invalid input";
        }
    }
   
}



let computerSelection = getComputerChoice();
let playerSelection = prompt("Rock,Paper,Scissors. Enter your choice in words.");
console.log(playRound(playerSelection,computerSelection));


