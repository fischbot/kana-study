var stats = {
  streak : 0,
  longestStreak : 0,
  getLongestStreak : function() {
    if (stats.streak > stats.longestStreak) {
      stats.longestStreak = stats.streak;
    }
  },
  mostCorrectKana : '',
  mostIncorrectKana : '',
  getMostCorrectKana : function() {
    // TODO
    // if more than one character has the same highest difference value, should
    // take into account rightCount and wrongCount
  },
  getMostIncorrectKana : function(displayedKanaArray) {
    // pass array of characters that have previously been displayed
    while(displayedKanaArray) {

    }
  },
  display : function() {
    var characters = stats.calculate();
    var streakDisplay;
    console.log(characters);
    if (stats.longestStreak > 0) {
        streakDisplay = `Longest Streak: ${stats.longestStreak}`;
    }
    return streakDisplay;
  },
  difference : function() {
    // calculate the difference between right and wrong counts for each character
    kana[studyChoice].chars.forEach(function(value) {
      if (value.hasBeenDisplayed) {
        value.difference = value.rightCount - value.wrongCount;
      }
    });
  },
  sort : function() { // TODO rename because it does more than sort
    var characters = [];
    kana[studyChoice].chars.forEach(function(value) {
      if (value.hasBeenDisplayed) {
        characters.push(value);

        // console.log(value);
      }
    });
    // determine the most correct and most incorrect characters
    characters.sort(function(a, b) {
      // sorting highest to lowest
      return parseFloat(b.difference) - parseFloat(a.difference);
    });

    // TODO move these actions to another function to get the true most correct and incorrect characters
    stats.mostCorrectKana = Object.values(characters[0])[0];
    // TODO still reports characters that are not incorrect as most incorrect because of 0 value
    stats.mostIncorrectKana = Object.values(characters[characters.length-1])[0];
  },
  },
  reset : function() {
    kana[studyChoice].chars.forEach(function(value) {
      value.rightCount = 0;
      value.wrongCount = 0;
    });

    stats.streak = 0;
    stats.longestStreak = 0;
  }
};
