'use strict';


var answerInput,
    SIZE = 64,
    studyChoice,
    kanaCurrentInfo,
    btns = document.getElementsByTagName('button'),
    kanaDisplay = document.getElementById('kana-display'),
    message = document.getElementById('message');

var stats = {
  streak : 0,
  longestStreak : 0,
  mostCorrectKana : function() {
    var k = {count : 0, char : {}};
    kana.hiragana.chars.forEach(function(value) {
      console.log(`k.count: ${k.count} | value.rightCount: ${value.rightCount}`)
      if (value.rightCount > k.count) {

          k.count = value.rightCount;
          k.char.key = console.log(Object.keys(value)[0]);
          k.char.value = console.log(Object.values(value)[0]);
      }
      // TODO fix - app currently only returns first kana with highest count
    });
    console.log(k.count);
    if (k.count > 0) {
      return k;
    } else {
      return "You didn't get any correct. Better luck next time. :(";
    }
  },
  mostIncorrectKana : function() {
    var k = {count : 0, char : {}};
    kana.hiragana.chars.forEach(function(value) {
      if (value.wrongCount > k.count) {
          k.count = value.wrongCount;
          k.char.key = console.log(Object.keys(value)[0]);
          k.char.value = console.log(Object.values(value)[0]);
      }
      // TODO fix - app currently only returns first kana with lowest count
    });
    if (k.count !== 0) {
      return k;
    } else {
      return "You didn't get any wrong! :)";
    }
  },
  display : function() {
    return `Most Correct Kana: ${stats.mostCorrectKana()}`;
  }
};

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
  resetAll();
  displayMessage(stats.display()); // TODO update message with more stats
  // displayMessage(`Streak : ${stats.streak}`); // TODO update message with more stats
  stats.streak = 0;
  stats.reset();
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

function resetAll() {
  // kana[studyChoice].chars.forEach(function(value) {
  //   value.rightCount = 0;
  //   value.wrongCount = 0;
  // });
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
