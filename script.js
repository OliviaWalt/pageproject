//these values are taking the html elements and renaming them for Javascript
const displayedText = document.getElementById('displayed-text');
const userInput = document.getElementById('user-input');
const timeDisplay = document.getElementById('time');
const errorsDisplay = document.getElementById('errors');

// these are the itital values being set at zero
let startTime;
let errors = 0;
let text = "This is some sample text. Type it as fast as you can!"; // Replace with your text

//allows text to appear on the page
displayedText.textContent = text;

//exectues everytime the input occers because of the () => {
userInput.addEventListener('input', () => {
    if (!startTime) {
        startTime = new Date();
    }
//checks if the type is true
    const inputText = userInput.value;
    let correct = true;
//checks if the thing typed matches the spot in the text, if not it notes it
    for (let i = 0; i < inputText.length; i++) {
        if (inputText[i] !== text[i]) {
            correct = false;
            errors++;
        }
    }

    errorsDisplay.textContent = errors;
//how it checks when the typeing is done
    if (inputText === text) {
        const endTime = new Date();
        const timeTaken = (endTime - startTime) / 1000;
        timeDisplay.textContent = timeTaken.toFixed(2);
        userInput.disabled = true;
    }
});
