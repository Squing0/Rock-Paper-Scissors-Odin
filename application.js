let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

const playerScoreDoc = document.querySelector("#playerNum");
const comScoreDoc = document.querySelector("#comNum");
const drawScoreDoc = document.querySelector("#drawNum");

const resetBtn = document.querySelector("#resetBtn");

const resultsText = document.querySelector("#resultsText");
const roundText = document.querySelector("#roundResultText");
const playerWinsText = document.querySelector("#playerWins");
const computerWinsText = document.querySelector("#computerWins");

const buttons = document.querySelectorAll("button");
const scores = document.querySelectorAll(".scoreNum");


function getComputerChoice(){
    let comChoice = Math.floor(Math.random() * 3) + 1;

    switch(comChoice){
        case 1:
            return "Rock";
        case 2:
            return "Scissors";
        case 3:
            return "Paper";
    }
}

function checkScore(){
    if(computerScore == 5){
        resultsText.textContent = "Computer Wins!"
        incrementScore(computerWinsText);
        endGame();
    }

    if(playerScore == 5){
        resultsText.textContent = "Player wins!";
        incrementScore(playerWinsText);
        endGame();
    }
}

function endGame(){
    buttons.forEach((button) => {
        button.disabled = true;
    });

    resultsText.style.visibility = "visible";

    resetBtn.style.visibility = "visible";
    resetBtn.disabled = false;
}

function playRound(playerChoice, comChoice){
    if(playerChoice == comChoice){
        drawScore++;
        incrementScore(drawScoreDoc);
        roundText.textContent = "Round result: Draw!";    
    }
    else if(playerChoice == "Rock" && comChoice == "Scissors" || 
    playerChoice == "Scissors" && comChoice == "Paper" || 
    playerChoice == "Paper" && comChoice == "Rock"){
        playerScore++;
        incrementScore(playerScoreDoc);
        checkScore();
        roundText.textContent = `Round result: You Win! ${playerChoice} beats ${comChoice}`;    
    }
    else{
        computerScore++;
        incrementScore(comScoreDoc);
        checkScore();
        roundText.textContent = `Round result: You lose! ${comChoice} beats ${playerChoice}`
    }
}

function incrementScore(scoreText){
    scoreText.textContent = parseInt(scoreText.textContent) + 1;
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        switch(button.id){
            case "1":
                console.log(playRound("Rock", getComputerChoice()));
                break;
            case "2":
                console.log(playRound("Paper", getComputerChoice()));
                break; 
            case "3":
                console.log(playRound("Scissors", getComputerChoice()));
                break; 
        };
    });
});

resetBtn.addEventListener("click", () => {
    scores.forEach((score) => {
        score.textContent = "0";
    });

    buttons.forEach((button) => {
        button.disabled = false;
    });

    playerScore = 0;
    computerScore = 0;
    drawScore = 0;

    resetBtn.style.visibility = "hidden";
    resultsText.style.visibility = "hidden";
    roundText.textContent = "Round result:"
});