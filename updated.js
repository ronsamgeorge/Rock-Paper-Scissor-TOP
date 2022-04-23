//updated solution


//ComputerPlay() is a function which randomly selects an option from the available options

function computerPlay(){
    let choices = ["Rock", "Paper", "Scissors"];
    let randomChoiceNumber = Math.floor(Math.random()* 3);  //this will select a random number from 0-2
    let selectedChoice = choices[randomChoiceNumber];
    //console.log(randomChoiceNumber);
    //console.log(selectedChoice);

    return selectedChoice;
}



//playGame() is where the comparisons for the choices of the Player and Computer takes place 
function playGame(playerSelection, computerSelection){

    //this is done to ignore any case sensitivity between the players entry
    let playerChoice = playerSelection.toLowerCase();             
    let computerChoice = computerSelection.toLowerCase();

    console.log("Player Choice : " + playerChoice);
    console.log("PC : " + computerSelection);


    if (playerChoice == computerChoice){
        return "draw";
    }
    if ((playerChoice == "scissors")&&(computerChoice == "paper") || 
        ((playerChoice == "paper") && (computerChoice == "rock")) ||
        ((playerChoice == "rock") && (computerChoice=="paper")))  {
        return "won";
    }

     else {
        return "lost";
    }
}

function declareWinner(playerScore, computerScore){

    if(playerScore>computerScore){
        return "You Won :) "
    }else if (playerScore < computerScore){
        return "You Lost :( "
    }else {
        return "It's a draw"
    }


    
}


//the initial function which starts the rounds.
function game(){

    let playerScore = 0;
    let computerScore= 0;

    let playerInput;
    let result;
    let computerInput;

    for (let i = 0; i<5; i++){

        console.log(`Round No ${i + 1}`);
        console.log("Player Score : " + playerScore );
        console.log("PC Score : " + computerScore);

        playerInput = prompt("Enter you choice : Rock/Paper/Scissors");

        computerInput = computerPlay();    //calls the function computerPlay to get a random choice for the computer's turn
        result = playGame(playerInput, computerInput);
        console.log(result);

        if (result === "won" )
        {
            console.log(`You Won! ${playerInput} beats ${computerInput}`);
            playerScore += 1;
        }
        else if (result === "lost")
        {
            console.log(`You Lost! ${computerInput} beats ${[playerInput]}`);
            computerScore += 1;
        }
        
        else{
            console.log('Its a draw! ')
        }
    }

    console.log(declareWinner(playerScore,computerScore));   
}

game();