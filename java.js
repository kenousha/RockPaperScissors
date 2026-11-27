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
// ask the user for their choice
// assign the user's choice to the function
function getHumanChoice(){
    return prompt("Rock, paper or scissors?")
}

// return a result based on the humanChoice and computerChoice
function playGame(){
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice){
        
        humanChoice = humanChoice.toLowerCase()
            
        if(humanChoice === "rock"){
            return  computerChoice === "scissors" ? "winner" :
                    computerChoice === "paper" ? "loser" :
                    "draw";
        }

        if(humanChoice === "paper"){
            return  computerChoice === "rock" ? "winner" :
                    computerChoice === "scissors" ? "loser" :
                    "draw";
        }

        if(humanChoice === "scissors"){
            return  computerChoice === "paper" ? "winner" :
                    computerChoice === "rock" ? "loser" :
                    "draw";
        }
    }

    function playOneRound(){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
        
        if (result == "winner"){
            ++humanScore;
            }
        else if (result == "loser"){
            ++computerScore;
        }
        console.log(`You: ${humanSelection}, Computer: ${computerSelection}. Score ${humanScore}-${computerScore}`);
    }
    
    playOneRound();
    playOneRound();
    playOneRound();
    playOneRound();
    playOneRound();
    
    console.log(`Final score: You ${humanScore} - Computer ${computerScore}`);
    
}

playGame();