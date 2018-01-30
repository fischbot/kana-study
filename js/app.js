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
var canvas,
    canvasContext,
    answer,
    image,
    SIZE = 64,
    btns = document.getElementsByTagName('button'),
    studyChoice;

var kana = {
  hiragana : {
    chars : [
    // tilesheet row 1
    { "a" : {x : 0, y : 0}, rightCount : 0, wrongCount : 0 },
    { "i" : {x : 64, y : 0}, rightCount : 0, wrongCount : 0 },
    { "u" : {x : 128, y : 0}, rightCount : 0, wrongCount : 0 },
    { "e" : {x : 192, y : 0}, rightCount : 0, wrongCount : 0 },
    { "0" : {x : 256, y : 0}, rightCount : 0, wrongCount : 0 },
    { "ka" : {x : 320, y : 0}, rightCount : 0, wrongCount : 0 },
    { "ki" : {x : 384, y : 0}, rightCount : 0, wrongCount : 0 },
    { "ku" : {x : 448, y : 0}, rightCount : 0, wrongCount : 0 },
    { "ke" : {x : 512, y : 0}, rightCount : 0, wrongCount : 0 },
    { "ko" : {x : 576, y : 0}, rightCount : 0, wrongCount : 0 },
    { "sa" : {x : 640, y : 0}, rightCount : 0, wrongCount : 0 },
    { "shi" : {x : 704, y : 0}, rightCount : 0, wrongCount : 0 },
    { "su" : {x : 768, y : 0}, rightCount : 0, wrongCount : 0 },
    // tilesheet row 2
    { "se" : {x : 0, y : 64}, rightCount : 0, wrongCount : 0 },
    { "so" : {x : 64, y : 64}, rightCount : 0, wrongCount : 0 },
    { "ta" : {x : 128, y : 64}, rightCount : 0, wrongCount : 0 },
    { "chi" : {x : 192, y : 64}, rightCount : 0, wrongCount : 0 },
    { "tsu" : {x : 256, y : 64}, rightCount : 0, wrongCount : 0 },
    { "te" : {x : 320, y : 64}, rightCount : 0, wrongCount : 0 },
    { "to" : {x : 384, y : 64}, rightCount : 0, wrongCount : 0 },
    { "na" : {x : 448, y : 64}, rightCount : 0, wrongCount : 0 },
    { "ni" : {x : 512, y : 64}, rightCount : 0, wrongCount : 0 },
    { "nu" : {x : 576, y : 64}, rightCount : 0, wrongCount : 0 },
    { "ne" : {x : 640, y : 64}, rightCount : 0, wrongCount : 0 },
    { "no" : {x : 704, y : 64}, rightCount : 0, wrongCount : 0 },
    { "ha" : {x : 768, y : 64}, rightCount : 0, wrongCount : 0 },
    // tilesheet row 3
    { "hi" : {x : 0, y : 128}, rightCount : 0, wrongCount : 0 },
    { "hu" : {x : 64, y : 128}, rightCount : 0, wrongCount : 0 },
    { "he" : {x : 128, y : 128}, rightCount : 0, wrongCount : 0 },
    { "ho" : {x : 192, y : 128}, rightCount : 0, wrongCount : 0 },
    { "ma" : {x : 256, y : 128}, rightCount : 0, wrongCount : 0 },
    { "mi" : {x : 320, y : 128}, rightCount : 0, wrongCount : 0 },
    { "mu" : {x : 384, y : 128}, rightCount : 0, wrongCount : 0 },
    { "me" : {x : 448, y : 128}, rightCount : 0, wrongCount : 0 },
    { "mo" : {x : 512, y : 128}, rightCount : 0, wrongCount : 0 },
    { "ya" : {x : 576, y : 128}, rightCount : 0, wrongCount : 0 },
    { "yu" : {x : 640, y : 128}, rightCount : 0, wrongCount : 0 },
    { "yo" : {x : 704, y : 128}, rightCount : 0, wrongCount : 0 },
    { "ra" : {x : 768, y : 128}, rightCount : 0, wrongCount : 0 },
    // tilesheet row 4
    { "ri" : {x : 0, y : 192}, rightCount : 0, wrongCount : 0 },
    { "ru" : {x : 64, y : 192}, rightCount : 0, wrongCount : 0 },
    { "re" : {x : 128, y : 192}, rightCount : 0, wrongCount : 0 },
    { "ro" : {x : 192, y : 192}, rightCount : 0, wrongCount : 0 },
    { "wa" : {x : 256, y : 192}, rightCount : 0, wrongCount : 0 },
    { "wo" : {x : 320, y : 192}, rightCount : 0, wrongCount : 0 },
    { "n" : {x : 384, y : 192}, rightCount : 0, wrongCount : 0 },
    { "ga" : {x : 448, y : 192}, rightCount : 0, wrongCount : 0 },
    { "gi" : {x : 512, y : 192}, rightCount : 0, wrongCount : 0 },
    { "gu" : {x : 576, y : 192}, rightCount : 0, wrongCount : 0 },
    { "ge" : {x : 640, y : 192}, rightCount : 0, wrongCount : 0 },
    { "go" : {x : 704, y : 192}, rightCount : 0, wrongCount : 0 },
    { "za" : {x : 768, y : 192}, rightCount : 0, wrongCount : 0 },
    // tilesheet row 5
    { "ji" : {x : 0, y : 256}, rightCount : 0, wrongCount : 0 },
    { "zu" : {x : 64, y : 256}, rightCount : 0, wrongCount : 0 },
    { "ze" : {x : 128, y : 256}, rightCount : 0, wrongCount : 0 },
    { "zo" : {x : 192, y : 256}, rightCount : 0, wrongCount : 0 },
    { "da" : {x : 256, y : 256}, rightCount : 0, wrongCount : 0 },
    { "de" : {x : 320, y : 256}, rightCount : 0, wrongCount : 0 },
    { "do" : {x : 384, y : 256}, rightCount : 0, wrongCount : 0 },
    { "ba" : {x : 448, y : 256}, rightCount : 0, wrongCount : 0 },
    { "bi" : {x : 512, y : 256}, rightCount : 0, wrongCount : 0 },
    { "bu" : {x : 576, y : 256}, rightCount : 0, wrongCount : 0 },
    { "be" : {x : 640, y : 256}, rightCount : 0, wrongCount : 0 },
    { "bo" : {x : 704, y : 256}, rightCount : 0, wrongCount : 0 },
    { "pa" : {x : 768, y : 256}, rightCount : 0, wrongCount : 0 },
    // tilesheet row 6
    { "pi" : {x : 0, y : 320}, rightCount : 0, wrongCount : 0 },
    { "pu" : {x : 64, y : 320}, rightCount : 0, wrongCount : 0 },
    { "pe" : {x : 128, y : 320}, rightCount : 0, wrongCount : 0 },
    { "po" : {x : 192, y : 320}, rightCount : 0, wrongCount : 0 },
    { "kya" : {x : 256, y : 320}, rightCount : 0, wrongCount : 0 },
    { "kyu" : {x : 320, y : 320}, rightCount : 0, wrongCount : 0 },
    { "kyo" : {x : 384, y : 320}, rightCount : 0, wrongCount : 0 },
    { "sha" : {x : 448, y : 320}, rightCount : 0, wrongCount : 0 },
    { "shu" : {x : 512, y : 320}, rightCount : 0, wrongCount : 0 },
    { "sho" : {x : 576, y : 320}, rightCount : 0, wrongCount : 0 },
    { "cha" : {x : 640, y : 320}, rightCount : 0, wrongCount : 0 },
    { "chu" : {x : 704, y : 320}, rightCount : 0, wrongCount : 0 },
    { "cho" : {x : 768, y : 320}, rightCount : 0, wrongCount : 0 },
    // tilesheet row 7
    { "nya" : {x : 0, y : 384}, rightCount : 0, wrongCount : 0 },
    { "nyu" : {x : 64, y : 384}, rightCount : 0, wrongCount : 0 },
    { "nyo" : {x : 128, y : 384}, rightCount : 0, wrongCount : 0 },
    { "hya" : {x : 192, y : 384}, rightCount : 0, wrongCount : 0 },
    { "hyu" : {x : 256, y : 384}, rightCount : 0, wrongCount : 0 },
    { "hyo" : {x : 320, y : 384}, rightCount : 0, wrongCount : 0 },
    { "mya" : {x : 384, y : 384}, rightCount : 0, wrongCount : 0 },
    { "myu" : {x : 448, y : 384}, rightCount : 0, wrongCount : 0 },
    { "myo" : {x : 512, y : 384}, rightCount : 0, wrongCount : 0 },
    { "rya" : {x : 576, y : 384}, rightCount : 0, wrongCount : 0 },
    { "ryu" : {x : 640, y : 384}, rightCount : 0, wrongCount : 0 },
    { "ryo" : {x : 704, y : 384}, rightCount : 0, wrongCount : 0 },
    { "fa" : {x : 768, y : 384}, rightCount : 0, wrongCount : 0 },
    // tilesheet row 8
    { "fi" : {x : 768, y : 448}, rightCount : 0, wrongCount : 0 },
    { "fe" : {x : 384, y : 448}, rightCount : 0, wrongCount : 0 },
    { "fo" : {x : 448, y : 448}, rightCount : 0, wrongCount : 0 },
    { "va" : {x : 512, y : 448}, rightCount : 0, wrongCount : 0 },
    { "vi" : {x : 576, y : 448}, rightCount : 0, wrongCount : 0 },
    { "ve" : {x : 640, y : 448}, rightCount : 0, wrongCount : 0 },
    { "vo" : {x : 704, y : 448}, rightCount : 0, wrongCount : 0 }
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
