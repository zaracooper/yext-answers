import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UniversalAutocompleteComponent } from './pages/universal-autocomplete.component';
import { UniversalQueryComponent } from './pages/universal-query.component';
import { VerticalAutocompleteComponent } from './pages/vertical-autocomplete.component';
import { VerticalQueryComponent } from './pages/vertical-query.component';
import { HomeComponent } from './pages/home.component';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AutocompleteComponent } from './components/autocomplete.component';
import { QueryComponent } from './components/query.component';



@NgModule({
  declarations: [
    AppComponent,
    UniversalAutocompleteComponent,
    UniversalQueryComponent,
    VerticalAutocompleteComponent,
    VerticalQueryComponent,
    HomeComponent,
    AutocompleteComponent,
    QueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
