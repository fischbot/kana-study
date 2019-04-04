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
    // hide choices & show end / reset
    toggleHandler(btns);
    // set study track
    studyChoice = setStudyPath(btn.id);
    setCurrentChar();
    displayChar();
    setupAnswerInput(answerInput, checkAnswer);
  };

  const instructions = () => {
    return 'Select either hiragana or katakana to study. Enter your answer in romaji.';
  }

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
    kanaDisplay.innerText = '';
    displayMessage(''); // clear most correct/ incorrect msg
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
    displayMessage('');
    const mostCorrectChars = sortStats('rightCount');
    const mostIncorrectChars = sortStats('wrongCount');

    kanaDisplay.innerText = '';
    let msg = setStatMsg(mostCorrectChars, mostIncorrectChars);
    displayMessage(msg);
  }

  const sortStats = (countType) => {
    const sorted = [...kana[studyChoice].chars].sort((a, b) => b[countType] - a[countType]);
    let value = sorted[0][countType];
    return sorted.filter(char => char[countType] !== 0 && char[countType] === value);
  };

  const setStatMsg = (correct, incorrect) => {
    let msg = 'Most Correct: ';
    msg += correct.length > 0 ? correct.map(char => Object.values(char)[0]) : 'None right. Try again. :(';
    msg += '\nMost Incorrect: ';
    msg += incorrect.length > 0 ? incorrect.map(char => Object.values(char)[0]) : 'None wrong. Great Job! :D'

    return msg;
  };

  // set up buttons for user interaction
  for (let btn=0; btn< btns.length; btn++) {
    btns[btn].addEventListener('click', () => clickHandler(btns[btn], init, reset, end), false);
  }

  // setup input handler
  answerInput.addEventListener('keydown', (e) => keydownHandler(e, checkAnswer), false);

  displayMessage(instructions());
}

app();

