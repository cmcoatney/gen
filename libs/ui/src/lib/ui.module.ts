import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { ModelFormComponent } from './containers/model-form/model-form.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@gen-x/material';
import { GeneratorsModule } from '@gen-x/generators';
import { CodeBlockComponent } from './code-block/code-block.component';
import { ModelTableComponent } from './containers/model-table/model-table.component';

@NgModule({
  declarations: [ModelFormComponent, CodeBlockComponent, ModelTableComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    GeneratorsModule,
  ],
  exports: [MaterialModule, ModelFormComponent, ModelTableComponent, CodeBlockComponent],
})
export class UiModule {}
