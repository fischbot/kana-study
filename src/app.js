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
    // let mostCorrectChars = null;
    // let mostIncorrectChars = null;
    displayMessage('');
  //  debugger;
    const mostCorrectChars = sortStats('rightCount');
    const mostIncorrectChars = sortStats('wrongCount');
    setStatMsg(mostCorrectChars, mostIncorrectChars);
    kanaDisplay.innerText = '';
  }

  const sortStats = (countType) => {
    const sorted = [...kana[studyChoice].chars].sort((a, b) => b[countType] - a[countType]);
    let value = sorted[0][countType];
    return sorted.filter(char => char[countType] !== 0 && char[countType] === value);
  };

  const setStatMsg = (correct, incorrect) => {
    let msg = 'Most correct: ';
    msg += correct.map(char => Object.values(char)[0]);
    msg += '\nMost Incorrect: ';
    msg += incorrect.map(char => Object.values(char)[0]);

    displayMessage(msg);
  };

  // set up buttons for user interaction
  for (let btn=0; btn< btns.length; btn++) {
    btns[btn].addEventListener('click', () => clickHandler(btns[btn], init, reset, end), false);
  }
}

app();

