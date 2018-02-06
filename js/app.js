'use strict';

var answerInput,
    SIZE = 64,
    studyChoice,
    kanaCurrentInfo,
    btns = document.getElementsByTagName('button'),
    kanaDisplay = document.getElementById('kana-display'),
    message = document.getElementById('message');

// run once all .js files are loaded
function start() {
  // set up study choice buttons
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', clickHandler, false);
  }
}

function init(btn) {
  // TODO reset message 
  showHideToggle();
  setStudyPath(btn);
  setupAnswerInput();
  storeKana();
  displayKana();
}

function endGame() {
  stats.getAll();
  resetInputMessageAndButtons();
  displayMessage(stats.display());
  stats.reset(); // TODO why is this resetting before it should be running?
}

function resetInputMessageAndButtons() {
  clearInput();
  showHideToggle();
  displayMessage('');
  kanaCurrentInfo = '';
  kanaDisplay.innerText = '';
  answerInput.classList.add('hide');

  kana[studyChoice].chars.forEach(function (value) {
    value.hasBeenDisplayed = false;
  });
}

function setupAnswerInput() {
  answerInput = document.getElementById('answer');
  answerInput.classList.remove('hide');
  answerInput.focus();
  answerInput.addEventListener('keydown', keydownHandler, false);
}

// display message to user (stats)
function displayMessage(text) {
  message.innerText = text;
}

// Toggle show/hide for button sections (study choice | end/reset)
function showHideToggle() {
  var buttons = [
    document.getElementById('study-selection-buttons'),
    document.getElementById('end-reset-buttons')
  ];

  buttons.forEach(function(button) {
    button.classList.toggle('hide');
  });
}

// clear user input field
function clearInput() {
  answerInput.value = '';
}

// TODO: rename or break up into multiple functions
// Stores character info at randomly chosen index
function storeKana() {
  var index = randomChar();
  kanaCurrentInfo = {
    index : index,
    key : Object.keys(kana[studyChoice].chars[index])[0],
    value : Object.values(kana[studyChoice].chars[index])[0]
  }
}

// Outputs character
function displayKana() {
  kanaDisplay.innerText = kanaCurrentInfo.value;
}

// Compares user's answer to currently displayed kana
function isAnswerCorrect(answer) {
  return answer === kanaCurrentInfo.key;
}

function setStudyPath(btn) {
  if (btn === 'hira-btn') {
    studyChoice = 'hiragana';
  }

  if (btn === 'kata-btn') {
    studyChoice = 'katakana';
  }
}

// return a random number dependent on the length of the character
//   study choice array
function randomChar() {
  var length = kana[studyChoice].chars.length;
  return Math.floor(Math.random() * length);
}
