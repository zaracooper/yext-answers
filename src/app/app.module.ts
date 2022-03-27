import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UniversalAutocompleteComponent } from './universal-autocomplete/universal-autocomplete.component';
import { UniversalQueryComponent } from './universal-query/universal-query.component';
import { VerticalAutocompleteComponent } from './vertical-autocomplete/vertical-autocomplete.component';
import { VerticalQueryComponent } from './vertical-query/vertical-query.component';

@NgModule({
  declarations: [
    AppComponent,
    UniversalAutocompleteComponent,
    UniversalQueryComponent,
    VerticalAutocompleteComponent,
    VerticalQueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
