const targetNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

function guess() {
    const inputField = document.getElementById('userGuess');
    const messageDisplay = document.getElementById('message');
    const userGuess = Number(inputField.value);
    
    attempts++;

    if (userGuess == targetNumber) {
        message.textContent = 'Correct!';
     
    } 
    else if (userGuess > targetNumber) {
        message.textContent = "Too High! Try again.";
     
    } 
    else {
        message.textContent = "Too Low! Try again.";
    
    }

   
}