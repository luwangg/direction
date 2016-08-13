/**
 * @author Titus Wormer
 * @copyright 2014 Titus Wormer
 * @license MIT
 * @module direction
 * @fileoverview Detect directionality: left-to-right,
 *   right-to-left, or neutral.
 */

'use strict';

/* Expose. */
module.exports = direction;

/* Ranges. */
var RTL = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC';
var LTR = 'A-Za-z\u00C0-\u00D6\u00D8-\u00F6' +
  '\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C' +
  '\uFE00-\uFE6F\uFEFD-\uFFFF';

/* Expressions. */
var rtl = new RegExp('^[^' + LTR + ']*[' + RTL + ']');
var ltr = new RegExp('^[^' + RTL + ']*[' + LTR + ']');

/**
 * Detect directionality.
 *
 * @param {string} value - Value to check.
 * @return {string} - One of `'rtl'`, `'ltr'`, or `'neutral'`.
 */
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
