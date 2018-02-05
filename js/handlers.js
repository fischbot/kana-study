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
      stats.streak = 0;
      break;
    case 'end-btn' :
      endGame();
  }
}

function keydownHandler(e) {
  if (e.keyCode === 13) {
    // clear display message
    displayMessage('');
    var answer = answerInput.value.toLowerCase();
    if (answer === '') {
      displayMessage('You didn\'t enter anything. :(');
    } else {
      if (isAnswerCorrect(answer)) {
        kana[studyChoice].chars[kanaCurrentInfo.index].rightCount += 1;
        stats.streak++;
        // get new kana TODO: rename or break up into multiple functions
        storeKana();
        displayKana();

      } else {
        kana[studyChoice].chars[kanaCurrentInfo.index].wrongCount += 1;
        getLongestStreak();
        stats.streak = 0;
        displayMessage('Try Again');
      }
      clearInput();
    }
  }
}
