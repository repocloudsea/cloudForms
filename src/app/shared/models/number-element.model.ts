import {Element} from './element.model';

export class NumberElement extends Element<number> {
  elementType: string;
  maxValue: number;
  minValue: number;

  constructor(options: {} = {}) {
    super(options);
    this.elementType = 'number';
    this.maxValue = options['maxLength'];
    this.minValue = options['minLength'];
  }
}
