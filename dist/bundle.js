/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_kana_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


var app = function app() {
  var btns = document.getElementsByTagName('button');
  var kanaDisplay = document.getElementById('kana-display');
  var message = document.getElementById('message');
  var SIZE = 64;

  var start = function start() {
    // btns.forEach(btn => btn.addEventListener('click', () => alert('clicked', btn)))
    console.log(btns);
  };

  start();
};

app();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hiragana", function() { return hiragana; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "katakana", function() { return katakana; });
var hiragana = [{
  "a": "あ",
  rightCount: 0,
  wrongCount: 0
}, {
  "i": "い",
  rightCount: 0,
  wrongCount: 0
}, {
  "u": "う",
  rightCount: 0,
  wrongCount: 0
}, {
  "e": "え",
  rightCount: 0,
  wrongCount: 0
}, {
  "o": "お",
  rightCount: 0,
  wrongCount: 0
}, {
  "ka": "か",
  rightCount: 0,
  wrongCount: 0
}, {
  "ki": "き",
  rightCount: 0,
  wrongCount: 0
}, {
  "ku": "く",
  rightCount: 0,
  wrongCount: 0
}, {
  "ke": "け",
  rightCount: 0,
  wrongCount: 0
}, {
  "ko": "こ",
  rightCount: 0,
  wrongCount: 0
}, {
  "sa": "さ",
  rightCount: 0,
  wrongCount: 0
}, {
  "shi": "し",
  rightCount: 0,
  wrongCount: 0
}, {
  "su": "す",
  rightCount: 0,
  wrongCount: 0
}, {
  "se": "せ",
  rightCount: 0,
  wrongCount: 0
}, {
  "so": "そ",
  rightCount: 0,
  wrongCount: 0
}, {
  "ta": "た",
  rightCount: 0,
  wrongCount: 0
}, {
  "chi": "ち",
  rightCount: 0,
  wrongCount: 0
}, {
  "tsu": "つ",
  rightCount: 0,
  wrongCount: 0
}, {
  "te": "て",
  rightCount: 0,
  wrongCount: 0
}, {
  "to": "と",
  rightCount: 0,
  wrongCount: 0
}, {
  "na": "な",
  rightCount: 0,
  wrongCount: 0
}, {
  "ni": "に",
  rightCount: 0,
  wrongCount: 0
}, {
  "nu": "ぬ",
  rightCount: 0,
  wrongCount: 0
}, {
  "ne": "ね",
  rightCount: 0,
  wrongCount: 0
}, {
  "no": "の",
  rightCount: 0,
  wrongCount: 0
}, {
  "ha": "は",
  rightCount: 0,
  wrongCount: 0
}, {
  "hi": "ひ",
  rightCount: 0,
  wrongCount: 0
}, {
  "hu": "ふ",
  rightCount: 0,
  wrongCount: 0
}, {
  "he": "へ",
  rightCount: 0,
  wrongCount: 0
}, {
  "ho": "ほ",
  rightCount: 0,
  wrongCount: 0
}, {
  "ma": "ま",
  rightCount: 0,
  wrongCount: 0
}, {
  "mi": "み",
  rightCount: 0,
  wrongCount: 0
}, {
  "mu": "む",
  rightCount: 0,
  wrongCount: 0
}, {
  "me": "め",
  rightCount: 0,
  wrongCount: 0
}, {
  "mo": "も",
  rightCount: 0,
  wrongCount: 0
}, {
  "ya": "や",
  rightCount: 0,
  wrongCount: 0
}, {
  "yu": "ゆ",
  rightCount: 0,
  wrongCount: 0
}, {
  "yo": "よ",
  rightCount: 0,
  wrongCount: 0
}, {
  "ra": "ら",
  rightCount: 0,
  wrongCount: 0
}, {
  "ri": "り",
  rightCount: 0,
  wrongCount: 0
}, {
  "ru": "る",
  rightCount: 0,
  wrongCount: 0
}, {
  "re": "れ",
  rightCount: 0,
  wrongCount: 0
}, {
  "ro": "ろ",
  rightCount: 0,
  wrongCount: 0
}, {
  "wa": "わ",
  rightCount: 0,
  wrongCount: 0
}, {
  "wo": "を",
  rightCount: 0,
  wrongCount: 0
}, {
  "n": "ん",
  rightCount: 0,
  wrongCount: 0
}, {
  "ga": "が",
  rightCount: 0,
  wrongCount: 0
}, {
  "gi": "ぎ",
  rightCount: 0,
  wrongCount: 0
}, {
  "gu": "ぐ",
  rightCount: 0,
  wrongCount: 0
}, {
  "ge": "げ",
  rightCount: 0,
  wrongCount: 0
}, {
  "go": "ご",
  rightCount: 0,
  wrongCount: 0
}, {
  "za": "ざ",
  rightCount: 0,
  wrongCount: 0
}, {
  "ji": "じ",
  rightCount: 0,
  wrongCount: 0
}, {
  "zu": "ず",
  rightCount: 0,
  wrongCount: 0
}, {
  "ze": "ぜ",
  rightCount: 0,
  wrongCount: 0
}, {
  "zo": "ぞ",
  rightCount: 0,
  wrongCount: 0
}, {
  "da": "だ",
  rightCount: 0,
  wrongCount: 0
}, {
  "de": "で",
  rightCount: 0,
  wrongCount: 0
}, {
  "do": "ど",
  rightCount: 0,
  wrongCount: 0
}, {
  "ba": "ば",
  rightCount: 0,
  wrongCount: 0
}, {
  "bi": "び",
  rightCount: 0,
  wrongCount: 0
}, {
  "bu": "ぶ",
  rightCount: 0,
  wrongCount: 0
}, {
  "be": "べ",
  rightCount: 0,
  wrongCount: 0
}, {
  "bo": "ぼ",
  rightCount: 0,
  wrongCount: 0
}, {
  "pa": "ぱ",
  rightCount: 0,
  wrongCount: 0
}, {
  "pi": "ぴ",
  rightCount: 0,
  wrongCount: 0
}, {
  "pu": "ぷ",
  rightCount: 0,
  wrongCount: 0
}, {
  "pe": "ぺ",
  rightCount: 0,
  wrongCount: 0
}, {
  "po": "ぽ",
  rightCount: 0,
  wrongCount: 0
}, {
  "kya": "きゃ",
  rightCount: 0,
  wrongCount: 0
}, {
  "kyu": "きゅ",
  rightCount: 0,
  wrongCount: 0
}, {
  "kyo": "きょ",
  rightCount: 0,
  wrongCount: 0
}, {
  "sha": "しゃ",
  rightCount: 0,
  wrongCount: 0
}, {
  "shu": "しゅ",
  rightCount: 0,
  wrongCount: 0
}, {
  "sho": "しょ",
  rightCount: 0,
  wrongCount: 0
}, {
  "cha": "ちゃ",
  rightCount: 0,
  wrongCount: 0
}, {
  "chu": "ちゅ",
  rightCount: 0,
  wrongCount: 0
}, {
  "cho": "ちょ",
  rightCount: 0,
  wrongCount: 0
}, {
  "nya": "にゃ",
  rightCount: 0,
  wrongCount: 0
}, {
  "nyu": "にゅ",
  rightCount: 0,
  wrongCount: 0
}, {
  "nyo": "にょ",
  rightCount: 0,
  wrongCount: 0
}, {
  "hya": "ひゃ",
  rightCount: 0,
  wrongCount: 0
}, {
  "hyu": "ひゅ",
  rightCount: 0,
  wrongCount: 0
}, {
  "hyo": "ひょ",
  rightCount: 0,
  wrongCount: 0
}, {
  "mya": "みゃ",
  rightCount: 0,
  wrongCount: 0
}, {
  "myu": "みゅ",
  rightCount: 0,
  wrongCount: 0
}, {
  "myo": "みょ",
  rightCount: 0,
  wrongCount: 0
}, {
  "rya": "りゃ",
  rightCount: 0,
  wrongCount: 0
}, {
  "ryu": "りゅ",
  rightCount: 0,
  wrongCount: 0
}, {
  "ryo": "りょ",
  rightCount: 0,
  wrongCount: 0
}, {
  "fa": "ふぁ",
  rightCount: 0,
  wrongCount: 0
}, {
  "fi": "ふぃ",
  rightCount: 0,
  wrongCount: 0
}, {
  "fe": "ふぇ",
  rightCount: 0,
  wrongCount: 0
}, {
  "fo": "ふぉ",
  rightCount: 0,
  wrongCount: 0
}, {
  "va": "ゔぁ",
  rightCount: 0,
  wrongCount: 0
}, {
  "vi": "ゔぃ",
  rightCount: 0,
  wrongCount: 0
}, {
  "ve": "ゔぇ",
  rightCount: 0,
  wrongCount: 0
}, {
  "vo": "ゔぉ",
  rightCount: 0,
  wrongCount: 0
}];
var katakana = [{
  "a": "ア",
  rightCount: 0,
  wrongCount: 0
}, {
  "i": "イ",
  rightCount: 0,
  wrongCount: 0
}, {
  "u": "ウ",
  rightCount: 0,
  wrongCount: 0
}, {
  "e": "エ",
  rightCount: 0,
  wrongCount: 0
}, {
  "0": "オ",
  rightCount: 0,
  wrongCount: 0
}, {
  "ka": "カ",
  rightCount: 0,
  wrongCount: 0
}, {
  "ki": "キ",
  rightCount: 0,
  wrongCount: 0
}, {
  "ku": "ク",
  rightCount: 0,
  wrongCount: 0
}, {
  "ke": "ケ",
  rightCount: 0,
  wrongCount: 0
}, {
  "ko": "コ",
  rightCount: 0,
  wrongCount: 0
}, {
  "sa": "サ",
  rightCount: 0,
  wrongCount: 0
}, {
  "shi": "シ",
  rightCount: 0,
  wrongCount: 0
}, {
  "su": "ス",
  rightCount: 0,
  wrongCount: 0
}, {
  "se": "セ",
  rightCount: 0,
  wrongCount: 0
}, {
  "so": "ソ",
  rightCount: 0,
  wrongCount: 0
}, {
  "ta": "タ",
  rightCount: 0,
  wrongCount: 0
}, {
  "chi": "チ",
  rightCount: 0,
  wrongCount: 0
}, {
  "tsu": "ツ",
  rightCount: 0,
  wrongCount: 0
}, {
  "te": "テ",
  rightCount: 0,
  wrongCount: 0
}, {
  "to": "ト",
  rightCount: 0,
  wrongCount: 0
}, {
  "na": "ナ",
  rightCount: 0,
  wrongCount: 0
}, {
  "ni": "ニ",
  rightCount: 0,
  wrongCount: 0
}, {
  "nu": "ヌ",
  rightCount: 0,
  wrongCount: 0
}, {
  "ne": "ネ",
  rightCount: 0,
  wrongCount: 0
}, {
  "no": "ノ",
  rightCount: 0,
  wrongCount: 0
}, {
  "ha": "ハ",
  rightCount: 0,
  wrongCount: 0
}, {
  "hi": "ヒ",
  rightCount: 0,
  wrongCount: 0
}, {
  "hu": "フ",
  rightCount: 0,
  wrongCount: 0
}, {
  "he": "ヘ",
  rightCount: 0,
  wrongCount: 0
}, {
  "ho": "ホ",
  rightCount: 0,
  wrongCount: 0
}, {
  "ma": "マ",
  rightCount: 0,
  wrongCount: 0
}, {
  "mi": "ミ",
  rightCount: 0,
  wrongCount: 0
}, {
  "mu": "ム",
  rightCount: 0,
  wrongCount: 0
}, {
  "me": "メ",
  rightCount: 0,
  wrongCount: 0
}, {
  "mo": "モ",
  rightCount: 0,
  wrongCount: 0
}, {
  "ya": "ヤ",
  rightCount: 0,
  wrongCount: 0
}, {
  "yu": "ユ",
  rightCount: 0,
  wrongCount: 0
}, {
  "yo": "ヨ",
  rightCount: 0,
  wrongCount: 0
}, {
  "ra": "ラ",
  rightCount: 0,
  wrongCount: 0
}, {
  "ri": "リ",
  rightCount: 0,
  wrongCount: 0
}, {
  "ru": "ル",
  rightCount: 0,
  wrongCount: 0
}, {
  "re": "レ",
  rightCount: 0,
  wrongCount: 0
}, {
  "ro": "ロ",
  rightCount: 0,
  wrongCount: 0
}, {
  "wa": "ワ",
  rightCount: 0,
  wrongCount: 0
}, {
  "wo": "ヲ",
  rightCount: 0,
  wrongCount: 0
}, {
  "n": "ン",
  rightCount: 0,
  wrongCount: 0
}, {
  "ga": "ガ",
  rightCount: 0,
  wrongCount: 0
}, {
  "gi": "ギ",
  rightCount: 0,
  wrongCount: 0
}, {
  "gu": "グ",
  rightCount: 0,
  wrongCount: 0
}, {
  "ge": "ゲ",
  rightCount: 0,
  wrongCount: 0
}, {
  "go": "ゴ",
  rightCount: 0,
  wrongCount: 0
}, {
  "za": "ザ",
  rightCount: 0,
  wrongCount: 0
}, {
  "ji": "ジ",
  rightCount: 0,
  wrongCount: 0
}, {
  "zu": "ズ",
  rightCount: 0,
  wrongCount: 0
}, {
  "ze": "ゼ",
  rightCount: 0,
  wrongCount: 0
}, {
  "zo": "ゾ",
  rightCount: 0,
  wrongCount: 0
}, {
  "da": "ダ",
  rightCount: 0,
  wrongCount: 0
}, {
  "de": "デ",
  rightCount: 0,
  wrongCount: 0
}, {
  "do": "ド",
  rightCount: 0,
  wrongCount: 0
}, {
  "ba": "バ",
  rightCount: 0,
  wrongCount: 0
}, {
  "bi": "ビ",
  rightCount: 0,
  wrongCount: 0
}, {
  "bu": "ブ",
  rightCount: 0,
  wrongCount: 0
}, {
  "be": "ベ",
  rightCount: 0,
  wrongCount: 0
}, {
  "bo": "ボ",
  rightCount: 0,
  wrongCount: 0
}, {
  "pa": "パ",
  rightCount: 0,
  wrongCount: 0
}, {
  "pi": "ピ",
  rightCount: 0,
  wrongCount: 0
}, {
  "pu": "プ",
  rightCount: 0,
  wrongCount: 0
}, {
  "pe": "ペ",
  rightCount: 0,
  wrongCount: 0
}, {
  "po": "ポ",
  rightCount: 0,
  wrongCount: 0
}, {
  "kya": "キャ",
  rightCount: 0,
  wrongCount: 0
}, {
  "kyu": "キュ",
  rightCount: 0,
  wrongCount: 0
}, {
  "kyo": "キョ",
  rightCount: 0,
  wrongCount: 0
}, {
  "sha": "シャ",
  rightCount: 0,
  wrongCount: 0
}, {
  "shu": "シュ",
  rightCount: 0,
  wrongCount: 0
}, {
  "sho": "ショ",
  rightCount: 0,
  wrongCount: 0
}, {
  "cha": "チャ",
  rightCount: 0,
  wrongCount: 0
}, {
  "chu": "チュ",
  rightCount: 0,
  wrongCount: 0
}, {
  "cho": "チョ",
  rightCount: 0,
  wrongCount: 0
}, {
  "nya": "ニャ",
  rightCount: 0,
  wrongCount: 0
}, {
  "nyu": "ニュ",
  rightCount: 0,
  wrongCount: 0
}, {
  "nyo": "ニョ",
  rightCount: 0,
  wrongCount: 0
}, {
  "hya": "ヒャ",
  rightCount: 0,
  wrongCount: 0
}, {
  "hyu": "ヒュ",
  rightCount: 0,
  wrongCount: 0
}, {
  "hyo": "ヒョ",
  rightCount: 0,
  wrongCount: 0
}, {
  "mya": "ミャ",
  rightCount: 0,
  wrongCount: 0
}, {
  "myu": "ミュ",
  rightCount: 0,
  wrongCount: 0
}, {
  "myo": "ミョ",
  rightCount: 0,
  wrongCount: 0
}, {
  "rya": "リャ",
  rightCount: 0,
  wrongCount: 0
}, {
  "ryu": "リュ",
  rightCount: 0,
  wrongCount: 0
}, {
  "ryo": "リョ",
  rightCount: 0,
  wrongCount: 0
}, {
  "fa": "ファ",
  rightCount: 0,
  wrongCount: 0
}, {
  "fi": "フィ",
  rightCount: 0,
  wrongCount: 0
}, {
  "fe": "フェ",
  rightCount: 0,
  wrongCount: 0
}, {
  "fo": "フォ",
  rightCount: 0,
  wrongCount: 0
}, {
  "va": "ヴァ",
  rightCount: 0,
  wrongCount: 0
}, {
  "vi": "ヴィ",
  rightCount: 0,
  wrongCount: 0
}, {
  "ve": "ヴェ",
  rightCount: 0,
  wrongCount: 0
}, {
  "vo": "ヴォ",
  rightCount: 0,
  wrongCount: 0
}];


/***/ })
/******/ ]);