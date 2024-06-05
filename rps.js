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



    






    function playRound(humanChoice, computerChoice) {
        console.log(humanChoice);
        console.log(computerChoice);
        if (humanChoice === "Rock" && computerChoice === "Scissors")
        {
            //humanScore++;
            return("You win! " + humanChoice + " beats " + computerChoice);
        }
    
        else if (humanChoice === "Scissors" && computerChoice === "Paper")
        {
            //humanScore++;
            return("You win! " + humanChoice + " beats " + computerChoice);
        }
    
        else if (humanChoice === "Paper" && computerChoice === "Rock")
        {
            //humanScore++;
            return("You win! " + humanChoice + " beats " + computerChoice);
        }
    
        else if (computerChoice === "Rock" && humanChoice === "Scissors")
        {
            //computerScore++;
            return("You lose! " + computerChoice + " beats " + humanChoice);
        }
    
        else if (computerChoice === "Scissors" && humanChoice === "Paper")
        {
            //computerScore++;
            return("You lose! " + computerChoice + " beats " + humanChoice);
        }
    
        else if (computerChoice === "Paper" && humanChoice === "Rock")
        {
            //omputerScore++;
            return("You lose! " + computerChoice + " beats " + humanChoice);
        }
    
        else {
            return("You tied! You both selected " + humanChoice);
        }   
    }

   const btnR = document.createElement("button");
   const btnP = document.createElement("button");
   const btnS = document.createElement("button");

   btnR.setAttribute("id", "R");
   btnP.setAttribute("id", "P");
   btnS.setAttribute("id", "S");

   btnR.textContent = "Rock";
   btnP.textContent = "Paper";
   btnS.textContent = "Scissors";

   const div1 = document.createElement("div");

   div1.appendChild(btnR);
   div1.appendChild(btnP);
   div1.appendChild(btnS);

   

   const body = document.querySelector("body");
   body.appendChild(div1);

   body.addEventListener('click', (event) => {
        let target = event.target;
        let humanSelection = '';
        let computerSelection = '';
        const div2 = document.createElement("div");

        switch(target.id) {
            case 'R':
                 humanSelection = "Rock";
                 computerSelection = getComputerChoice();
                 div2.textContent = playRound(humanSelection,computerSelection);
                 body.appendChild(div2);
                break;
            case 'P':
                 humanSelection = "Paper";
                 computerSelection = getComputerChoice();
                 div2.textContent = playRound(humanSelection,computerSelection);
                 body.appendChild(div2);
                break;
            case 'S':
                 humanSelection = "Scissors";
                 computerSelection = getComputerChoice();
                 div2.textContent = playRound(humanSelection,computerSelection);
                 body.appendChild(div2);
                break;
        }
   })
   


