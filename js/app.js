'use strict';
// to retrieve (character) as key
// > Object.keys(kana.hiragana[index])
// ["a"]

/*
  TODO
  - function to randomly choose the next character to display
      takes into account the right and wrong rightCount
        if wrong more than n times show character more frequently
        if right more than n times show character less frequently
*/
    answer,
    SIZE = 64,
    btns = document.getElementsByTagName('button'),
    studyChoice;

var kana = {
  hiragana : {
    chars : [
    // tilesheet row 1
    { "a" : , rightCount : 0, wrongCount : 0 },
    { "i" : , rightCount : 0, wrongCount : 0 },
    { "u" : , rightCount : 0, wrongCount : 0 },
    { "e" : , rightCount : 0, wrongCount : 0 },
    { "0" : {, rightCount : 0, wrongCount : 0 },
    { "ka" : , rightCount : 0, wrongCount : 0 },
    { "ki" : , rightCount : 0, wrongCount : 0 },
    { "ku" : , rightCount : 0, wrongCount : 0 },
    { "ke" : , rightCount : 0, wrongCount : 0 },
    { "ko" : , rightCount : 0, wrongCount : 0 },
    { "sa" : , rightCount : 0, wrongCount : 0 },
    { "shi" : , rightCount : 0, wrongCount : 0 },
    { "su" : , rightCount : 0, wrongCount : 0 },
    // tilesheet row 2
    { "se" : , rightCount : 0, wrongCount : 0 },
    { "so" : , rightCount : 0, wrongCount : 0 },
    { "ta" : , rightCount : 0, wrongCount : 0 },
    { "chi" : , rightCount : 0, wrongCount : 0 },
    { "tsu" : , rightCount : 0, wrongCount : 0 },
    { "te" : , rightCount : 0, wrongCount : 0 },
    { "to" : , rightCount : 0, wrongCount : 0 },
    { "na" : , rightCount : 0, wrongCount : 0 },
    { "ni" : , rightCount : 0, wrongCount : 0 },
    { "nu" : , rightCount : 0, wrongCount : 0 },
    { "ne" : , rightCount : 0, wrongCount : 0 },
    { "no" : , rightCount : 0, wrongCount : 0 },
    { "ha" : , rightCount : 0, wrongCount : 0 },
    // tilesheet row 3
    { "hi" : , rightCount : 0, wrongCount : 0 },
    { "hu" : , rightCount : 0, wrongCount : 0 },
    { "he" : , rightCount : 0, wrongCount : 0 },
    { "ho" : , rightCount : 0, wrongCount : 0 },
    { "ma" : , rightCount : 0, wrongCount : 0 },
    { "mi" : , rightCount : 0, wrongCount : 0 },
    { "mu" : , rightCount : 0, wrongCount : 0 },
    { "me" : , rightCount : 0, wrongCount : 0 },
    { "mo" : , rightCount : 0, wrongCount : 0 },
    { "ya" : , rightCount : 0, wrongCount : 0 },
    { "yu" : , rightCount : 0, wrongCount : 0 },
    { "yo" : , rightCount : 0, wrongCount : 0 },
    { "ra" : , rightCount : 0, wrongCount : 0 },
    // tilesheet row 4
    { "ri" : , rightCount : 0, wrongCount : 0 },
    { "ru" : , rightCount : 0, wrongCount : 0 },
    { "re" : , rightCount : 0, wrongCount : 0 },
    { "ro" : , rightCount : 0, wrongCount : 0 },
    { "wa" : , rightCount : 0, wrongCount : 0 },
    { "wo" : , rightCount : 0, wrongCount : 0 },
    { "n" : , rightCount : 0, wrongCount : 0 },
    { "ga" : , rightCount : 0, wrongCount : 0 },
    { "gi" : , rightCount : 0, wrongCount : 0 },
    { "gu" : , rightCount : 0, wrongCount : 0 },
    { "ge" : , rightCount : 0, wrongCount : 0 },
    { "go" : , rightCount : 0, wrongCount : 0 },
    { "za" : , rightCount : 0, wrongCount : 0 },
    // tilesheet row 5
    { "ji" : , rightCount : 0, wrongCount : 0 },
    { "zu" : , rightCount : 0, wrongCount : 0 },
    { "ze" : , rightCount : 0, wrongCount : 0 },
    { "zo" : , rightCount : 0, wrongCount : 0 },
    { "da" : , rightCount : 0, wrongCount : 0 },
    { "de" : , rightCount : 0, wrongCount : 0 },
    { "do" : , rightCount : 0, wrongCount : 0 },
    { "ba" : , rightCount : 0, wrongCount : 0 },
    { "bi" : , rightCount : 0, wrongCount : 0 },
    { "bu" : , rightCount : 0, wrongCount : 0 },
    { "be" : , rightCount : 0, wrongCount : 0 },
    { "bo" : , rightCount : 0, wrongCount : 0 },
    { "pa" : , rightCount : 0, wrongCount : 0 },
    // tilesheet row 6
    { "pi" : , rightCount : 0, wrongCount : 0 },
    { "pu" : , rightCount : 0, wrongCount : 0 },
    { "pe" : , rightCount : 0, wrongCount : 0 },
    { "po" : , rightCount : 0, wrongCount : 0 },
    { "kya" : , rightCount : 0, wrongCount : 0 },
    { "kyu" : , rightCount : 0, wrongCount : 0 },
    { "kyo" : , rightCount : 0, wrongCount : 0 },
    { "sha" : , rightCount : 0, wrongCount : 0 },
    { "shu" : , rightCount : 0, wrongCount : 0 },
    { "sho" : , rightCount : 0, wrongCount : 0 },
    { "cha" : , rightCount : 0, wrongCount : 0 },
    { "chu" : , rightCount : 0, wrongCount : 0 },
    { "cho" : , rightCount : 0, wrongCount : 0 },
    // tilesheet row 7
    { "nya" : , rightCount : 0, wrongCount : 0 },
    { "nyu" : , rightCount : 0, wrongCount : 0 },
    { "nyo" : , rightCount : 0, wrongCount : 0 },
    { "hya" : , rightCount : 0, wrongCount : 0 },
    { "hyu" : , rightCount : 0, wrongCount : 0 },
    { "hyo" : , rightCount : 0, wrongCount : 0 },
    { "mya" : , rightCount : 0, wrongCount : 0 },
    { "myu" : , rightCount : 0, wrongCount : 0 },
    { "myo" : , rightCount : 0, wrongCount : 0 },
    { "rya" : , rightCount : 0, wrongCount : 0 },
    { "ryu" : , rightCount : 0, wrongCount : 0 },
    { "ryo" : , rightCount : 0, wrongCount : 0 },
    { "fa" : , rightCount : 0, wrongCount : 0 },
    // tilesheet row 8
    { "fi" : , rightCount : 0, wrongCount : 0 },
    { "fe" : , rightCount : 0, wrongCount : 0 },
    { "fo" : , rightCount : 0, wrongCount : 0 },
    { "va" : , rightCount : 0, wrongCount : 0 },
    { "vi" : , rightCount : 0, wrongCount : 0 },
    { "ve" : , rightCount : 0, wrongCount : 0 },
    { "vo" : , rightCount : 0, wrongCount : 0 }
  ]},
  katakana : {
    chars : []
  }
}

function init() {
  answer = document.getElementById('answer').focus();
}

window.onload = function() {
  init();

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', clickHandler, false);
  }
}

function clickHandler(e) {
  var elementClicked = e.target;

  if (elementClicked.className === 'hira-btn') {
    studyChoice = 'hiragana';
  }

  if (elementClicked.className === 'kata-btn') {
    console.log('katakana');
    studyChoice = 'katakana';
  }
}

// return a random number dependent on the length of the character study choice array
function randomChar() {
  var length = kana[studyChoice].chars.length;
  return Math.floor(Math.random() * length);
}
