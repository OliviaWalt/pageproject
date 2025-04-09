const displayedText = document.getElementById('displayed-text');
const userInput = document.getElementById('user-input');
const timeDisplay = document.getElementById('time');
const errorsDisplay = document.getElementById('errors');

let startTime;
let errors = 0;
let text = "This is some sample text. Type it as fast as you can!"; // Replace with your text

displayedText.textContent = text;

userInput.addEventListener('input', () => {
    if (!startTime) {
        startTime = new Date();
    }

    const inputText = userInput.value;
    let correct = true;

    for (let i = 0; i < inputText.length; i++) {
        if (inputText[i] !== text[i]) {
            correct = false;
            errors++;
        }
    }

    errorsDisplay.textContent = errors;

    if (inputText === text) {
        const endTime = new Date();
        const timeTaken = (endTime - startTime) / 1000;
        timeDisplay.textContent = timeTaken.toFixed(2);
        userInput.disabled = true;
    }
});
