import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="cnt">
      <button mat-raised-button class="mat-display-1" routerLink="/universal-autocomplete">
        Universal Autocomplete
      </button>
      <button mat-raised-button color="primary" class="mat-display-1" routerLink="/universal-query">
        Universal Query
      </button>
      <button mat-raised-button color="accent" class="mat-display-1" routerLink="/vertical-autocomplete">
        Vertical Autocomplete
      </button>
      <button mat-raised-button color="warn" class="mat-display-1" routerLink="/vertical-query">
        Vertical Query
      </button>
    </div>
  `,
  styles: [
    `button { min-width: 30vw; min-height: 10vh; margin-bottom: 1em !important; }`
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
