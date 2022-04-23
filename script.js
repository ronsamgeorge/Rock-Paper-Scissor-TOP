//initial solution

function computerPlay(){
    let choices = ["Rock", "Paper", "Scissors"];
    let randomChoiceNumber = Math.floor(Math.random()* 3);  //this will select a random number from 0-2
    let selectedChoice = choices[randomChoiceNumber];
    //console.log(randomChoiceNumber);
    //console.log(selectedChoice);

    return selectedChoice;
}

function playGame(playerSelection){

    let playerChoice = playerSelection.toLowerCase();
    let computerSelection = computerPlay().toLowerCase();

    console.log("Player Choice : " + playerChoice);
    console.log("PC : " + computerSelection);
    
    if (playerChoice == computerSelection){
        return "Its a draw";
    }

    if (playerChoice == "scissors"){
        if(computerSelection == "paper"){
            return "You Win! Scissors beats paper"
        }
        else{
            return "You Lose! Rock beats Scissors" 
        }
    }
    
    else if (playerChoice == "rock"){
        if(computerSelection == "scissors"){
            return "You Win! Rock beats Scissors";
        }
        else{
            return "You Lose! Paper beats Rock";

        }
    }

    else if (playerChoice == "paper"){
        if (computerSelection == "rock"){
            return "You win! Paper beats Rock!";
        }
        else {
            return "You Lose! Scissors beats Rock"
        }
    }

    else 
    {
        return "Wrong option";
    }
}

function game(){

    for(let i= 0; i < 5; i++){
        console.log(`Round ${i+1}`);

        let userChoice = prompt("Enter you choice : Rock Paper Scissors \n");
        console.log(playGame(userChoice));


    }
}

game();
//console.log(playGame("paper"));