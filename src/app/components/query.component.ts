import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Matcher } from '@yext/answers-core';
import { iif, map, Observable, tap } from 'rxjs';
import { YextAnswersService } from '../yext/yext-answers.service';

@Component({
  selector: 'app-query',
  template: `
    <div class="cnt">
      <h1 class="mat-display-1">{{ title | titlecase }} Query</h1>
      <form class="cnt">
        <mat-form-field appearance="fill">
          <mat-label>Query</mat-label>
          <input matInput placeholder="Enter your query" [formControl]="query" aria-label="Query">
        </mat-form-field>
        <mat-checkbox *ngIf="showVertical" [formControl]="matchName">Match Name Exactly</mat-checkbox>
        <button (click)="makeQuery()" [disabled]="query.invalid" mat-flat-button color="accent" type="button">Search {{ title | titlecase }}</button>
      </form>
      <div *ngIf="!showVertical">
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
      <div *ngIf="showVertical" id="results" class="cnt">
        <h1 class="mat-display-1">Results</h1>
        <div id="resultCards">
          <mat-card *ngFor="let drink of results | async">
            <p  *ngFor="let item of formatFields(drink) | keyvalue">
              <span class="field mat-accent">{{item.key}}:</span> 
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
    `mat-checkbox { margin: 1em; }`
  ]
})
export class QueryComponent implements OnInit {
  @Input() vertical?= '';
  query = new FormControl('', Validators.required);
  results!: Observable<Record<string, any>[]>;
  disableButton = false;
  matchName = new FormControl(false);
  showVertical = false;
  title = '';

  constructor(private yextAnswers: YextAnswersService) { }

  ngOnInit(): void {
    this.vertical = this.vertical ? this.vertical.trim() : '';
    this.showVertical = this.vertical.length > 0;
    this.title = this.showVertical ? `${this.vertical} Vertical` : 'Universal';
  }

  makeQuery() {
    this.disableButton = true;
    const queryValue = String(this.query.value);

    this.results = iif(
      () => this.showVertical,
      this.yextAnswers.verticalSearch(
        String(queryValue),
        this.vertical || 'drinks',
        this.matchName.value ? { fieldId: 'name', matcher: Matcher.Equals, value: queryValue } : undefined
      ),
      this.yextAnswers.universalSearch(String(queryValue))
    ).pipe(
      tap(() => this.disableButton = false),
      map(res => {
        if (res.length > 0) {
          return res;
        } else {
          const noResults = [{ 'Result': 'No results' }];
          if (this.showVertical) {
            return noResults;
          } else {
            return [{ 'verticalKey': 'No Results for all verticals', results: noResults }]
          }
        }
      })
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
