import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UniversalAutocompleteComponent } from './components/universal-autocomplete.component';
import { UniversalQueryComponent } from './components/universal-query.component';
import { VerticalAutocompleteComponent } from './components/vertical-autocomplete.component';
import { VerticalQueryComponent } from './components/vertical-query.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UniversalAutocompleteComponent,
    UniversalQueryComponent,
    VerticalAutocompleteComponent,
    VerticalQueryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
