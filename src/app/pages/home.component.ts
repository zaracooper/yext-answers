import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div id="wrp">
      <button mat-flat-button color="primary" class="mat-display-1" routerLink="/universal-autocomplete">
        Universal Autocomplete
      </button>
      <button mat-flat-button color="primary" class="mat-display-1" routerLink="/universal-query">
        Universal Query
      </button>
      <button mat-flat-button color="accent" class="mat-display-1" routerLink="/vertical-autocomplete">
        Vertical Autocomplete
      </button>
      <button mat-flat-button color="accent" class="mat-display-1" routerLink="/vertical-query">
        Vertical Query
      </button>
    </div>
  `,
  styles: [
    `#wrp {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 8em 8em;
      grid-gap: 20px;
    }`,
    `button { margin: 0px !important; }`
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
