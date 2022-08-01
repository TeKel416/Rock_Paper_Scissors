const cpuChoiceDisplay = document.querySelector('#cpu-choice');
const playerChoiceDisplay = document.querySelector('#player-choice');
const resultDisplay = document.querySelector('#result');
const possibleChoices = document.querySelectorAll('img');
let playerChoice;
let cpuChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click' , (e)=>{
    playerChoice = e.target.id;
    playerChoiceDisplay.innerHTML = playerChoice;
    console.log(e.target)
    generateCPUChoice();
    getResult();
}));


function generateCPUChoice(){
    const randomNumber = Math.floor(Math.random() *possibleChoices.length) + 1;
    
    switch (randomNumber) {
        case 1:
            cpuChoice = 'rock';
            break;
        
        case 2:
            cpuChoice = 'paper';
            break;    

        case 3:
            cpuChoice = 'scissors';
            break; 
            
        default:
            throw new Error("Something went wrong with the computer's choice");
    }

    cpuChoiceDisplay.innerHTML = cpuChoice;
}


function getResult(){
    if(cpuChoice === playerChoice){
        result = "It's a draw!";
    }
    else if(cpuChoice === 'rock'){
        if(playerChoice === 'paper'){
            result = "You win!";
        } else{
            result = "You lost!";
        }
    }
    else if(cpuChoice === 'paper'){
        if(playerChoice === 'scissors'){
            result = "You win!";
        } else{
            result = "You lost!";
        }
    }
    else if(cpuChoice === 'scissors'){
        if(playerChoice === 'rock'){
            result = "You win!";
        } else{
            result = "You lost!";
        }
    }

    resultDisplay.innerHTML = result;
}