import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from '@gen-x/data';
import {
  buildNameVariations,
  ComponentGenerator,
  Config,
  FacadeGenerator,
  ModelGenerator,
  ReducerGenerator,
  ResourceGenerator,
  Schema,
  ServiceGenerator,
} from '@gen-x/generators';
import { ModelFormComponent } from 'libs/ui/src/lib/containers/model-form/model-form.component';
import { BehaviorSubject, Subject } from 'rxjs';

interface IModelConfig {
  scope: string;
  singular: string;
  plural: string;
}

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

const genSchema: Schema = {
  model: 'singular',
  modelPlural: 'plural',
  props: [
    {
      key: 'scope',
      type: 'input',
      templateOptions: {
        label: 'Scope',
        placeholder: 'Enter the company or scope',
        required: true,
      },
    },
    {
      key: 'singular',
      type: 'input',
      templateOptions: {
        label: 'Singular',
        placeholder: 'Enter the singular model name',
        required: true,
      },
    },
    {
      key: 'plural',
      type: 'input',
      templateOptions: {
        label: 'Plural',
        placeholder: 'Enter the plural model name',
        required: true,
      },
    },
  ],
};

@Component({
  selector: 'gen-x-feature-generator',
  templateUrl: './feature-generator.component.html',
  styleUrls: ['./feature-generator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureGeneratorComponent implements OnInit {
  @ViewChild(ModelFormComponent)
  modelForm!: ModelFormComponent;

  title = 'gen';

  firstFormGroup: FormGroup | undefined;
  secondFormGroup: FormGroup | undefined;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  private modelSubject = new BehaviorSubject<IModelConfig>({
    scope: '',
    singular: '',
    plural: '',
  });
  model$ = this.modelSubject.asObservable();

  schema: Schema = genSchema;
  config: Config = {
    name: 'workshop',
    application: 'dashboard',
    scope: 'bw',
  };

  modelChange($event: FormGroup) {
    this.config.scope = $event.value.scope;
    this.schema.model = $event.value.singular;
    this.schema.modelPlural = $event.value.plural;
  }

  generate_model(): string {
    return ModelGenerator.generate(this.schema, this.config).template;
  }

  generate_facade_test(): string {
    return 'Method not implemented.';
  }
  
  generate_facade(): string {
    return FacadeGenerator.generate(this.schema, this.config).template;
  }

  generate_service_test(): string {
    return 'Method not implemented.';
  }

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
