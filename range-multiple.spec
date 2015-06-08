var jsdom = require('mocha-jsdom');
var assert = require("assert");

describe('range-multiple', function(){
	jsdom('<body></body>');

	before(function(done) {
		require('./dist/range-multiple');
		document.querySelector('body').innerHTML = '<input type="hidden" data-toggle="range-multiple" multiple min="0" max="24" value="5.5,20" step="0.5">';
		new window.rangeMultiple(document.querySelector('[data-toggle=range-multiple]'));
		done();
	});

	describe('constructor', function() {
		it('should create shadow elements', function() {
			var inputs = document.querySelectorAll('.rmultiple input[class*=range]');
			assert.equal(document.querySelectorAll('.rmultiple').length, 1);
			assert.equal(inputs.length, 2);
			[].forEach.call(inputs, function(item){
				assert.equal(item.type, 'range');
			})
		});
		it('should propagate initial values', function(){
			var inputs = document.querySelectorAll('.rmultiple input[class*=range]');
			assert.equal(inputs[0].value, 5.5);
			assert.equal(inputs[1].value, 20);
		});
	});
});