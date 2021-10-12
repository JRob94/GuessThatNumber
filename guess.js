// GUESS THAT NUMBER
// Message to be used throughout the file/project
const enterNumText = `Please enter a number greater than zero`;

// For restarting the game
let restartGame = true;

// For storing the range of the number to be guessed
let rangeNum;

// For storing the number to be guessed
let randomNum;

// For storing number of attempts that the user has left
let attempts;

// For storing the user's guess
let guess;

// For storing user's response to play again or not play again
let playAgain;

// Starting alert message
alert(`Welcome to the "GUESS THAT NUMBER" Please click "OK" to start the game.`);

// Game restarts as long as restartGame has a value of true
while (restartGame){
    // Asks user to enter a number to set the upper bound for the random number that will be created
    rangeNum = prompt(`Please enter a maximum number for the range`);

    // Using parseInt to attempt to convert the user's response into a number value. The value returned from a prompt is a string value. Also, if the value cannot be converted then the value returned will be NaN
    rangeNum = parseInt(rangeNum);

    // Verifies the user's entry for the range number is a number greater than zero. NaN has a default boolean value of false. Also, all numbers, positive and negative, have a default boolean value of true, except for zero which is false by default.
    while (!rangeNum || rangeNum < 1){
        rangeNum = prompt(enterNumText);
        rangeNum = parseInt(rangeNum);
    }

    // Creates the random number using the range entered by the user
    randomNum = Math.floor(Math.random() * rangeNum) + 1;

    // Prompts user to enter number of attempts allowed/number of guesses. Also attempting to convert their response to a number value
    attempts = parseInt(prompt(`Please enter a number of attempts allowed:`));

    // Verifies the user's entry for a number of attempts allowed is aa number greater than zero
    while (!attempts || attempts < 1){
        attempts = parseInt(prompt(enterNumText));
    }

    // asks user to enter a guess in the range that they set
    guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) left:`);

    // Continues looping until the user guesses the correct number or runs out of attempts. Loops until a break keyword is ran
    while (true){
        // Attempts to convert the user's guess into a number
        guess = parseInt(guess);

        // Verifies the user's guess is a number greater than zero as well as a number within the range set by the user
        while (!guess || guess < 1 || guess > rangeNum){
            guess = parseInt(prompt(`Please enter a number from 1 to ${rangeNum}`));
        }

        // Removes an attempt
        attempts--;

        // Checks if the user guess correctly. if so, the game ends
        if (guess === randomNum){
            alert(`CONGRATULATIONS YOU GUESSED THE CORRECT NUMBER: ${randomNum}`);
            break;

            // Check if user has any attempts left. If not, the game ends and the number is displayed to the user
        } else if (attempts === 0){
            alert(`Sorry, but you have ran out of attempts :(. The number was ${randomNum}`);
            break;

            // Checks if user's guess was too low and prompts user to guess again if that is the case
        } else if (guess < randomNum){
            guess = prompt(`Too low. You have ${attempts} attempt(s) left.`);

            // The only other possibility is that the user's guess was too high so the user is prompted to guess again
        } else {
            guess = prompt(`Too high. You have ${attempts} attempt(s) left.`)
        }
    }

    // Prompts user with option to play again
    playAgain = prompt(`Would you like to paly again? Y for yes. N for no.`);

    // Loop continues until the user submits a valid response
    while (true){
        // Checks if the user's response is no/N
        if (playAgain.toUpperCase() === "N"){
            // Alerts the user that the game is over and the game/loop does NOT restart
            alert("Thanks for playing!");
            restartGame = false;
            break;

            // Checks if the user's response is YES/Y or y.
        } else if (playAgain.toUpperCase() === "Y"){
            // The game restarts
            break;
            
            // 
        } else {
            playAgain = prompt(`Please enter Y or N`);
        }
    }
}