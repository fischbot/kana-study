import { keydownHandler } from '../handlers.js';

// Toggle show / hide for an element
// Takes element ID as an argument
const showHideToggle = (el) => {
  const elToToggle = document.getElementById(el);
  elToToggle.classList.toggle('hide');
};

const setupAnswerInput = (answerInput, checkAnswer) => {
  answerInput.classList.remove('hide');
  answerInput.focus();
  answerInput.addEventListener('keydown', (e) => {
    displayMessage(''); // clear previous msg

    // todo move this to handlers
    if (e.key === 'Enter') {
      if (e.target.value === '') {
        displayMessage('Enter your answer in romaji');
        return;
      }
      checkAnswer(e.target.value);
      e.target.value = '';
    }
  }, false);
};

// display message to user (stats)
const displayMessage = (text) => {
  message.innerText = text;
}


// clear user input field
const clearInput = () => {
  answerInput.value = '';
}

// return a random index
// 98 chars in each kana type
const randomChar = () => Math.floor((Math.random() * 98));

export { showHideToggle, setupAnswerInput, randomChar, displayMessage };