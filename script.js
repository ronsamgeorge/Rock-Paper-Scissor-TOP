
//ComputerPlay() randomly selects an option from the available options

function computerPlay(){

    let choices = ["Rock", "Paper", "Scissors"];
    let randomChoiceNumber = Math.floor(Math.random()* 3);  //returns a random number from 0-2 inclusive
    let selectedChoice = choices[randomChoiceNumber];

    return selectedChoice;
}


function playerChoice(e) {

    playerOption = this.id;                   //getting the user choice through the id of the Button pressed

    computerOption = computerPlay();

    console.log(playerOption + " " + computerOption);

    displayChoices(playerOption,computerOption);
}


/* The displayChoices() displays the choices from the Player and the PC
   It will create a new child when append them if there isn't already the elements created, 
   Else it will just update the elements present (the appendChild creator when starting the game for the first time).
*/
function displayChoices(playerOption, computerOption){
    
    const content = document.querySelector('.display-result');

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


//Selecting and adding Event Listeners for all the buttons present
const btns = document.querySelectorAll('.options');

btns.forEach(button => button.addEventListener('click',playerChoice));
console.log(btns);