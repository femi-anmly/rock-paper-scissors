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

