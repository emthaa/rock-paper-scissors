
let PlayerScore = 0;
let ComputerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";

  } else if (randomNumber === 1) {
    return "paper";

  } else if (randomNumber === 2) {
    return "scissors";

  }

}

function playRound(userSelection, computerSelection) {
    let game_state;     
    console.log(computerSelection);
    if (userSelection == computerSelection) {
        return "tie";
      
    } else if (
        (userSelection == 'rock' && computerSelection == 'scissors') ||
        (userSelection == 'paper' && computerSelection == 'rock') ||
        (userSelection == 'scissors' && computerSelection == 'paper')
    ) {
        return"win";
    } else if (
        (userSelection == 'rock' && computerSelection == 'paper') ||
        (userSelection == 'paper' && computerSelection == 'scissors') ||
        (userSelection == 'scissors' && computerSelection == 'rock')
    ) {
        return "lose"; 
    }
}

function score(game_result){
  
  if(game_result == 'win'){
    PlayerScore = PlayerScore+1;
    return PlayerScore;
    
  }else if(game_result =='lose'){
    ComputerScore = ComputerScore+1;
    return ComputerScore;
    
  }
}

function game(){
  
  
  for (let i = 0; i < 5; i++) {
    
    playerInput = prompt("Rock, paper, or scissors?");
    playerInput = playerInput.toLowerCase()
    const computer = getComputerChoice();
    
    let game_result = playRound(playerInput,computer);
    console.log(game_result);
    score(game_result);
    
  } 
  console.log("Your score: " + PlayerScore + " Computer Score: " + ComputerScore);
}

game();
