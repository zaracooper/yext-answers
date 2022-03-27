import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { UniversalAutocompleteComponent } from './components/universal-autocomplete.component';
import { UniversalQueryComponent } from './components/universal-query.component';
import { VerticalAutocompleteComponent } from './components/vertical-autocomplete.component';
import { VerticalQueryComponent } from './components/vertical-query.component';

const routes: Routes = [
  { path: 'universal-autocomplete', component: UniversalAutocompleteComponent },
  { path: 'universal-query', component: UniversalQueryComponent },
  { path: 'vertical-autocomplete', component: VerticalAutocompleteComponent },
  { path: 'vertical-query', component: VerticalQueryComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
