import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { Schema } from '@gen-x/generators';
import { FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'gen-x-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.scss'],
})
export class ModelFormComponent {
  @Input() model: any = {};
  @Input() schema: Schema = {
    model: '',
    modelPlural: '',
    props: [],
  };
  @Input() options: FormlyFormOptions = {};
  @Output() submitEvent: EventEmitter<FormGroup> = new EventEmitter();
  form = new FormGroup({});

  onSubmit(model: any) {
    if (!this.isValidForm()) return false;
    this.submitEvent.emit(this.form);
    return true;
  }

  private isValidForm() {
    return this.form.valid;
  }
}
