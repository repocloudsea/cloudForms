export class QuestionBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;

  constructor(controlType: string, order: number, required?: boolean, label?: string, key?: string, value?) {
    this.controlType = controlType;
    this.order = order;
    this.required = required;
    this.label = label;
    this.key = key;
    this.value = value;
  }
}
