import {Element} from './element.model';

export class ChoicesElement extends Element<string> {
  elementType: string;
  choices: string[];

  constructor(options: {} = {}) {
    super(options);
    this.elementType = 'select';
    this.choices = options['choices'];
  }
}
