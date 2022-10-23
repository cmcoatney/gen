import { Component, Input } from '@angular/core';

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
    props: []
  };
  @Input() options: FormlyFormOptions = {}

  form = new FormGroup({});

  onSubmit(model: any) {
    if (!this.isValidForm()) return false;

    alert(JSON.stringify(model, null, 2));

    return true;
  }

  private isValidForm() {
    return this.form.valid;
  }
}
