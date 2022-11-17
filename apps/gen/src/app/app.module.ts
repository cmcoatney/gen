import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from '@gen-x/material';
import { UiModule } from '@gen-x/ui';
import { GeneratorsModule } from '@gen-x/generators';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { FeatureGeneratorComponent } from './feature-generator/feature-generator.component';
import { ConfigureGeneratorComponent } from './configure-generator/configure-generator.component';
import { CliGeneratorComponent } from './cli-generator/cli-generator.component';

const routes: Routes = [
  {
    path: 'cli',
    component: CliGeneratorComponent,
  },
  {
    path: 'configure',
    component: ConfigureGeneratorComponent,
  },
  {
    path: 'feature',
    component: FeatureGeneratorComponent,
  },
];

export const ROUTES = RouterModule.forRoot(routes);
@NgModule({
  declarations: [
    AppComponent,
    FeatureGeneratorComponent,
    ConfigureGeneratorComponent,
    CliGeneratorComponent,
  ],
  imports: [ROUTES, BrowserModule, UiModule, MaterialModule, GeneratorsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
