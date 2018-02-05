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
      // TODO FIX - stats won't display because they're reset before they display
      // stats.calculate();
      resetAll();
      displayMessage(stats.display()); // TODO update message with more stats
      // displayMessage(`Streak : ${stats.streak}`); // TODO update message with more stats
      stats.streak = 0;
      stats.reset();
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
        stats.streak = 0;
        displayMessage('Try Again');
      }
      clearInput();
    }
  }
}
