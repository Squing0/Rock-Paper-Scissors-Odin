let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

function getComputerChoice(){
    let comChoice = Math.floor(Math.random() * 3) + 1;

    return decideChoice(comChoice);
}

function getHumanChoice(){
    let userChoice = prompt("Enter rock, paper or scissors.")

    if(userChoice === null){
        return "Nothing";
    }
    userChoice = userChoice.toLowerCase();

    return decideChoice(userChoice);
}

function decideChoice(choice){
    switch(choice){
        case 1:
            return "Rock";
        case 2:
            return "Scissors";
        case 3:
            return "Paper";
        case "rock":
            return "Rock"
        case "paper":
            return "Paper";
        case "scissors":
            return "Scissors";
        default:
            return "Nothing";      
    }
}

function playRound(userChoice, comChoice){
    if(userChoice == "Nothing"){
        return "Incorrect Input";
    }

    if(userChoice == comChoice){
        drawScore++;
        return "Draw!";    
    }

    if(userChoice == "Rock" && comChoice == "Scissors" || 
    userChoice == "Scissors" && comChoice == "Paper" || 
    userChoice == "Paper" && comChoice == "Rock"){
        humanScore++;
        return `You Win! ${userChoice} beats ${comChoice}`;    
    }
    else{
        computerScore++;
        return `You lose! ${comChoice} beats ${userChoice}`
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        console.log(playRound(getHumanChoice(), getComputerChoice()));
    }

    if(humanScore > computerScore){
        console.log(`You Win. You won ${humanScore} rounds.
        The computer won ${computerScore} rounds.
        There were ${drawScore} draws.`)
    }
    else if (humanScore < computerScore){
        console.log(`You lose. You won ${humanScore} rounds. 
        The computer won ${computerScore} rounds.
        There were ${drawScore} draws.`)
    }
    else{
        console.log("Each round was a draw!")
    }
}

playGame();