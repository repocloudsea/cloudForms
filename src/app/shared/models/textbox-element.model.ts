import {Element} from './element.model';

export class TextboxElement extends Element<string> {
  elementType: string;
  maxLength: number;
  minLength: number;

  constructor(options: {} = {}) {
    super(options);
    this.elementType = 'text';
    this.maxLength = options['maxLength'];
    this.minLength = options['minLength'];
  }
}
