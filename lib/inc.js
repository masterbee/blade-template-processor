/**
 * If / Else Loop Parser
 */

var _include = Object.create(require('./base'));

_include.name = 'Include';
_include.regex = /\@include\((["'])(.*?)(\1)\)/g;

module.exports = include;