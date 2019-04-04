import { showHideToggle, displayMessage } from './assets/helpers.js';
const clickHandler = (btn, init, reset, end) => {
  if (btn.id === 'hira-btn' || btn.id === 'kata-btn') {
    init(btn);
  }

  if (btn.id === 'reset-btn') {
    reset(btn);
  }

  if (btn.id === 'end-btn') {
    end();
  }
}

const keydownHandler = (e, checkAnswer) => {
  if (e.key === 'Enter') {
    if (e.target.value === '') {
      displayMessage('Enter your answer in romaji');
      return;
    }
    checkAnswer(e.target.value.toLowerCase());
    e.target.value = '';
  }
};

const toggleHandler = (btns) => {
  btns.forEach(btn => showHideToggle(btn.id));
  showHideToggle('study-choice-msg');
};

export { clickHandler, keydownHandler, toggleHandler };