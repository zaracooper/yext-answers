import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, merge, Observable, partition, switchMap } from 'rxjs';

import { YextAnswersService } from '../yext/yext-answers.service';

@Component({
  selector: 'app-universal-autocomplete',
  template: `
    <div class="cnt">
      <h1>Universal Autocomplete</h1>
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
export class UniversalAutocompleteComponent implements OnInit {
  acInput = new FormControl();
  acResults!: Observable<string[]>;

  constructor(private yextAnswers: YextAnswersService) { }

  ngOnInit() {
    const [validResults, invalidResults] = partition(
      this.acInput.valueChanges.pipe(map(input => input ? input.trim() : input)),
      (input: string) => input !== '' && input !== null && input.length >= 3
    );

    this.acResults = merge(
      validResults.pipe(
        distinctUntilChanged(),
        debounceTime(1000),
        switchMap(input => this.yextAnswers.universalAutocomplete(input))
      ),
      invalidResults.pipe(
        map(input => [])
      )
    );
  }
}