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
    return console.log(computerChoice);

}
getComputerChoice();