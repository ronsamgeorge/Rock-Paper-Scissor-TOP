//updated solution

function isValidInput(playerChoice){

    if(playerChoice== "paper" || playerChoice == "rock" || playerChoice == "scissors"){
        return true;
    }
    return false;
}


//playGame() is where the comparisons for the choices of the Player and Computer takes place 
function playGame(playerSelection, computerSelection){

    //this is done to ignore any case sensitivity between the players entry
    let playerChoice = playerSelection.toLowerCase();             
    let computerChoice = computerSelection.toLowerCase();

    console.log("Player Choice : " + playerChoice);
    console.log("PC : " + computerSelection);

    if(!isValidInput(playerChoice)){
        return "wrongInput";
    }

    if (playerChoice == computerChoice){
        return "draw";
    }

    //since there are three conditions in which the user can win, included them in one if statement using OR

    if ((playerChoice == "scissors")&&(computerChoice == "paper") || 
        ((playerChoice == "paper") && (computerChoice == "rock")) ||
        ((playerChoice == "rock") && (computerChoice=="paper")))  {
        return "won";
    } else {
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
        
        else if (result == 'draw'){
            console.log('Its a draw! ')
        }
        else{
            console.log('wrong input, enter again');
            i--;
        }
    }

    alert(declareWinner(playerScore,computerScore));   
}

game();