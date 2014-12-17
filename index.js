'use strict';

/*
 * Dependencies.
 */

var direction = require('wooorm/direction@0.1.5');

/*
 * DOM elements.
 */

var $input = document.getElementsByTagName('textarea')[0];
var $output = document.getElementsByTagName('output')[0];

/*
 * Helper.
 */

function sum(a, b) {
    return a + b;
}

/*
 * Handler.
 */

function oninputchange() {
    $output.textContent = direction($input.value);
}

/*
 * Attach handler.
 */

$input.addEventListener('input', oninputchange);

/*
 * Initial answer.
 */

oninputchange();
