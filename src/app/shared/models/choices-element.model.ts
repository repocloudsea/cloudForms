import {Element} from './element.model';

export class ChoicesElement extends Element<string> {
  elementType: string;
  choices: string[];
  mutipleAllowed: boolean;

  constructor(options: {} = {}) {
    super(options);
    this.elementType = 'select';
    this.choices = options['choices'];
    this.mutipleAllowed = false;
  }
}
