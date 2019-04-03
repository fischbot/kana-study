// Toggle show / hide for an element
// Takes element ID as an argument
const showHideToggle = (el) => {
  const elToToggle = document.getElementById(el);
  elToToggle.classList.toggle('hide');
};

const setupAnswerInput = () => {
  answerInput = document.getElementById('answer');
  answerInput.classList.remove('hide');
  answerInput.focus();
  answerInput.addEventListener('keydown', keydownHandler, false);
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

export { showHideToggle, randomChar };