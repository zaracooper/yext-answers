import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Matcher } from '@yext/answers-core';
import { Observable } from 'rxjs';
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
      <mat-list>
        <div mat-subheader>Folders</div>
        <mat-list-item *ngFor="let drink of drinks | async">
          <div mat-line>{{drink['name']}}</div>
        </mat-list-item>
      </mat-list>
    </div>
  `,
  styles: [
    `mat-form-field { width: 40vw; }`
  ]
})
export class VerticalQueryComponent {
  query = new FormControl('', Validators.required);
  drinks!: Observable<Record<string, unknown>[]>;

  constructor(private yextAnswers: YextAnswersService) { }

  makeQuery() {
    this.drinks = this.yextAnswers.verticalSearch(
      String(this.query.value),
      'drinks',
      { fieldId: 'name', matcher: Matcher.Equals, value: 'Vodka Martini' }
    );
  }
}
