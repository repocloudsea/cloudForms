import {Element} from './element.model';

export class LegalElement extends Element<string> {
  elementType: string;

  constructor(options: {} = {}) {
    super(options);
    this.elementType = 'button';
  }
}
