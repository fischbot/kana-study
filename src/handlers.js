import { showHideToggle } from './assets/helpers.js';

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

// const keydownHandler = (checkAnswer) => {
//   if (e.key === 'Enter') {
//     console.log(e.target.value)
//     // checkAnswer(e.target.value);
//   }
// };

const toggleHandler = (btns) => {
  btns.forEach(btn => showHideToggle(btn.id));
  showHideToggle('study-choice-msg');
};

export { clickHandler, toggleHandler };