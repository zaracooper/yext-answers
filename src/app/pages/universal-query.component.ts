import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { map, Observable, of, tap } from 'rxjs';
import { YextAnswersService } from '../yext/yext-answers.service';

@Component({
  selector: 'app-universal-query',
  template: `
    <div class="cnt">
      <h1 class="mat-display-1">Universal Query</h1>
      <form class="cnt">
        <mat-form-field appearance="fill">
          <mat-label>Query</mat-label>
          <input matInput placeholder="Enter your query" [formControl]="query" aria-label="Query">
        </mat-form-field>
        <button (click)="makeQuery()" [disabled]="query.invalid" mat-flat-button color="accent" type="button">Search Universally</button>
      </form>
      <div id="results" class="cnt" *ngFor="let resultVertical of results | async">
        <h1 class="mat-display-1">{{ resultVertical['verticalKey'] | titlecase }} Results</h1>
        <div id="resultCards">
          <mat-card *ngFor="let resultItem of resultVertical['results']">
            <p  *ngFor="let item of formatFields(resultItem) | keyvalue">
              <span class="field mat-accent">{{item.key | uppercase}}:</span> 
              {{ item.value }}
            </p>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styles: [
    `mat-form-field { width: 40vw; }`,
    `#results { margin: 2em; }`,
    `#resultCards { display: flex; flex-direction: row; max-width: 80vw; flex-wrap: wrap; }`,
    `.field { font-weight: bold; }`,
    `mat-card { width: 20vw; margin: 1em; }`,
    `mat-checkbox {margin: 1em; }`
  ]
})
export class UniversalQueryComponent {
  query = new FormControl('', Validators.required);
  results!: Observable<Record<string, any>[]>;
  disableButton = false;
  matchName = false;

  constructor(private yextAnswers: YextAnswersService) { }

  stringify = JSON.stringify;
  makeQuery() {
    this.disableButton = true;
    const queryValue = String(this.query.value);

    this.results = of([{ 'Result': 'No results' }]);

    this.results = this.yextAnswers.universalSearch(String(queryValue)).pipe(
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
