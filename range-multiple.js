window.rangeMultiple = function(el, opts = {}) {
  opts.min = opts.min || el.attributes.min.value || undefined;
  opts.max = opts.max || el.attributes.max.value || undefined;
  opts.step = opts.step || el.attributes.step.value || undefined;
  return new RangeMultiple(el, opts);
}

function createRange(el) {
  el.setAttribute('type', 'range');
  return el;
}

class RangeMultiple {
  constructor(el, {min = 0, max = 100, step = 1}) {
    this.el = el;
    this.opts = {min, max, step};
    console.log(el, this.opts);
    var div = document.createElement('div');
    this.range1 = createRange(document.createElement('input'));
    this.range2 = createRange(document.createElement('input'));
    div.appendChild(this.range1);
    div.appendChild(this.range2);
    createRange(this.range1);
    createRange(this.range2);
    div.className = 'rmultiple';
    var handle = new Handle(div);
    var track = new Track(div);
    el.parentNode.insertBefore(div, el.nextSibling);
  }

  render() {

  }
}

class Handle {
  constructor(el) {
    var div = document.createElement('div');
    div.className = 'rmultiple-handle';
    el.appendChild(div);
  }
}

class Track {
  constructor(el) {
    var div = document.createElement('div');
    div.className = 'rmultiple-track';
    el.appendChild(div);
  }
}
