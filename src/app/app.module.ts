import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UniversalAutocompleteComponent } from './pages/universal-autocomplete.component';
import { UniversalQueryComponent } from './pages/universal-query.component';
import { VerticalAutocompleteComponent } from './pages/vertical-autocomplete.component';
import { VerticalQueryComponent } from './pages/vertical-query.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home.component';

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
    MatListModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
