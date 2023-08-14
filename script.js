function playRound(playerSelection,computerSelection){
    if(playerSelection=="rock" && computerSelection=="scissor" || playerSelection=="paper" && computerSelection=="rock" || playerSelection=="scissor" && computerSelection=="paper")
        return `You WIN! ${playerSelection} beats ${computerSelection}`;
    else if(playerSelection == computerSelection)
        return `This is a draw! ${playerSelection} vs ${computerSelection}`
    else
        return `You LOSE! ${computerSelection} beats ${playerSelection}`;
}

const choices = ["rock","paper","scissor"]; 
function getComputerChoice(){
    return choices[Math.floor(choices.length*Math.random())]
}

const nGame = 5;

var playerSelection = undefined;
var computerSelection = undefined;

function game(){
    for(var i = 0; i<nGame ; i++){
        do{
            playerSelection = prompt("Make a choice : ").toLowerCase();
        }while(choices.indexOf(playerSelection) < 0);
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
    }
}

game();




