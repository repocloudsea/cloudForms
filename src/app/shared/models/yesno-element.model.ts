import {Element} from './element.model';

export class YesNoElement extends Element<string> {
  elementType: string;
  yesbuttonText: string;
  noButtonText: string;

  constructor(options: {} = {}) {
    super(options);
    this.elementType = 'button';
    this.yesbuttonText = options['yesbuttonText'] || 'Yes';
    this.noButtonText = options['noButtonText'] || 'No';
  }
}
