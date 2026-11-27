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
console.log(getComputerChoice())