import { Config, Generator, Schema } from './meta-models';
import { buildNameVariations } from './name-variations';

const generate = (schema: Schema, { scope }: Config) => {
    const { ref, refs, model, models, singleParam } = buildNameVariations(schema);

    const template = `nx generate @nrwl/angular:component ${schema.modelPlural} --project=web && \nnx g c ${schema.modelPlural}/list/${schema.modelPlural}-list -m ${schema.modelPlural}/${schema.modelPlural}.module.ts --style=scss &&\n nx g c ${schema.modelPlural}/detail/${schema.modelPlural}-detail -m ${schema.modelPlural}/${schema.modelPlural}.module.ts --style=scss`;

    return {
        template,
        title: `${model} Master/Detail Component`,
        fileName: ``,
    };
};

export const ComponentGenerator: Generator = {
    generate,
};

/*

Use Master-Detail architecture

        <!--
            nx generate @nrwl/angular:component login-form --project=ui
            nx g lib ui --parent-module=apps/$1/src/app/app.module.ts --routing 
            npx ng g storybook-configuration ui --no-interactive
            npx ng g class mocks --project=testing
        -->
widget template
https://github.com/onehungrymind/fem-production-angular/tree/04.1-service-with-subject/apps/dashboard/src/app/widgets/widgets-list

formly table
https://stackblitz.com/edit/angular-material-formly-table?file=src%2Fapp%2Fformly%2Fmy-formly-array-type.component.ts

src/app/widgets/
    widgets-list/
        widgets-list.html
        widget-list.scss
        widget-list.spec
        widget-list.ts
    widgets-detail/
        widgets-detail.html
        widget-detail.scss
        widget-detail.spec
        widget-detail.ts
    widget.html
    widget.scss
    widget.spec
    widget.ts




<div class="component-container">
  <div class="list-component">
    <fem-widgets-list [widgets]="allWidgets$ | async"
      (selected)="selectWidget($event)"
      (deleted)="deleteWidget($event)">
    </fem-widgets-list>
  </div>
  <div class="details-component">
    <fem-widget-details [widget]="selectedWidget$ | async"
      (saved)="saveWidget($event)"
      (cancelled)="resetForm()">
    </fem-widget-details>
  </div>
</div>
*/