function getComputerChoice(){
    // create a random integer from 0 to 2 //
    let randomNumber = Math.floor(Math.random() * 3)
    // assign the values based on the integer 
    if(randomNumber === 0){
        return "rock";
    }
    else if(randomNumber === 1){
        return "paper";
    } else {return "scissors";}
}

function getHumanChoice(){
    return prompt("Rock, paper or scissors?")
}


function playRound(humanChoice, computerChoice){
    humanChoice.toLowerCase()
    if(humanChoice === "rock"){
        if(computerChoice === "scissors"){
            return "winner";
        }
        else if (computerChoice === "rock"){
            return "draw";
        } else {
            return "loser";
        }
    }
    if(humanChoice === "paper"){
        if(computerChoice === "rock"){
            return "winner";
        }
        else if (computerChoice === "paper"){
            return "draw";
        } else {
            return "loser";
        }
    }
    if(humanChoice === "scissors"){
        if(computerChoice === "paper"){
            return "winner";
        }
        else if (computerChoice === "scissors"){
            return "draw";
        } else {
            return "loser";
        }
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(playRound(humanSelection, computerSelection))