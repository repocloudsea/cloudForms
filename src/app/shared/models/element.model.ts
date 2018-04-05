export class Element<T> {
  value: T;
  refId: string;
  type: string;
  question: string;
  helpText: string;
  required: boolean;
  order: number;
  attachmentUrl: string;
  maxLength: number;

  constructor(options: {
    type?: string,
    order?: number,
    question?: string,
    helpText?: string,
    required?: boolean,
    maxLength?: number
    value?: T,
    refId?: string,
    attachmentUrl?: string,
  } = {}) {
    this.value = options.value;
    this.refId = options.refId;
    this.type = options.type || 'shortText';
    this.question = options.question || '';
    this.helpText = options.helpText || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.attachmentUrl = options.attachmentUrl;
    this.maxLength = options.maxLength || 200;
  }
}
