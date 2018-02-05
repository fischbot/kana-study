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

function init(elementClicked) {
  showHideToggle();
  setStudyPath(elementClicked);
  setupAnswerInput();
  storeKana();
  displayKana();
}

function endGame() {
  // TODO FIX - stats won't display because they're reset before they display
  // stats.calculate();
  stats.getLongestStreak();
  resetAll();
  displayMessage(stats.display()); // TODO update message with more stats
  // displayMessage(`Streak : ${stats.streak}`); // TODO update message with more stats
  stats.streak = 0;
  stats.reset();
}

function resetAll() {
  // kana[studyChoice].chars.forEach(function(value) {
  //   value.rightCount = 0;
  //   value.wrongCount = 0;
  // });
  clearInput();
  showHideToggle();
  displayMessage('');
  kanaCurrentInfo = '';
  kanaDisplay.innerText = '';
  answerInput.classList.add('hide');
}

function setupAnswerInput() {
  answerInput = document.getElementById('answer');
  answerInput.classList.remove('hide');
  answerInput.focus();
  answerInput.addEventListener('keydown', keydownHandler, false);
}

function displayMessage(text) {
  message.innerText = text;
}

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

function displayKana() {
  kanaDisplay.innerText = kanaCurrentInfo.value;
}


function isAnswerCorrect(answer) {
  return answer === kanaCurrentInfo.key;
}

function setStudyPath(elementClicked) {
  if (elementClicked.id === 'hira-btn') {
    studyChoice = 'hiragana';
  }

  if (elementClicked.id === 'kata-btn') {
    studyChoice = 'katakana';
  }
}

// return a random number dependent on the length of the character
//   study choice array
function randomChar() {
  var length = kana[studyChoice].chars.length;
  return Math.floor(Math.random() * length);
}
