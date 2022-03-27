import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { map, Observable, tap } from 'rxjs';
import { YextAnswersService } from '../yext/yext-answers.service';

@Component({
  selector: 'app-vertical-query',
  template: `
    <div class="cnt">
      <h1>"Drinks" Vertical Query</h1>
      <form class="cnt">
        <mat-form-field appearance="fill">
          <mat-label>Query</mat-label>
          <input matInput placeholder="Enter your query" [formControl]="query" aria-label="Query">
        </mat-form-field>
        <button (click)="makeQuery()" [disabled]="query.invalid" mat-flat-button color="accent" type="button">Search "Drinks" Vertical</button>
      </form>
      <div id="results" class="cnt">
        <h1>Results</h1>
        <mat-card *ngFor="let drink of drinks | async">
          <p  *ngFor="let item of formatFields(drink) | keyvalue">
            <span class="field mat-accent">{{item.key}}:</span> 
            {{ item.value }}
          </p>
        </mat-card>
      </div>
    </div>
  `,
  styles: [
    `mat-form-field { width: 40vw; }`,
    `#results { margin: 2em; display: flex;}`,
    `.field { font-weight: bold; }`,
    `mat-card { width: 30vw; margin: 1em; }`
  ]
})
export class VerticalQueryComponent {
  query = new FormControl('', Validators.required);
  drinks!: Observable<Record<string, unknown>[]>;
  disableButton = false;

  constructor(private yextAnswers: YextAnswersService) { }

  makeQuery() {
    this.disableButton = true;

    this.drinks = this.yextAnswers.verticalSearch(
      String(this.query.value),
      'drinks'
      // { fieldId: 'name', matcher: Matcher.Equals, value: 'Vodka Martini' }
    ).pipe(
      tap(() => this.disableButton = false),
      map(res => res || [{ 'Result': 'No results' }])
    );
  }

  formatFields(value: any) {
    return Object.keys(value)
      .filter(key => typeof value[key] == 'string')
      .reduce((filteredObj: { [key: string]: string; }, key) => {
        filteredObj[key] = value[key];

        return filteredObj;
      }, {});
  }
}
