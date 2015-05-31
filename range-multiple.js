window.RangeMultiple = class RangeMultiple {
	constructor(el) {
		this.el = el;
		var div = document.createElement('div');
		div.style.backgroundColor = 'blue';
		div.style.height = '18px';
		div.appendChild(document.createElement('div'));
		el.parentNode.insertBefore(div, el.nextSibling);
	}

	render() {

	}
}
