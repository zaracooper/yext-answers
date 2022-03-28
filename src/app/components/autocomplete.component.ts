import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, iif, map, merge, Observable, partition, switchMap } from 'rxjs';
import { YextAnswersService } from '../yext/yext-answers.service';

@Component({
  selector: 'app-autocomplete',
  template: `
    <div class="cnt">
      <h1 class="mat-display-1">{{ title | titlecase }} Autocomplete</h1>
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
export class AutocompleteComponent implements OnInit {
  @Input() vertical?= '';
  acInput = new FormControl();
  acResults!: Observable<string[]>;
  title = '';

  constructor(private yextAnswers: YextAnswersService) { }

  ngOnInit() {
    this.vertical = this.vertical ? this.vertical.trim() : '';

    const [validValues, invalidValues] = partition(
      this.acInput.valueChanges.pipe(map(input => input ? input.trim() : input)),
      (input: string) => input !== '' && input !== null && input.length >= 3
    );

    this.acResults = merge(
      validValues.pipe(
        distinctUntilChanged(),
        debounceTime(1000),
        switchMap(input =>
          iif(
            () => this.vertical ? this.vertical.length > 0 : false,
            this.yextAnswers.verticalAutocomplete(input, this.vertical || 'drinks'),
            this.yextAnswers.universalAutocomplete(input)
          )
        )
      ),
      invalidValues.pipe(
        map(input => [])
      )
    );

    this.title = this.vertical ? `${this.vertical} Vertical` : 'Universal';
  }
}