import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-universal-autocomplete',
  template: `
    <div class="cnt">
      <hr>
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
            <mat-option *ngFor="let option of filteredOptions | async" [value]="option">
              {{option}}
            </mat-option>
          </mat-autocomplete>
        </mat-form-field>
      </form>
    </div>
  `,
  styles: [
    `hr { width: 10vw; }`,
    `mat-form-field { width: 40vw; }`
  ]
})
export class UniversalAutocompleteComponent implements OnInit {
  acInput = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.acInput.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}