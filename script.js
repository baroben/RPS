function playRound(playerSelection,computerSelection){
    if(playerSelection=="rock" && computerSelection=="scisor" || playerSelection=="paper" && computerSelection=="rock" || playerSelection=="scisor" && computerSelection=="paper")
        return `You WIN! ${playerSelection} beats ${computerSelection}`;
    else
        return `You LOSE! ${computerSelection} beats ${playerSelection}`;
}

const choices = ["rock","paper","scisor"]; 
function getComputerChoice(){
    return choices[Math.floor(choices.length*Math.random())]
}

const playerSelection = "rock";
computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));