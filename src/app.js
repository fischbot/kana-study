import './css/styles.css';
import kanaOriginal from './assets/kana.js';
import { setupAnswerInput, randomChar, displayMessage } from './assets/helpers.js';
import { clickHandler, keydownHandler, toggleHandler } from './handlers.js';

const app = () => {
  const btns = [].slice.call(document.getElementsByTagName('button'));
  const kanaDisplay = document.getElementById('kana-display');
  const answerInput = document.getElementById('answer');
  let kana = null;
  let studyChoice = null;
  let incorrect = 0;

  const currentChar = {
    index : null,
    kana : null,
    romaji : null
  }
  const init = (btn) => {
    kana = {...kanaOriginal };
    console.log(kana)
    // hide choices & show end / reset
    toggleHandler(btns);
    // set study track
    studyChoice = setStudyPath(btn.id);
    setCurrentChar();
    displayChar();
    setupAnswerInput(answerInput, checkAnswer);
  };

  const setStudyPath = (id) => id === 'hira-btn' ? 'hiragana' : 'katakana';

  const setCurrentChar = () => {
    currentChar.index = randomChar();
    currentChar.kana = Object.values(kana[studyChoice].chars[currentChar.index])[0];
    currentChar.romaji = Object.keys(kana[studyChoice].chars[currentChar.index])[0];
    console.log(currentChar.romaji)
  }

  const reset = () => {
    toggleHandler(btns);
    answerInput.classList.add('hide');
    // answerInput.removeEventListener('keydown', keydownHandler(), false);
    kanaDisplay.innerText = '';
    kana = { ...kanaOriginal };
  };

  const displayChar = () => kanaDisplay.innerText = currentChar.kana;

  // Compares user's answer to currently displayed kana
  const isAnswerCorrect = (answer) => answer === currentChar.romaji;

  const checkAnswer = (answer) => {
    if (isAnswerCorrect(answer)) {
      incorrect = 0;
      kana[studyChoice].chars[currentChar.index].rightCount++;
      // get next char
      setCurrentChar();
      displayChar();
    } else {
      kana[studyChoice].chars[currentChar.index].wrongCount++;
      incorrect++;
      if (incorrect > 2) {
        // get next char
        setCurrentChar();
        displayChar();
        incorrect = 0;
      } else {
        displayMessage('Try Again');
      }
    }
  }

  const end = () => {
    // todo turn off event handlers
    let mostCorrectChars = null;
    let mostIncorrectChars = null;
    displayMessage('');
  //  debugger;
    sortStats(mostCorrectChars, mostIncorrectChars);
    setStatMsg(mostCorrectChars, mostIncorrectChars);

    kanaDisplay.innerText = '';
  }

  const sortStats = (mostCorrectChars, mostIncorrectChars) => {
    const sortedCorrect = [...kana[studyChoice].chars].sort((a, b) => b.rightCount - a.rightCount);

    const sortedIncorrect = [...kana[studyChoice].chars].sort((a, b) => b.wrongCount - a.wrongCount);

    let value = sortedCorrect[0].rightCount;

    mostCorrectChars = sortedCorrect.filter(char => char.rightCount !== 0 && char.rightCount === value);

    value = sortedIncorrect[0].wrongCount;

    mostIncorrectChars = sortedIncorrect.filter(char => char.wrongCount !== 0 && char.wrongCount === value);
  };

  const setStatMsg = (mostCorrectChars, mostIncorrectChars) => {
    let msg = 'Most correct: ';
    msg += mostCorrectChars.map(char => Object.values(char)[0]);
    msg += '\nMost Incorrect: ';
    msg += mostIncorrectChars.map(char => Object.values(char)[0]);

    displayMessage(msg);
  };

  // set up buttons for user interaction
  for (let btn=0; btn< btns.length; btn++) {
    btns[btn].addEventListener('click', () => clickHandler(btns[btn], init, reset, end), false);
  }
}

app();

