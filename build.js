(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/* Dependencies. */
var direction = require('direction');

/* Nodes. */
var $input = document.getElementsByTagName('textarea')[0];
var $output = document.getElementsByTagName('output')[0];

/* Listen. */
$input.addEventListener('input', oninputchange);

/* Initial answer. */
oninputchange();

/* Calculate. */
function oninputchange() {
  $output.textContent = direction($input.value);
}

},{"direction":2}],2:[function(require,module,exports){
'use strict';

module.exports = direction;

var RTL = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC';
var LTR = 'A-Za-z\u00C0-\u00D6\u00D8-\u00F6' +
  '\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C' +
  '\uFE00-\uFE6F\uFEFD-\uFFFF';

var rtl = new RegExp('^[^' + LTR + ']*[' + RTL + ']');
var ltr = new RegExp('^[^' + RTL + ']*[' + LTR + ']');

function direction(value) {
  value = String(value || '');

  if (rtl.test(value)) {
    return 'rtl';
  }

  if (ltr.test(value)) {
    return 'ltr';
  }

  return 'neutral';
}

},{}]},{},[1]);
