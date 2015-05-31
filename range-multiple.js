window.RangeMultiple = class RangeMultiple {
  constructor(el) {
    this.el = el;
    var div = document.createElement('div');
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
