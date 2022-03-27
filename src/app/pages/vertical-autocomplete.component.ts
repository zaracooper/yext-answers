import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, iif, Observable, of, switchMap } from 'rxjs';
import { YextAnswersService } from '../yext/yext-answers.service';

@Component({
  selector: 'app-vertical-autocomplete',
  template: `
    <div class="cnt">
      <h1 class="mat-display-1">"Drinks" Vertical Autocomplete</h1>
      <form>
        <mat-form-field appearance="fill">
          <mat-label>Input</mat-label>
          <input type="text"
                placeholder="Write your input"
                aria-label="Input"
                matInput
                [formControl]="acInput"
                [matAutocomplete]="auto">
          <mat-autocomplete #auto="matAutocomplete">
            <mat-option *ngFor="let result of acResults | async" [value]="result">
              {{result}}
            </mat-option>
          </mat-autocomplete>
        </mat-form-field>
      </form>
    </div>
  `,
  styles: [
    `mat-form-field { width: 40vw; }`
  ]
})
export class VerticalAutocompleteComponent implements OnInit {
  acInput = new FormControl();
  acResults!: Observable<string[]>;

  constructor(private yextAnswers: YextAnswersService) { }

  ngOnInit() {
    this.acResults = this.acInput.valueChanges.pipe(
      switchMap(input => {
        input = input.trim();

        return iif(
          () => input !== null && input.length >= 3,
          of(input).pipe(
            distinctUntilChanged(),
            debounceTime(1000),
            switchMap(input => this.yextAnswers.verticalAutocomplete(input, 'drinks'))
          ),
          of(input == '' ? [] : ['Searching...'])
        );
      }));

  }
}