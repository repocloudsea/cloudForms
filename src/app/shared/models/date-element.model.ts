import {Element} from './element.model';

export class DateElement extends Element<string> {
  elementType: string;
  format: string;

  constructor(options: {} = {}) {
    super(options);
    this.elementType = 'text';
    this.format = options['format'] || 'DD/MM/YYYY';
  }
}
