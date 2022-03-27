import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { UniversalAutocompleteComponent } from './pages/universal-autocomplete.component';
import { UniversalQueryComponent } from './pages/universal-query.component';
import { VerticalAutocompleteComponent } from './pages/vertical-autocomplete.component';
import { VerticalQueryComponent } from './pages/vertical-query.component';

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
