const container = document.querySelector("#score");
let PlayerScore = 0;
let ComputerScore = 0;
const announceContainer = document.querySelector("#announce")
const announceWinnerContainer = document.querySelector("#announceWinner");

const announce = document.createElement("div");
announce.classList.add("announce");

const announceWinner = document.createElement("div");
announceWinner.classList.add("announceWinner");


const playerScore = document.createElement("div");
playerScore.classList.add('playerScore');
playerScore.textContent = PlayerScore;

const computerScore = document.createElement("div");
computerScore.classList.add('computerScore');
computerScore.textContent = ComputerScore;




//finish the rest of buttons lol and make it look pretty bud
rockButton.addEventListener('click', function (e) {
  
  const computerPicked = getComputerChoice();
  let result = playRound('Rock',computerPicked);
  score(result); //adds 1 to score
  let print = printGameResult("Rock",computerPicked,result); //take all game info and announce result
  playerScore.textContent = PlayerScore; //updates score
  computerScore.textContent = ComputerScore;
  let firstFive = announceWinnerFive(PlayerScore,ComputerScore);
  announceWinner.textContent = firstFive;
  announce.textContent = print;
  
});
paperButton.addEventListener('click', function (e) {
  
  const computerPicked = getComputerChoice();
  let result = playRound('Paper',computerPicked);
  score(result);
  let print = printGameResult("Paper",computerPicked,result);
  playerScore.textContent = PlayerScore;
  computerScore.textContent = ComputerScore;
  let firstFive = announceWinnerFive(PlayerScore,ComputerScore);
  announceWinner.textContent = firstFive;
  announce.textContent = print;

});
scissorsButton.addEventListener('click', function (e) {
  const computerPicked = getComputerChoice();
  let result = playRound('Scissors',computerPicked);
  score(result);
  let print = printGameResult("Scissors",computerPicked,result);
  playerScore.textContent = PlayerScore;
  computerScore.textContent = ComputerScore;
  let firstFive = announceWinnerFive(PlayerScore,ComputerScore);
  announceWinner.textContent = firstFive;
  announce.textContent = print;

});

resetButton.addEventListener('click', function(e){
  document.getElementById("rockButton").disabled = false;
  document.getElementById("paperButton").disabled = false;
  document.getElementById("scissorsButton").disabled = false;
  announceWinner.textContent = "";
  announce.textContent ="";
  PlayerScore = 0;
  ComputerScore = 0;
  playerScore.textContent = PlayerScore;
  computerScore.textContent = ComputerScore;
  
  return PlayerScore,ComputerScore;
})



function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "Rock";

  } else if (randomNumber === 1) {
    return "Paper";

  } else if (randomNumber === 2) {
    return "Scissors";

  }

}
//put the check of 5 into while loop, if one has five, then break,
function playRound(userSelection, computerSelection) { 
    console.log(computerSelection);
    if (userSelection == computerSelection) {
        return "tie";
      
    } else if (
        (userSelection == 'Rock' && computerSelection == 'Scissors') ||
        (userSelection == 'Paper' && computerSelection == 'Rock') ||
        (userSelection == 'Scissors' && computerSelection == 'Paper')
    ) {
        return"win";
    } else if (
        (userSelection == 'Rock' && computerSelection == 'Paper') ||
        (userSelection == 'Paper' && computerSelection == 'Scissors') ||
        (userSelection == 'Scissors' && computerSelection == 'Rock')
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



function printGameResult(playerInput,computerInput,game_result){
    if(game_result === 'tie'){
      return "Tie! " + playerInput + " can't beat " + computerInput;
    }else if(game_result === 'win'){
      return "You won! " + playerInput + " beats " + computerInput;
    }else{
      return "You lost... " + computerInput + " beats " + playerInput;
    }
}

function announceWinnerFive(p,c){
  if (p>5 || c>5){
    document.getElementById("rockButton").disabled = false;
    document.getElementById("paperButton").disabled = false;
    document.getElementById("scissorsButton").disabled = false;
    return;
  }else if (p == 5){
    document.getElementById("rockButton").disabled = true;
    document.getElementById("paperButton").disabled = true;
    document.getElementById("scissorsButton").disabled = true;
    return "You got to five first!";
  }else if (c == 5){
    document.getElementById("rockButton").disabled = true;
    document.getElementById("paperButton").disabled = true;
    document.getElementById("scissorsButton").disabled = true;
    return "The computer got to five first!";
  }
}

container.appendChild(playerScore);
container.appendChild(computerScore);
announceContainer.appendChild(announce);
announceWinnerContainer.appendChild(announceWinner);
