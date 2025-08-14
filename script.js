const submitButton = document.getElementById('game-submit');
const popUp = document.getElementById('pop-up');
const closeButton = document.getElementById('close-button');
const form = document.getElementById('fake-form');
const submit = document.getElementById('submit');

submitButton.addEventListener('click', function() {
    let maxValue = parseInt(document.getElementById('max-value').value);
    let randomNumber = Math.floor(Math.random() * maxValue);
    if (maxValue <= 0) {
       return document.getElementById('game-answer').innerHTML = 'Please enter a positive, non-zero value as your upper bound.';
    }
    let guess = parseInt(document.getElementById('guess').value);
    if (guess <= 0) {
        return document.getElementById('game-answer').innerHTML = "Please enter a positive, non-zero value as your guess.";
    }
    if (guess === randomNumber) {
        console.log('here');
        return document.getElementById('game-answer').innerHTML = "Congradulations! You got it correct!";
    } else {
        return document.getElementById('game-answer').innerHTML = `I'm sorry. The number was actually ${randomNumber}. Please try again.`;
    }
});

popUp.addEventListener('click', function() {
    return document.getElementById('pop-up-window').style.display = 'block';
});

closeButton.addEventListener('click', function() {
    return document.getElementById('pop-up-window').style.display = 'none';
});

submit.addEventListener('click', function() {
    form.reset();
});