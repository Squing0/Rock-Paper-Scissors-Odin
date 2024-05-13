let playerScore = 0;
let computerScore = 0;

const resetBtn = document.querySelector("#resetBtn");

const resultsText = document.querySelector("#resultsText");
const roundText = document.querySelector("#roundResultText");
const playerWinsText = document.querySelector("#playerWins");
const computerWinsText = document.querySelector("#computerWins");

const buttons = document.querySelectorAll("button");

const playerHealth = document.querySelector("#playerHealth");
const enemyHealth = document.querySelector("#enemyHealth");

const playerIcon = document.querySelector("#playerIcon");
const enemyIcon = document.querySelector("#enemyIcon");

let healthFraction = enemyHealth.offsetWidth * 0.2;


function getComputerChoice(){
    let comChoice = Math.floor(Math.random() * 3) + 1;

    switch(comChoice){
        case 1:
            return "Geodude";
        case 2:
            return "Ditto";
        case 3:
            return "Scizor";
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
        roundText.textContent = "Round result: Draw!";    
    }
    else if(playerChoice == "Geodude" && comChoice == "Scizor" || 
    playerChoice == "Scizor" && comChoice == "Ditto" || 
    playerChoice == "Ditto" && comChoice == "Geodude"){
        playerScore++;

        let newWidth = Math.floor(enemyHealth.offsetWidth - healthFraction);
        enemyHealth.style.width = `${newWidth + 1}px`;

        checkScore();
        roundText.textContent = `Round result: You Win! ${playerChoice} beats ${comChoice}`;    
    }
    else{
        computerScore++;

        let newWidth = Math.floor(playerHealth.offsetWidth - healthFraction);
        playerHealth.style.width = `${newWidth + 1}px`;

        checkScore();
        roundText.textContent = `Round result: You lose! ${comChoice} beats ${playerChoice}`
    }

    playerIcon.src = `./assets/${playerChoice}.png`;
    enemyIcon.src = `./assets/${comChoice}.png`
}

function incrementScore(scoreText){
    scoreText.textContent = parseInt(scoreText.textContent) + 1;
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        switch(button.id){
            case "1":
                console.log(playRound("Geodude", getComputerChoice()));
                break;
            case "2":
                console.log(playRound("Ditto", getComputerChoice()));
                break; 
            case "3":
                console.log(playRound("Scizor", getComputerChoice()));
                break; 
        };
    });
});

resetBtn.addEventListener("click", () => {
    buttons.forEach((button) => {
        button.disabled = false;
    });

    playerHealth.style.width = "100%";
    enemyHealth.style.width = "100%";

    playerScore = 0;
    computerScore = 0;

    resetBtn.style.visibility = "hidden";
    resultsText.style.visibility = "hidden";
    roundText.textContent = "Round result:"
});