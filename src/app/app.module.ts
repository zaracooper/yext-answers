import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UniversalAutocompleteComponent } from './pages/universal-autocomplete.component';
import { UniversalQueryComponent } from './pages/universal-query.component';
import { VerticalAutocompleteComponent } from './pages/vertical-autocomplete.component';
import { VerticalQueryComponent } from './pages/vertical-query.component';
import { HomeComponent } from './pages/home.component';

import { QueryComponent } from './components/query.component';
import { AutocompleteComponent } from './components/autocomplete.component';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';



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
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
