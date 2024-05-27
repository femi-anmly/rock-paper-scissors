function getComputerChoice() {
    let choice = null;
    let random = (Math.random() * 3) + 1;
    random = Math.floor(random);
   
    if (random === 1) {
        choice = "Rock";
    }

    else if (random === 2) {
        choice = "Scissors";
    }

    else if (random === 3) {
        choice = "Paper";
    }
    
    return choice;
}


// Create loop that repeatedly asks the question until an exact response is given
// Initialize while loop
// Set count to 0
// Break while loop when count equals 1
// Add 1 when playerChoice equals Rock, Paper, or Scissors
// Set playerChoice to uppercase and check if it equals Rock, Paper, or Scissors
function getHumanChoice() {
    let count = 0;
    while (count < 1) {
        let playerChoice = prompt("Choose Rock, Paper, or Scissors");
        playerChoice = playerChoice.toUpperCase();
        if (playerChoice === "ROCK" || playerChoice === "PAPER" || playerChoice === "SCISSORS")
        {
            return playerChoice;
            count++; 
        }
        else {
            alert("Please choose one of the options.");
        }
    }
}

    let humanScore = 0;
    let computerScore = 0;




 const humanSelection = getHumanChoice();
 const computerSelection = getComputerChoice();


function playGame() {
    let gameCount = 0;
    humanScore = 0;
    computerScore = 0;
    

    function playRound(humanChoice, computerChoice) {
        humanChoice = getHumanChoice();
        humanChoice = humanChoice.substring(0,1) + humanChoice.slice(1).toLowerCase();
        computerChoice = getComputerChoice();
        console.log(humanChoice);
        console.log(computerChoice);
        if (humanChoice === "Rock" && computerChoice === "Scissors")
        {
            humanScore++;
            console.log("You win! " + humanChoice + " beats " + computerChoice);
        }
    
        else if (humanChoice === "Scissors" && computerChoice === "Paper")
        {
            humanScore++;
            console.log("You win! " + humanChoice + " beats " + computerChoice);
        }
    
        else if (humanChoice === "Paper" && computerChoice === "Rock")
        {
            humanScore++;
            console.log("You win! " + humanChoice + " beats " + computerChoice);
        }
    
        else if (computerChoice === "Rock" && humanChoice === "Scissors")
        {
            computerScore++;
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
        }
    
        else if (computerChoice === "Scissors" && humanChoice === "Paper")
        {
            computerScore++;
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
        }
    
        else if (computerChoice === "Paper" && humanChoice === "Rock")
        {
            computerScore++;
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
        }
    
        else {
            console.log("You tied!");
        }   
    }
    
    while (gameCount < 5)
    {   
        
        playRound(humanSelection, computerSelection);
        gameCount++;
        
    }

    if (humanScore > computerScore)
    {
        console.log("You won! The score was " + humanScore + " - " + computerScore);
    }

    else if (humanScore < computerScore) {
        console.log("You lost! The score was " + humanScore + " - " + computerScore);
    }

    else {
        console.log("You tied! The score was " + humanScore + " - " + computerScore);
    }
}

playGame();
