const nGame = 5;
var playerScore = 0;
var computerScore = 0;

function playRound(playerSelection,computerSelection){
    if(playerSelection=="rock" && computerSelection=="scissor" || playerSelection=="paper" && computerSelection=="rock" || playerSelection=="scissor" && computerSelection=="paper"){
        playerScore++;
        return `You WIN! ${playerSelection} beats ${computerSelection}`;
    }
    else if(playerSelection == computerSelection)
        return `This is a draw! ${playerSelection} vs ${computerSelection}`
    else{
        computerScore++;
        return `You LOSE! ${computerSelection} beats ${playerSelection}`;
    }
}

const choices = ["rock","paper","scissor"]; 
function getComputerChoice(){
    return choices[Math.floor(choices.length*Math.random())]
}

function game(){
    var playerSelection = undefined;
    var computerSelection = undefined;
    for(var i = 0; i<nGame ; i++){
        do{
            playerSelection = prompt("Make a choice : ").toLowerCase();
        }while(choices.indexOf(playerSelection) < 0);
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
    }
    console.log(`Final score ! Player : ${playerScore} || Computer : ${computerScore}`);
}

game();




