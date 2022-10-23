import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@gen-x/material';
import { UiModule } from '@gen-x/ui';
import { GeneratorsModule } from '@gen-x/generators';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiModule, MaterialModule, GeneratorsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
