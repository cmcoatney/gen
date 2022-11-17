import { Config, Generator, Schema } from './meta-models';
import { buildNameVariations } from './name-variations';

const generate = (schema: Schema, { scope }: Config) => {
  const { ref, refs, model, models, singleParam } = buildNameVariations(schema);


const template=`import { Injectable } from '@angular/core';
import { ${model} } from '@${scope}/api-interfaces';
import { ${model}Service } from '@${scope}/core-data';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ${model}Facade {
  private all${model} = new Subject<${model}[]>();
  private selected${model} = new Subject<${model}>();
  private mutations = new Subject();

  all${model}$ = this.all${model}.asObservable();
  selected${model}$ = this.selected${model}.asObservable();
  mutations$ = this.mutations.asObservable();

  constructor(private ${refs}Service: ${models}Service) {}

  reset() {
    this.mutations.next(true);
  }

  select${model}(${ref}: ${model}) {
    this.selected${model}.next(${ref});
  }

  load${models}() {
    this.${refs}Service
      .all()
      .subscribe((${refs}: ${model}[]) => this.all${model}.next(${refs}));
  }

  save${model}(${ref}: ${model}) {
    if(${ref}.id) {
      this.update${model}(${ref});
    } else {
      this.create${model}(${ref});
    }
  }

  create${model}(${ref}: ${model}) {
    this.${refs}Service.create(${ref}).subscribe((_) => this.reset());
  }

  update${model}(${ref}: ${model}) {
    this.${refs}Service.update(${ref}).subscribe((_) => this.reset());
  }

  delete${model}(${ref}: ${model}) {
    this.${refs}Service.delete(${ref}).subscribe((_) => this.reset());
  }
}`;

return {
  template,
  title: `${models} Facade`,
  fileName: `libs/core-data/src/lib/services/${models}/${models}.service.ts`,
};
};

export const FacadeGenerator: Generator = {
generate,
};