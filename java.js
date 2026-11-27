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
let humanScore = 0
let computerScore = 0
// return a result based on the humanChoice and computerChoice
function playRound(humanChoice, computerChoice){
    // makes the user choice case insensitive
    humanChoice.toLowerCase()
    
    if(humanChoice === "rock"){
        return computerChoice === "scissors" ? "winner" :
        computerChoice === "paper" ? "loser" :
        "draw";
    }
    if(humanChoice === "paper"){
        return computerChoice === "rock" ? "winner" :
        computerChoice === "scissors" ? "loser" :
        "draw";
    }
    if(humanChoice === "scissors"){
        return computerChoice === "paper" ? "winner" :
        computerChoice === "rock" ? "loser" :
        "draw";
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

const result = playRound(humanSelection, computerSelection);



function updateScore(){
    if (result == "winner"){
        return humanScore = ++humanScore;
    }
    else if (result == "loser"){
        return computerScore = ++computerScore;
    }else{return}
}
console.log(updateScore())