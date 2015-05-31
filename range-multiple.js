window.RangeMultiple = class RangeMultiple {
  constructor(el) {
    this.el = el;
    var div = document.createElement('div');
    div.className = 'rmultiple';
    div.appendChild(document.createElement('div'));
    el.parentNode.insertBefore(div, el.nextSibling);
  }

  render() {

  }
}
