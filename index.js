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
