import {Element} from './element.model';

export class RateElement extends Element<number> {
  elementType: string;
  rates: number;
  shapes: string;

  constructor(options: {} = {}) {
    super(options);
    this.elementType = 'button';
    this.rates = options['rates'];
    this.shapes = options['shapes'] || 'stars';
  }
}
