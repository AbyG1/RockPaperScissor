function getComputerChoice() {
    let randomNumber = Math.ceil(Math.random() * 3);
    let computerChoice;
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

function playRound(playerSelection,computerSelection,roundCount) {
   playerSelection = playerSelection.toLowerCase();
   computerSelection = computerSelection.toLowerCase();
   console.log(`Round ${roundCount}`)
   console.log("player:"+playerSelection);
   console.log("computer:"+computerSelection);
   
   if(playerSelection === computerSelection){
    return "Its a tie!";
   } else{
     if(playerSelection == "rock" && computerSelection == "paper"){
         return "You Lose! Paper beats Rock";
     } else if(playerSelection == "rock" && computerSelection == "scissors"){
         return "You Won! Rock beats Scissors";
     } else if(playerSelection == "paper" && computerSelection == "scissors"){
         return "You Lose! Scissors beat Paper";
     } else if(playerSelection == "paper" && computerSelection == "rock"){
         return "You won! Paper beats Rock";
     } else if(playerSelection == "scissors" && computerSelection == "rock"){
         return "You Lose! Rock beats Scissors";
     } else if(playerSelection == "scissors" && computerSelection == "paper"){
         return "You won! Scissors beat Paper";
     } else {
         return "invalid input. you should enter your choice in only complete characters";
     }
   }
}
  
function game(){
    let result;
    let computerSelection;
    let playerSelection;
    let countOfRound;
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 1; i <= 5; i++){
         computerSelection = getComputerChoice();
         playerSelection = prompt("Rock,Paper,Scissors. Enter your choice in words.");
         countOfRound = i;
         console.log(result = playRound(playerSelection,computerSelection,countOfRound));
         if(result.slice(4,5)==="W"){
            playerScore++;
         } else if(result.slice(4,5)==="L"){
            computerScore++;
            console.log(computerScore);
         } else{
            continue;
         }
    }
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);

     if (playerScore > computerScore){
        return "You won the game";
     } else if(playerScore < computerScore){
        return "Computer won the game";
     } else {
        return "Match Drawn!"
     }
     
    


}

console.log(game());
