import { Config, Generator, Schema } from './meta-models';
import { buildNameVariations } from './name-variations';

const generate = (schema: Schema, { scope }: Config) => {
  const { ref, refs, model, models, singleParam } = buildNameVariations(schema);

  const template = `
  import { Component, OnInit } from '@angular/core';
  import { Widget } from '@fem/api-interfaces';
  import { WidgetsFacade } from '@fem/core-state';
  import { Observable } from 'rxjs';
  
  const emptyWidget: Widget = {
    id: null,
    title: '',
    description: '',
  };
  
  @Component({
    selector: 'fem-widgets',
    templateUrl: './widgets.component.html',
    styleUrls: ['./widgets.component.scss'],
  })
  export class WidgetsComponent implements OnInit {
    allWidgets$: Observable<Widget[]> = this.widgetsFacade.allWidgets$;
    selectedWidget$: Observable<Widget> = this.widgetsFacade.selectedWidget$;
  
    constructor(private widgetsFacade: WidgetsFacade) {}
  
    ngOnInit(): void {
      this.reset();
      this.widgetsFacade.mutations$.subscribe((_) => this.reset())
    }
  
    reset() {
      this.loadWidgets();
      this.selectWidget(null);
    }
  
    resetForm() {
      this.selectWidget(null);
    }
  
    selectWidget(widget: Widget) {
      this.widgetsFacade.selectWidget(widget);
    }
  
    loadWidgets() {
      this.widgetsFacade.loadWidgets();
    }
  
    saveWidget(widget: Widget) {
      this.widgetsFacade.saveWidget(widget);
    }
  
    deleteWidget(widget: Widget) {
      this.widgetsFacade.deleteWidget(widget);
    }
  }
`;

  return {
    template,
    title: `${models} Service`,
    fileName: `libs/core-data/src/lib/services/${models}/${models}.service.ts`,
  };
};

export const ServiceGenerator: Generator = {
  generate,
};

https://github.com/onehungrymind/fem-production-angular/blob/04.1-service-with-subject/apps/dashboard/src/app/widgets/widgets.component.ts

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