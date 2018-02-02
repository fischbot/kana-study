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
    streak = 0,
    // TODO add longest streak
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

  // TODO hide study-selection-buttons
    // show reset and end buttons
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

window.onload = function() {
  // set up study choice buttons
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
  switch (elementClicked.id) {
    case 'hira-btn' :
      init(elementClicked);
      break;
    case 'kata-btn' :
      init(elementClicked);
      break;
    case 'reset-btn' :
      resetAll();
      streak = 0;
      break;
    case 'end-btn' :
      // TODO
      resetAll();
      displayMessage('Stats:');
        // display stats like most incorrect, most correct, etc
      displayMessage(`Streak : ${streak}`); // TODO update message with more stats
      streak = 0;
  }
  // TODO after clicking 'end' and selecting new study path, 'stats' message remains
}

function keydownHandler(e) {
  if (e.keyCode === 13) {
    displayMessage('');
    var answer = answerInput.value;
    if (answer === '') {
      console.log('Enter answer');
      displayMessage('You didn\'t enter anything. :(');
    } else {
      if (isAnswerCorrect(answer)) {
        streak++;
        storeKana();
        displayKana();
        kana[studyChoice].chars[kanaCurrentInfo.index].rightCount += 1;
      } else {
        console.log('try again');
        streak = 0;
        kana[studyChoice].chars[kanaCurrentInfo.index].wrongCount += 1;
        // TODO output message to user
        displayMessage('Try Again');
      }
      clearInput();
    }
  }
}

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
  answerInput.classList.add('hide');
}

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
