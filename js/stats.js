var stats = {
  streak : 0,
  longestStreak : 0,
  getLongestStreak : function() {
    if (stats.streak > stats.longestStreak) {
      stats.longestStreak = stats.streak;
    }
  },
  mostCorrectKana : function(character) {
  },
  mostIncorrectKana : function(character) {
    // TODO
    // see if most incorrect characters were actually incorrect
    // characters with 0 incorrect currently show as most incorrect
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
      value.difference = value.rightCount - value.wrongCount;
      console.log(value);
    });
  },
  sort : function(characters) {
    // determine the most correct and most incorrect characters
    characters.sort(function(a, b) {
      // sorting highest to lowest
      return parseFloat(b.difference) - parseFloat(a.difference);
    });

    return {
      correct : charactersWithValues[0].char,
      incorrect : charactersWithValues[charactersWithValues.length-1].char
    }
  },
  calculate() {
    kana[studyChoice].chars.forEach(function(value) {
      // If either of these counts > 0 it means they were displayed
      if (value.rightCount > 0 || value.wrongCount > 0) {

      }
    });

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
