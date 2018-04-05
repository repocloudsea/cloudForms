import {Element} from './element.model';

export class TextboxElement extends Element<string> {
  elementType: string;

  constructor(options: {} = {}) {
    super(options);
    this.elementType = options['type'] || 'text';
  }
}
