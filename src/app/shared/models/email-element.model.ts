import {Element} from './element.model';

export class EmailElement extends Element<string> {
  elementType: string;
  maxLength: number;

  constructor(options: {} = {}) {
    super(options);
    this.elementType = 'email';
    this.maxLength = options['maxLength'];
  }
}
