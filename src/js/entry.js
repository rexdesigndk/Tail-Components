import Prism from 'prismjs';

var Normalizer = require('prismjs/plugins/normalize-whitespace/prism-normalize-whitespace');

Prism.highlightAll();

var nw = new Normalizer({
	'remove-trailing': true,
	'remove-indent': true,
	'left-trim': true,
	'right-trim': true
});

