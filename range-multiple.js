window.rangeMultiple = function(el, opts = {}) {
  opts.min = opts.min || el.attributes.min.value || undefined;
  opts.max = opts.max || el.attributes.max.value || undefined;
  opts.step = opts.step || el.attributes.step.value || undefined;
  return new RangeMultiple(el, opts);
}

const COMPONENT_NAME = 'rmultiple';

function normalizeShadowRange(el, value) {
  value = Number.parseFloat(value);
  el.setAttribute('type', 'range');
  if (Number.isNaN(value)) {
    el.removeAttribute(value);
  } else {
    el.setAttribute('value', value);
    el.value = value;
  }
  el.removeAttribute('multiple');
  el.removeAttribute('data-toggle');
  return el;
}

class RangeMultiple {
  constructor(el, {min = 0, max = 100, step = 1}) {
    this.el = el;
    this.opts = {min, max, step};
    this.shadowEl = document.createElement('div');
    this.shadowEl.className = COMPONENT_NAME;
    this.values = el.value.split(',');
    this.range1 = normalizeShadowRange(el.cloneNode(), this.values[0]);
    this.range2 = normalizeShadowRange(el.cloneNode(), this.values[1]);
    this.range1.className = `${COMPONENT_NAME}-range1`;
    this.range2.className = `${COMPONENT_NAME}-range2`;
    this.shadowEl.appendChild(this.range1);
    this.shadowEl.appendChild(this.range2);
    this.range1.addEventListener('input', () => this.handleInputRange1());
    this.range2.addEventListener('input', () => this.handleInputRange2());
    el.parentNode.insertBefore(this.shadowEl, el.nextSibling);
  }

  handleInputRange1() {
    if (Number.parseFloat(this.range1.value) > Number.parseFloat(this.range2.value)) {
      this.range2.value = this.range1.value;
    }
    this.updateOriginal();
  }

  handleInputRange2() {
    if (Number.parseFloat(this.range2.value) < Number.parseFloat(this.range1.value)) {
      this.range1.value = this.range2.value;
    }
    this.updateOriginal();
  }

  updateOriginal() {
    this.el.value = this.range1.value + ',' + this.range2.value;
  }

  render() {

  }
}
