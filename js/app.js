'use strict';
// to retrieve (character) as key
// > Object.keys(kana.hiragana[index])
// ["a"]

/*
  TODO
  - function to randomly choose the next character to display
      takes into account the right and wrong rightCount
        if wrong more than n times show character more frequently
        if right more than n times show character less frequently
*/
var answerInput,
    SIZE = 64,
    studyChoice,
    kanaCurrentInfo,
    btns = document.getElementsByTagName('button'),
    kanaDisplay = document.getElementById('kana-display'),
    message = document.getElementById('message');
}

function init() {
  answer = document.getElementById('answer').focus();
}

window.onload = function() {
  init();
function displayMessage(text) {
  message.innerText = text;
}

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', clickHandler, false);
  }
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

function clickHandler(e) {
  var elementClicked = e.target;
function clearInput() {
  answerInput.value = '';
}

function resetAll() {
  kana.hiragana.chars.forEach(function(value) {
    value.rightCount = 0;
    value.wrongCount = 0;
  });

  clearInput();
  showHideToggle();
  displayMessage('');
  studyChoice = '';
  kanaCurrentInfo = '';
  kanaDisplay.innerText = '';
}

function storeKana() {
  var index = randomChar();
  kanaCurrentInfo = {
    index : index,
    key : Object.keys(kana[studyChoice].chars[index])[0],
    value : Object.values(kana[studyChoice].chars[index])[0]
  }
}
    studyChoice = 'hiragana';
  }

  if (elementClicked.className === 'kata-btn') {
    console.log('katakana');
    studyChoice = 'katakana';
  }
}

// return a random number dependent on the length of the character
//   study choice array
function randomChar() {
  var length = kana[studyChoice].chars.length;
  return Math.floor(Math.random() * length);
}
