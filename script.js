
let playerScore = 0;
let computerScore = 0;




//ComputerPlay() randomly selects an option from the available options

function computerPlay(){

    let choices = ["rock", "paper", "scissors"];
    let randomChoiceNumber = Math.floor(Math.random()* 3);  //returns a random number from 0-2 inclusive
    let selectedChoice = choices[randomChoiceNumber];

    return selectedChoice;
}

function declareWinner(){

    if(playerScore>computerScore){
        return "You Won :) "
    }else if (playerScore < computerScore){
        return "You Lost :( "
    }else {
        return "It's a draw"
    }
}

function checkWinner(){

    if(playerScore == 5 || computerScore == 5) {
        
        prompt(declareWinner());

        playerScore = 0;
        computerScore = 0;

        return; 
    }
}




function playerChoice(e) {

    playerOption = this.id;                     //getting the user choice through the id of the Button pressed

    computerOption = computerPlay();            // Computer Choice
    displayChoices(playerOption,computerOption);
    playGame(playerOption,computerOption);
    
    
      
}


/* The displayChoices() displays the choices from the Player and the PC
   It will create a new child when append them if there isn't already the elements created, 
   Else it will just update the elements present (the appendChild creator when starting the game for the first time).
*/
function displayChoices(playerOption, computerOption){
    
    const content = document.querySelector('.display-choices');

   if(!content.querySelector('#player-option')){                            //if player-option child isn't present, create and appendChild

        const displayPlayerOption = document.createElement('div');
        displayPlayerOption.id = 'player-option'
        displayPlayerOption.textContent = ` Player selected : ${playerOption}`;

        const displayComputerOption = document.createElement('div');
        displayComputerOption.id = 'computer-option';
        displayComputerOption.textContent = ` Computer selected : ${computerOption}`;

        content.appendChild(displayPlayerOption);
        content.appendChild(displayComputerOption);
   }else{                                                                  //if player-option <div> already exits, update The Text Content
        
        const updatePlayerOption = document.querySelector('#player-option');
        updatePlayerOption.textContent = `Player Selected : ${playerOption}`;

        const updateComputerOption = document.querySelector('#computer-option');
        updateComputerOption.textContent = `Computer Selected : ${computerOption}`;

   }

}

function round(playerOption, computerOption){

    if (playerOption == computerOption){
        return "draw";
    }

    //since there are three conditions in which the user can win, included them in one if statement using OR

    if ((playerOption  == "scissors")&&(computerOption == "paper") || 
        ((playerOption == "paper") && (computerOption == "rock")) ||
        ((playerOption == "rock") && (computerOption == "paper")))  {
        return "won";
    } else {
        return "lost";
    }

}

function playGame(playerOption, computerOption){

    let result;
   
    result = round(playerOption, computerOption);

    console.log(result);

    if (result === "won" )
    {
        console.log(`You Won! ${playerOption} beats ${computerOption}`);
        playerScore += 1;
    }
    else if (result === "lost")
    {
        console.log(`You Lost! ${computerOption} beats ${[playerOption]}`);
        computerScore += 1;
    }
    
    else if (result == 'draw'){
        console.log('Its a draw! ')
    }
     //alert(declareWinner(playerScore,computerScore));

    const roundResult = document.querySelector('.round-result');
    roundResult.textContent = `You Won! ${playerOption} beats ${computerOption}`;

    const updatePlayerScore = document.querySelector('.player-score');
    updatePlayerScore.textContent = `Player  : ${playerScore}`;

    const updateComputerScore = document.querySelector('.computer-score');
    updateComputerScore.textContent = `Computer  : ${computerScore}`;
     
    checkWinner();

}


//Selecting and adding Event Listeners for all the buttons present
const btns = document.querySelectorAll('.options');

btns.forEach(button => button.addEventListener('click',playerChoice));
console.log(btns);