import { Component } from '@angular/core';
import { IUser } from '@gen-x/data';
import {
  buildNameVariations,
  ServiceGenerator,
  Schema,
  ReducerGenerator,
  ResourceGenerator,
  ComponentGenerator,
} from '@gen-x/generators';
import { Config } from '@gen-x/generators';

const authSchema: Schema = {
  model: 'user',
  modelPlural: 'users',
  props: [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email',
        placeholder: 'Enter a valid email address',
        required: true,
      },
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        label: 'Password',
        placeholder: 'Enter your password',
        required: true,
      },
    },
  ],
};

@Component({
  selector: 'gen-x-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'gen';
  model: IUser = {
    username: '',
    password: '',
  };
  schema: Schema = authSchema;
  config: Config = {
    name: 'workshop',
    application: 'dashboard',
    scope: 'acme',
  };

  generate_variations() {
    return buildNameVariations(this.schema);
  }

  generate_form_component() {
    console.log('Not yet implemented');
  }

  generate_component(): string {
    return ComponentGenerator.generate(this.schema, this.config).template;
  }

  generate_service() {
    return ServiceGenerator.generate(this.schema, this.config).template;
  }

  generate_reducer() {
    return ReducerGenerator.generate(this.schema, this.config).template;
  }

  generate_nx_nest_resource(): string {
    return ResourceGenerator.generate(this.schema, this.config).template;
  }
}
