import Prism from 'prismjs';

var Normalizer = require('prismjs/plugins/normalize-whitespace/prism-normalize-whitespace');
var KeepMarkup = require('prismjs/plugins/keep-markup/prism-keep-markup');

Prism.highlightAll();

var nw = new Normalizer({
	'remove-trailing': true,
	'remove-indent': true,
	'left-trim': true,
	'right-trim': true
});

